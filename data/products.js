// src/data/products.js

// === Dynamically import ALL product images (including nested folders) ===
// const images = import.meta.glob("../assets/products/**/*.{jpg,jpeg,png,webp}", {
//   eager: true,
// });


// // auto import everything inside /src/assets/products/
// const allImages = import.meta.glob(
//   "/src/assets/products/**/*.{jpg,jpeg,png,webp}",
//   { eager: true }
// );

// return images that match product name + category folder
// const getImages = (name, category) => {
//   const normalizedName = name.toLowerCase().replace(/\s+/g, "_");
//   const normalizedCat = (category || "").toLowerCase();

//   const matches = Object.keys(allImages)
//     .filter((key) => {getImages(

//       const clean = key.toLowerCase();
//       return (
//         clean.includes(`/products/${normalizedCat}/`) &&
//         clean.includes(normalizedName)
//       );
//     })
//     .map((key) => allImages[key].default);

//   return matches.length
//     ? matches
//     : ["https://via.placeholder.com/600?text=No+Image"];
// };


// === CAS NUMBER MAP ===
const CAS = {
  FEMANOVA: "112809-51-5",
  TAMONOVA: "54965-24-1",
  NOVAZOLE: "120511-73-1",
  AROMANOVA: "107868-30-4",
  ENCLOMINOVA: "7599-79-3",
  PRIMONOVA_TABLET: "0434-05-09",
  SUPERNOVA: "3381-88-2",
  TELINOVA: "144701-48-4",
  TURINOVA: "2446-23-3",
  NOVA_T4: "55-03-8",
  CABERNOVA: "81409-90-7",
  HALONOVA: "76-43-7",
  NOVA_T3: "55-06-1",
  NOVABOL: "53-39-4",
  PROVINOVA: "1424-00-6",
  OXYDROL: "0434-07-01",
  NOVAMOREN: "159752-10-0",
  NOVAMETH: "72-63-9",
  SPIROCLEN: "21898-19-1",
  STANOVA50: "10418-03-08",
  STANOVA10: "10418-03-08",
  CLOMINOVA: "50-41-9",

  // Injectables
  "TESTOVA P": "57-85-2",
  SUSTOVA: "68924-89-0",
  "TESTOVA_C": "58-20-8",
  "TESTOVA E": "315-37-7",
  BOLDENOVA: "13103-34-9",
  "NANDROVA_D": "360-70-3",
  "NANDROVA_P": "62-90-8",
  "TRENOVA_A": "10161-34-9",
  "TRENOVA_E": "10161-33-8",
  TRENOVAHEXA: "23454-33-3",
  "DROSTANOVA_P": "521-12-0",
  PRIMONOVA_INJ: "303-42-4",
  ROXONOVA: "10418-03-08",
  "TESTOVA_PP": "1255-49-8",
  "TESTOVA BASE": "58-22-0",
  "NOVA_CUT_MIX":"Varies (multi-compound blend)",
};



// === TABLETS ===
export const tablets = [
  {
  id: "tab-femanova-let-25",
  name: "FEMANOVA",
  category: "Tablets",
  cas: "112809-51-5",

  description:
    "Letrozole 2.5 mg pharmaceutical-grade aromatase inhibitor for estrogen control and hormone regulation.",

  indication:
    "FEMANOVA (Letrozole 2.5 mg) is a pharmaceutical-grade medication commonly used for hormone-dependent breast cancer treatment, estrogen suppression, and ovulation induction in fertility therapy. In the performance and bodybuilding community, Letrozole is widely known as a powerful estrogen-control medicine, often used alongside anabolic steroid cycles to help manage estrogen-related side effects. Its ability to reduce estrogen levels makes it a trusted option for users seeking estrogen balance, post-cycle recovery support, and improved hormonal stability during or after steroid use. FEMANOVA is manufactured by NovaTech Sciences with strict quality control standards, ensuring high purity, consistent potency, and reliable pharmaceutical performance.",

  presentation:
    "Form: Oral tablets\nStrength: 2.5 mg Letrozole per tablet\nPackaging: Box containing 10 tablets\nTablet Type: High-purity, pharmaceutical-grade formulation\nUsage Category: Estrogen suppression / hormonal control\nSuitable For: Medical use, estrogen management during steroid cycles, post-cycle therapy.\nStorage: Keep in a cool, dry place away from direct sunlight.\nManufactured By: NovaTech Sciences.",

  shortDescription:
    "High-purity aromatase inhibitor for reliable estrogen control.",
    precautions:
    "Always consult your healthcare provider before using FEMANOVA (Letrozole 2.5 mg). This aromatase inhibitor is potent and should be used only under proper medical guidance, especially when used for hormone regulation, estrogen control, or post-cycle therapy.\n\n" +
        "Use FEMANOVA exactly as prescribed to avoid hormonal imbalance.\n" +
    "Regular blood tests are recommended to monitor estrogen suppression levels.\n" +
    "Inform your doctor if you are taking any hormone-based medicines, steroids, or fertility treatments.\n" +
    "Take the medicine at the same time each day for stable estrogen regulation.\n" +
    "Avoid alcohol or substances that may interfere with estrogen-control therapy.\n" +
    "Store in a cool, dry place away from direct sunlight.\n\n" ,
    contraindications:
    "Do not use if you are allergic to Letrozole or any inactive ingredient in FEMANOVA.\n" +
    "Not recommended for pregnant or breastfeeding women due to strong estrogen suppression.\n" +
    "Avoid use in individuals with severe liver disease unless advised by a specialist.\n" +
    "Not suitable for premenopausal women unless used under strict medical monitoring.\n" +
    "Stop using immediately and seek medical attention if you experience unusual side effects.",

  images: [
    // "https://novatechsciences.com/assets/FEMANOVA_1.jpg",
    // "https://novatechsciences.com/assets/FEMANOVA_2.jpg",
    // "https://novatechsciences.com/assets/FEMANOVA_3.jpg"
  ],

  // ⭐ SEO FIELDS
  seoTitle: "Premium Femanova Tablets | Performance & Strength",
  seoDescription:
    "Discover Femanova by NovaTech Sciences — a premium performance-enhancing aromatase inhibitor engineered for estrogen control, hormone balance, and reliable results.",
  seoKeywords:
    "Femanova tablets, Letrozole 2.5 mg, steroid estrogen control, aromatase inhibitor, pharmaceutical-grade hormonal regulator",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/femanova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How should I use this medicine?",
      answer:
        "FEMANOVA (Letrozole 2.5 mg) should be taken exactly as directed by your healthcare professional. Take one tablet daily at the same time for consistent estrogen control."
    },
    {
      question: "What is FEMANOVA?",
      answer:
        "FEMANOVA contains Letrozole 2.5 mg, a pharmaceutical-grade aromatase inhibitor used for estrogen reduction and hormone balance in medical and hormonal-regulation protocols."
    },
    {
      question: "Can I take this medicine with food?",
      answer:
        "Yes, FEMANOVA can be taken with or without food. Taking it with food may help reduce stomach discomfort."
    },
    {
      question: "What should I do if I miss a dose?",
      answer:
        "If you miss a dose, take it as soon as you remember. If it's close to your next scheduled dose, skip the missed one. Never double-dose."
    },
    {
      question: "Is this medicine safe for pregnant or breastfeeding women?",
      answer:
        "No. FEMANOVA (Letrozole 2.5 mg) is not safe for pregnant or breastfeeding women due to its strong estrogen-lowering effects."
    }
  ]
}
,
{
  id: "tab-tamonova-20",
  name: "TAMONOVA",
  category: "Tablets",
  cas: "54965-24-1",

  description:
    "Tamoxifen Citrate 20 mg pharmaceutical-grade estrogen receptor blocker for hormone regulation and post-cycle therapy (PCT).",

  indication:
    "TAMONOVA (Tamoxifen Citrate 20 mg) is indicated for blocking estrogen receptors and regulating estrogen activity in the body. Commonly used in post-cycle therapy (PCT), it helps restore natural testosterone levels after a steroid cycle and reduces the risk of estrogen-related side effects such as gynecomastia, water retention, and hormonal imbalance. This product is widely recognized in the bodybuilding and fitness community for its essential role in PCT protocols, making it a trusted option for athletes who use anabolic steroids and need effective estrogen control. Manufactured by NovaTech Sciences under strict quality standards, TAMONOVA ensures consistent potency, high purity, and reliable pharmaceutical performance.",

  presentation:
    "Form: Oral tablets\nStrength: 20 mg Tamoxifen Citrate per tablet\nPackaging: Blister pack of 10 tablets\nTablet Type: High-quality pharmaceutical-grade formulation\nUsage Category: Post Cycle Therapy (PCT), estrogen regulation, hormonal balance\nSuitable For: Steroid users, bodybuilding, fitness, and hormone-support protocols\nStorage: Keep in a cool, dry place away from direct sunlight.\nManufactured By: NovaTech Sciences.",

  shortDescription:
    "Premium Tamoxifen Citrate tablets for effective estrogen control and PCT.",

  precautions:
    "Always consult a qualified healthcare provider before using TAMONOVA (Tamoxifen Citrate 20 mg). Use only under proper medical guidance, especially for PCT or hormone regulation.\n" +
    "Follow prescribed dosage to avoid hormonal imbalance.\n" +
    "Inform your doctor about all medications, supplements, or steroid cycles.\n" +
    "Monitor your body for any unusual symptoms and report to your healthcare provider.\n" +
    "Keep out of reach of children and store safely in a cool, dry place.\n" +
    "Avoid alcohol or substances that may interfere with hormone regulation.\n",

  contraindications:
    "Do not use if allergic to Tamoxifen Citrate or any inactive ingredient.\n" +
    "Not recommended for pregnant or breastfeeding women.\n" +
    "Avoid in individuals with a history of blood clots, liver disease, or hormone-sensitive conditions unless approved by a doctor.\n" +
    "Discontinue use and seek medical attention if severe side effects occur.\n",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Buy Tamonova Tamoxifen 20mg – Trusted PCT & Estrogen Blocker",
  seoDescription:
    "Buy Tamonova (Tamoxifen 20mg) for safe estrogen control, PCT recovery, and hormone balance. Premium pharma-grade tablets designed for trusted post-cycle support.",
  seoKeywords:
    "Tamoxifen 20mg, Buy Tamoxifen tablets, Hormone balance tablets, Post Cycle Therapy, PCT tablets, Estrogen blocker",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/tamonova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "Is TAMONOVA used for Post Cycle Therapy (PCT)?",
      answer:
        "Yes. TAMONOVA is widely used in Post Cycle Therapy to help regulate estrogen levels and support natural hormone recovery after anabolic steroid cycles. Use only under professional guidance."
    },
    {
      question: "Does TAMONOVA help with gynecomastia?",
      answer:
        "TAMONOVA may help reduce estrogen-related effects, which is why many steroid users include it in PCT protocols to manage early signs of gynecomastia. Always seek medical advice before use."
    },
    {
      question: "How long should I take TAMONOVA during PCT?",
      answer:
        "The duration of TAMONOVA in a PCT routine varies based on individual needs and medical guidance. Only a healthcare professional can recommend a safe timeframe."
    },
    {
      question: "Can beginners use TAMONOVA after a steroid cycle?",
      answer:
        "Beginners who use anabolic steroids often include TAMONOVA in their PCT plan for estrogen control and hormonal recovery. Proper medical guidance is essential to ensure safety."
    },
    {
      question: "Does TAMONOVA have side effects?",
      answer:
        "Like all medicines, TAMONOVA may cause side effects depending on individual response. Monitor your body’s reaction and consult a healthcare provider if unusual symptoms occur."
    }
  ]
}
,






{
  id: "tab-novazole-1",
  name: "NOVAZOLE",
  category: "Tablets",
  cas: "120511-73-1",

  description:
    "NOVAZOLE (Anastrozole 1 mg) pharmaceutical-grade aromatase inhibitor for estrogen control, hormonal balance, and post-cycle support.",

  indication:
    "NOVAZOLE (Anastrozole 1 mg) is indicated for reducing elevated estrogen levels in the body by blocking aromatase activity. Medically used in breast cancer therapy, it is highly popular in the bodybuilding and steroid community for controlling estrogen conversion, preventing gynecomastia, reducing water retention, and supporting hormonal balance during steroid cycles and PCT. NOVAZOLE helps users maintain a lean, dry, and side-effect-free physique while managing estrogen spikes caused by anabolic steroids. Manufactured by NovaTech Sciences under strict quality standards, NOVAZOLE ensures consistent potency and high purity.",

  presentation:
    "Form: Oral tablets\nStrength: 1 mg Anastrozole per tablet\nPackaging: Blister pack of 10 tablets\nTablet Type: High-quality pharmaceutical-grade formulation\nUsage Category: On-cycle estrogen management, PCT, hormonal balance\nSuitable For: Athletes, bodybuilders, steroid users needing aromatase inhibitor support\nStorage: Keep in a cool, dry place away from moisture.\nManufactured By: NovaTech Sciences.",

  shortDescription:
    "Premium Anastrozole tablets for effective estrogen control and post-cycle therapy.",

  precautions:
    "Always use NOVAZOLE (Anastrozole 1 mg) under the supervision of a qualified healthcare provider.\n" +
    "Follow prescribed dosage; avoid self-medication.\n" +
    "Inform your doctor about all hormonal treatments, supplements, or steroid cycles.\n" +
    "Monitor for joint pain, dizziness, fatigue, or other unusual side effects.\n" +
    "Store in a cool, dry place; keep out of reach of children.\n" +
    "Avoid alcohol or recreational substances while using NOVAZOLE.",

  contraindications:
    "Do not use if allergic to Anastrozole or any component of the formulation.\n" +
    "Not suitable for pregnant or breastfeeding women.\n" +
    "Avoid use in pre-existing estrogen deficiency unless advised by a doctor.\n" +
    "People with severe kidney or liver impairment should only use under medical supervision.\n" +
    "Do not combine with alcohol or recreational substances.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Buy Novazole Anastrozole 1mg – Trusted Estrogen Blocker & PCT Support",
  seoDescription:
    "Buy NOVAZOLE (Anastrozole 1 mg) for safe estrogen control, post-cycle therapy (PCT), and hormonal balance. Premium pharma-grade tablets for athletes and bodybuilders.",
  seoKeywords:
    "Anastrozole 1 mg, NOVAZOLE tablets, Estrogen control, Aromatase inhibitor, PCT support, Hormone balance",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/novazole",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does NOVAZOLE take to work?",
      answer:
        "NOVAZOLE usually starts showing improvement within a few days, but full effects depend on individual hormone levels and steroid cycle. Continue taking as prescribed for complete efficacy."
    },
    {
      question: "What is NOVAZOLE used for?",
      answer:
        "NOVAZOLE contains Anastrozole 1 mg, an aromatase inhibitor used for estrogen control, hormonal balance, and post-cycle therapy (PCT) in bodybuilding or medical protocols."
    },
    {
      question: "Are there any side effects of NOVAZOLE?",
      answer:
        "Common side effects may include headache, nausea, stomach pain, or dizziness. Most are mild and temporary. Seek medical attention if severe reactions occur."
    },
    {
      question: "Can I drink alcohol while taking NOVAZOLE?",
      answer:
        "It’s best to avoid alcohol while taking NOVAZOLE, as it may increase side effects or interfere with the medicine’s effectiveness."
    },
    {
      question: "Can NOVAZOLE interact with other medicines?",
      answer:
        "Yes. NOVAZOLE may interact with certain medications including blood thinners, antibiotics, or hormonal treatments. Always inform your healthcare provider of all medicines and supplements you are taking."
    }
  ]
}
,


{
  id: "tab-aromanova-25",
  name: "AROMANOVA",
  category: "Tablets",
  cas: "107868-30-4",

  description:
    "AROMANOVA (Exemestane 25 mg) pharmaceutical-grade aromatase inhibitor for estrogen control, post-cycle therapy (PCT), and hormonal balance.",

  indication:
    "AROMANOVA (Exemestane 25 mg) is an advanced aromatase inhibitor (AI) designed to reduce elevated estrogen levels. It helps control estrogen-related side effects such as gynecomastia, water retention, and hormonal imbalance during and after steroid cycles. Widely used in Post Cycle Therapy (PCT), Exemestane supports smoother hormone recovery by blocking estrogen conversion, ensuring optimal performance, lean muscle retention, and improved physique outcomes. Always use under professional supervision.",

  presentation:
    "Form: Oral tablets\nStrength: 25 mg Exemestane per tablet\nPackaging: Pack of 10 high-quality tablets\nTablet Type: Pharmaceutical-grade, potent estrogen suppressor\nUsage Category: On-cycle estrogen control, Post Cycle Therapy (PCT), hormonal balance\nSuitable For: Athletes, bodybuilders, steroid users seeking aromatase inhibitor support\nStorage: Store in a cool, dry place away from direct sunlight.\nManufactured By: NovaTech Sciences.",

  shortDescription:
    "High-potency Exemestane tablets for advanced estrogen control and PCT support.",

  precautions:
    "Always use AROMANOVA under the supervision of a qualified healthcare provider.\n" +
    "Follow prescribed dosage and avoid self-medication.\n" +
    "Inform your doctor about all medicines, supplements, or hormonal treatments.\n" +
    "Keep out of reach of children; store in a cool, dry place.\n" +
    "Avoid alcohol or substances that may interfere with hormonal therapy.\n" +
    "Monitor for unusual symptoms such as severe fatigue, dizziness, or allergic reactions.",

  contraindications:
    "Do not use if allergic to Exemestane or any inactive ingredient.\n" +
    "Not for use in pregnant or breastfeeding women.\n" +
    "Avoid in premenopausal women unless directed by a healthcare provider.\n" +
    "Use with caution in individuals with severe liver or kidney disorders.\n" +
    "Should not be combined with other medicines that strongly affect estrogen levels unless supervised by a medical professional.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Buy AROMANOVA Exemestane 25mg – Advanced Aromatase Inhibitor & PCT Support",
  seoDescription:
    "Buy AROMANOVA (Exemestane 25mg) for advanced estrogen control, post-cycle therapy (PCT), and hormone balance. Premium pharma-grade tablets for athletes and bodybuilders.",
  seoKeywords:
    "Exemestane 25mg, AROMANOVA tablets, Aromatase inhibitor, Estrogen control, Post Cycle Therapy, PCT support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/aromanova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does AROMANOVA take to show results?",
      answer:
        "AROMANOVA generally starts working within a few days, depending on individual hormone levels and dosage. Continue taking it regularly as instructed for full benefits."
    },
    {
      question: "Are there any side effects of AROMANOVA?",
      answer:
        "Common side effects may include mild headache, nausea, or digestive discomfort. Seek medical attention if severe or unusual reactions occur."
    },
    {
      question: "Can I take AROMANOVA with other medicines?",
      answer:
        "Some medicines may interact with AROMANOVA, affecting effectiveness or causing side effects. Inform your doctor about all ongoing medications and supplements."
    },
    {
      question: "Is AROMANOVA safe for long-term use?",
      answer:
        "AROMANOVA is generally safe when taken under medical supervision. Do not exceed prescribed dosage or duration without consulting a healthcare professional."
    },
    {
      question: "Can I drink alcohol while taking AROMANOVA?",
      answer:
        "Avoid alcohol during AROMANOVA use, as it may increase side effects and interfere with absorption and effectiveness."
    }
  ]
}
,


//  https://novatechsciences.com/products/tablets/enclominova 

