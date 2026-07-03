const fs = require("fs");
const path = require("path");
const { execFileSync } = require("child_process");

const DOCX_DIR = "C:/Users/Nova Tech/Downloads/drive-download-20260703T113322Z-3-001";
const BLOG_FILE = path.join(process.cwd(), "data", "blog", "en.json");

const BLOG_SOURCES = [
  {
    file: "Blog-Chlorodehydromethyltestosterone.docx",
    id: "chlorodehydromethyltestosterone-guide-cas-2446-23-3",
    image: "/assets/products/tablets/TURINOVA_1.jpg",
  },
  {
    file: "Blog-HALONOVA.docx",
    id: "halonova-fluoxymesterone-guide",
    image: "/assets/products/tablets/HALONOVA_1.jpg",
  },
  {
    file: "Blog-Methyldrostanolone.docx",
    id: "supernova-methyldrostanolone-guide",
    image: "/assets/products/tablets/SUPERNOVA_1.jpg",
  },
  {
    file: "blog-NANDROVA D.docx",
    id: "nandrolone-decanoate-cas-360-70-3",
    image: "/assets/products/injectables/NANDROVA_D_1.jpg",
  },
  {
    file: "blog-NANDROVA P.docx",
    id: "nandrova-p-nandrolone-phenylpropionate-guide",
    image: "/assets/products/injectables/NANDROVA_P_1.jpg",
  },
  {
    file: "blog-nova-gain-c.docx",
    id: "nova-gain-c-testosterone-cypionate-guide-netherlands",
    image: "/assets/products/injectables/NOVA_GAIN_C_1.jpg",
  },
  {
    file: "Blog-Oxandrolone.docx",
    id: "oxandrolone-guide-cas-53-39-4",
    image: "/assets/blogs/blog2.jpg",
  },
  {
    file: "blog-OXYDROL.docx",
    id: "oxydrol-oxymetholone-guide",
    image: "/assets/products/tablets/OXYDROL_1.jpg",
  },
  {
    file: "Blog-Telmisartan.docx",
    id: "telinova-telmisartan-guide",
    image: "/assets/products/tablets/TELINOVA_1.jpg",
  },
  {
    file: "Blog-TESTOVA C.docx",
    id: "testova-c-testosterone-cypionate-guide",
    image: "/assets/products/injectables/TESTOVA_C_1.jpg",
  },
  {
    file: "blog-TESTOVA PP.docx",
    id: "testova-pp-testosterone-phenylpropionate-netherlands-guide-2026",
    image: "/assets/products/injectables/TESTOVA_PP_1.jpg",
  },
  {
    file: "Blog-TRENOVA A.docx",
    id: "trenova-a-trenbolone-acetate-guide",
    image: "/assets/products/injectables/TRENOVA_A_1.jpg",
  },
  {
    file: "Blog-TURINOVA.docx",
    id: "turinova-chlorodehydromethyltestosterone-guide",
    image: "/assets/products/tablets/TURINOVA_1.jpg",
  },
];

function readDocxParagraphs(filePath) {
  const escapedPath = filePath.replace(/'/g, "''");
  const command = [
    "Add-Type -AssemblyName System.IO.Compression.FileSystem",
    `$zip=[IO.Compression.ZipFile]::OpenRead('${escapedPath}')`,
    "$entry=$zip.Entries | Where-Object { $_.FullName -eq 'word/document.xml' }",
    "$sr=New-Object IO.StreamReader($entry.Open())",
    "$xml=$sr.ReadToEnd()",
    "$sr.Close()",
    "$zip.Dispose()",
    "[Console]::OutputEncoding=[Text.Encoding]::UTF8",
    "$xml",
  ].join("; ");

  const xml = execFileSync(
    "powershell",
    ["-NoProfile", "-Command", command],
    { encoding: "utf8", maxBuffer: 20 * 1024 * 1024 }
  );

  return [...xml.matchAll(/<w:p\b[\s\S]*?<\/w:p>/g)]
    .map((match) =>
      [...match[0].matchAll(/<w:t[^>]*>(.*?)<\/w:t>/g)]
        .map((t) => t[1])
        .join("")
        .replace(/&quot;/g, '"')
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/\s+/g, " ")
        .trim()
    )
    .filter(Boolean);
}

