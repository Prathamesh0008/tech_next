const fs = require("fs");
const path = require("path");

const OUT_DIR = path.join(process.cwd(), "public", "blog");
const BLOG_FILE = path.join(process.cwd(), "data", "blog", "en.json");

const COVER_CONFIG = [
  {
    id: "chlorodehydromethyltestosterone-guide-cas-2446-23-3",
    file: "chlorodehydromethyltestosterone-guide-cas-2446-23-3.svg",
    badge: "COMPOUND GUIDE",
    title: ["Chlorodehydromethyl", "testosterone"],
    description: "CAS 2446-23-3, manufacturing standards, and educational pharmaceutical context.",
    palette: ["#0f172d", "#1d2f5e", "#58c4dd"],
    motif: "molecule",
  },
  {
    id: "halonova-fluoxymesterone-guide",
    file: "halonova-fluoxymesterone-guide.svg",
    badge: "CAS 434-07-1",
    title: ["Halonova", "Fluoxymesterone"],
    description: "Quality-focused compound overview for Europe-facing pharmaceutical education.",
    palette: ["#191428", "#3d2f67", "#ff8b5e"],
    motif: "flame",
  },
  {
    id: "supernova-methyldrostanolone-guide",
    file: "supernova-methyldrostanolone-guide.svg",
    badge: "CAS 3381-88-2",
    title: ["Supernova", "Methyldrostanolone"],
    description: "Scientific identity, manufacturing transparency, and product-quality guidance.",
    palette: ["#101727", "#2d2f7a", "#8ee0ff"],
    motif: "burst",
  },
  {
    id: "nandrolone-decanoate-cas-360-70-3",
    file: "nandrolone-decanoate-cas-360-70-3.svg",
    badge: "LONG-ACTING GUIDE",
    title: ["Nandrova D", "Nandrolone Decanoate"],
    description: "A trusted injectable profile covering quality systems and global pharma standards.",
    palette: ["#111c2e", "#225b74", "#80d4b8"],
    motif: "shield",
  },
  {
    id: "nandrova-p-nandrolone-phenylpropionate-guide",
    file: "nandrova-p-nandrolone-phenylpropionate-guide.svg",
    badge: "CAS 62-90-8",
    title: ["Nandrova P", "Nandrolone Phenylpropionate"],
    description: "Athlete-focused educational guide with recovery, performance, and product context.",
    palette: ["#0d1826", "#234a69", "#6fd1ff"],
    motif: "wave",
  },
  {
    id: "nova-gain-c-testosterone-cypionate-guide-netherlands",
    file: "nova-gain-c-testosterone-cypionate-guide-netherlands.svg",
    badge: "NETHERLANDS GUIDE 2026",
    title: ["Nova Gain C Testosterone", "Cypionate"],
    description: "Benefits, muscle growth insights, performance support, and market context for Europe.",
    palette: ["#10203a", "#2250a4", "#58d6ff"],
    motif: "upward",
  },
  {
    id: "oxandrolone-guide-cas-53-39-4",
    file: "oxandrolone-guide-cas-53-39-4.svg",
    badge: "CAS 53-39-4",
    title: ["Oxandrolone", "Compound Guide"],
    description: "Pharmaceutical background, quality systems, and manufacturing-focused education.",
    palette: ["#16182a", "#675d37", "#f4c96f"],
    motif: "tablet",
  },
  {
    id: "oxydrol-oxymetholone-guide",
    file: "oxydrol-oxymetholone-guide.svg",
    badge: "EUROPE INSIGHT",
    title: ["Oxydrol", "Oxymetholone"],
    description: "Detailed educational article on compound profile, manufacturing quality, and demand.",
    palette: ["#1e1322", "#72353f", "#ffb26b"],
    motif: "capsule",
  },
  {
    id: "telinova-telmisartan-guide",
    file: "telinova-telmisartan-guide.svg",
    badge: "CAS 144701-48-4",
    title: ["Telinova", "Telmisartan"],
    description: "Scientific transparency, tablet manufacturing standards, and product-quality context.",
    palette: ["#10222a", "#1d6c73", "#9ef0cc"],
    motif: "heartline",
  },
  {
    id: "testova-c-testosterone-cypionate-guide",
    file: "testova-c-testosterone-cypionate-guide.svg",
    badge: "CAS 58-20-8",
    title: ["Testova C Testosterone", "Cypionate"],
    description: "Muscle growth, strength development, performance support, and product overview.",
    palette: ["#121a31", "#3348a5", "#6fd5ff"],
    motif: "barbell",
  },
  {
    id: "testova-pp-testosterone-phenylpropionate-netherlands-guide-2026",
    file: "testova-pp-testosterone-phenylpropionate-netherlands-guide-2026.svg",
    badge: "CAS 1255-49-8",
    title: ["Testova PP Testosterone", "Phenylpropionate"],
    description: "A 2026 guide covering applications, release profile, recovery support, and Netherlands demand.",
    palette: ["#101b31", "#3552a6", "#58d3d9"],
    motif: "pulse",
  },
  {
    id: "trenova-a-trenbolone-acetate-guide",
    file: "trenova-a-trenbolone-acetate-guide.svg",
    badge: "CAS 10161-34-9",
    title: ["Trenova A", "Trenbolone Acetate"],
    description: "Advanced physique, training intensity, and performance-focused compound overview.",
    palette: ["#180f24", "#5a2465", "#ff7a8e"],
    motif: "bolt",
  },
  {
    id: "turinova-chlorodehydromethyltestosterone-guide",
    file: "turinova-chlorodehydromethyltestosterone-guide.svg",
    badge: "CAS 2446-23-3",
    title: ["Turinova", "Chlorodehydromethyltestosterone"],
    description: "Manufacturing quality, scientific documentation, and product-focused education.",
    palette: ["#111927", "#3b4d76", "#8db7ff"],
    motif: "grid",
  },
];

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderTitle(lines) {
  return lines
    .map(
      (line, index) =>
        `  <text x="74" y="${146 + index * 56}" fill="#f7fbff" font-family="Georgia, Times New Roman, serif" font-size="30" font-weight="700">${escapeXml(line)}</text>`
    )
    .join("\n");
}