{
  id: "tab-enclominova-25",
  name: "ENCLOMINOVA",
  category: "Tablets",
  cas: "7599-79-3",

  description:
    "ENCLOMINOVA (Enclomiphene Citrate 25 mg) pharmaceutical-grade tablet used to boost natural testosterone levels, support post-cycle therapy (PCT), and restore hormonal balance.",

  indication:
    "ENCLOMINOVA (Enclomiphene Citrate 25 mg) is commonly used to boost natural testosterone, support post-cycle therapy (PCT) after anabolic steroid cycles, and restore hormonal balance. It is also prescribed for male infertility, promoting healthy testosterone production by stimulating endogenous hormone release. Many athletes and bodybuilders use ENCLOMINOVA to recover faster after steroid cycles, improve vitality, and enhance overall endocrine function. Always use under proper medical supervision.",

  presentation:
    "Form: Oral tablets\nStrength: 25 mg Enclomiphene Citrate per tablet\nPackaging: Box of 10 tablets\nTablet Type: Pharmaceutical-grade, testosterone support formulation\nUsage Category: Post Cycle Therapy (PCT), testosterone boosting, endocrine support\nSuitable For: Athletes, bodybuilders, men recovering from steroid cycles, and users requiring hormone support\nStorage: Store in a cool, dry place away from direct sunlight.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "Premium Enclomiphene Citrate tablets for testosterone boosting, PCT recovery, and hormonal balance.",

  precautions:
    "Always use ENCLOMINOVA under medical supervision.\n" +
    "Follow prescribed dosage and avoid self-medication.\n" +
    "Inform your doctor about all medications, supplements, or hormonal treatments.\n" +
    "Keep out of reach of children and store safely.\n" +
    "Avoid alcohol or substances that may interfere with hormone recovery.\n" +
    "Monitor hormone levels and report any unusual symptoms to your healthcare provider.",

  contraindications:
    "Do not use if allergic to Enclomiphene or any inactive ingredients.\n" +
    "Not suitable for pregnant or breastfeeding women.\n" +
    "Avoid in individuals with liver disease, severe kidney issues, or hormone-sensitive medical conditions.\n" +
    "Not for those with uncontrolled thyroid or pituitary disorders, or certain reproductive health conditions unless approved by a doctor.\n" +
    "Avoid combining with other hormone-altering supplements, anabolic steroids, SARMs, or medications unless supervised by a doctor.\n" +
    "Discontinue immediately if severe headache, vision changes, mood disturbances, or unusual symptoms occur.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Buy Enclominova 25mg – Powerful PCT & Testosterone Booster",
  seoDescription:
    "Buy ENCLOMINOVA (Enclomiphene 25mg) for testosterone recovery, hormonal balance, and advanced post-cycle therapy (PCT) support. Premium pharmaceutical-grade tablets for athletes and steroid users.",
  seoKeywords:
    "Enclominova, Enclomiphene 25mg, Testosterone booster tablets, PCT support, Hormone balance",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/enclominova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "Is ENCLOMINOVA safe to use during pregnancy or breastfeeding?",
      answer:
        "ENCLOMINOVA should not be used during pregnancy or breastfeeding unless prescribed by a doctor. It may affect the unborn or nursing baby. Always consult your healthcare provider before use."
    },
    {
      question: "How long does ENCLOMINOVA take to show improvement?",
      answer:
        "Most people notice benefits within a few days to a few weeks, depending on individual condition. Consistent use as directed by your doctor ensures maximum effectiveness."
    },
    {
      question: "Are there any common side effects of ENCLOMINOVA?",
      answer:
        "Common side effects may include headache, nausea, dizziness, or digestive discomfort. These usually improve on their own. Seek medical advice if severe or unusual reactions occur."
    },
    {
      question: "Can ENCLOMINOVA interact with other medications?",
      answer:
        "ENCLOMINOVA may interact with certain medicines, supplements, or herbal products. Inform your doctor about all substances you are taking to prevent unwanted interactions."
    },
    {
      question: "Who should avoid taking ENCLOMINOVA?",
      answer:
        "Individuals with allergies, liver disorders, hormonal issues, or those who are pregnant or breastfeeding should avoid ENCLOMINOVA unless approved by a healthcare provider."
    }
  ]
}
,


// https://novatechsciences.com/products/tablets/primonova 
{
  id: "tab-primonova-25",
  name: "PRIMONOVA",
  category: "Tablets",
  cas: "434-05-9",

  description:
    "PRIMONOVA (Metenolone Acetate 25 mg) premium-quality anabolic steroid tablet for lean muscle preservation, cutting cycles, and body recomposition. Ideal for athletes seeking clean gains, muscle hardness, and minimal water retention.",

  indication:
    "PRIMONOVA (Metenolone Acetate 25 mg) is indicated for users seeking a mild yet effective anabolic steroid that promotes lean muscle growth, muscle preservation, and enhanced recovery. Known as a Primobolan oral alternative, it supports nitrogen retention, strength, and performance during cutting, recomp, or pre-contest phases. Commonly used during cutting cycles, pre-contest prep, and lean muscle maintenance, PRIMONOVA is trusted by men and women aiming for steady, sustainable physique improvement.",

  presentation:
    "Form: Oral tablets\nStrength: 25 mg Metenolone Acetate per tablet\nPackaging: Bottle of 50 tablets\nTablet Type: Pharmaceutical-grade, mild anabolic steroid\nUsage Category: Cutting cycles, lean muscle building, muscle preservation, body recomposition\nSuitable For: Athletes, bodybuilders, fitness enthusiasts\nStorage: Store in a cool, dry place away from direct sunlight.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "High-quality Metenolone Acetate tablets for clean muscle growth, cutting cycles, and performance enhancement.",

  precautions:
    "Always use PRIMONOVA under medical supervision.\n" +
    "Follow the prescribed dosage; avoid self-medication.\n" +
    "Inform your doctor about all medications, supplements, or steroid use.\n" +
    "Not recommended for individuals with liver, kidney, or heart disorders.\n" +
    "Avoid use during pregnancy or breastfeeding.\n" +
    "Keep out of reach of children and store safely in a cool, dry place.\n" +
    "Avoid alcohol or recreational substances.\n" +
    "Monitor for unusual symptoms such as severe headache, swelling, or mood changes.",

  contraindications:
    "Do not use if allergic to Metenolone Acetate or any inactive ingredients.\n" +
    "Not suitable for individuals under 18 years unless advised by a certified professional.\n" +
    "Seek immediate medical attention if unusual or severe reactions occur.\n" +
    "Avoid misuse or exceeding recommended dosage to prevent hormonal imbalance or side effects.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Primonova Primobolan Tablets - Muscle & Cutting Support",
  seoDescription:
    "Buy Primonova Primobolan tablets for lean muscle growth, cutting cycles, and enhanced performance. Trusted steroid alternative for clean gains with minimal side effects.",
  seoKeywords:
    "Primonova, Primobolan tablets, Buy Primobolan online, Methenolone Acetate tablets, Lean muscle growth, Cutting cycles",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/primonova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does it take for PRIMONOVA to show results?",
      answer:
        "Users generally see visible results from Primonova (Metenolone Acetate) within 2–4 weeks. Mild anabolic effects support steady lean muscle development and body recomposition with proper diet and training."
    },
    {
      question: "Is PRIMONOVA good for cutting cycles?",
      answer:
        "Yes, Primonova is ideal for cutting cycles. It helps preserve lean muscle while supporting fat-loss phases, enhancing muscle definition without water retention."
    },
    {
      question: "Does PRIMONOVA cause side effects?",
      answer:
        "PRIMONOVA is a mild anabolic steroid but may cause minor side effects such as headache, mild acne, mood changes, or digestive discomfort. Serious effects are rare with responsible use."
    },
    {
      question: "Can beginners use PRIMONOVA?",
      answer:
        "Yes, Primonova is beginner-friendly due to its low androgenic nature. Beginners should consult a healthcare professional before starting any steroid cycle."
    },
    {
      question: "Do I need Post Cycle Therapy (PCT) after using PRIMONOVA?",
      answer:
        "PCT is recommended after completing a Primonova cycle to restore natural hormone balance and help maintain muscle gains, even though Metenolone Acetate is mild."
    }
  ]
}
,



// https://novatechsciences.com/products/tablets/supernova 


{
  id: "tab-supernova-10",
  name: "SUPERNOVA",
  category: "Tablets",
  cas: "3381-88-2",

  description:
    "SUPERNOVA (Methyldrostanolone 10 mg) is a powerful oral anabolic steroid designed to support lean muscle growth, strength enhancement, and improved athletic performance. Ideal for cutting cycles, muscle hardness, and fat reduction.",

  indication:
    "SUPERNOVA (Methyldrostanolone 10 mg) is designed for users seeking rapid strength increase, lean muscle gains, and enhanced performance. Known as Superdrol in bodybuilding circles, it helps athletes achieve dense, dry muscle without excess water retention. Commonly used during muscle-building, strength, and recomposition cycles, SUPERNOVA is ideal for those wanting clean mass, improved vascularity, and performance enhancement under expert supervision.",

  presentation:
    "Form: Oral tablets\nStrength: 10 mg Methyldrostanolone per tablet\nPackaging: Bottle of 100 tablets\nTablet Type: Oral anabolic steroid tablet\nUsage Category: Cutting cycles, lean muscle growth, strength, recomposition\nSuitable For: Intermediate or experienced athletes and bodybuilders\nStorage: Store in a cool, dry place away from sunlight.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "High-potency Methyldrostanolone tablets for rapid muscle gain, strength, and cutting cycles.",

  precautions:
    "Use SUPERNOVA strictly under medical supervision.\n" +
    "Follow prescribed dosage; avoid self-medication.\n" +
    "Inform your doctor about all medications or steroid cycles.\n" +
    "Keep out of reach of children; store safely.\n" +
    "Avoid alcohol or substances that stress the liver.\n" +
    "Not suitable for individuals with liver, kidney, heart, or hormonal disorders unless approved.\n" +
    "Pregnant or breastfeeding women must not use this product.\n" +
    "Seek immediate medical attention for severe abdominal pain, jaundice, or intense mood changes.\n" +
    "Do not exceed recommended dosage to prevent hormonal imbalance or adverse effects.",

  contraindications:
    "Do not use if allergic to Methyldrostanolone or any other active ingredient.\n" +
    "Not recommended for beginners; better suited for intermediate users.\n" +
    "Avoid combining with other hormone-altering substances unless supervised by a healthcare professional.\n" +
    "Discontinue use and consult a healthcare provider if unusual or severe reactions occur.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Supernova Methandienone – Powerful Muscle Gain Tablets",
  seoDescription:
    "Buy Supernova (Methandienone tablets) for rapid muscle growth, strength enhancement, and bulk cycles. Top-performing anabolic option for serious bodybuilders.",
  seoKeywords:
    "Methandienone tablets, Buy Methandienone online, Muscle gain steroid, SUPERNOVA, Strength enhancement tablets",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/supernova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does SUPERNOVA take to show results?",
      answer:
        "Most users begin seeing strength improvement and lean muscle enhancement within 1–2 weeks of using SUPERNOVA Methyldrostanolone. Visible physique changes typically appear by week 3 or 4 depending on workout, diet, and cycle adherence."
    },
    {
      question: "What results can I expect from SUPERNOVA?",
      answer:
        "SUPERNOVA promotes dry, lean muscle gains, improved strength, muscle hardness, better vascularity, and enhanced performance. Effective during cutting or recomposition cycles."
    },
    {
      question: "Does SUPERNOVA cause side effects?",
      answer:
        "Side effects may include headache, mild liver strain, acne, or mood changes. Responsible dosing and cycle support reduce risks. Avoid prolonged or high-dose use."
    },
    {
      question: "Is PCT required after using SUPERNOVA?",
      answer:
        "Yes, Post Cycle Therapy (PCT) is recommended after SUPERNOVA to restore natural testosterone, prevent hormonal crashes, and maintain muscle gains. Typically SERMs are used for 3–4 weeks."
    },
    {
      question: "Can beginners use SUPERNOVA?",
      answer:
        "SUPERNOVA is not ideal for beginners due to its potency. It is better suited for intermediate steroid users with experience. Beginners should consult a medical professional before use."
    }
  ]
}
,



// https://novatechsciences.com/products/tablets/telinova 

{
  id: "tab-telinova-20",
  name: "TELINOVA",
  category: "Tablets",
  cas: "144701-48-4",

  description:
    "TELINOVA (Telmisartan 20 mg) pharmaceutical-grade tablets for blood pressure management, cardiovascular support, and wellness enhancement. Supports stable blood pressure, improves blood flow, and reduces the risk of cardiovascular events.",

  indication:
    "TELINOVA (Telmisartan 20 mg) is indicated for the management of hypertension (high blood pressure) and for reducing the risk of cardiovascular events such as stroke and heart attack. It helps maintain healthy blood pressure levels by relaxing blood vessels, improving circulation, and supporting long-term heart health. Commonly used during post-cycle therapy, intense training phases, or in individuals at cardiovascular risk, TELINOVA is trusted for stabilizing blood pressure and enhancing cardiovascular performance under medical supervision.",

  presentation:
    "Form: Oral tablets\nStrength: 20 mg Telmisartan per tablet\nPackaging: Blister pack of 10 tablets\nTablet Type: Pharmaceutical-grade antihypertensive\nUsage Category: Blood pressure management, cardiovascular support, performance wellness\nSuitable For: Individuals needing blood pressure control, post-cycle therapy, or cardiovascular protection\nStorage: Store in a cool, dry place away from direct sunlight and moisture.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "High-quality Telmisartan tablets for hypertension management and cardiovascular support.",

  precautions:
    "Always use TELINOVA under medical supervision.\n" +
    "Follow prescribed dosage; avoid self-medication.\n" +
    "Check for allergies to Telmisartan or any inactive ingredients.\n" +
    "Monitor blood pressure regularly, especially during initial treatment.\n" +
    "Inform your doctor about all medications, supplements, or performance compounds.\n" +
    "Avoid alcohol as it may enhance blood pressure-lowering effects.\n" +
    "Use caution while driving if dizziness occurs.\n" +
    "Keep out of reach of children and store in original packaging.",

  contraindications:
    "Do not use TELINOVA if pregnant, planning pregnancy, or breastfeeding.\n" +
    "Avoid use in individuals with severe liver or kidney impairment unless approved by a physician.\n" +
    "Do not use in patients with bilateral renal artery stenosis or severe heart conditions without medical supervision.\n" +
    "Avoid if allergic to Telmisartan or any component of the formulation.\n" +
    "Seek immediate medical attention if unusual symptoms occur, including severe dizziness, swelling, or difficulty breathing.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Telinova Tadalafil 20mg – Strong Performance & Wellness Boost",
  seoDescription:
    "Buy Telinova (Tadalafil 20mg) for enhanced performance, improved blood flow, and better endurance. Premium pharmaceutical tablets designed for reliable wellness support.",
  seoKeywords:
    "Tadalafil 20mg, Buy Tadalafil tablets, Telinova tablets, Blood flow booster, Performance enhancer, Wellness support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/telinova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does it take for TELINOVA to work?",
      answer:
        "The effectiveness of TELINOVA varies among individuals. Some users notice improvement within a few days, while others may require longer. Consistent use as prescribed ensures maximum benefit."
    },
    {
      question: "Are there any side effects of TELINOVA tablets?",
      answer:
        "Some users may experience mild side effects such as nausea, headache, or stomach discomfort. These usually resolve on their own. Consult a healthcare professional if symptoms persist."
    },
    {
      question: "Who should not take TELINOVA?",
      answer:
        "Individuals with allergies to TELINOVA ingredients, severe medical conditions, or those on conflicting medications should avoid TELINOVA unless approved by a healthcare provider."
    },
    {
      question: "Can I take TELINOVA with other medicines?",
      answer:
        "Consult your doctor before combining TELINOVA with other medicines or supplements, as some interactions may reduce effectiveness or increase side effects."
    },
    {
      question: "How should I store TELINOVA tablets?",
      answer:
        "Store TELINOVA tablets in a cool, dry place away from sunlight and moisture. Keep in original packaging and out of reach of children."
    }
  ]
}
,


 
// https://novatechsciences.com/products/tablets/turinova 

{
  id: "tab-turinova-10",
  name: "TURINOVA",
  category: "Tablets",
  cas: "2446-23-3",

  description:
    "TURINOVA (Chlorodehydromethyltestosterone 10 mg) is a pharmaceutical-grade oral anabolic steroid tablet designed to enhance muscle recovery, strength, endurance, and performance under professional supervision.",

  indication:
    "TURINOVA (Chlorodehydromethyltestosterone 10 mg) is indicated for therapeutic anabolic support, lean muscle preservation, enhanced strength, and improved athletic recovery. Known for effects similar to Turinabol, it helps improve muscle endurance and performance. Recommended for structured anabolic recovery cycles under medical supervision, TURINOVA is ideal for individuals requiring controlled anabolic support.",

  presentation:
    "Form: Oral tablets\nStrength: 10 mg Chlorodehydromethyltestosterone per tablet\nPackaging: Bottle of 50 tablets\nTablet Type: Pharmaceutical-grade anabolic steroid\nUsage Category: Muscle recovery, strength enhancement, endurance, therapeutic anabolic support\nSuitable For: Athletes, bodybuilders, and individuals on structured anabolic recovery cycles\nStorage: Store in a cool, dry place away from sunlight.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "High-quality Chlorodehydromethyltestosterone tablets for lean muscle, strength, and performance support.",

  precautions:
    "Use TURINOVA only under the guidance of a qualified healthcare professional.\n" +
    "Follow recommended dosage; avoid self-medication.\n" +
    "Inform your doctor of any liver, kidney, heart, or hormonal conditions.\n" +
    "Periodic blood tests may be required to monitor liver enzymes and hormone levels.\n" +
    "Avoid alcohol as it may increase liver strain.\n" +
    "Keep away from children; store in a cool, dry place.",

  contraindications:
    "Do not use if allergic to Chlorodehydromethyltestosterone or any component of TURINOVA.\n" +
    "Not suitable for individuals with severe liver disease or impaired hepatic function.\n" +
    "Contraindicated in pregnant or breastfeeding women.\n" +
    "Avoid in individuals with prostate cancer, breast cancer, or hormone-sensitive conditions.\n" +
    "Not recommended for uncontrolled hypertension or severe heart conditions.\n" +
    "Do not combine with other oral hepatotoxic substances or anabolic steroids without medical supervision.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Turinova Turinabol – Lean Muscle & Strength Gain Tablets",
  seoDescription:
    "Buy Turinova (Turinabol tablets) for lean muscle growth, strength enhancement, and clean performance gains. Top-choice anabolic for cutting and recomposition cycles.",
  seoKeywords:
    "Turinabol tablets, Buy Turinabol online, Clean muscle gains, Strength enhancement, TURINOVA tablets",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/turinova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does TURINOVA take to show results?",
      answer:
        "TURINOVA’s anabolic effects may begin within a few days, with noticeable muscle recovery and strength improvement typically seen in 1–2 weeks. Results depend on dosage, cycle duration, and individual response."
    },
    {
      question: "Does TURINOVA have side effects?",
      answer:
        "Potential side effects may include mild headaches, mood changes, liver strain, or hormonal imbalance. Responsible dosing and medical supervision help reduce risks."
    },
    {
      question: "Can beginners use TURINOVA?",
      answer:
        "Beginners should use TURINOVA only under professional guidance. Although milder than many anabolic steroids, proper dosing and monitoring are essential for safe results."
    },
    {
      question: "Can I combine TURINOVA with other steroids?",
      answer:
        "Stacking TURINOVA with other anabolic steroids should be done only under medical supervision. Some combinations may increase benefits but also raise the risk of side effects."
    },
    {
      question: "Who should avoid using TURINOVA?",
      answer:
        "Individuals with liver, heart, or hormonal issues—or those taking conflicting medications—should avoid TURINOVA unless cleared by a healthcare professional. Pregnant women and minors must not use anabolic steroids."
    }
  ]
}
,



// https://novatechsciences.com/products/tablets/nova-t4 