function stripLabel(value) {
  return value.replace(/^[^:]+:\s*/, "").trim();
}

function stripFaqPrefix(value) {
  return String(value || "").replace(/^\d+\.\s*/, "").trim();
}

function isLikelyHeading(text) {
  if (!text || text.length > 110) return false;
  if (/^(Meta Title|Meta Description|Suggested URL|Recommended SEO URL|FAQ Schema)$/i.test(text)) {
    return false;
  }
  if (text.startsWith("{") || text.startsWith('"')) return false;
  if (text.includes('"@type"') || text.includes('"@context"')) return false;
  if (text.endsWith(".") && !text.endsWith("...")) return false;
  return /^[A-Z0-9]/.test(text);
}

function isLikelyListItem(text) {
  if (!text || text.length > 100) return false;
  if (isLikelyHeading(text) && !text.endsWith(".")) return false;
  if (text.includes('"@type"') || text.includes('"text"')) return false;
  return /^[A-Z0-9]/.test(text);
}

function countListItems(paragraphs, start) {
  let count = 0;
  for (let i = start; i < paragraphs.length; i += 1) {
    if (!isLikelyListItem(paragraphs[i])) break;
    count += 1;
  }
  return count;
}

function toFaqs(paragraphs) {
  const faqs = [];
  for (let i = 0; i < paragraphs.length; i += 1) {
    const question = stripFaqPrefix(paragraphs[i]);
    const answer = paragraphs[i + 1];
    if (!question || !answer) break;
    if (!question.endsWith("?")) continue;
    faqs.push({ question, answer });
    i += 1;
  }
  return faqs;
}

function decodeSchemaParagraphs(paragraphs) {
  return paragraphs
    .join("\n")
    .replace(/"@context"/g, '"@context"')
    .replace(/"@type"/g, '"@type"')
    .replace(/"mainEntity"/g, '"mainEntity"')
    .replace(/"acceptedAnswer"/g, '"acceptedAnswer"')
    .replace(/"name"/g, '"name"')
    .replace(/"text"/g, '"text"');
}

function faqsFromSchema(paragraphs) {
  const text = decodeSchemaParagraphs(paragraphs);
  const matches = [
    ...text.matchAll(
      /"name"\s*:\s*"([^"]+)"[\s\S]*?"text"\s*:\s*"([^"]+)"/g
    ),
  ];
  return matches.map((match) => ({
    question: stripFaqPrefix(match[1]).trim(),
    answer: match[2].trim(),
  }));
}

