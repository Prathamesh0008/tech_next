const EMAILJS_API_URL = "https://api.emailjs.com/api/v1.0/email/send";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function toSafeString(value) {
  return typeof value === "string" ? value.trim() : "";
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
  const message = toSafeString(body?.message);

  if (!name || !email || !message) {
    return Response.json({ error: "Name, email, and message are required." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return Response.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (name.length > 120 || message.length > 5000) {
    return Response.json({ error: "Input size limit exceeded." }, { status: 400 });
  }

  const serviceId = process.env.EMAILJS_SERVICE_ID;
  const templateId = process.env.EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.EMAILJS_PUBLIC_KEY;
  const privateKey = process.env.EMAILJS_PRIVATE_KEY;

  if (!serviceId || !templateId || !publicKey) {
    return Response.json(
      { error: "EmailJS config missing. Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY." },
      { status: 500 }
    );
  }

  const emailJsPayload = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      name,
      email,
      message,
    },
  };

  if (privateKey) {
    emailJsPayload.accessToken = privateKey;
  }

  try {
    const origin = request.headers.get("origin");
    const referer = request.headers.get("referer");
    const userAgent = request.headers.get("user-agent");

    const headers = {
      "Content-Type": "application/json",
    };

    if (origin) headers.Origin = origin;
    if (referer) headers.Referer = referer;
    if (userAgent) headers["User-Agent"] = userAgent;

    const emailJsResponse = await fetch(EMAILJS_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(emailJsPayload),
      cache: "no-store",
    });

    if (!emailJsResponse.ok) {
      const errorText = await emailJsResponse.text();
      console.error("EmailJS API error:", emailJsResponse.status, errorText);
      const isDev = process.env.NODE_ENV !== "production";
      return Response.json(
        { error: isDev ? `EmailJS error: ${errorText}` : "Failed to deliver message." },
        { status: 502 }
      );
    }

    return Response.json({ ok: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return Response.json({ error: "Unexpected server error." }, { status: 500 });
  }
}