{
  id: "tab-nova-t4-50mcg",
  name: "NOVA_T4",
  category: "Tablets",
  cas: "51-48-9",

  description:
    "NOVA_T4 (Levothyroxine Sodium T4 50 mcg) pharmaceutical-grade tablet for supporting healthy thyroid hormone levels, metabolism, energy, and hormonal balance. Ideal for hypothyroidism management and metabolic support during performance cycles.",

  indication:
    "NOVA_T4 (Levothyroxine Sodium T4 50 mcg) is indicated for individuals requiring thyroid hormone replacement or supplementation. It helps maintain stable metabolism, energy, and overall hormonal balance. Often used alongside steroid cycles or performance regimens, NOVA_T4 supports metabolic stability and thyroid function under medical supervision.",

  presentation:
    "Form: Oral tablets\nStrength: 50 mcg Levothyroxine Sodium T4 per tablet\nPackaging: Blister pack of 10 tablets\nTablet Type: Precision-dosed T4 tablet\nUsage Category: Thyroid hormone support, metabolism regulation, fat-loss support\nSuitable For: Individuals with hypothyroidism or those needing regulated thyroid support during performance cycles\nStorage: Store in a cool, dry place away from moisture and sunlight.\nManufactured By: NovaTech Sciences.",

  shortDescription:
    "High-quality Levothyroxine T4 tablets for thyroid hormone support, metabolism, and energy.",

  precautions:
    "Always use NOVA_T4 under medical supervision.\n" +
    "Follow prescribed dosage; do not self-medicate.\n" +
    "Inform your doctor of any steroid, supplement, or hormonal medication use.\n" +
    "Avoid use in untreated adrenal insufficiency, acute myocardial infarction, uncontrolled hyperthyroidism, or serious cardiovascular disorders.\n" +
    "Keep out of reach of children; store in a dry, cool place.\n" +
    "Avoid alcohol or stimulant substances that may interfere with absorption.\n" +
    "Monitor for rapid heartbeat, chest pain, extreme nervousness, or unusual sweating, and seek medical help if needed.\n" +
    "Pregnant or breastfeeding women should consult a physician before use.",

  contraindications:
    "Do not use if allergic to Levothyroxine or any inactive ingredients.\n" +
    "Avoid self-medication or combining with steroids without medical supervision.\n" +
    "Not suitable for untreated adrenal insufficiency or serious cardiovascular conditions.\n" +
    "Discontinue and seek medical attention if unusual symptoms appear.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Nova-T4 Levothyroxine – Thyroid Support & Metabolism Boost",
  seoDescription:
    "Buy Nova-T4 (Levothyroxine tablets) for thyroid hormone support, improved metabolism, fat-loss assistance, and enhanced energy. Trusted pharma-grade T4 tablets.",
  seoKeywords:
    "Levothyroxine tablets, Buy Levothyroxine online, T4 thyroid hormone tablets, Weight-loss thyroid support, NOVA_T4",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/nova-t4",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does NOVA_T4 take to work?",
      answer:
        "NOVA_T4 tablets gradually improve thyroid hormone levels. Most users notice better energy and metabolism within 2–4 weeks. Full stabilization may take longer depending on dosage, thyroid condition, and medical monitoring."
    },
    {
      question: "Can I use NOVA_T4 during a steroid cycle?",
      answer:
        "Some users take NOVA_T4 to support metabolism and maintain thyroid function during steroid cycles. This should only be done under medical supervision to avoid hormonal imbalance."
    },
    {
      question: "Are there any side effects of NOVA_T4?",
      answer:
        "Possible side effects include nervousness, headache, increased heart rate, or sleep issues if the dosage is too high. These symptoms may indicate excess thyroid hormone. Professional monitoring is recommended."
    },
    {
      question: "Can I stop taking NOVA_T4 suddenly?",
      answer:
        "NOVA_T4 should not be stopped abruptly, as thyroid hormone levels may drop quickly, causing fatigue, weight gain, and slowed metabolism. Always taper or adjust doses under medical supervision."
    },
    {
      question: "How should I store NOVA_T4 tablets?",
      answer:
        "Store NOVA_T4 tablets in a cool, dry place away from sunlight and moisture. Keep blister packs sealed until use to maintain potency."
    }
  ]
}
,




// https://novatechsciences.com/products/tablets/cabernova 

{
  id: "tab-cabernova-0.5",
  name: "CABERNOVA",
  category: "Tablets",
  cas: "81409-90-7",

  description:
    "CABERNOVA (Cabergoline 0.5 mg) pharmaceutical-grade tablets designed to regulate elevated prolactin levels, maintain hormonal balance, and support recovery during steroid cycles or PCT.",

  indication:
    "CABERNOVA (Cabergoline 0.5 mg) helps regulate high prolactin levels caused by anabolic steroid use or hormonal imbalances. It supports hormonal stability, prevents prolactin-related side effects such as mood changes, water retention, and decreased libido, and enhances post-cycle therapy (PCT) results. Widely used by bodybuilders, athletes, and fitness enthusiasts, CABERNOVA helps maintain optimal hormone health and improves overall cycle performance.",

  presentation:
    "Form: Oral tablets\nStrength: 0.5 mg Cabergoline per tablet\nPackaging: Box of 8 tablets\nTablet Type: Pharmaceutical-grade prolactin-control tablet\nUsage Category: Prolactin management, post-cycle therapy, hormonal balance\nSuitable For: Athletes, bodybuilders, steroid users, fitness enthusiasts\nStorage: Store in a cool, dry place away from direct sunlight.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "Premium Cabergoline tablets for prolactin control, hormone support, and enhanced recovery.",

  precautions:
    "Always use CABERNOVA under professional guidance.\n" +
    "Follow prescribed dosage; avoid self-medication.\n" +
    "Inform your doctor of all medications, supplements, or steroid compounds.\n" +
    "Avoid alcohol or recreational substances as they may interfere with dopamine activity.\n" +
    "Keep out of reach of children; store in a cool, dry place.\n" +
    "Seek medical attention for chest pain, severe headache, vision changes, or unusual symptoms.\n" +
    "Pregnant or breastfeeding women should avoid CABERNOVA unless approved by a medical professional.",

  contraindications:
    "Do not use if allergic to Cabergoline or other ergot derivatives.\n" +
    "Avoid if you have uncontrolled hypertension, heart valve disorders, or serious cardiovascular conditions.\n" +
    "Discontinue and seek medical help if severe or unusual symptoms occur.\n" +
    "Use only under medical supervision during steroid cycles or PCT.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Cabernova Cabergoline – Prolactin Control & Hormone Support",
  seoDescription:
    "Buy Cabernova (Cabergoline tablets) for powerful prolactin control, hormone balance, and enhanced recovery during steroid cycles. Premium pharma-grade dopamine agonist.",
  seoKeywords:
    "Cabergoline tablets, Buy Cabergoline online, Reduce prolactin levels, Cabergoline 0.5mg, Hormone balance, PCT support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/cabernova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How does Cabergoline help during steroid cycles?",
      answer:
        "Cabergoline helps manage high prolactin levels caused by specific anabolic steroids. By lowering prolactin, CABERNOVA supports libido, reduces gynecomastia risk, maintains hormonal balance, and improves recovery during steroid cycles."
    },
    {
      question: "How long does it take for CABERNOVA to work?",
      answer:
        "CABERNOVA begins reducing prolactin levels within a few days, while full benefits typically appear within 2 to 4 weeks. Consistent usage during steroid cycles helps maintain stable hormone levels."
    },
    {
      question: "Are there any common side effects of CABERNOVA?",
      answer:
        "Some users may experience mild nausea, dizziness, or headaches when using Cabergoline. These effects are usually temporary and Cabergoline is generally well tolerated when used correctly."
    },
    {
      question: "Can bodybuilders use Cabergoline safely?",
      answer:
        "Yes, bodybuilders commonly use Cabergoline safely for prolactin management during steroid cycles. Proper dosing of CABERNOVA helps reduce estrogen-like side effects, maintain hormone balance, and support performance."
    },
    {
      question: "Do I need a prescription for CABERNOVA?",
      answer:
        "CABERNOVA contains Cabergoline, which typically requires medical guidance or a prescription. Consulting a healthcare professional ensures proper prolactin control and reduces the risk of hormone-related issues."
    }
  ]
}
,


// 
// https://novatechsciences.com/products/tablets/halonova 

{
  id: "tab-halonova-5",
  name: "HALONOVA",
  category: "Tablets",
  cas: "76-43-7",

  description:
    "HALONOVA (Fluoxymesterone 5 mg) pharmaceutical-grade tablets designed to support testosterone levels, enhance strength, and preserve lean muscle mass. Ideal for supervised therapeutic use and performance enhancement.",

  indication:
    "HALONOVA (Fluoxymesterone 5 mg) is indicated for testosterone replacement therapy in individuals with clinically low testosterone levels. It supports androgen balance, muscle preservation, strength maintenance, and overall androgen function in medically supervised cases. Used in controlled treatment plans, HALONOVA helps improve low testosterone-related symptoms safely.",

  presentation:
    "Form: Oral tablets\nStrength: 5 mg Fluoxymesterone per tablet\nPackaging: Blister pack of 10 tablets\nTablet Type: Pharmaceutical-grade anabolic steroid\nUsage Category: Testosterone support, muscle preservation, strength enhancement\nSuitable For: Patients with low testosterone, medical supervision required\nStorage: Store in a cool, dry place.\nManufactured By: Nova Tech Sciences.",

  shortDescription:
    "High-quality Fluoxymesterone tablets for testosterone support, muscle preservation, and strength enhancement.",

  precautions:
    "Use HALONOVA only under medical supervision.\n" +
    "Follow prescribed dosage; avoid self-medication.\n" +
    "Inform your doctor of all medications, supplements, or steroids.\n" +
    "Avoid alcohol and recreational substances to reduce liver strain.\n" +
    "Keep out of reach of children; store in a cool, dry place.\n" +
    "Seek medical attention if unusual symptoms occur such as difficulty breathing, swelling, or severe mood changes.\n" +
    "Do not exceed recommended dosage to minimize risk of adverse effects.",

  contraindications:
    "Do not use if allergic to Fluoxymesterone or any component of HALONOVA.\n" +
    "Not recommended for individuals with liver, kidney, or heart disorders.\n" +
    "Not suitable for pregnant or breastfeeding women.\n" +
    "Discontinue and seek medical advice if unusual or severe symptoms appear.\n" +
    "Use only under medical supervision.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Halonova Halotestin – Extreme Strength & Cutting Power",
  seoDescription:
    "Buy Halonova (Halotestin tablets) for explosive strength, hard muscle definition, and peak performance. Powerful anabolic for cutting and competition prep.",
  seoKeywords:
    "Halotestin tablets, Buy Halotestin online, Halotestin for performance, Oral Halotestin, HALONOVA tablets",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/halonova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova Tech Sciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "What results can I expect from HALONOVA Fluoxymesterone tablets?",
      answer:
        "HALONOVA may help support testosterone levels, improve strength, and preserve lean muscle mass when used under medical supervision. Results vary depending on dosage, diet, and training."
    },
    {
      question: "What are the possible side effects of Fluoxymesterone?",
      answer:
        "Fluoxymesterone may cause mood changes, oily skin, liver strain, or cholesterol changes. Regular medical monitoring is recommended for safe testosterone-supporting therapy."
    },
    {
      question: "Can I use HALONOVA during a steroid cycle?",
      answer:
        "HALONOVA may be used in supervised therapeutic cycles for testosterone enhancement and muscle preservation. Consult a healthcare professional before combining with other anabolic steroids."
    },
    {
      question: "How long does it take for HALONOVA to show effects?",
      answer:
        "Effects may appear within a few days to weeks depending on hormone levels and treatment goals. Consistent use under medical guidance ensures stable anabolic and testosterone-supporting benefits."
    },
    {
      question: "Can I drink alcohol while taking HALONOVA?",
      answer:
        "It is recommended to avoid or limit alcohol while taking HALONOVA, as alcohol may affect liver function and overall hormonal balance."
    }
  ]
}
,



// https://novatechsciences.com/products/tablets/nova-t3 

{
  id: "tab-nova-t3-50mcg",
  name: "NOVA_T3",
  category: "Tablets",
  cas: "55-06-1",

  description:
    "NOVA_T3 (Liothyronine Sodium T3 50 mcg) pharmaceutical-grade tablets designed to support thyroid hormone levels, enhance metabolism, energy, and overall hormonal balance. Ideal for medically supervised thyroid therapy and metabolism-support protocols.",

  indication:
    "NOVA_T3 (Liothyronine Sodium T3 50 mcg) is indicated for the treatment of hypothyroidism and other thyroid-related hormonal imbalances. It supports healthy metabolism, energy regulation, and thyroid function. Some athletes and bodybuilders use T3 under supervision for metabolism enhancement and fat-loss during cutting cycles.",

  presentation:
    "Form: Oral tablets\nStrength: 50 mcg Liothyronine Sodium T3 per tablet\nPackaging: Blister pack of 10 tablets\nTablet Type: Pharmaceutical-grade thyroid support tablet\nUsage Category: Thyroid hormone support, metabolism enhancement, energy support\nSuitable For: Individuals with hypothyroidism or needing medically supervised metabolism support\nStorage: Store in a cool, dry place away from sunlight.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "High-quality Liothyronine T3 tablets for thyroid hormone support, metabolism enhancement, and energy improvement.",

  precautions:
    "Use NOVA_T3 only under medical supervision.\n" +
    "Start with the lowest effective dose to prevent overstimulation.\n" +
    "Monitor heart rate, blood pressure, and thyroid function.\n" +
    "Avoid unsupervised use during fat-loss or steroid cycles.\n" +
    "Stay hydrated and maintain electrolyte balance.\n" +
    "Keep out of reach of children and store in a cool, dry place.",

  contraindications:
    "Do not use NOVA_T3 if allergic to Liothyronine Sodium or similar thyroid medicines.\n" +
    "Avoid if untreated hyperthyroidism, adrenal disorders, or severe cardiac conditions exist.\n" +
    "Do not combine with stimulants or strong fat-burners.\n" +
    "Avoid alcohol or recreational substances that interfere with metabolism.\n" +
    "Seek immediate medical attention for chest pain, irregular heartbeat, extreme anxiety, or unusual symptoms.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Nova-T3 Liothyronine – Fast Metabolism & Fat-Loss Support",
  seoDescription:
    "Buy Nova-T3 (Liothyronine tablets) for rapid metabolism boost, fat-loss enhancement, thyroid support, and improved energy. Premium pharma-grade T3 for cutting cycles.",
  seoKeywords:
    "Liothyronine tablets, Buy Liothyronine online, Best T3 for fat loss, Weight-loss thyroid medicine, NOVA_T3",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/nova-t3",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Pharmaceutical Tablet",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "Does NOVA T3 help with fat loss?",
      answer:
        "Yes, NOVA T3 may help increase fat-burning by boosting metabolic rate and calorie expenditure. Elevates thyroid hormone activity and supports energy use. Should be taken only under medical supervision."
    },
    {
      question: "How long does it take for NOVA T3 to start working?",
      answer:
        "NOVA T3 may start improving metabolism, energy levels, and thyroid symptoms within a few days. Full benefits are usually seen in 1–2 weeks. Consistent dosing is essential."
    },
    {
      question: "Can athletes or bodybuilders use NOVA T3?",
      answer:
        "Some athletes use NOVA T3 to enhance metabolism and fat loss during cutting cycles. Unsupervised use can be risky. Medical monitoring is strongly recommended."
    },
    {
      question: "Are there any side effects of taking NOVA T3?",
      answer:
        "Possible side effects include rapid heartbeat, sweating, heat intolerance, anxiety, and potential muscle loss if misused. Incorrect dosing may cause hyperthyroid-like symptoms."
    },
    {
      question: "How should I store NOVA T3 tablets?",
      answer:
        "Store NOVA T3 tablets in a cool, dry place away from sunlight. Keep the blister pack sealed and out of reach of children to maintain stability and potency."
    }
  ]
}
,



// https://novatechsciences.com/products/tablets/novabol 

{
  id: "tab-novabol-10",
  name: "NOVABOL",
  category: "Tablets",
  cas: "53-39-4",

  description:
    "NOVABOL (Oxandrolone USP 10 mg) pharmaceutical-grade tablets designed for lean muscle growth, strength enhancement, fat-loss support, and recovery. Ideal for cutting cycles, calorie-restricted phases, and structured anabolic programs.",

  indication:
    "NOVABOL (Oxandrolone USP 10 mg) supports muscle recovery, lean muscle growth, and enhanced strength performance. Commonly used in bodybuilding and fitness environments, it promotes protein synthesis, preserves muscle during cutting cycles, improves muscle hardness, and assists in maintaining optimal anabolic balance. Suitable for athletes or individuals in calorie-restricted or fat-loss phases.",

  presentation:
    "Form: Oral tablets\nStrength: 10 mg Oxandrolone per tablet\nPackaging: Bottle of 100 tablets\nTablet Type: Pharmaceutical-grade anabolic steroid\nUsage Category: Lean muscle support, cutting cycles, strength enhancement, recovery\nSuitable For: Athletes, bodybuilders, and fitness enthusiasts\nStorage: Store in a cool, dry place.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "Premium Oxandrolone (Anavar) tablets for lean muscle, strength, and fat-loss support.",

  precautions:
    "Use NOVABOL only under medical supervision.\n" +
    "Follow prescribed dosage; avoid self-medication.\n" +
    "Inform your doctor about other steroids, supplements, or medications.\n" +
    "Avoid alcohol or substances that may stress the liver.\n" +
    "Keep out of reach of children.\n" +
    "Seek immediate medical attention for unusual symptoms such as severe headaches, swelling, rapid heartbeat, or mood changes.\n" +
    "Do not exceed recommended dosage to prevent hormonal imbalance or liver strain.",

  contraindications:
    "Do not use NOVABOL if allergic to Oxandrolone or any component of the tablet.\n" +
    "Avoid use in individuals with liver, kidney, or heart disorders unless approved by a healthcare professional.\n" +
    "Not suitable for pregnant or breastfeeding women.\n" +
    "Use only under professional guidance and supervision.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Novabol Anavar 10mg – Lean Muscle, Strength & Fat-Loss Support",
  seoDescription:
    "Buy Novabol (Oxandrolone/Anavar 10mg) for lean muscle growth, strength improvement, fat-loss enhancement, and safe cutting cycles. Premium pharma-grade anabolic support.",
  seoKeywords:
    "Anavar 10mg tablets, Oxandrolone tablets, Buy Anavar online, Novabol, Lean muscle support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/novabol",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does NOVABOL take to show results?",
      answer:
        "Users may begin noticing improved strength, energy, and muscle hardness within 1–2 weeks. Oxandrolone’s anabolic effects increase with consistent training and proper diet."
    },
    {
      question: "Is NOVABOL safe for beginners?",
      answer:
        "Oxandrolone is considered a milder anabolic steroid and is often used by beginners. NOVABOL should be used responsibly under medical supervision with proper cycle length and PCT support."
    },
    {
      question: "What are the possible side effects of NOVABOL?",
      answer:
        "Potential side effects include cholesterol fluctuations, liver strain, oily skin, or mood changes. Routine medical monitoring and responsible use help minimize Oxandrolone-related risks."
    },
    {
      question: "Can NOVABOL help with cutting and fat loss?",
      answer:
        "Yes, NOVABOL is widely used in cutting cycles. It preserves lean muscle while promoting fat reduction, improves muscle hardness, definition, and recovery when combined with a calorie-controlled diet and training."
    },
    {
      question: "Can I stack NOVABOL with other steroids?",
      answer:
        "Many users stack NOVABOL with testosterone, Winstrol, or Primobolan for enhanced cutting results. Steroid stacking should only be done with professional guidance and proper PCT to maintain safety and hormone balance."
    }
  ]
}
,


// https://novatechsciences.com/products/tablets/provinova 