function renderMotif(config) {
  switch (config.motif) {
    case "molecule":
      return `  <circle cx="930" cy="188" r="26" fill="#58c4dd" opacity="0.95" />
  <circle cx="1018" cy="250" r="38" fill="#86a9ff" opacity="0.70" />
  <circle cx="906" cy="324" r="22" fill="#ffffff" opacity="0.90" />
  <circle cx="1084" cy="330" r="28" fill="#8cf0de" opacity="0.75" />
  <path d="M930 188L1018 250L906 324L1084 330" stroke="#d9f8ff" stroke-width="6" stroke-linecap="round" opacity="0.8" />`;
    case "flame":
      return `  <path d="M930 370C910 318 948 282 954 236C964 164 910 132 910 132C1014 150 1086 232 1070 322C1058 390 1004 438 946 438C920 438 898 416 898 388C898 352 926 338 930 370Z" fill="#ff8b5e" />
  <path d="M982 372C970 344 994 320 998 290C1006 248 970 220 970 220C1038 232 1088 286 1080 344C1074 386 1038 418 998 418C980 418 966 404 966 384C966 364 980 356 982 372Z" fill="#ffd36e" opacity="0.95" />`;
    case "burst":
      return `  <circle cx="990" cy="254" r="92" fill="#18244c" stroke="#8ee0ff" stroke-width="5" />
  <circle cx="990" cy="254" r="34" fill="#8ee0ff" />
  <path d="M990 112V164M990 344V396M848 254H900M1080 254H1132M890 154L928 192M1052 316L1090 354M890 354L928 316M1052 192L1090 154" stroke="#dffcff" stroke-width="10" stroke-linecap="round" />`;
    case "shield":
      return `  <path d="M992 118L1098 158V266C1098 354 1042 418 992 450C942 418 886 354 886 266V158L992 118Z" fill="#80d4b8" opacity="0.95" />
  <path d="M992 164V388M930 268H1054" stroke="#11303d" stroke-width="14" stroke-linecap="round" />`;
    case "wave":
      return `  <path d="M822 342C872 276 920 250 968 250C1026 250 1058 304 1112 304C1134 304 1152 294 1170 280V406C1130 430 1096 442 1060 442C998 442 958 402 900 402C866 402 840 416 816 434L822 342Z" fill="#6fd1ff" opacity="0.92" />
  <path d="M810 270C860 218 910 196 970 196C1030 196 1072 230 1116 230C1142 230 1160 224 1176 214" stroke="#dff8ff" stroke-width="8" stroke-linecap="round" opacity="0.8" />`;
    case "upward":
      return `  <rect x="846" y="356" width="54" height="88" rx="16" fill="#58d6ff" opacity="0.75" />
  <rect x="922" y="308" width="54" height="136" rx="16" fill="#58d6ff" opacity="0.85" />
  <rect x="998" y="244" width="54" height="200" rx="16" fill="#58d6ff" opacity="0.95" />
  <path d="M846 220C900 212 950 196 1002 154L990 130M1002 154L1040 154" stroke="#d9fbff" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />`;
    case "tablet":
      return `  <rect x="878" y="150" width="228" height="180" rx="38" fill="#f4c96f" />
  <path d="M992 150V330" stroke="#725d1f" stroke-width="8" opacity="0.55" />
  <path d="M878 240H1106" stroke="#725d1f" stroke-width="8" opacity="0.55" />
  <circle cx="936" cy="204" r="12" fill="#725d1f" opacity="0.45" />
  <circle cx="1050" cy="278" r="12" fill="#725d1f" opacity="0.45" />`;
    case "capsule":
      return `  <g transform="translate(904 170) rotate(-24 108 108)">
    <rect x="20" y="44" width="176" height="128" rx="64" fill="#ffb26b" />
    <path d="M108 44V172" stroke="#7b2633" stroke-width="10" opacity="0.5" />
    <rect x="20" y="44" width="88" height="128" rx="64" fill="#ffd2b0" opacity="0.9" />
  </g>`;
    case "heartline":
      return `  <path d="M826 302H896L930 240L980 352L1018 282H1102" stroke="#9ef0cc" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="826" cy="302" r="18" fill="#9ef0cc" />
  <circle cx="1102" cy="282" r="18" fill="#9ef0cc" />`;
    case "barbell":
      return `  <rect x="874" y="266" width="240" height="18" rx="9" fill="#dff6ff" />
  <rect x="848" y="214" width="20" height="120" rx="8" fill="#6fd5ff" />
  <rect x="820" y="232" width="20" height="84" rx="8" fill="#6fd5ff" opacity="0.8" />
  <rect x="1120" y="214" width="20" height="120" rx="8" fill="#6fd5ff" />
  <rect x="1148" y="232" width="20" height="84" rx="8" fill="#6fd5ff" opacity="0.8" />`;
    case "pulse":
      return `  <path d="M828 312H900L938 236L982 370L1022 286H1114" stroke="#58d3d9" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="938" cy="236" r="16" fill="#dffeff" />
  <circle cx="982" cy="370" r="16" fill="#dffeff" />`;
    case "bolt":
      return `  <path d="M984 118L892 284H968L918 450L1090 246H1002L1080 118H984Z" fill="#ff7a8e" />
  <path d="M1010 118L954 244H1016L986 338L1068 224H1018L1060 118H1010Z" fill="#ffd2d9" opacity="0.9" />`;
    case "grid":
      return `  <rect x="846" y="144" width="286" height="286" rx="34" fill="#23314f" stroke="#8db7ff" stroke-width="4" />
  <path d="M846 216H1132M846 288H1132M846 360H1132M918 144V430M990 144V430M1062 144V430" stroke="#8db7ff" stroke-width="4" opacity="0.65" />
  <circle cx="990" cy="288" r="56" fill="#8db7ff" opacity="0.22" />`;
    default:
      return "";
  }
}