function toContent(paragraphs) {
  const blocks = [];
  let i = 0;

  while (i < paragraphs.length) {
    const current = paragraphs[i];

    if (current.endsWith(":") && countListItems(paragraphs, i + 1) >= 2) {
      blocks.push({ type: "paragraph", text: current });
      const items = [];
      i += 1;
      while (i < paragraphs.length && isLikelyListItem(paragraphs[i])) {
        items.push(paragraphs[i].replace(/\.$/, ""));
        i += 1;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    if (isLikelyHeading(current)) {
      const heading = current.replace(/:$/, "");
      i += 1;

      if (i < paragraphs.length && countListItems(paragraphs, i) >= 2) {
        const items = [];
        while (i < paragraphs.length && isLikelyListItem(paragraphs[i])) {
          items.push(paragraphs[i].replace(/\.$/, ""));
          i += 1;
        }
        blocks.push({ type: "heading", text: heading });
        blocks.push({ type: "list", items });
        continue;
      }

      const sectionParagraphs = [];
      while (
        i < paragraphs.length &&
        !isLikelyHeading(paragraphs[i]) &&
        !(paragraphs[i].endsWith(":") && countListItems(paragraphs, i + 1) >= 2)
      ) {
        sectionParagraphs.push(paragraphs[i]);
        i += 1;
      }

      if (sectionParagraphs.length > 0) {
        blocks.push({
          type: "section",
          heading,
          text: sectionParagraphs.join(" "),
        });
      } else {
        blocks.push({ type: "heading", text: heading });
      }
      continue;
    }

    const paragraphParts = [current];
    i += 1;
    while (
      i < paragraphs.length &&
      !isLikelyHeading(paragraphs[i]) &&
      !(paragraphs[i].endsWith(":") && countListItems(paragraphs, i + 1) >= 2)
    ) {
      paragraphParts.push(paragraphs[i]);
      i += 1;
    }
    blocks.push({ type: "paragraph", text: paragraphParts.join(" ") });
  }

  return blocks;
}

function parseDoc(source) {
  const paragraphs = readDocxParagraphs(path.join(DOCX_DIR, source.file));
  let cursor = 0;
  let explicitTitle = "";

  let metaTitle = "";
  let metaDescription = "";

  if (
    paragraphs[0] &&
    !/^Meta Title$/i.test(paragraphs[0]) &&
    !/^Meta Title:/i.test(paragraphs[0]) &&
    (/^Meta Title$/i.test(paragraphs[1] || "") || /^Meta Title:/i.test(paragraphs[1] || ""))
  ) {
    explicitTitle = paragraphs[0];
    cursor = 1;
  }

  if (/^Meta Title$/i.test(paragraphs[cursor] || "")) {
    metaTitle = paragraphs[cursor + 1] || "";
    cursor += 2;
  } else if (/^Meta Title:/i.test(paragraphs[cursor] || "")) {
    metaTitle = stripLabel(paragraphs[cursor]);
    cursor += 1;
  }

  if (/^Meta Description$/i.test(paragraphs[cursor] || "")) {
    metaDescription = paragraphs[cursor + 1] || "";
    cursor += 2;
  } else if (/^Meta Description:/i.test(paragraphs[cursor] || "")) {
    metaDescription = stripLabel(paragraphs[cursor]);
    cursor += 1;
  }

  if (/^(Suggested URL|Recommended SEO URL)$/i.test(paragraphs[cursor] || "")) {
    cursor += 2;
  }

  const title = explicitTitle || paragraphs[cursor] || source.id;
  const afterTitle = paragraphs.slice(cursor + 1);
  const faqIndex = afterTitle.findIndex((p) => /^Frequently Asked Questions$/i.test(p));
  const schemaIndex = afterTitle.findIndex((p) => /^FAQ Schema$/i.test(p));

  const bodyParagraphs = afterTitle.slice(
    0,
    faqIndex >= 0 ? faqIndex : schemaIndex >= 0 ? schemaIndex : afterTitle.length
  );

  const faqParagraphs =
    faqIndex >= 0
      ? afterTitle.slice(faqIndex + 1, schemaIndex >= 0 ? schemaIndex : afterTitle.length)
      : [];

  const introParts = [];
  let splitIndex = 0;
  while (splitIndex < bodyParagraphs.length && !isLikelyHeading(bodyParagraphs[splitIndex])) {
    introParts.push(bodyParagraphs[splitIndex]);
    splitIndex += 1;
  }

  const faqs = toFaqs(faqParagraphs);

  return {
    id: source.id,
    title,
    image: source.image,
    meta: {
      title: metaTitle,
      description: metaDescription,
    },
    intro: introParts.join(" "),
    content: toContent(bodyParagraphs.slice(splitIndex)),
    faqs: faqs.length > 0 ? faqs : faqsFromSchema(afterTitle.slice(schemaIndex >= 0 ? schemaIndex + 1 : 0)),
  };
}

function main() {
  const raw = fs.readFileSync(BLOG_FILE, "utf8");
  const parsed = JSON.parse(raw);
  const blogs = Array.isArray(parsed.blogs) ? parsed.blogs : [];
  const nextById = new Map(blogs.map((blog) => [blog.id, blog]));

  for (const source of BLOG_SOURCES) {
    const blog = parseDoc(source);
    nextById.set(blog.id, blog);
  }

  parsed.blogs = Array.from(nextById.values());
  fs.writeFileSync(BLOG_FILE, `${JSON.stringify(parsed, null, 2)}\n`, "utf8");

  console.log(`Imported ${BLOG_SOURCES.length} DOCX blogs into ${BLOG_FILE}`);
}

main();