{
  id: "tab-provinova-25",
  name: "PROVINOVA",
  category: "Tablets",
  cas: "1424-00-6",

  description:
    "PROVINOVA (Mesterolone USP 25 mg) pharmaceutical-grade tablets designed to support androgen balance, testosterone maintenance, muscle hardness, and anti-estrogenic benefits. Ideal for cutting cycles, hormone therapy, and physique enhancement under medical supervision.",

  indication:
    "PROVINOVA (Mesterolone USP 25 mg) is indicated for androgen deficiency, testosterone support, and improving hormonal balance. Widely used by athletes and bodybuilders during cutting cycles due to its non-aromatizing properties, it helps maintain a lean, defined physique without water retention. Always use under medical supervision.",

  presentation:
    "Form: Oral tablets\nStrength: 25 mg Mesterolone per tablet\nPackaging: Box of 10 tablets\nTablet Type: Pharmaceutical-grade androgenic steroid\nUsage Category: Testosterone support, androgen therapy, muscle definition\nSuitable For: Hormone therapy, cutting cycles, athletic preparation\nStorage: Store in a cool, dry place.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "Premium Mesterolone (Proviron) tablets for testosterone support, androgen balance, and muscle definition.",

  precautions:
    "Use PROVINOVA only under medical guidance.\n" +
    "Follow prescribed dosage and avoid self-medication.\n" +
    "Inform your doctor about other steroids, supplements, or medications.\n" +
    "Keep out of reach of children.\n" +
    "Avoid alcohol and recreational substances.\n" +
    "Seek immediate medical help for mood changes, swelling, or breathing issues.\n" +
    "Do not exceed recommended dosage to prevent side effects.",

  contraindications:
    "Do not use PROVINOVA if allergic to Mesterolone or any component.\n" +
    "Avoid in individuals with prostate cancer, male breast cancer, or severe liver problems.\n" +
    "Not suitable for women, especially pregnant or breastfeeding.\n" +
    "Avoid in users with severe kidney disease, uncontrolled hypertension, or heart complications.\n" +
    "Not intended for users under 18 or unsupervised anabolic steroid users.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Provinova Proviron 25mg – Testosterone Protection & Androgen Support",
  seoDescription:
    "Buy Provinova (Mesterolone 25mg) for androgen balance, testosterone maintenance, and strength support. Trusted pharmaceutical-grade androgen tablet.",
  seoKeywords:
    "Provinova, Mesterolone 25mg, Buy Proviron tablet, Pharma-grade Mesterolone, Testosterone support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/provinova",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "What is Masterolone used for in bodybuilding?",
      answer:
        "Masterolone (Proviron) is used for androgenic support, muscle hardness, and anti-estrogenic effects. It enhances physique quality during cutting phases and should be used responsibly under medical supervision."
    },
    {
      question: "Does Provinova help increase testosterone levels?",
      answer:
        "Provinova may support androgen activity and improve symptoms of low testosterone such as reduced libido and fatigue. It does not directly increase natural testosterone production and should be used under medical guidance."
    },
    {
      question: "How long does Masterolone stay in the body?",
      answer:
        "Masterolone has a relatively short half-life and clears faster than most anabolic steroids. Duration depends on metabolism and dosage. Proper dosing and medical supervision are recommended."
    },
    {
      question: "Are there side effects of taking Masterolone tablets?",
      answer:
        "Potential side effects include acne, oily skin, increased body hair, mood changes, or libido fluctuations. Users should consult healthcare professionals before starting the steroid."
    },
    {
      question: "Can I use Provinova during a steroid cycle?",
      answer:
        "Provinova is used during cutting cycles for androgenic and anti-estrogenic benefits, helping improve muscle definition without water retention. Steroid cycles require professional supervision to avoid health risks."
    }
  ]
}
,



// https://novatechsciences.com/products/tablets/oxydrol 

{
  id: "tab-oxydrol-50",
  name: "OXYDROL",
  category: "Tablets",
  cas: "434-07-1",

  description:
    "OXYDROL (Oxymetholone USP 50 mg) pharmaceutical-grade anabolic steroid tablets designed for rapid muscle growth, strength enhancement, and recovery. Ideal for therapeutic muscle-wasting treatment, cutting cycles, and structured performance programs under medical supervision.",

  indication:
    "OXYDROL (Oxymetholone USP 50 mg) supports muscle growth, enhanced strength, and faster recovery. Widely used in bodybuilding, athletics, and therapeutic settings for individuals with muscle-wasting conditions, severe weight loss, or those aiming for rapid lean mass gain. Always use under medical supervision.",

  presentation:
    "Form: Oral tablets\nStrength: 50 mg Oxymetholone per tablet\nPackaging: Bottle of 100 tablets\nTablet Type: Pharmaceutical-grade anabolic steroid\nUsage Category: Muscle growth, strength, recovery, bulking\nSuitable For: Athletes, bodybuilders, therapeutic muscle support\nStorage: Store in a cool, dry place.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "Premium Oxymetholone (Anadrol) tablets for rapid muscle gains, strength, and performance enhancement.",

  precautions:
    "Use OXYDROL only under professional supervision.\n" +
    "Follow prescribed dosage; avoid self-medication.\n" +
    "Inform your doctor about other steroids, supplements, or medications.\n" +
    "Monitor liver function due to Oxymetholone’s hepatotoxic potential.\n" +
    "Avoid alcohol and substances that may stress the liver.\n" +
    "Keep out of reach of children.\n" +
    "Seek immediate medical attention for severe headaches, swelling, or abdominal pain.\n" +
    "Do not exceed recommended dosage to prevent side effects.",

  contraindications:
    "Do not use OXYDROL if allergic to Oxymetholone or any ingredient.\n" +
    "Avoid use in individuals with liver, kidney, or cardiac disorders.\n" +
    "Not suitable for women, especially pregnant or breastfeeding.\n" +
    "Not intended for users under 18 years.\n" +
    "Avoid use in prostate enlargement or male breast cancer patients.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Oxydrol Oxymetholone – Rapid Mass & Strength Gains",
  seoDescription:
    "Buy Oxydrol (Oxymetholone) tablets for powerful muscle gains, enhanced strength, and fast bulking. Premium anabolic support from pharmaceutical-grade sources.",
  seoKeywords:
    "Oxydrol, Oxymetholone tablets, Buy Anadrol online, Mass gaining steroid",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/oxydrol",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "What results can I expect from using Oxydrol?",
      answer:
        "Users typically experience noticeable strength gains, improved muscle fullness, and enhanced training performance within a short time. Oxydrol supports rapid size and power increases under professional guidance."
    },
    {
      question: "How long does Oxydrol take to show results?",
      answer:
        "Many users start seeing improvements in strength and energy within 1–2 weeks. Visible muscle growth appears progressively during the full cycle. Consistency in dosing, nutrition, and training affects how quickly results develop."
    },
    {
      question: "Is Oxydrol safe for beginners?",
      answer:
        "Oxydrol is generally recommended for experienced athletes due to its strong anabolic effects. Beginners may find it too intense and should use milder supplements or seek professional guidance."
    },
    {
      question: "Can I stack Oxydrol with other supplements?",
      answer:
        "Yes, Oxydrol can be stacked with certain performance or recovery supplements, but stacking with other anabolic compounds should be done only under expert supervision to enhance gains while minimizing risks."
    },
    {
      question: "Are there any side effects of Oxydrol?",
      answer:
        "Possible side effects include increased blood pressure, water retention, appetite changes, or hormonal imbalance if misused. Correct dosing and cycle management reduce potential risks."
    }
  ]
}
,



// https://novatechsciences.com/products/tablets/novamoren 
{
  id: "tab-novamoren-10",
  name: "NOVAMOREN",
  category: "Tablets",
  cas: "159752-10-0",

  description:
    "NOVAMOREN (MK-677) pharmaceutical-grade GH secretagogue tablets designed to naturally boost growth hormone (GH) secretion, support muscle recovery, enhance lean muscle growth, and improve overall performance and vitality.",

  indication:
    "NOVAMOREN (MK-677) helps individuals maintain higher GH and IGF-1 levels, supporting muscle recovery, fat loss, improved sleep quality, appetite, and enhanced performance. Commonly used in bodybuilding, athletic performance, and wellness protocols, it provides steroid-like benefits without suppressing endogenous hormones.",

  presentation:
    "Form: Oral tablets\nStrength: 10 mg MK-677 per tablet\nPackaging: Bottle of 30 tablets\nTablet Type: GH secretagogue / performance supplement\nUsage Category: GH boosting, muscle recovery, wellness support\nSuitable For: Adults seeking improved growth hormone levels, lean muscle growth, and recovery support\nStorage: Store in a cool, dry place away from sunlight.\nManufactured By: Nova TechSciences.",

  shortDescription:
    "Premium MK-677 tablets to support growth hormone release, lean muscle growth, and overall performance.",

  precautions:
    "Use NOVAMOREN only under professional guidance.\n" +
    "Follow the recommended dosage strictly; avoid self-medication.\n" +
    "Inform your doctor about other supplements, medications, or performance compounds.\n" +
    "Monitor for any unusual reactions, and discontinue if adverse effects occur.\n" +
    "Keep out of reach of children and store in a cool, dry place.\n" +
    "Avoid alcohol or substances that may interfere with GH activity.\n" +
    "Consult a healthcare professional if you have underlying medical conditions.",

  contraindications:
    "Do not use NOVAMOREN if allergic to any active or inactive ingredients.\n" +
    "Not recommended for pregnant or breastfeeding women unless approved by a doctor.\n" +
    "Individuals with diabetes, hormonal disorders, or cardiovascular issues should consult a healthcare provider before use.\n" +
    "Intended only for healthy adults; avoid unsupervised use.",

  images: [  ],

  // ⭐ SEO FIELDS
  seoTitle: "Novamoren Ibutamoren MK-677 – Growth Hormone Support Tablet",
  seoDescription:
    "Buy Novamoren (Ibutamoren MK-677) for sustained GH release, lean muscle growth, and improved recovery. Trusted pharmaceutical-grade GH secretagogue.",
  seoKeywords:
    "Novamoren, Ibutamoren MK-677, Buy MK-677 tablet, Growth hormone support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/novamoren",

  // ⭐ PRODUCT SCHEMA FIELDS
  schemaBrand: "Nova TechSciences",
  schemaCategory: "GH Secretagogue / Performance Supplement",
  schemaType: "Product",

  // ⭐ FAQ FOR SCHEMA + UI
  faq: [
    {
      question: "How long does NOVAMOREN take to work?",
      answer:
        "The effects of NOVAMOREN tablets vary depending on individual health, routine, and consistency. Many users notice benefits after several weeks of regular use. Continued daily intake is recommended for best results."
    },
    {
      question: "Are there any side effects of NOVAMOREN tablets?",
      answer:
        "Most users tolerate NOVAMOREN well, but mild side effects such as stomach discomfort or headaches may occur. Discontinue use and consult a doctor if unusual or severe reactions develop."
    },
    {
      question: "Can I take NOVAMOREN with other supplements or medicines?",
      answer:
        "Consult your healthcare provider before combining NOVAMOREN with other supplements or medications to ensure safety and avoid unwanted interactions."
    },
    {
      question: "Who should not use NOVAMOREN?",
      answer:
        "NOVAMOREN is intended for healthy adults. Individuals with medical conditions, pregnant or breastfeeding women, long-term medication users, or those with known allergies should avoid it unless approved by a healthcare professional."
    },
    {
      question: "How should I store NOVAMOREN tablets?",
      answer:
        "Store NOVAMOREN tablets in a cool, dry place away from direct sunlight and moisture. Keep the bottle tightly closed and out of reach of children to maintain quality and effectiveness."
    }
  ]
}
,
{
  id: "tab-novameth-10",
  name: "NOVAMETH",
  category: "Tablets",
  cas: "72-63-9",
  description: "NOVAMETH (Methandienone 10 mg) is a high-potency anabolic steroid used to support rapid muscle mass gain, strength improvement, and enhanced training performance. Ideal for advanced users seeking accelerated physique development under professional supervision.",
  
  indication: "NOVAMETH (Methandienone 10 mg) is widely used for bulking cycles, rapid protein synthesis, improved nitrogen retention, and enhanced muscle recovery. It supports performance during intense training phases, increases energy, and promotes lean mass development. Always use under professional supervision.",
  
  presentation: "Form: Oral tablets\nStrength: 10 mg Methandienone per tablet\nPack Size: 50 tablets per box\nPackaging: Secure and tamper-proof\nUsage: Bulking, strength cycles, and muscle growth support\nSuitable For: Athletes and bodybuilders seeking rapid gains and performance enhancement\nStorage: Store in a cool, dry place away from sunlight.",
  
  shortDescription: "High-potency Methandienone tablets for rapid muscle gain, strength, and performance enhancement.",
  
  precautions: "Use only under professional guidance.\nDo not exceed the recommended dose.\nAvoid alcohol and hepatotoxic substances.\nConsult your doctor if taking other medications or supplements.\nKeep out of reach of children.\nReport unusual symptoms immediately.",
  
  contraindications: "Do not use if allergic to Methandienone or tablet ingredients.\nNot recommended for women, especially pregnant or breastfeeding.\nAvoid if you have liver, kidney, or heart conditions.\nNot for use by individuals under 18 years.\nUse only under medical supervision.",

  images: [  ],

  // SEO
  seoTitle: "Novameth Methandienone – Dianabol-like Muscle & Strength Tablet",
  seoDescription: "Buy Novameth (Methandienone) tablets for powerful anabolic growth, rapid strength gains, and mass building. Premium oral steroid for serious bodybuilding.",
  seoKeywords: "Novameth, Methandienone 10mg, Buy Methandienone tablet, Dianabol-like anabolic steroid",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/novameth",

  // Product Schema Fields
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "What are the common side effects of NOVAMETH?",
      answer: "Common side effects include water retention, increased appetite, mood swings, and elevated liver enzyme levels. Use responsibly under supervision and avoid alcohol or hepatotoxic substances."
    },
    {
      question: "Can beginners use NOVAMETH safely?",
      answer: "NOVAMETH is not recommended for beginners without professional supervision. Start with minimal doses and monitor the body's response. Professional guidance reduces risk of hormonal imbalance and adverse effects."
    },
    {
      question: "Can I stack NOVAMETH with other steroids?",
      answer: "Yes, NOVAMETH can be stacked with testosterone or other anabolic steroids for improved results. Proper cycle planning and monitoring are essential to minimize side-effect risks."
    },
    {
      question: "Is NOVAMETH safe for pregnant or breastfeeding women?",
      answer: "No. NOVAMETH (Methandienone) should not be used by pregnant or breastfeeding women due to hormonal and developmental risks."
    },
    {
      question: "What is NOVAMETH?",
      answer: "NOVAMETH contains Methandienone 10 mg, a potent anabolic steroid for rapid muscle gain, strength improvement, and enhanced training performance. Responsible use under medical supervision is recommended."
    }
  ]
}
,
{
  id: "tab-spiroclen-40mcg",
  name: "SPIROCLEN",
  category: "Tablets",
  cas: "21898-19-1",
  description: "SPIROCLEN (Clenbuterol 40 mcg) is a high-purity anabolic and thermogenic tablet used for fat loss, muscle definition, and performance enhancement. Popular in cutting cycles, it supports lean muscle preservation, enhanced thermogenesis, and improved respiratory efficiency.",

  indication: "SPIROCLEN (Clenbuterol 40 mcg) is indicated for bronchodilation and therapeutic support. It is also widely used in cutting cycles for fat loss, lean muscle preservation, and enhanced metabolism. Athletes and bodybuilders use SPIROCLEN to improve thermogenesis, endurance, and overall performance.",

  presentation: "Form: Oral tablet\nStrength: 40 mcg Clenbuterol Hydrochloride per tablet\nPack Size: 10 tablets per pack\nPackaging: Compact, secure, and pharmaceutical-grade\nUsage: Cutting cycles, fat-loss, metabolic enhancement, and muscle preservation\nStorage: Store in a cool, dry place away from sunlight.",

  shortDescription: "Clenbuterol 40 mcg tablets for fat loss, thermogenesis, and cutting-cycle performance enhancement.",

  precautions: "Use only under medical guidance.\nDo not exceed recommended dosage.\nAvoid alcohol and stimulant substances.\nConsult your doctor if taking other medications or supplements.\nKeep out of reach of children.\nDiscontinue and seek medical help if unusual cardiovascular or respiratory symptoms occur.",

  contraindications: "Do not use if allergic to Clenbuterol or tablet ingredients.\nNot recommended for individuals with heart conditions, arrhythmia, hypertension, hyperthyroidism, or severe liver/kidney disorders.\nAvoid during pregnancy or breastfeeding.\nDo not combine with other stimulants or fat-burners without supervision.",

  images: [  ],

  // SEO
  seoTitle: "Spiroclen Clenbuterol 40 mcg – Fat Loss & Cutting Support Tablet",
  seoDescription: "Buy Spiroclen (Clenbuterol 40 mcg) tablets for fat loss, thermogenesis, lean muscle preservation, and cutting-cycle performance enhancement. Premium pharmaceutical-grade Clenbuterol.",
  seoKeywords: "Spiroclen, Clenbuterol 40 mcg, Buy Clenbuterol tablets, Cutting cycle fat-loss, Thermogenic supplement",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/spiroclen",

  // Product Schema Fields
  schemaBrand: "Nova TechSciences",
  schemaCategory: "Anabolic & Thermogenic Tablets",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "How fast does SPIROCLEN start working?",
      answer: "SPIROCLEN (Clenbuterol 40 mcg) typically begins working within 30–60 minutes, enhancing airflow and thermogenesis. Users may notice improved breathing and energy early, with fat-burning effects appearing in 1–2 weeks when combined with diet and exercise."
    },
    {
      question: "Can SPIROCLEN help with muscle definition during cutting cycles?",
      answer: "Yes, SPIROCLEN is used during cutting cycles to support fat loss while preserving lean muscle. Its thermogenic effect helps improve muscle definition and overall physique, with best results achieved alongside resistance training and a calorie-controlled diet."
    },
    {
      question: "Is SPIROCLEN suitable for beginners?",
      answer: "SPIROCLEN should be used cautiously by beginners due to its stimulant effect. New users should start with the lowest effective dose, monitor their body's response, and follow medical guidance to avoid overstimulation or elevated heart rate."
    },
    {
      question: "Can I work out after taking SPIROCLEN?",
      answer: "Many athletes take SPIROCLEN before workouts to enhance endurance, breathing, and training intensity. Users should avoid overtraining, monitor heart rate, and stay hydrated during exercise."
    },
    {
      question: "Will I lose weight without exercising while using SPIROCLEN?",
      answer: "SPIROCLEN increases metabolism and may support fat burning even at rest, but results are better with proper training and nutrition. Without exercise, weight-loss effects are moderate, and overall fitness improvements are limited."
    }
  ]
}
// ,
// {
//   id: "tab-spiroclen-40mcg",
//   name: "SPIROCLEN",
//   category: "Tablets",
//   cas: "21898-19-1",
//   description: "SPIROCLEN (Clenbuterol 40 mcg) is a high-purity anabolic and thermogenic tablet used for fat loss, muscle definition, and performance enhancement. Popular in cutting cycles, it supports lean muscle preservation, enhanced thermogenesis, and improved respiratory efficiency.",

//   indication: "SPIROCLEN (Clenbuterol 40 mcg) is indicated for bronchodilation and therapeutic support. It is also widely used in cutting cycles for fat loss, lean muscle preservation, and enhanced metabolism. Athletes and bodybuilders use SPIROCLEN to improve thermogenesis, endurance, and overall performance.",

//   presentation: "Form: Oral tablet\nStrength: 40 mcg Clenbuterol Hydrochloride per tablet\nPack Size: 10 tablets per pack\nPackaging: Compact, secure, and pharmaceutical-grade\nUsage: Cutting cycles, fat-loss, metabolic enhancement, and muscle preservation\nStorage: Store in a cool, dry place away from sunlight.",

//   shortDescription: "Clenbuterol 40 mcg tablets for fat loss, thermogenesis, and cutting-cycle performance enhancement.",

//   precautions: "Use only under medical guidance.\nDo not exceed recommended dosage.\nAvoid alcohol and stimulant substances.\nConsult your doctor if taking other medications or supplements.\nKeep out of reach of children.\nDiscontinue and seek medical help if unusual cardiovascular or respiratory symptoms occur.",

//   contraindications: "Do not use if allergic to Clenbuterol or tablet ingredients.\nNot recommended for individuals with heart conditions, arrhythmia, hypertension, hyperthyroidism, or severe liver/kidney disorders.\nAvoid during pregnancy or breastfeeding.\nDo not combine with other stimulants or fat-burners without supervision.",

//   images: [  ],

