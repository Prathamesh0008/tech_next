const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toSafeString(value) {
  return typeof value === "string" ? value.trim() : "";
}

function buildEmailJsHeaders(request) {
  const origin = request.headers.get("origin");
  const referer = request.headers.get("referer");
  const userAgent = request.headers.get("user-agent");

  const headers = {
    "Content-Type": "application/json",
  };

  if (origin) headers.Origin = origin;
  if (referer) headers.Referer = referer;
  if (userAgent) headers["User-Agent"] = userAgent;

  return headers;
}

async function sendEmailViaEmailJs({
  serviceId,
  templateId,
  publicKey,
  privateKey,
  templateParams,
  headers,
}) {
  const payload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: templateParams,
  };

  if (privateKey) {
    payload.accessToken = privateKey;
  }

  const response = await fetch(EMAILJS_API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    return {
      ok: false,
      status: response.status,
      errorText: await response.text(),
    };
  }

  return { ok: true };
}

function getEmailJsConfig() {
  return {
    serviceId: process.env.EMAILJS_SERVICE_ID,
    templateId: process.env.EMAILJS_TEMPLATE_ID,
    confirmationTemplateId: process.env.EMAILJS_CONFIRMATION_TEMPLATE_ID,
    publicKey: process.env.EMAILJS_PUBLIC_KEY,
    privateKey: process.env.EMAILJS_PRIVATE_KEY,
  };
}

export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const name = toSafeString(body?.name);
  const email = toSafeString(body?.email);
  const countryCode = toSafeString(body?.countryCode);
  const phone = toSafeString(body?.phone);
  const country = toSafeString(body?.country);
  const message = toSafeString(body?.message);

  if (!name || !email || !countryCode || !phone || !country || !message) {
    return Response.json(
      { error: "Name, email, phone, country, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (!/^\+\d{1,4}$/.test(countryCode) || !/^\d{6,15}$/.test(phone)) {
    return Response.json(
      { error: "Please provide a valid country code and a phone number of 6 to 15 digits." },
      { status: 400 }
    );
  }

  const fullPhone = `${countryCode}${phone}`;

  if (name.length > 120 || phone.length > 40 || country.length > 120 || message.length > 5000) {
    return Response.json({ error: "Input size limit exceeded." }, { status: 400 });
  }

  const { serviceId, templateId, confirmationTemplateId, publicKey, privateKey } =
    getEmailJsConfig();

  if (!serviceId || !templateId || !publicKey) {
    console.warn("Contact form submitted without EmailJS config; storing message only in logs.", {
      name,
      email,
      phone: fullPhone,
      country,
      message,
    });

    return Response.json(
      {
        ok: true,
        confirmationSent: false,
        fallback: true,
        message:
          "Thanks! Your message was received. Email delivery is currently disabled on this server.",
      },
      { status: 200 }
    );
  }

  try {
    const headers = buildEmailJsHeaders(request);

    const baseTemplateParams = {
      name,
      email,
      phone: fullPhone,
      country_code: countryCode,
      country,
      message,
      from_name: name,
      from_email: email,
      reply_to: email,
      to_name: name,
      to_email: email,
    };

    const adminSend = await sendEmailViaEmailJs({
      serviceId,
      templateId,
      publicKey,
      privateKey,
      templateParams: baseTemplateParams,
      headers,
    });

    if (!adminSend.ok) {
      console.error("EmailJS API error:", adminSend.status, adminSend.errorText);
      const isDev = process.env.NODE_ENV !== "production";
      return Response.json(
        { error: isDev ? `EmailJS error: ${adminSend.errorText}` : "Failed to deliver message." },
        { status: 502 }
      );
    }

    let confirmationSent = false;

    if (confirmationTemplateId) {
      const confirmationSend = await sendEmailViaEmailJs({
        serviceId,
        templateId: confirmationTemplateId,
        publicKey,
        privateKey,
        templateParams: baseTemplateParams,
        headers,
      });

      if (!confirmationSend.ok) {
        console.error(
          "EmailJS confirmation error:",
          confirmationSend.status,
          confirmationSend.errorText
        );
      } else {
        confirmationSent = true;
      }
    }

    return Response.json({ ok: true, confirmationSent });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