function renderCover(config) {
  const [base, mid, accent] = config.palette;

  return `<svg width="1200" height="630" viewBox="0 0 1200 630" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="hero" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
      <stop stop-color="${base}" />
      <stop offset="1" stop-color="${mid}" />
    </linearGradient>
    <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(1010 246) rotate(90) scale(240 240)">
      <stop stop-color="${accent}" stop-opacity="0.35" />
      <stop offset="1" stop-color="${accent}" stop-opacity="0" />
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="${base}" />
  <rect width="1200" height="630" rx="28" fill="url(#hero)" />
  <circle cx="1010" cy="246" r="240" fill="url(#glow)" />
  <circle cx="1140" cy="128" r="112" fill="#ffffff" opacity="0.07" />
  <circle cx="64" cy="544" r="134" fill="${accent}" opacity="0.18" />
  <circle cx="1094" cy="438" r="124" fill="${accent}" opacity="0.12" />
  <rect x="52" y="54" width="${Math.max(132, 14 + config.badge.length * 8)}" height="28" rx="10" fill="#ffffff" opacity="0.12" />
  <text x="68" y="73" fill="#f2f7ff" font-family="Inter, Arial, sans-serif" font-size="12" font-weight="500">${escapeXml(config.badge)}</text>
${renderTitle(config.title)}
  <foreignObject x="74" y="248" width="470" height="110">
    <div xmlns="http://www.w3.org/1999/xhtml" style="color:#d7e3ef;font-family:Inter,Arial,sans-serif;font-size:18px;line-height:1.45;">
      ${escapeXml(config.description)}
    </div>
  </foreignObject>
  <rect x="74" y="394" width="126" height="4" rx="2" fill="${accent}" />
  <text x="74" y="434" fill="${accent}" font-family="Inter, Arial, sans-serif" font-size="14" font-weight="600">Nova Techsciences Blog</text>
  <rect x="726" y="84" width="388" height="388" rx="44" fill="#ffffff" opacity="0.06" />
  <rect x="768" y="126" width="304" height="304" rx="36" fill="#ffffff" opacity="0.08" />
${renderMotif(config)}
</svg>
`;
}

function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const config of COVER_CONFIG) {
    fs.writeFileSync(path.join(OUT_DIR, config.file), renderCover(config), "utf8");
  }

  const data = JSON.parse(fs.readFileSync(BLOG_FILE, "utf8"));
  for (const config of COVER_CONFIG) {
    const blog = data.blogs.find((entry) => entry.id === config.id);
    if (blog) {
      blog.image = `/blog/${config.file}`;
    }
  }

  fs.writeFileSync(BLOG_FILE, `${JSON.stringify(data, null, 2)}\n`, "utf8");
  console.log(`Generated ${COVER_CONFIG.length} screenshot-style blog covers.`);
}

main();