//   // SEO
//   seoTitle: "Spiroclen Clenbuterol 40 mcg – Fat Loss & Cutting Support Tablet",
//   seoDescription: "Buy Spiroclen (Clenbuterol 40 mcg) tablets for fat loss, thermogenesis, lean muscle preservation, and cutting-cycle performance enhancement. Premium pharmaceutical-grade Clenbuterol.",
//   seoKeywords: "Spiroclen, Clenbuterol 40 mcg, Buy Clenbuterol tablets, Cutting cycle fat-loss, Thermogenic supplement",
//   seoRobots: "index, follow",
//   seoCanonical: "https://novatechsciences.com/products/tablets/spiroclen",

//   // Product Schema Fields
//   schemaBrand: "Nova TechSciences",
//   schemaCategory: "Anabolic & Thermogenic Tablets",
//   schemaType: "Product",

//   // FAQ
//   faq: [
//     {
//       question: "How fast does SPIROCLEN start working?",
//       answer: "SPIROCLEN (Clenbuterol 40 mcg) typically begins working within 30–60 minutes, enhancing airflow and thermogenesis. Users may notice improved breathing and energy early, with fat-burning effects appearing in 1–2 weeks when combined with diet and exercise."
//     },
//     {
//       question: "Can SPIROCLEN help with muscle definition during cutting cycles?",
//       answer: "Yes, SPIROCLEN is used during cutting cycles to support fat loss while preserving lean muscle. Its thermogenic effect helps improve muscle definition and overall physique, with best results achieved alongside resistance training and a calorie-controlled diet."
//     },
//     {
//       question: "Is SPIROCLEN suitable for beginners?",
//       answer: "SPIROCLEN should be used cautiously by beginners due to its stimulant effect. New users should start with the lowest effective dose, monitor their body's response, and follow medical guidance to avoid overstimulation or elevated heart rate."
//     },
//     {
//       question: "Can I work out after taking SPIROCLEN?",
//       answer: "Many athletes take SPIROCLEN before workouts to enhance endurance, breathing, and training intensity. Users should avoid overtraining, monitor heart rate, and stay hydrated during exercise."
//     },
//     {
//       question: "Will I lose weight without exercising while using SPIROCLEN?",
//       answer: "SPIROCLEN increases metabolism and may support fat burning even at rest, but results are better with proper training and nutrition. Without exercise, weight-loss effects are moderate, and overall fitness improvements are limited."
//     }
//   ]
// }
,
{
  id: "tab-stanova-10",
  name: "STANOVA 10",
  category: "Tablets",
  cas: "10418-03-8",
  description: "STANOVA 10 (Stanozolol 10 mg) is a pharmaceutical-grade anabolic steroid used for cutting cycles, lean muscle preservation, strength improvement, and physique enhancement. Known for producing dry, hard muscle gains and enhanced vascularity, it is commonly used under medical supervision.",

  indication: "STANOVA 10 is indicated for individuals seeking enhanced muscle strength, lean muscle retention, and improved physical performance. It is also used in controlled medical therapy for tissue repair, anabolic recovery, and protein synthesis support under physician guidance.",

  presentation: "Form: Oral tablet\nStrength: 10 mg Stanozolol USP per tablet\nPack Size: 50 tablets per bottle\nPackaging: Secure, tamper-proof, pharmaceutical-grade\nUsage: Cutting cycles, lean muscle maintenance, performance enhancement, and supervised anabolic therapy\nStorage: Store in a cool, dry place away from sunlight.",

  shortDescription: "Stanozolol 10 mg tablets for lean strength, cutting, and controlled performance support.",

  precautions: "Use only under medical guidance.\nDo not exceed recommended dosage or cycle duration.\nAvoid alcohol or liver-stressing substances.\nConsult your doctor if taking other medications or supplements.\nKeep out of reach of children.\nDiscontinue and seek medical help if unusual symptoms occur.",

  contraindications: "Do not use if allergic to Stanozolol or tablet ingredients.\nNot recommended for individuals with liver, kidney, or heart problems.\nAvoid during pregnancy or breastfeeding.\nUse only under physician supervision for minors or medically prescribed cycles.",

  images: [  ],

  // SEO
  seoTitle: "Stanova-10 Stanozolol 10mg – Lean Strength & Cutting Power",
  seoDescription: "Buy Stanova-10 (Stanozolol 10mg) for lean muscle gains, strength, and shredded definition. Ideal for cutting and recomp phases with trusted pharma-quality.",
  seoKeywords: "Stanozolol 10mg, Winstrol 10mg tablet, Performance strength pill",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/stanova-10",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Anabolic Steroid Tablets",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Can beginners use STANOVA 10?",
      answer: "Beginners should use STANOVA 10 only under medical supervision because Stanozolol is a potent anabolic steroid. It is commonly used for cutting, lean muscle maintenance, and performance enhancement. Starting with a low dose is important for safety and effective results."
    },
    {
      question: "Can I combine STANOVA 10 with other steroids?",
      answer: "STANOVA 10 can be stacked with other anabolic steroids like testosterone, but only under expert supervision. Incorrect combinations may increase the risk of side effects, so professional cycle planning and dosing guidance are essential."
    },
    {
      question: "Do I need PCT after using STANOVA 10?",
      answer: "Yes. Post Cycle Therapy (PCT) is recommended after using STANOVA 10 to restore natural hormone levels. Common PCT options include SERMs such as Clomid or Nolvadex, helping prevent hormonal imbalance and maintain cycle results."
    },
    {
      question: "Can I take this medicine with food?",
      answer: "Yes, STANOVA 10 can be taken with or without food. Taking it with a small meal may reduce stomach discomfort. Avoid high-fat meals, as they may slow down Stanozolol absorption."
    },
    {
      question: "Is this medicine safe for pregnant or breastfeeding women?",
      answer: "No. STANOVA 10 is not safe for pregnant or breastfeeding women. Stanozolol is a strong anabolic steroid that may harm fetal development and can pass into breast milk. It should never be used unless strictly prescribed by a specialist."
    }
  ]
}
,
{
  id: "tab-clominova-50mg",
  name: "CLOMINOVA",
  category: "Tablets",
  cas: "50-41-9",
  description: "CLOMINOVA (Clomiphene Citrate 50 mg) is a pharmaceutical-grade tablet used for ovulation induction, post-cycle therapy (PCT), and hormonal recovery. Popular among bodybuilders and athletes, it helps restore natural testosterone levels and supports endocrine function after anabolic steroid use.",

  indication: "CLOMINOVA is indicated for Post Cycle Therapy (PCT) to support natural testosterone recovery, maintain muscle gains, and regulate hormone levels after anabolic steroid cycles. It is widely used by athletes and bodybuilders to reduce side effects associated with steroid withdrawal and improve overall hormonal balance.",

  presentation: "Form: Oral tablet\nStrength: 50 mg Clomiphene Citrate per tablet\nPack Size: 10 tablets per box\nPackaging: Secure, tamper-proof pharmaceutical-grade packaging\nUsage: PCT, testosterone recovery, endocrine support, hormone balance post-steroid cycle\nStorage: Store in a cool, dry place away from sunlight.",

  shortDescription: "Clomiphene Citrate 50 mg tablets for post-cycle therapy, testosterone recovery, and hormonal balance.",

  precautions: "Use only under medical supervision.\nFollow prescribed dosage and cycle length.\nAvoid self-medication.\nConsult your doctor if taking other medications, fertility drugs, or steroids.\nKeep out of reach of children.\nDiscontinue and seek medical attention if vision changes, severe mood swings, or pelvic pain occur.",

  contraindications: "Do not use if allergic to Clomiphene Citrate or inactive ingredients.\nNot recommended for individuals with liver disease, ovarian cysts (other than PCOS), abnormal uterine bleeding, or uncontrolled thyroid/adrenal disorders.\nAvoid alcohol and hormone supplements that may interfere with therapy.\nPregnant women or individuals with hormone-dependent cancers should not use CLOMINOVA.",

  images: [  ],

  // SEO
  seoTitle: "Clominova Clomiphene 50mg – Trusted PCT & Hormone Recovery",
  seoDescription: "Buy Clominova (Clomiphene 50mg) for reliable post-cycle therapy (PCT), natural testosterone recovery, and hormonal balance. Pharma-grade Clomiphene Citrate tablets for athletes and bodybuilders.",
  seoKeywords: "Clomiphene 50mg, Buy Clomiphene tablets, Testosterone recovery tablet, PCT support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/tablets/clominova",

  // Product Schema Fields
  schemaBrand: "Novatech Sciences",
  schemaCategory: "Post Cycle Therapy Tablets",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "How long should I take CLOMINOVA for best results?",
      answer: "Most CLOMINOVA cycles last around 5 days, but duration may vary depending on ovulation response or PCT needs. Only follow a doctor's instructions, as extending the cycle on your own may reduce effectiveness and increase side effects."
    },
    {
      question: "Can CLOMINOVA help with irregular periods?",
      answer: "Yes, CLOMINOVA helps stimulate ovulation in women with irregular menstrual cycles caused by hormonal imbalance. It may improve fertility potential but should be taken only under medical supervision."
    },
    {
      question: "Does CLOMINOVA increase the chances of twins?",
      answer: "CLOMINOVA may increase the chance of releasing multiple eggs, slightly raising the likelihood of twins. This effect is common in ovulation-induction therapies. Discuss risks with your doctor before use."
    },
    {
      question: "Can CLOMINOVA be taken with other fertility supplements?",
      answer: "CLOMINOVA can be combined with vitamins or fertility supplements only with a doctor’s approval. Avoid mixing it with other hormonal treatments unless medically supervised to prevent complications."
    },
    {
      question: "How does CLOMINOVA work in the body?",
      answer: "CLOMINOVA works by blocking estrogen receptors, encouraging the body to produce more LH and FSH—hormones essential for ovulation. In PCT, this helps restart natural testosterone production after steroid use."
    }
  ]
}]

export const injectables = [
{
  id: "inj-testova-p-100mgml",
  name: "TESTOVA P",
  category: "Injectables",
  cas: "57-85-2",
  description: "TESTOVA P (Testosterone Propionate 100 mg/ml) is a fast-acting injectable testosterone steroid used for hormone replacement therapy (HRT). It supports healthy testosterone levels, strength, libido, and overall hormonal balance under professional supervision.",

  indication: "TESTOVA P is indicated for hormone replacement therapy in adult males requiring rapid testosterone elevation due to low testosterone, fatigue, or hormonal imbalance. It is preferred in clinical settings for fast-acting testosterone therapy under professional guidance.",

  presentation: "Form: Injectable ampoule\nStrength: 100 mg/ml Testosterone Propionate\nPack Size: 1 ml per ampoule\nUsage: Intramuscular (IM) injection only\nPackaging: Sterile single-dose ampoule, pharmaceutical-grade\nStorage: Store in a cool, dry place away from sunlight.\nAdministration: IM injection under medical supervision.",

  shortDescription: "Testosterone Propionate 100 mg/ml injectable for HRT, muscle support, and rapid testosterone elevation.",

  precautions: "Use only under medical supervision.\nFollow prescribed dosage and injection schedule.\nDo not self-inject without guidance.\nInform your doctor about pre-existing conditions, medications, or steroid use.\nMonitor for unusual reactions such as swelling, mood changes, or chest pain.\nKeep out of reach of children.",

  contraindications: "Do not use if allergic to testosterone or any ampoule ingredient.\nNot recommended for prostate cancer, male breast cancer, severe heart, liver, or kidney disease.\nPregnant or breastfeeding women must not use.\nAvoid in untreated sleep apnea or serious endocrine disorders.\nSeek immediate medical help for severe symptoms during use.",

  images: [  ],

  // SEO
  seoTitle: "TESTOVA P Testosterone Propionate 100 mg/ml – Fast-Acting Injectable",
  seoDescription: "Buy TESTOVA P Testosterone Propionate 100 mg/ml injectable for muscle growth, strength, and hormone replacement therapy. Premium pharmaceutical-grade testosterone propionate ampoule for men.",
  seoKeywords: "TESTOVA P, Testosterone Propionate 100 mg/ml, Injectable testosterone, Buy testosterone propionate, HRT injection, Muscle growth injection, Pharma-grade testosterone",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/testova-p",

  // Product Schema Fields
  schemaBrand: "Novatech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "What is TESTOVA P?",
      answer: "TESTOVA P is a pharmaceutical-grade Testosterone Propionate 100 mg/ml injectable steroid used in hormone replacement therapy (HRT). Known for fast-acting effects, it helps restore testosterone levels under professional supervision."
    },
    {
      question: "How should I use this medicine?",
      answer: "TESTOVA P should be administered only as an intramuscular injection by a qualified medical professional. Dosage is typically every 2–3 days depending on medical requirements. Never self-inject without guidance."
    },
    {
      question: "Can I take this medicine with food?",
      answer: "Food does not affect TESTOVA P as it is an injectable steroid. A balanced diet can support overall hormone therapy results. Always follow your doctor’s instructions."
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "If you miss your scheduled injection, contact your healthcare provider immediately. Do not double the dose or inject yourself without guidance. Maintaining consistent dosing is essential for stable testosterone levels."
    },
    {
      question: "Is this medicine safe for pregnant or breastfeeding women?",
      answer: "No. TESTOVA P is not safe for pregnant or breastfeeding women. Testosterone exposure can harm fetal development. This medication is strictly for male HRT under professional supervision."
    }
  ]
}
,
{
  id: "inj-sustova-250mgml",
  name: "SUSTOVA",
  category: "Injectables",
  cas: "58-22-0",
  description: "SUSTOVA (Testosterone Blend 250 mg/ml) is a pharmaceutical-grade injectable testosterone designed to support hormone replacement therapy (HRT). It helps restore testosterone levels, improve vitality, enhance strength, and maintain male hormonal balance.",

  indication: "SUSTOVA is indicated for males with testosterone deficiency, supporting balanced hormone levels, improved physical and metabolic function, and addressing symptoms such as fatigue, reduced libido, and muscle loss. Used under professional supervision for HRT and stable testosterone maintenance.",

  presentation: "Form: Injectable solution\nStrength: 250 mg/ml testosterone blend\nPack Size: 10 ml multidose vial\nComposition: Combination of fast-acting and long-acting testosterone esters\nPackaging: Sterile, pharmaceutical-grade, clear oil-based solution\nUsage: IM injection under medical supervision\nStorage: Store in a cool, dry place away from sunlight.",

  shortDescription: "Testosterone Blend 250 mg/ml injection for HRT, vitality, muscle support, and hormone balance.",

  precautions: "Use strictly under medical supervision.\nFollow prescribed dosage.\nDo not self-medicate.\nInform your doctor of all medications or supplements.\nMonitor for unusual reactions like swelling, mood changes, or injection-site issues.\nKeep out of reach of children.",

  contraindications: "Do not use if allergic to testosterone or any ingredient.\nNot for individuals with prostate cancer, severe heart disease, or untreated sleep apnea.\nPregnant or breastfeeding women must not use.\nRegular medical monitoring is recommended for hormone levels and liver function.",

  images: [  ],

  // SEO
  seoTitle: "SUSTOVA Testosterone Blend 250 mg/ml Injection – HRT & Performance Support",
  seoDescription: "Buy SUSTOVA testosterone blend 250 mg/ml injection for hormone replacement therapy, muscle growth, strength, and vitality. Pharmaceutical-grade injectable testosterone with secure packaging.",
  seoKeywords: "SUSTOVA, Testosterone Blend 250 mg/ml, Injectable testosterone, Buy testosterone blend, HRT injection, Muscle growth injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/sustova",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Who should not use TESTOSTERONE BLEND?",
      answer: "Individuals with prostate cancer, severe cardiac conditions, or allergies to testosterone formulations should avoid TESTOSTERONE BLEND. A full medical evaluation is required before starting therapy."
    },
    {
      question: "How long does TESTOSTERONE BLEND take to show results?",
      answer: "Most users notice improvements in mood, energy, and vitality within a few weeks. Muscle strength and performance typically increase gradually over several weeks depending on dosage and metabolism."
    },
    {
      question: "Are there any side effects of TESTOSTERONE BLEND?",
      answer: "Possible side effects include injection-site discomfort, acne, fluid retention, or mood changes. Some users may experience elevated red blood cell levels. Consult your healthcare provider for persistent or unusual symptoms."
    },
    {
      question: "Can I take this medicine with food?",
      answer: "TESTOSTERONE BLEND is injectable, so food does not affect its absorption. Maintaining a balanced diet supports better hormone therapy results."
    },
    {
      question: "How should I use this medicine?",
      answer: "Use TESTOSTERONE BLEND strictly as directed by your healthcare provider. Administer via intramuscular injection at scheduled intervals to maintain hormonal balance. Do not adjust dosage yourself."
    }
  ]
}
,
{
  id: "inj-testova-c-250mgml",
  name: "TESTOVA C",
  category: "Injectables",
  cas: "58-20-8",
  description: "TESTOVA C (Testosterone Cypionate 250 mg/ml) is a pharmaceutical-grade injectable steroid used for testosterone replacement therapy (TRT). It supports testosterone balance, muscle strength, vitality, and overall male hormonal health.",

  indication: "TESTOVA C is indicated for males with low testosterone levels, supporting hormone replacement therapy, improved strength, stamina, libido, and overall hormonal balance. Ideal for clinical or medically supervised testosterone therapy.",

  presentation: "Form: Injectable solution\nStrength: 250 mg/ml Testosterone Cypionate\nPack Size: 10 ml vial\nUsage: Intramuscular injection under medical supervision\nPackaging: Sterile, pharmaceutical-grade, oil-based solution\nStorage: Keep in a cool, dry place away from sunlight.",

  shortDescription: "Testosterone Cypionate 250 mg/ml injection for TRT, strength, and male hormonal support.",

  precautions: "Use strictly under medical supervision.\nFollow prescribed injection schedule.\nDo not self-administer or adjust dose.\nInform your doctor of all medications or supplements.\nKeep out of reach of children.\nSeek immediate medical help if unusual reactions occur.",

  contraindications: "Do not use if allergic to testosterone or any ingredient.\nNot for individuals with prostate cancer, severe heart, liver, or kidney conditions.\nNot safe for pregnant or breastfeeding women.\nRegular hormone monitoring is recommended during therapy.",

  images: [  ],

  // SEO
  seoTitle: "TESTOVA C Testosterone Cypionate 250 mg/ml Injection – TRT & Performance Support",
  seoDescription: "Buy TESTOVA C testosterone cypionate 250 mg/ml injection for testosterone replacement therapy, muscle growth, strength, and overall hormonal balance. Pharmaceutical-grade injectable with secure packaging.",
  seoKeywords: "TESTOVA C, Testosterone Cypionate 250 mg/ml, Injectable testosterone, Buy testosterone cypionate, TRT injection, Muscle growth injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/testova-c",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "How should I use this medicine?",
      answer: "Use TESTOVA C strictly as prescribed by your healthcare provider. Administer via intramuscular injection at recommended intervals. Do not adjust your dose without medical supervision to ensure stable testosterone levels."
    },
    {
      question: "Can I take this medicine with food?",
      answer: "Food does not affect TESTOVA C absorption as it is injectable. You may eat normally before or after administration. Follow your prescribed injection schedule."
    },
    {
      question: "Is this medicine safe for pregnant or breastfeeding women?",
      answer: "No. TESTOVA C is not safe for pregnant or breastfeeding women. Exposure can harm the fetus or infant and is only intended for male TRT under medical supervision."
    },
    {
      question: "What is TESTOVA C?",
      answer: "TESTOVA C is a long-acting Testosterone Cypionate 250 mg/ml injectable steroid commonly used in testosterone replacement therapy to restore low hormone levels and support male strength, vitality, and overall health."
    },
    {
      question: "What should I do if I miss a dose?",
      answer: "If you miss a scheduled injection, contact your healthcare provider for instructions. Do not double your next dose or self-administer, as incorrect timing may cause unstable testosterone levels or side effects."
    }
  ]
}
,
{
  id: "inj-testova-e-250mgml",
  name: "TESTOVA E",
  category: "Injectables",
  cas: "315-37-7",
  description: "TESTOVA E (Testosterone Enanthate 250 mg/ml) is a pharmaceutical-grade injectable steroid used for hormone replacement therapy (TRT) and bulking cycles. It supports muscle growth, strength, recovery, and stable hormonal balance under professional supervision.",

  indication: "TESTOVA E is indicated for males with low testosterone levels, supporting hormone replacement therapy and performance enhancement. It helps restore optimal testosterone, supports muscle growth, improves strength, recovery, libido, and maintains stable hormonal levels during bulking or TRT protocols.",

  presentation: "Form: Injectable solution\nStrength: 250 mg/ml Testosterone Enanthate\nPack Size: 10 ml vial\nUsage: Intramuscular injection under medical supervision\nPackaging: Sterile, oil-based, pharmaceutical-grade solution\nStorage: Keep in a cool, dry place away from sunlight.",

  shortDescription: "Testosterone Enanthate 250 mg/ml injection for TRT, bulking, and hormonal support.",

  precautions: "Use only under medical supervision.\nFollow prescribed injection schedule.\nDo not self-administer or adjust dosage.\nInform your doctor of all medications, supplements, or steroid use.\nKeep out of reach of children.\nSeek immediate medical help if unusual reactions occur.",

  contraindications: "Do not use if allergic to testosterone or any component.\nNot recommended for individuals with prostate cancer, severe heart, kidney, or liver conditions.\nNot safe for pregnant or breastfeeding women.\nRegular hormone monitoring is advised during testosterone therapy.",

  images: [  ],

  // SEO
  seoTitle: "TESTOVA E Testosterone Enanthate 250 mg/ml Injection – TRT & Bulking Support",
  seoDescription: "Buy TESTOVA E testosterone enanthate 250 mg/ml injection for hormone replacement therapy, muscle growth, strength, and performance enhancement. Premium pharmaceutical-grade injectable with secure packaging.",
  seoKeywords: "TESTOVA E, Testosterone Enanthate 250 mg/ml, Injectable testosterone, Buy testosterone enanthate, TRT injection, Bulking steroid injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/testova-e",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "How long does Testosterone Enanthate stay active in the body?",
      answer: "Testosterone Enanthate has a long half-life of 5–7 days, making TESTOVA E ideal for stable testosterone release. Users typically inject once or twice weekly to maintain consistent hormone levels during steroid cycles or TRT protocols."
    },
    {
      question: "What results can I expect from TESTOVA E?",
      answer: "TESTOVA E supports muscle mass growth, strength improvement, faster recovery, enhanced libido, and hormonal stability. It is widely used for bulking cycles due to its strong anabolic effects."
    },
    {
      question: "Do I need PCT after using TESTOVA E?",
      answer: "Yes. Post Cycle Therapy (PCT) is required because Testosterone Enanthate suppresses natural testosterone. SERMs like Clomid or Nolvadex help restore hormone balance and prevent estrogen-related issues after the cycle."
    },
    {
      question: "Can beginners use TESTOVA E?",
      answer: "Beginners can use TESTOVA E if supervised by a medical professional. Testosterone Enanthate is often recommended as a first steroid due to its predictable effects, but proper dosing, blood work, and safety monitoring are essential."
    },
    {
      question: "What are the common side effects of Testosterone Enanthate?",
      answer: "Common side effects include water retention, acne, mood swings, elevated estrogen, and increased red blood cell count. Responsible use of TESTOVA E with regular hormone monitoring can help reduce risks."
    }
  ]
}
,
{
  id: "inj-boldenova-250mgml",
  name: "BOLDENOVA ",
  category: "Injectables",
  cas: "13103-34-9",
  description: "Boldenova (Boldenone Undecylenate 250 mg/ml) is a pharmaceutical-grade injectable steroid designed for lean muscle gains, enhanced endurance, increased vascularity, and steady performance improvement. Popular among athletes for clean, high-quality bulking cycles.",

  indication: "Boldenone Undecylenate is indicated for individuals seeking slow, steady, high-quality lean muscle growth, improved nitrogen retention, enhanced endurance, and balanced hormone support. Ideal for long bulking cycles and supervised anabolic therapy.",

  presentation: "Form: Injectable solution\nStrength: 250 mg/ml Boldenone Undecylenate\nPack Size: 10 ml vial\nUsage: Intramuscular injection only under professional supervision\nPackaging: Sterile, pharmaceutical-grade, oil-based solution\nStorage: Store in a cool, dry place away from sunlight.",

  shortDescription: "Boldenone Undecylenate 250 mg/ml injection for lean bulking, endurance, and performance enhancement.",

  precautions: "Use only under medical supervision.\nDo not self-administer.\nMonitor cardiovascular health and blood parameters during use.\nMaintain sterile injection techniques.\nInform your doctor about any medical conditions or medications.\nSeek immediate help if unusual symptoms occur.",

  contraindications: "Avoid use if allergic to anabolic steroids.\nNot for individuals with prostate or breast cancer.\nNot suitable for severe liver, kidney, or heart conditions.\nPregnant or breastfeeding women should not use.\nNot recommended for minors or individuals with untreated hypertension.",

  images: [  ],

  // SEO
  seoTitle: "Boldenova Boldenone Undecylenate 250 mg/ml Injection – Lean Muscle & Endurance",
  seoDescription: "Buy Boldenova (Boldenone Undecylenate 250 mg/ml) injectable for lean muscle growth, enhanced endurance, vascularity, and steady performance. Premium pharmaceutical-grade anabolic steroid.",
  seoKeywords: "Boldenone Undecylenate, Boldenova injection, Buy Boldenone online, Lean bulking injection, Anabolic steroid injection, Muscle growth injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/boldenova",

  // Product Schema Fields
  schemaBrand: "Novatech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "How long does Boldenone Undecylenate stay in the system?",
      answer: "Boldenone Undecylenate has an extended half-life, remaining active for several weeks. Its long duration supports steady gains but also results in a longer detection window."
    },
    {
      question: "What results can I expect from Boldenone Undecylenate?",
      answer: "Users typically experience lean muscle growth, improved vascularity, and enhanced endurance. Consistent training and nutrition enhance the effects of Boldenone Undecylenate cycles."
    },
    {
      question: "Is Boldenone Undecylenate good for beginners?",
      answer: "Boldenone Undecylenate is considered beginner-friendly due to its mild androgenic nature. Any cycle should be supervised by a professional to prevent hormonal imbalance."
    },
    {
      question: "Does Boldenone Undecylenate cause water retention?",
      answer: "Boldenone Undecylenate causes minimal water retention, making it ideal for clean, lean muscle gains and steady development during bulking phases."
    },
    {
      question: "Can Boldenone Undecylenate be stacked with other steroids?",
      answer: "Yes, it is commonly stacked with testosterone and other anabolic steroids. Stacking should be done under expert supervision to maintain safe hormone levels and minimize side effects."
    }
  ]
}
,
{
  id: "inj-nandrova-d-250mgml",
  name: "NANDROVA D",
  category: "Injectables",
  cas: "360-70-3",
  description: "Nandrova D (Nandrolone Decanoate 250 mg/ml) is a pharmaceutical-grade injectable steroid designed for lean muscle growth, enhanced recovery, joint support, and sustained performance improvement. Ideal for long bulking cycles under professional supervision.",

  indication: "Nandrolone Decanoate is indicated for promoting muscle recovery, strength enhancement, nitrogen retention, red blood cell production, and overall performance. Suitable for athletes and fitness users requiring lean muscle preservation and joint support during intensive training.",

  presentation: "Form: Injectable solution\nStrength: 250 mg/ml Nandrolone Decanoate\nPack Size: 10 ml sterile vial\nUsage: Intramuscular injection only\nPackaging: Sterile, pharmaceutical-grade, oil-based solution\nStorage: Store in a cool, dry place away from sunlight.",

  shortDescription: "Nandrolone Decanoate 250 mg/ml injection for lean bulking, recovery, and joint support.",

  precautions: "Use only under medical supervision.\nMonitor liver, kidney, and hormone levels.\nMaintain sterile injection techniques.\nAvoid alcohol and unapproved medications.\nStop and seek medical help if unusual symptoms occur.",

  contraindications: "Avoid if allergic to Nandrolone Decanoate or anabolic steroids.\nNot recommended for pregnant or breastfeeding women.\nNot suitable for individuals with prostate or breast cancer.\nAvoid in severe liver, kidney, or heart disease.\nNot for minors or uncontrolled hypertension.",

  images: [  ],

  // SEO
  seoTitle: "Nandrova D Nandrolone Decanoate 250 mg/ml Injection – Lean Muscle & Recovery",
  seoDescription: "Buy Nandrova D (Nandrolone Decanoate 250 mg/ml) injectable for lean muscle growth, recovery, joint support, and sustained performance. Premium pharmaceutical-grade anabolic steroid.",
  seoKeywords: "Nandrolone Decanoate, Nandrova D injection, Buy Nandrolone online, Lean bulking steroid injection, Anabolic steroid injection, Muscle growth injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/nandrova-d",

  // Product Schema Fields
  schemaBrand: "Novatech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "How long does Nandrolone Decanoate stay in the system?",
      answer: "Due to its long ester, Nandrolone Decanoate remains active in the body for several weeks. Users typically feel its effects for 10–14 days per dose, while detection time in tests may be significantly longer."
    },
    {
      question: "Does Nandrolone Decanoate help with joint pain?",
      answer: "Many users report improved joint lubrication and reduced discomfort due to the collagen-boosting properties of Nandrolone Decanoate. It supports smoother movement during heavy training cycles."
    },
    {
      question: "What results can I expect from Nandrolone Decanoate?",
      answer: "Users often experience lean muscle mass growth, faster recovery, enhanced endurance, and reduced joint stress. Nandrolone Decanoate supports long-term performance rather than rapid weight gain."
    },
    {
      question: "Can Nandrolone Decanoate be stacked with other steroids?",
      answer: "Yes, it is commonly stacked with testosterone-based compounds. Stacking should only be done under expert supervision to maintain safe hormone levels."
    },
    {
      question: "What are common side effects of Nandrolone Decanoate?",
      answer: "Possible side effects include hormonal fluctuations, acne, water retention, and mood changes. Responsible use and medical supervision help minimize risks."
    }
  ]
}
,
{
  id: "inj-nandrova-p-100mgml",
  name: "NANDROVA P",
  category: "Injectables",
  cas: "62-90-8",
  description: "Nandrova P (Nandrolone Phenylpropionate 100 mg/ml) is a fast-acting injectable anabolic steroid designed for medical use. It supports muscle recovery, nitrogen retention, red blood cell production, and rehabilitation-related therapy under professional supervision.",

  indication: "Nandrolone Phenylpropionate is indicated for promoting muscle recovery, improving strength, supporting nitrogen retention, red blood cell production, and lean muscle regeneration. It is commonly used in clinical or therapeutic settings requiring fast-acting anabolic support.",

  presentation: "Form: Injectable solution\nStrength: 100 mg/ml Nandrolone Phenylpropionate\nPack Size: 10 ml multi-dose vial\nUsage: Intramuscular injection only\nPackaging: Sterile, pharmaceutical-grade solution\nStorage: Store in a cool, dry place away from sunlight.",

  shortDescription: "Fast-acting Nandrolone Phenylpropionate 100 mg/ml injection for muscle recovery, nitrogen retention, and rehabilitation.",

  precautions: "Use only under strict medical supervision.\nMonitor liver, kidney, and hormone levels.\nUse sterile IM injection techniques.\nAvoid alcohol and unapproved medications.\nDiscontinue and seek medical help if unusual symptoms occur.",

  contraindications: "Do not use if allergic to Nandrolone Phenylpropionate or anabolic steroids.\nAvoid in pregnant or breastfeeding women.\nNot suitable for patients with severe liver, kidney, or cardiac disease.\nContraindicated in individuals with prostate or breast cancer.\nAvoid in uncontrolled hypertension.",

  images: [  ],

  // SEO
  seoTitle: "Nandrova P Nandrolone Phenylpropionate 100 mg/ml Injection – Muscle Recovery & Nitrogen Support",
  seoDescription: "Buy Nandrova P (Nandrolone Phenylpropionate 100 mg/ml) injectable for muscle recovery, nitrogen retention, rehabilitation therapy, and lean muscle support. Premium pharmaceutical-grade anabolic steroid.",
  seoKeywords: "Nandrolone Phenylpropionate, Nandrova-P injection, Buy NPP online, Fast-acting anabolic steroid injection, Muscle recovery injection, Pharmaceutical-grade steroid",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/nandrova-p",

  // Product Schema Fields
  schemaBrand: "Novatech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Is Nandrolone Phenylpropionate legal for medical use?",
      answer: "Yes, Nandrolone Phenylpropionate is legally approved for specific medical conditions when prescribed by a licensed healthcare provider. Regulatory rules vary by country, so ensure compliance with local laws."
    },
    {
      question: "How fast does Nandrolone Phenylpropionate work?",
      answer: "Due to its short ester, Nandrolone Phenylpropionate acts faster than long-acting nandrolone variants. Therapeutic effects such as improved recovery and red blood cell production are typically noticed within a few days."
    },
    {
      question: "Does Nandrolone Phenylpropionate cause water retention?",
      answer: "Compared to longer-acting nandrolone steroids, Nandrolone Phenylpropionate generally causes minimal water retention when used under medical supervision. Effects may vary with patient health and duration of therapy."
    },
    {
      question: "Can Nandrolone Phenylpropionate be used for muscle recovery?",
      answer: "Yes, under medical guidance, it supports muscle regeneration, enhances nitrogen retention, and reduces muscle breakdown associated with trauma, surgery, or chronic illness."
    },
    {
      question: "Is post-treatment therapy required after Nandrolone Phenylpropionate?",
      answer: "Post-treatment protocols depend on duration and patient hormone levels. Physicians may recommend hormonal monitoring after therapy to ensure safe endocrine balance restoration."
    }
  ]
}
,
{
  id: "inj-trenova-a-100mgml",
  name: "TRENOVA A",
  category: "Injectables",
  cas: "10161-34-9",
  description: "Trenova A (Trenbolone Acetate 100 mg/ml) is a fast-acting injectable anabolic steroid intended for advanced research or veterinary-supervised applications. It supports lean muscle development, enhanced nitrogen retention, and improved protein synthesis under professional supervision.",

  indication: "Trenbolone Acetate is indicated for controlled clinical or veterinary research settings, supporting muscle development, strength, nitrogen retention, and metabolic efficiency. It is strictly for advanced, supervised use due to its potent anabolic-androgenic profile.",

  presentation: "Form: Injectable solution\nStrength: 100 mg/ml Trenbolone Acetate\nPack Size: 10 ml multi-dose vial\nRoute: Intramuscular (IM) injection only\nPackaging: Sterile, pharmaceutical-grade oil-based solution\nStorage: Keep in a cool, dry place away from children and sunlight.",

  shortDescription: "Trenbolone Acetate 100 mg/ml injectable for advanced research and performance-focused applications.",

  precautions: "Use only under licensed medical or research supervision.\nMonitor cardiovascular health, liver function, and cholesterol levels.\nAvoid alcohol or substances that increase liver/cardiac strain.\nFollow sterile injection techniques.\nKeep out of reach of children.",

  contraindications: "Do not use if allergic to Trenbolone Acetate or any components.\nAvoid during pregnancy, breastfeeding, or if planning conception.\nNot for individuals with heart disease, liver/kidney dysfunction, prostate cancer, or severe hormonal/psychiatric disorders.\nAvoid in uncontrolled hypertension.",

  images: [  ],

  // SEO
  seoTitle: "Trenova A Trenbolone Acetate 100 mg/ml Injection – Advanced Injectable Steroid",
  seoDescription: "Buy Trenova A (Trenbolone Acetate 100 mg/ml) injectable for muscle growth, cutting, nitrogen retention, and strength improvement. Premium pharmaceutical-grade anabolic steroid.",
  seoKeywords: "Trenbolone Acetate, Trenova-A injection, buy trenbolone injection, advanced anabolic steroid, cutting cycle injection, lean muscle support",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/trenova-a",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Is Trenbolone Acetate legal?",
      answer: "The legal status of Trenbolone Acetate varies by country. In many regions, it is classified as a controlled substance and permitted only for veterinary or approved research use. Verify your local regulations before purchasing or handling."
    },
    {
      question: "How fast does Trenbolone Acetate work?",
      answer: "Due to its short ester, Trenbolone Acetate has a rapid onset of action. Physiological responses are often observed quickly under controlled conditions."
    },
    {
      question: "Does Trenbolone Acetate cause side effects?",
      answer: "Trenbolone Acetate may cause androgenic, cardiovascular, hormonal, and psychological side effects if misused. Strict professional supervision is essential when handling this compound."
    },
    {
      question: "What makes Trenbolone Acetate different from other steroids?",
      answer: "Trenbolone Acetate has a high anabolic-to-androgenic ratio, strong nutrient-partitioning effects, and rapid metabolic activity, making it potent and fast-acting for research and performance-focused applications."
    },
    {
      question: "Is Trenbolone Acetate suitable for beginners?",
      answer: "No. Trenbolone Acetate is extremely potent and not recommended for beginners. It is strictly for advanced, professionally supervised applications due to its endocrine impact and side-effect profile."
    }
  ]
}
,
{
  id: "inj-trenova-e-200mgml",
  name: "TRENOVA E",
  category: "Injectables",
  cas: "10161-34-9",
  description: "Trenova E (Trenbolone Enanthate 200 mg/ml) is a long-acting injectable anabolic steroid used in controlled medical and research environments. It supports sustained anabolic activity, lean muscle preservation, nitrogen retention, and protein synthesis under professional supervision.",

  indication: "Trenbolone Enanthate is indicated for advanced muscle recovery, strength support, and anabolic therapy in research or clinical settings. Its extended-release profile allows stable anabolic activity, supporting lean muscle preservation, nitrogen retention, protein synthesis, and rehabilitation.",

  presentation: "Form: Injectable solution\nStrength: 200 mg/ml Trenbolone Enanthate\nPack Size: 10 ml multi-dose vial\nRoute: Intramuscular (IM) injection\nActive Ingredient: Trenbolone Enanthate\nShelf Life: As per pharmaceutical labeling\nStorage: Store below 25°C, protected from light\nPackaging: Pharmaceutical-grade sterile vial.",

  shortDescription: "Long-acting Trenbolone Enanthate 200 mg/ml injectable for controlled research and advanced anabolic therapy.",

  precautions: "Use only under medical or research supervision.\nDo not self-medicate.\nMonitor liver, cardiovascular health, cholesterol, and hormone levels regularly.\nKeep out of reach of children.\nAvoid alcohol or other substances that may interfere with therapy.",

  contraindications: "Do not use if allergic to Trenbolone Enanthate or any excipients.\nAvoid in patients with heart disease, liver/kidney dysfunction, prostate cancer, uncontrolled hypertension, or lipid disorders.\nNot for use in pregnant or breastfeeding women.",

  images: [  ],

  // SEO
  seoTitle: "Trenova E Trenbolone Enanthate 200 mg/ml Injection – Long-Acting Anabolic Steroid",
  seoDescription: "Buy Trenova E (Trenbolone Enanthate 200 mg/ml) injectable for muscle growth, strength, cutting support, and nitrogen retention. Pharmaceutical-grade steroid for controlled medical and research use.",
  seoKeywords: "Trenbolone Enanthate, Trenova-E injection, buy trenbolone injection, long-acting anabolic steroid, muscle growth support, cutting cycle injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/trenova-e",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "What is Trenbolone Enanthate used for in medical research?",
      answer: "Trenbolone Enanthate is studied in controlled medical environments for its anabolic properties, including muscle tissue preservation, recovery support, and nitrogen retention. Its long-acting nature allows sustained therapeutic activity under supervision."
    },
    {
      question: "How is Trenbolone Enanthate different from Trenbolone Acetate?",
      answer: "Trenbolone Enanthate is a long-acting ester, releasing slowly for stable anabolic effects with fewer injections, whereas Trenbolone Acetate is short-acting and faster-acting."
    },
    {
      question: "Is Trenbolone Enanthate safe for long-term use?",
      answer: "Long-term use must occur under strict medical supervision. Prolonged exposure can impact liver, cardiovascular system, cholesterol, and hormone balance if not properly monitored."
    },
    {
      question: "Does Trenbolone Enanthate cause water retention?",
      answer: "Trenbolone Enanthate typically does not cause significant water retention, making it suitable for lean tissue support without excess fluid accumulation in muscle."
    },
    {
      question: "Will Trenbolone Enanthate affect cholesterol levels?",
      answer: "Yes. Trenbolone Enanthate may negatively impact HDL and LDL cholesterol, increasing cardiovascular risk if not monitored. Regular lipid profile testing is strongly recommended."
    }
  ]
}
,
{
  id: "inj-trenova-hexa-76-5mgml",
  name: "TRENOVA HEXA",
  category: "Injectables",
  cas: "23454-33-3",

  description: "Trenova Hexa (Trenbolone Hexa Hydrobenzylcarbonate 76.5 mg/ml) is a long-acting injectable anabolic steroid used in advanced performance enhancement and clinical research environments. It promotes lean muscle mass, nitrogen retention, red blood cell production, and sustained strength under controlled supervision.",

  indication: "Trenbolone Hexa Hydrobenzylcarbonate is primarily indicated for promoting lean muscle mass, improving nitrogen retention, enhancing overall strength, and supporting red blood cell production. Its extended-release profile makes it suitable for long-cycle anabolic protocols requiring sustained hormonal activity.",

  presentation: "Form: Injectable oil-based solution\nStrength: 76.5 mg/ml Trenbolone Hexa Hydrobenzylcarbonate\nPack Size: 10 ml multi-dose vial\nRoute: Intramuscular (IM) injection\nActive Ingredient: Trenbolone Hexa Hydrobenzylcarbonate\nShelf Life: As per pharmaceutical labeling\nStorage: Store below 25°C, protected from light\nPackaging: Sterile pharmaceutical-grade vial",

  shortDescription: "Long-acting Trenbolone Hexa 76.5 mg/ml injectable for advanced muscle growth, strength, and cutting research use.",

  precautions: "Use strictly under medical supervision as this anabolic steroid is highly potent.\nRegular monitoring of liver function, cholesterol levels, and blood pressure is required.\nAvoid alcohol and other hepatotoxic substances.\nMaintain proper hydration, nutrition, and controlled training intensity.\nDiscontinue use immediately and consult a physician if severe side effects occur.",

  contraindications: "Contraindicated in pregnant and breastfeeding women due to serious hormonal risks.\nNot suitable for patients with prostate cancer, breast cancer, or hormone-sensitive tumors.\nDo not use in individuals with severe liver, kidney, or cardiovascular disease.\nContraindicated in children and adolescents.\nAvoid use in individuals allergic to anabolic steroids or carrier oils.",

  images: [  ],

  // SEO
  seoTitle: "Trenbolone Hexa 76.5 mg/ml Injection Supply",
  seoDescription: "Buy Trenbolone Hexa 76.5 mg/ml injection for muscle growth, strength and cutting support. Pharmaceutical quality, secure packaging and worldwide supply.",
  seoKeywords: "Trenbolone Hexa 76.5 mg/ml, Trenova Hexa injection, trenbolone hexahydrobenzylcarbonate, buy trenbolone hexa online, trenbolone worldwide, cutting cycle injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/trenovahexa",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Is Trenbolone Hexa Hydrobenzylcarbonate safe during pregnancy or breastfeeding?",
      answer: "No. Trenbolone Hexa Hydrobenzylcarbonate is strictly contraindicated during pregnancy and breastfeeding. Exposure can cause severe harm to fetal development and hormonal disruption in infants."
    },
    {
      question: "How long does Trenbolone Hexa Hydrobenzylcarbonate stay active in the body?",
      answer: "Due to its long ester structure, Trenbolone Hexa Hydrobenzylcarbonate remains active in the body for several weeks. Its prolonged action supports extended anabolic cycles but requires proper post-cycle recovery planning."
    },
    {
      question: "Does Trenbolone Hexa Hydrobenzylcarbonate cause water retention?",
      answer: "Unlike many anabolic steroids, it does not significantly cause water retention and is widely used for producing dry, hard muscle gains with enhanced definition."
    },
    {
      question: "Can Trenbolone Hexa Hydrobenzylcarbonate suppress testosterone production?",
      answer: "Yes. Like most anabolic steroids, it can suppress natural testosterone production. Proper post-cycle therapy (PCT) under medical supervision is essential after discontinuation."
    },
    {
      question: "Is Trenbolone Hexa Hydrobenzylcarbonate legal worldwide?",
      answer: "The legal status varies by country. In many regions, it is classified as a prescription-only or controlled anabolic substance."
    }
  ]
}
,
{
  id: "inj-drostanova-p-100mgml",
  name: "DROSTANOVA P",
  category: "Injectables",
  cas: "521-12-0",

  description: "Drostanova P (Drostanolone Propionate 100 mg/ml) is an advanced anabolic androgenic steroid injection indicated for lean muscle strengthening, fat loss support, and androgen-related muscle recovery. It is widely used during cutting cycles for muscle hardening, strength enhancement, and physique conditioning under medical supervision.",

  indication: "Drostanolone Propionate is indicated for lean muscle preservation, fat loss support, muscle hardening, and androgen-related recovery. Its anti-estrogenic activity makes it highly effective in cutting cycles, strength enhancement, and contest preparation protocols under professional supervision.",

  presentation: "Form: Oil-based injectable solution\nStrength: 100 mg/ml Drostanolone Propionate\nPack Size: 10 ml multi-dose vial\nRoute: Intramuscular (IM) use only\nCategory: Anabolic Androgenic Steroid (AAS)\nShelf Life: As per pharmaceutical standards\nPackaging: Secure pharmaceutical-grade sterile vial",

  shortDescription: "Dry, anti-estrogenic Drostanolone Propionate 100 mg/ml injectable for cutting, muscle hardening, and strength enhancement.",

  precautions: "Use only under medical supervision to prevent hormonal imbalance and cardiovascular strain.\nRegular liver function, lipid profile, and testosterone monitoring is recommended.\nAthletes should confirm regulatory status due to sports restrictions.\nAvoid alcohol consumption during treatment.\nMaintain a heart-healthy diet and active lifestyle.",

  contraindications: "Contraindicated in pregnant and breastfeeding women.\nDo not use in patients with prostate cancer, male breast cancer, severe liver disease, kidney impairment, or cardiovascular disease.\nNot suitable for individuals allergic to Drostanolone Propionate or injectable oils.\nContraindicated in children and adolescents under 18 years.\nNot recommended for patients with uncontrolled hypertension or lipid disorders.",

  images: [  ],

  // SEO
  seoTitle: "Drostanolone Propionate 100 mg/ml Injection",
  seoDescription: "Buy Drostanolone Propionate 100 mg/ml injection for cutting, lean muscle and strength enhancement. Pharmaceutical quality, secure packaging and worldwide supply.",
  seoKeywords: "Drostanolone Propionate 100 mg/ml, Drostanova-P injection, drostanolone injection, buy drostanolone online, masteron propionate worldwide, cutting cycle injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/drostanova-p",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Is Drostanolone Propionate used for cutting or bulking?",
      answer: "Drostanolone Propionate is primarily used for cutting cycles to preserve lean muscle, reduce body fat, and enhance vascularity. It is not commonly used for bulking due to its dry muscle effects."
    },
    {
      question: "Does Drostanova P cause water retention?",
      answer: "No. Drostanolone Propionate is known as a dry anabolic steroid and does not cause water retention or bloating, making it ideal for a hard, defined, and shredded appearance."
    },
    {
      question: "Is Drostanolone Propionate safe for long-term use?",
      answer: "Long-term or unsupervised use may lead to testosterone suppression, lipid imbalance, liver strain, and cardiovascular risks. It should only be used under medical supervision."
    },
    {
      question: "Can Drostanova P be stacked with other steroids?",
      answer: "Yes. It is often stacked with other anabolic steroids, but improper stacking increases health risks and should only be planned by qualified medical or sports professionals."
    },
    {
      question: "Does Drostanolone Propionate affect estrogen levels?",
      answer: "Yes. It has anti-estrogenic properties and can help reduce estrogen-related side effects such as gynecomastia and water retention."
    }
  ]
}
,
{
  id: "inj-primonova-100mgml",
  name: "PRIMONOVA",
  category: "Injectables",
  cas: "303-40-4",

  description: "Primonova (Methenolone Enanthate 100 mg/ml) is a long-acting injectable anabolic steroid widely used for lean muscle preservation, strength enhancement, and recovery support during cutting cycles. It promotes dry, high-quality muscle gains, improved endurance, and stable anabolic performance without excessive water retention.",

  indication: "Methenolone Enanthate is indicated for lean muscle preservation, strength enhancement, endurance improvement, and recovery support during cutting cycles. It delivers mild yet consistent anabolic effects with excellent safety under medical supervision.",

  presentation: "Form: Injectable solution\nStrength: 100 mg/ml Methenolone Enanthate\nPack Size: 10 ml sterile vial\nRoute: Intramuscular (IM) use only\nCategory: Anabolic Steroid Injection\nRelease Type: Long-acting\nPackaging: Pharmaceutical-grade sterile vial",

  shortDescription: "Long-acting Methenolone Enanthate 100 mg/ml injectable for cutting, lean muscle preservation, and strength support.",

  precautions: "Use only under medical supervision.\nRegular blood tests are recommended to monitor hormones, liver function, and lipid levels.\nAvoid alcohol and hepatotoxic substances during use.\nDiscontinue immediately if unusual swelling, breathing difficulty, or severe mood changes occur.\nDo not combine with unverified steroids or supplements without professional guidance.",

  contraindications: "Contraindicated in individuals allergic to Methenolone Enanthate or formulation components.\nDo not use in patients with prostate or breast cancer.\nNot recommended for individuals with severe kidney or liver impairment.\nContraindicated in pregnant and breastfeeding women.\nAvoid use in patients with severe cardiovascular disease or uncontrolled hypertension.",

  images: [  ],

  // SEO
  seoTitle: "Methenolone Enanthate 100 mg/ml Injection Worldwide Supply",
  seoDescription: "Buy Methenolone Enanthate 100 mg/ml injection for lean muscle growth and performance. Pharmaceutical quality, secure packaging and worldwide supply.",
  seoKeywords: "Methenolone Enanthate 100 mg/ml, Primonova injection, primobolan enanthate, buy methenolone online, primobolan worldwide, lean muscle injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/primonova",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Is Methenolone Enanthate good for cutting cycles?",
      answer: "Yes. Methenolone Enanthate is highly preferred for cutting cycles as it preserves lean tissue, enhances muscle hardness, and improves metabolic efficiency while supporting fat loss and strength."
    },
    {
      question: "How long does Methenolone Enanthate stay active in the body?",
      answer: "Methenolone Enanthate has a long half-life of approximately 7–10 days, making it suitable for weekly injection schedules with steady anabolic activity."
    },
    {
      question: "Do I need Post Cycle Therapy (PCT) after using Methenolone Enanthate?",
      answer: "Yes. PCT is recommended to help restore natural testosterone levels and maintain the muscle gains achieved during the cycle."
    },
    {
      question: "How should Primonova be used?",
      answer: "Primonova should be administered via intramuscular injection strictly as directed by a licensed healthcare provider to maintain stable anabolic levels."
    },
    {
      question: "Can I take this medicine with food?",
      answer: "Since Primonova is an injectable steroid, food does not affect absorption. However, a balanced high-protein diet supports better results and muscle preservation."
    }
  ]
}
,
{
  id: "inj-roxonova-50mgml",
  name: "ROXONOVA",
  category: "Injectables",
  cas: "10418-03-8",

  description: "Roxonova (Stanozolol 50 mg/ml) is an injectable anabolic steroid widely used for lean muscle preservation, strength enhancement, endurance improvement, and recovery support. It is highly valued in cutting cycles for producing dry, hard muscle gains without water retention and supporting red blood cell production under medical supervision.",

  indication: "Stanozolol injection is indicated for lean muscle preservation, strength enhancement, endurance improvement, and recovery support in therapeutic and performance-based protocols. It is commonly used during cutting cycles to promote muscle hardness and fat loss.",

  presentation: "Form: Injectable solution\nStrength: Stanozolol 50 mg/ml\nPack Size: 10 ml multidose vial\nRoute: Intramuscular (IM) injection\nCategory: Anabolic Steroid Injection\nAppearance: Clear sterile solution\nPackaging: Pharmaceutical-grade sealed vial",

  shortDescription: "Stanozolol 50 mg/ml injectable for cutting, strength enhancement, and lean muscle preservation.",

  precautions: "Use only under physician supervision.\nRegular liver function and lipid profile monitoring is strongly advised.\nAvoid alcohol consumption during use to reduce liver toxicity.\nMonitor for joint discomfort as Stanozolol may cause joint dryness.\nLong-term unsupervised use may suppress natural testosterone production.",

  contraindications: "Contraindicated in patients with liver disease, liver tumors, or severe hepatic dysfunction.\nNot recommended for pregnant or breastfeeding women.\nAvoid use in patients with prostate cancer or male breast cancer.\nNot suitable for individuals with severe cardiovascular disease or uncontrolled cholesterol disorders.\nContraindicated in individuals with hypersensitivity to Stanozolol or formulation ingredients.",

  images: [  ],

  // SEO
  seoTitle: "Stanozolol 50 mg/ml Injection Worldwide Supply",
  seoDescription: "Buy Stanozolol 50 mg/ml injection for cutting, fat loss and lean muscle strength. Pharmaceutical quality, secure packaging and worldwide supply available.",
  seoKeywords: "Stanozolol 50 mg/ml, Roxonova injection, stanozolol injectable, buy stanozolol online, winstrol injection worldwide, cutting cycle injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/roxonova",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Anabolic Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "Does Stanozolol help in increasing strength?",
      answer: "Yes. Stanozolol is well known for significantly improving strength without adding excess body weight. Roxonova supports power output, endurance, and explosive performance."
    },
    {
      question: "Is Roxonova suitable for female users?",
      answer: "Roxonova contains Stanozolol, which may be used by women under strict medical supervision. However, improper use can lead to virilization symptoms."
    },
    {
      question: "Can Stanozolol be stacked with other steroids?",
      answer: "Yes. Stanozolol is commonly stacked with other anabolic steroids for cutting and recomposition cycles, but stacking should always be planned under professional supervision."
    },
    {
      question: "Does Roxonova affect cholesterol levels?",
      answer: "Yes. Stanozolol may reduce HDL (good cholesterol) and increase LDL (bad cholesterol). Regular lipid profile monitoring is recommended."
    },
    {
      question: "Is Stanozolol toxic to the liver?",
      answer: "Injectable Stanozolol is less hepatotoxic than oral forms but may still affect liver enzymes. Prolonged or high-dose use increases liver strain."
    }
  ]
}
,
{
  id: "inj-testova-pp-100mgml",
  name: "TESTOVA PP",
  category: "Injectables",
  cas: "1255-49-8",

  description: "Testova PP (Testosterone Phenylpropionate 100 mg/ml) is a fast-acting injectable anabolic steroid widely used in hormone replacement therapy, treatment of male hypogonadism, delayed puberty, and muscle wasting conditions. Due to its short ester, it provides rapid testosterone release, supporting lean muscle development, strength, libido, and energy levels under medical supervision.",

  indication: "Testosterone Phenylpropionate is indicated for male hypogonadism, androgen deficiency disorders, delayed puberty, muscle wasting diseases, and controlled strength-recovery protocols. Its short ester allows rapid hormonal response and better control during testosterone replacement therapy.",

  presentation: "Form: Injectable solution\nStrength: 100 mg/ml Testosterone Phenylpropionate\nTotal Content: 1000 mg per 10 ml vial\nPack Size: 10 ml vial\nRoute: Intramuscular (IM) injection\nCategory: Testosterone Injection\nPackaging: Sterile pharmaceutical-grade vial",

  shortDescription: "Fast-acting Testosterone Phenylpropionate 100 mg/ml injectable for hormone replacement and muscle recovery.",

  precautions: "Use only under licensed medical supervision.\nRegular monitoring of PSA, hematocrit, cholesterol, and liver enzymes is strongly advised.\nAvoid use in patients with a history of clotting disorders or polycythemia.\nPatients with diabetes should monitor blood sugar closely.\nAvoid alcohol abuse during therapy.\nDiscontinue immediately if chest pain, swelling, or shortness of breath occurs.",

  contraindications: "Contraindicated in patients with prostate cancer or male breast cancer.\nNot recommended for individuals with severe cardiac disease, uncontrolled hypertension, kidney disease, or liver dysfunction.\nAvoid use in patients with known blood clotting disorders.\nKeep out of reach of children.",

  images: [  ],

  // SEO
  seoTitle: "Testosterone Phenylpropionate 100 mg/ml Injection Supply",
  seoDescription: "Buy Testosterone Phenylpropionate 100 mg/ml injection for muscle growth, strength and fast hormonal results. Pharmaceutical quality with secure packaging and worldwide supply.",
  seoKeywords: "Testosterone Phenylpropionate 100 mg/ml, Testova-PP injection, testosterone phenylpropionate injection, buy testosterone PP online, testosterone worldwide, muscle growth injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/testova-pp",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Testosterone Injectable Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "What is Testova PP used for?",
      answer: "Testova PP is used to treat testosterone deficiency in men, delayed puberty, muscle wasting conditions, and hormonal imbalance disorders under medical supervision."
    },
    {
      question: "How fast does Testosterone Phenylpropionate work?",
      answer: "Due to its short ester, Testosterone Phenylpropionate begins working within 24–48 hours after injection."
    },
    {
      question: "How long does Testosterone Phenylpropionate stay active?",
      answer: "It remains active in the body for approximately 2–4 days, requiring more frequent injections compared to long-acting testosterone esters."
    },
    {
      question: "Is Testova PP good for muscle building?",
      answer: "Yes, it supports lean muscle mass development, nitrogen retention, and protein synthesis in clinical and recovery-based therapy."
    },
    {
      question: "Can I self-administer Testova PP?",
      answer: "No. Testova PP must only be administered by a licensed healthcare provider via intramuscular injection."
    }
  ]
}
,
{
  id: "inj-testova-base-100mgml",
  name: "TESTOVA BASE",
  category: "Injectables",
  cas: "58-22-0",
  description: "Testova Base (Testosterone Suspension 100 mg/ml) is a fast-acting water-based injectable testosterone steroid used for hypogonadism, delayed puberty, hormone imbalance, and medically supervised muscle-wasting disorders. It provides rapid testosterone absorption for immediate anabolic effects.",

  indication: "Testova Base is indicated for male hypogonadism, low testosterone levels, delayed puberty, and hormone imbalance. Its water-based formulation ensures rapid testosterone absorption and immediate anabolic effects under medical supervision.",

  presentation: "Form: Injectable solution\nStrength: 100 mg/ml Testosterone Suspension\nPack Size: 10 ml multidose vial\nRoute: Intramuscular (IM) injection\nSterile aqueous suspension\nRapid-acting testosterone steroid for clinical and supervised hormonal therapy\nStorage: Store as per pharmaceutical labeling guidelines.",

  shortDescription: "Fast-acting testosterone suspension 100 mg/ml for immediate hormonal support and anabolic activity.",

  precautions: "Use only under qualified medical supervision.\nMonitor testosterone levels, liver function, lipid profile, and blood pressure regularly.\nMay suppress natural testosterone production.\nRisk of estrogen conversion (aromatization).\nNot recommended for long-term unsupervised use.",

  contraindications: "Do not use if allergic to testosterone or injection components.\nContraindicated in patients with prostate or breast cancer, severe cardiac, liver, or kidney disease, polycythemia, pregnant or breastfeeding women, or children without confirmed hormonal deficiency.",

  images: [  ],

  // SEO
  seoTitle: "Testova Base Testosterone Suspension 100 mg/ml Injection – Fast-Acting Anabolic Steroid",
  seoDescription: "Buy Testova Base (Testosterone Suspension 100 mg/ml) injectable for fast muscle growth, strength, and performance. Pharmaceutical-grade, rapid-acting testosterone injection for clinical and supervised use.",
  seoKeywords: "Testosterone Suspension 100 mg/ml, Testova-Base injection, testosterone suspension injection, buy testosterone suspension online, fast acting testosterone injection, testosterone worldwide",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/testova-base",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Testosterone Steroids",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "What is Testova Base Testosterone Suspension used for?",
      answer: "Testova Base is a water-based injectable testosterone steroid used to treat low testosterone, delayed puberty, and hormone imbalance. It provides rapid testosterone release for clinical TRT and medically supervised anabolic therapy."
    },
    {
      question: "Is Testosterone Suspension a fast-acting anabolic steroid?",
      answer: "Yes. Testosterone Suspension is the fastest-acting injectable anabolic steroid due to its water base and lack of ester, entering the bloodstream immediately for rapid hormonal effects."
    },
    {
      question: "Is Testova Base safe for medical testosterone replacement therapy?",
      answer: "When administered by a qualified physician, Testova Base is safe for medically supervised TRT. Regular monitoring is essential to avoid side effects."
    },
    {
      question: "What makes Testosterone Suspension different from Testosterone Enanthate or Cypionate?",
      answer: "Unlike oil-based esters, Testosterone Suspension contains no ester, allowing immediate absorption and rapid testosterone elevation rather than slow, long-term release."
    },
    {
      question: "Is Testova Base used in bodybuilding?",
      answer: "Yes, it is popular for immediate anabolic effects, muscle hardening, and strength output in professional bodybuilding, but should only be used under medical and legal guidance."
    }
  ]
}
,
{
  id: "inj-nova-gain-c-650mgml",
  name: "NOVA GAIN C",
  category: "Injectables",
  cas: "Varies (multi-compound blend)",
  description: "Nova Gain C is a high-potency injectable anabolic steroid blend containing testosterone, nandrolone, and boldenone. It supports lean muscle growth, nitrogen retention, strength enhancement, and physical recovery under medical supervision in clinical or performance-based protocols.",

  indication: "Indicated for severe muscle wasting, trauma recovery, hormonal imbalance, and testosterone deficiency. Provides powerful anabolic and androgenic support for progressive muscle mass, strength, and recovery under professional supervision.",

  presentation: "Form: Injectable oil-based solution\nStrength: 650 mg/ml total (multi-compound blend)\nPack Size: 10 ml multidose vial\nRoute: Intramuscular (IM) injection\nSterile pharmaceutical-grade suspension\nSustained anabolic release for long-acting bulking and recovery cycles\nStorage: Store as per pharmaceutical labeling instructions.",

  shortDescription: "High-potency multi-steroid blend injection (Testosterone, Nandrolone, Boldenone) for advanced muscle growth and recovery.",

  precautions: "For intramuscular use only under medical supervision.\nMonitor testosterone, estrogen, liver function, lipid profile, and blood pressure regularly.\nMay suppress natural testosterone production.\nRisk of estrogenic and androgenic side effects.\nAvoid alcohol and hepatotoxic medications.\nNot recommended for unsupervised long-term use.",

  contraindications: "Do not use if allergic to testosterone, nandrolone, or boldenone.\nContraindicated in patients with prostate or male breast cancer, severe heart/liver/kidney disease, polycythemia, uncontrolled hypertension.\nNot for pregnant or breastfeeding women.\nNot suitable for adolescents without confirmed endocrine disorders.",

  images: [  ],

  // SEO
  seoTitle: "Boldenone Nandrolone Testosterone Blend Injection – Nova Gain C",
  seoDescription: "Buy multi-blend injection with Boldenone, Nandrolone, Testosterone Cypionate, Enanthate and Sustanon for advanced muscle growth and strength worldwide.",
  seoKeywords: "testosterone blend injection, boldenone nandrolone blend, nova gain c injection, multi steroid blend, buy testosterone blend online, muscle growth blend worldwide",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/nova-gain-c",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Multi-Steroid Blends",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "What is Nova Gain C injection used for?",
      answer: "Nova Gain C is a multi-compound anabolic steroid injection used for muscle mass development, physical recovery, and hormonal enhancement. It combines testosterone, nandrolone, and boldenone for progressive strength, lean bulking, and anabolic performance."
    },
    {
      question: "Is Nova Gain C a bulking steroid or cutting steroid?",
      answer: "Nova Gain C is primarily a bulking-focused anabolic steroid blend. Its components promote mass gain, strength increase, muscle density, and joint comfort, supporting long-term anabolic growth."
    },
    {
      question: "How fast does Nova Gain C start working?",
      answer: "Because it contains both short- and long-ester testosterone with slow-release nandrolone and boldenone, users generally notice progressive strength and mass improvement within 2–3 weeks, with full anabolic effects developing gradually."
    },
    {
      question: "Is Nova Gain C suitable for testosterone replacement therapy (TRT)?",
      answer: "No, Nova Gain C is a high-dose multi-steroid formulation for advanced medical or performance-based protocols and is not intended for standard low-dose TRT."
    },
    {
      question: "Does Nova Gain C cause water retention?",
      answer: "Yes, due to its testosterone and nandrolone content, Nova Gain C may cause fluid retention and estrogen-related side effects in sensitive individuals. Hormone monitoring is important during use."
    }
  ]
}
,
{
  id: "inj-nova-cut-mix-450mgml",
  name: "NOVA CUT MIX",
  category: "Injectables",
  cas: "Varies (multi-compound blend)",
  description: "Nova Cut Mix is a high-potency cutting steroid injection combining testosterone propionate, trenbolone acetate, and drostanolone propionate. It supports fat loss, lean muscle preservation, strength enhancement, and aggressive muscle definition during pre-contest or recomp cycles under professional supervision.",

  indication: "Indicated for advanced anabolic support in cutting cycles, pre-contest conditioning, and strength recovery. Promotes lean muscle retention, hardness, metabolic performance, and aggressive definition during short-term performance-focused steroid protocols.",

  presentation: "Form: Injectable oil-based solution\nStrength: 450 mg/ml total multi-compound blend\nPack Size: 10 ml multidose vial\nRoute: Intramuscular (IM) injection\nSterile pharmaceutical-grade suspension\nFast-acting short-ester formulation ideal for cutting cycles and physique refinement programs.\nStorage: Store below 25°C, away from direct sunlight.",

  shortDescription: "High-potency cutting blend injection (Testosterone, Trenbolone, Drostanolone) for fat loss, muscle hardness, and strength enhancement.",

  precautions: "For intramuscular use only under qualified medical supervision.\nMonitor testosterone, estrogen, liver enzymes, lipid profile, and blood pressure.\nMay suppress natural testosterone production.\nIncreased risk of androgenic side effects (acne, hair loss, aggression).\nAvoid alcohol and hepatotoxic medications.\nNot recommended for long-term unsupervised anabolic steroid use.",

  contraindications: "Do not use if allergic to testosterone, trenbolone, or drostanolone.\nContraindicated in patients with prostate or male breast cancer, severe cardiovascular disease, advanced liver or kidney impairment, polycythemia, uncontrolled hypertension.\nNot for pregnant or breastfeeding women.\nNot suitable for adolescents without confirmed endocrine disorders.",

  images: [  ],

  // SEO
  seoTitle: "Testosterone Trenbolone Drostanolone Cut Blend Injection – Nova Cut Mix",
  seoDescription: "Buy cutting blend injection with Testosterone Propionate, Trenbolone Acetate and Drostanolone Propionate for fat loss, strength and lean muscle worldwide.",
  seoKeywords: "testosterone trenbolone drostanolone blend, nova cut mix injection, cutting cycle injection, buy cutting blend online, fat loss steroid blend, muscle hardening injection",
  seoRobots: "index, follow",
  seoCanonical: "https://novatechsciences.com/products/injectables/nova-cut-mix",

  // Product Schema Fields
  schemaBrand: "NovaTech Sciences",
  schemaCategory: "Injectable Cutting Steroid Blends",
  schemaType: "Product",

  // FAQ
  faq: [
    {
      question: "What is Nova Cut Mix injection used for?",
      answer: "Nova Cut Mix is a high-potency cutting steroid injection used for fat loss, muscle hardness, and strength enhancement. It combines testosterone propionate, trenbolone acetate, and drostanolone propionate for lean muscle preservation and aggressive definition during cutting cycles."
    },
    {
      question: "Is Nova Cut Mix for bulking or cutting?",
      answer: "Nova Cut Mix is specifically designed for cutting and recomp cycles. It promotes fat reduction, dry muscle appearance, and strength maintenance, ideal for athletes preparing for competitions or physique conditioning."
    },
    {
      question: "How fast does Nova Cut Mix start working?",
      answer: "Due to its short-ester steroid composition, Nova Cut Mix begins working within days. Users typically notice early strength increases, improved muscle hardness, and visible fat reduction within 10–14 days of supervised use."
    },
    {
      question: "Does Nova Cut Mix cause water retention?",
      answer: "No. Nova Cut Mix produces a dry and hard muscle look. Drostanolone and trenbolone help minimize water retention, making it preferred for achieving a sharp, vascular physique."
    },
    {
      question: "Is Nova Cut Mix suitable for testosterone replacement therapy (TRT)?",
      answer: "No. Nova Cut Mix is a high-androgen multi-compound cutting blend designed for short-term performance protocols under medical or professional supervision, not for TRT."
    }
  ]
}
,]




//   {
//     name: "TAMONOVA",
//     description: "TAMOXIFEN CITRATE 20 mg",
//     indication: "Blocks estrogen receptors; used for prevention and treatment of breast cancer.",
//     presentation: "Blister pack of 10 tablets, 20 mg each.",
//   },
//   {
//     name: "NOVAZOLE",
//     description: "ANASTRAZOLE 1 mg",
//     indication: "Aromatase inhibitor reducing estrogen levels; used in breast cancer therapy.",
//     presentation: "Blister pack of 10 tablets, 1 mg each.",
//   },
//   {
//     name: "AROMANOVA",
//     description: "EXEMESTANE 25 mg",
//     indication: "Used for adjuvant treatment of estrogen receptor-positive breast cancer.",
//     presentation: "Pack of 10 tablets, 25 mg each.",
//   },
//   {
//     name: "ENCLOMINOVA",
//     description: "ENCLOMIPHENE CITRATE 25 mg",
//     indication: "Used to treat infertility and improve testosterone levels.",
//     presentation: "Box of 10 tablets, 25 mg each.",
//   },
//   {
//     name: "PRIMONOVA",
//     description: "METENOLONE ACETATE 25 mg",
//     indication: "Mild anabolic support for therapeutic recovery and muscle preservation.",
//     presentation: "Bottle of 50 tablets, 25 mg each.",
//   },
//   {
//     name: "SUPERNOVA",
//     description: "METHYLDROSTANALONE 10 mg",
//     indication: "Helps promote lean muscle and physical conditioning under supervision.",
//     presentation: "Bottle of 100 tablets, 10 mg each.",
//   },
//   {
//     name: "TELINOVA",
//     description: "TELMISARTAN",
//     indication: "Used to manage high blood pressure and reduce cardiovascular risk.",
//     presentation: "Blister pack of 10 tablets.",
//   },
//   {
//     name: "TURINOVA",
//     description: "CHLORODEHYDROMETHYLTESTOSTERONE 10 mg",
//     indication: "Used for therapeutic anabolic recovery and muscle support.",
//     presentation: "Bottle of 50 tablets, 10 mg each.",
//   },
//   {
//     name: "NOVA_T4",
//     description: "LEVOTHYROXINE SODIUM T4 50 mcg",
//     indication: "Replaces or supplements thyroid hormone to treat hypothyroidism.",
//     presentation: "Blister pack of 10 tablets, 50 mcg each.",
//   },
//   {
//     name: "CABERNOVA",
//     description: "CABERGOLINE 0.5 mg",
//     indication: "Used to treat high prolactin levels and associated hormonal imbalance.",
//     presentation: "Box of 8 tablets, 0.5 mg each.",
//   },
//   {
//     name: "HALONOVA",
//     description: "FLUOXYMESTERONE 5 mg",
//     indication: "Used for testosterone replacement and therapeutic muscle preservation.",
//     presentation: "Blister pack of 10 tablets, 5 mg each.",
//   },
//   {
//     name: "NOVA_T3",
//     description: "LIOTHYRONINE SODIUM T3 50 mcg",
//     indication: "Used to treat hypothyroidism and support metabolism regulation.",
//     presentation: "Pack of 10 tablets, 50 mcg each.",
//   },
//   {
//     name: "NOVABOL",
//     description: "OXANDROLONE USP 10 mg",
//     indication: "Promotes muscle recovery and protein synthesis.",
//     presentation: "Bottle of 100 tablets, 10 mg each.",
//   },
//   {
//     name: "PROVINOVA",
//     description: "MASTEROLONE USP 25 mg",
//     indication: "Used for androgen deficiency and hormonal therapy.",
//     presentation: "Box of 10 tablets, 25 mg each.",
//   },
//   {
//     name: "OXYDROL",
//     description: "OXYMETHOLONE USP 50 mg",
//     indication: "An anabolic agent used for therapeutic recovery and muscle repair.",
//     presentation: "Bottle of 100 tablets, 50 mg each.",
//   },
//   {
//     name: "NOVAMOREN",
//     description: "MK-677 10 mg",
//     indication: "Supports growth hormone secretion and recovery.",
//     presentation: "Bottle of 30 tablets, 10 mg each.",
//   },
//   {
//     name: "NOVAMETH",
//     description: "METHANDIENONE 10 mg",
//     indication: "An anabolic therapeutic compound aiding recovery and energy balance.",
//     presentation: "Bottle of 50 tablets, 10 mg each.",
//   },
//   {
//     name: "SPIROCLEN",
//     description: "CLENBUTEROL HYDROCHLORIDE 40 mcg",
//     indication: "Used for bronchodilation and therapeutic respiratory support.",
//     presentation: "Pack of 10 tablets, 40 mcg each.",
//   },
//   {
//     name: "STANOVA 50",
//     description: "STANOZOLOL USP 50 mg",
//     indication: "Used for muscle strengthening and tissue repair.",
//     presentation: "Box of 10 tablets, 50 mg each.",
//   },
//   {
//     name: "STANOVA 10",
//     description: "STANOZOLOL USP 10 mg",
//     indication: "Helps with anabolic recovery and physical therapy under supervision.",
//     presentation: "Bottle of 50 tablets, 10 mg each.",
//   },
//   {
//     name: "CLOMINOVA",
//     description: "CLOMIPHENE 50 mg",
//     indication: "Used to stimulate ovulation and improve reproductive function.",
//     presentation: "Box of 10 tablets, 50 mg each.",
//   },
// ];

// === INJECTABLES ===
// const injectables = [
//   {
//     name: "TESTOVA P",
//     description: "TESTOSTERONE PROPIONATE 100 mg/ml",
//     indication: "Short-acting testosterone for hormone replacement therapy.",
//     presentation: "1 ml ampoule, 100 mg/ml.",
//   },
//   {
//     name: "SUSTOVA",
//     description: "TESTOSTERONE BLEND 250 mg/ml",
//     indication: "A mixed ester blend for stable testosterone delivery.",
//     presentation: "10 ml vial, 250 mg/ml.",
//   },
//   {
//     name: "TESTOVA C",
//     description: "TESTOSTERONE CYPIONATE 250 mg/ml",
//     indication: "Long-acting testosterone used in replacement therapy.",
//     presentation: "10 ml vial, 250 mg/ml.",
//   },
//   {
//     name: "TESTOVA E",
//     description: "TESTOSTERONE ENANTHATE 250 mg/ml",
//     indication: "Common testosterone ester for hormone therapy.",
//     presentation: "10 ml vial, 250 mg/ml.",
//   },
//   {
//     name: "BOLDENOVA",
//     description: "BOLDENONE UNDECYLENATE 250 mg/ml",
//     indication: "Used to enhance red blood cell production and recovery.",
//     presentation: "10 ml vial, 250 mg/ml.",
//   },
//   {
//     name: "NANDROVA D",
//     description: "NANDROLONE DECANOATE 250 mg/ml",
//     indication: "Used for therapeutic anemia and muscle recovery.",
//     presentation: "10 ml vial, 250 mg/ml.",
//   },
//   {
//     name: "NANDROVA P",
//     description: "NANDROLONE PHENYLPROPIONATE 100 mg/ml",
//     indication: "Fast-acting anabolic used for recovery and therapy.",
//     presentation: "10 ml vial, 100 mg/ml.",
//   },
//   {
//     name: "TRENOVA A",
//     description: "TRENBOLONE ACETATE 100 mg/ml",
//     indication: "Short-acting anabolic for medical recovery protocols.",
//     presentation: "10 ml vial, 100 mg/ml.",
//   },
//   {
//     name: "TRENOVA E",
//     description: "TRENBOLONE ENANTHATE 200 mg/ml",
//     indication: "Long-acting form for therapeutic recovery cycles.",
//     presentation: "10 ml vial, 200 mg/ml.",
//   },
//   {
//     name: "TRENOVAHEXA",
//     description: "TRENBOLONE HEXA HYDROBENZYLCARBONATE 76.5 mg/ml",
//     indication: "Extended-acting anabolic used in therapeutic contexts.",
//     presentation: "10 ml vial, 76.5 mg/ml.",
//   },
//   {
//     name: "DROSTANOVA P",
//     description: "DROSTANOLONE PROPIONATE 100 mg/ml",
//     indication: "Used for therapeutic enhancement of muscle strength.",
//     presentation: "10 ml vial, 100 mg/ml.",
//   },
//   {
//     name: "PRIMONOVA",
//     description: "METHENOLONE ENANTHATE 100 mg/ml",
//     indication: "Long-acting anabolic used for recovery and strength.",
//     presentation: "10 ml vial, 100 mg/ml.",
//   },
//   {
//     name: "ROXONOVA",
//     description: "STANOZOLOL 50 mg/ml",
//     indication: "Used therapeutically for muscle preservation and recovery.",
//     presentation: "10 ml vial, 50 mg/ml.",
//   },
//   {
//     name: "TESTOVA PP",
//     description: "TESTOSTERONE PHENYLPROPIONATE 100 mg/ml",
//     indication: "Short-medium acting testosterone for hormone therapy.",
//     presentation: "10 ml vial, 100 mg/ml.",
//   },
//   {
//     name: "TESTOVA BASE",
//     description: "TESTOSTERONE SUSPENSION 100 mg/ml",
//     indication: "Water-based testosterone for immediate hormone release.",
//     presentation: "10 ml vial, 100 mg/ml.",
//   },
//   {
//     name: "NOVA GAIN C",
//     description:
//       "Boldenone 150 mg + Nandrolone 150 mg + Testosterone Cypionate 100 mg + Testosterone Enanthate 150 mg + Sustanon 100 mg",
//     indication: "Therapeutic multi-compound blend supporting recovery.",
//     presentation: "10 ml vial, 650 mg/ml total concentration.",
//   },
//   {
//     name: "NOVA CUT MIX",
//     description:
//       "Testosterone Propionate 150 mg + Trenbolone Acetate 150 mg + Drostanolone Propionate 150 mg",
//     indication: "Multi-compound for strength recovery and definition.",
//     presentation: "10 ml vial, 450 mg/ml total concentration.",
//   },
// ];

// === EXPORT MERGED PRODUCT LIST ===
// when building products from tablets / injectables
const makeCasKey = (name) =>
  name
    .toUpperCase()
    .replace(/\s+/g, "_")   // spaces -> underscore
    .replace(/[^A-Z0-9_]/g, ""); // remove other symbols

export const products = [
  ...tablets.map((p) => ({
    ...p,
    id: `tab-${p.name}`,
    category: "Tablets",
    cas: p.cas || CAS[makeCasKey(p.name)] || null,
    images: p.images && p.images.length > 0
      ? p.images
      : ["/products/placeholder.jpg"],
  })),

  ...injectables.map((p) => ({
    ...p,
    id: `inj-${p.name}`,
    category: "Injectables",
    cas: p.cas || CAS[makeCasKey(p.name)] || null,
    images: p.images && p.images.length > 0
      ? p.images
      : ["/products/placeholder.jpg"],
  })),
];


// Plain version for Node scripts (no import.meta.glob usage)
export const productsForSnap = products.map((p) => ({
  id: p.id,
  name: p.name,
  category: p.category,
  // only fields needed to build URLs; others are ignored for route generation
}));




