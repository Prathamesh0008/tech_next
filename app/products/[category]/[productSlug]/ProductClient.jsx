"use client";

// APP/PRODUCTS/[CATEGORY]/[PRODUCT]
import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Head from "next/head";

import { useLanguage } from "../../../../contexts/LanguageContext";

import Breadcrumbs from "../../../../components/Breadcrumbs";
import ProductCard from "../../../../components/ProductCard";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import {
  getLocalProductImages,
  getLocalProductImagePath,
  isLocalAssetPath,
} from "../../../../lib/local-image-paths";

const catalogue = "/assets/catalogue/Catalogue.pdf";

const NOVA_CUT_MIX_RELATED_PRODUCTS = [
  {
    name: "TESTOVA PP",
    href: "/products/injectables/testova-pp",
    description:
      "is listed as a Testosterone Phenylpropionate 100 mg/ml injectable with CAS Number 1255-49-8. Any medical indication, dosage or supply claim should be supported by authorised product documentation and supervision from a qualified healthcare professional.",
  },
  {
    name: "ROXONOVA",
    href: "/products/injectables/roxonova",
    description:
      "is identified as a Stanozolol 50 mg/ml injectable with CAS Number 10418-03-8. Its product information should prioritise verified composition, contraindications, batch quality, liver-related precautions and responsible-use warnings rather than unsupported physique or performance claims.",
  },
  {
    name: "PRIMONOVA",
    href: "/products/injectables/primonova-100mgml",
    description:
      "is presented as a Methenolone Enanthate 100 mg/ml injectable. The current Nova Techsciences page displays CAS Number 303-40-4, although this identifier should be verified against authoritative chemical records before publication across labels, compound pages and batch documentation.",
  },
  {
    name: "DROSTANOVA P",
    href: "/products/injectables/drostanova-p",
    description:
      "is listed as a Drostanolone Propionate 100 mg/ml injectable with CAS Number 521-12-0. Its existing product information includes cardiovascular, hormonal, pregnancy and age-related precautions that should remain clearly visible to website visitors.",
  },
  {
    name: "TRENOVA HEXA",
    href: "/products/injectables/trenovahexa",
    description:
      "is described as a Trenbolone Hexahydrobenzylcarbonate 76.5 mg/ml injectable with CAS Number 23454-33-3. Because trenbolone compounds carry substantial safety concerns, the page should emphasise contraindications, medical oversight, traceability and accurate regulatory information.",
  },
];

const NOVA_GAIN_C_RELATED_PRODUCTS = [
  {
    name: "TESTOVA C",
    href: "/products/injectables/testova-c",
    description:
      "is listed as a Testosterone Cypionate 250 mg/ml injectable with CAS Number 58-20-8. Its website description and supporting documentation should focus on verified composition, authorised medical oversight, hormonal monitoring and applicable contraindications.",
  },
  {
    name: "TESTOVA E",
    href: "/products/injectables/testova-e",
    description:
      "contains Testosterone Enanthate at 250 mg/ml and carries CAS Number 315-37-7. It is a separate testosterone ester with its own pharmaceutical profile, safety considerations and regulatory requirements. It should not be considered interchangeable without qualified professional assessment.",
  },
  {
    name: "NANDROVA D",
    href: "/products/injectables/nandrova-d",
    description:
      "is presented as a Nandrolone Decanoate 250 mg/ml injectable with CAS Number 360-70-3. Product information should clearly state its identity, batch traceability, contraindications and the need for professional medical supervision.",
  },
  {
    name: "TRENOVA E",
    href: "/products/injectables/trenova-e",
    description:
      "is listed as Trenbolone Enanthate 200 mg/ml with CAS Number 10161-34-9. Because trenbolone compounds carry significant safety concerns, published information should prioritise accurate identification, risk communication and regulatory transparency.",
  },
  {
    name: "NANDROVA P",
    href: "/products/injectables/nandrova-p",
    description:
      "contains Nandrolone Phenylpropionate 100 mg/ml and is associated with CAS Number 62-90-8. It differs chemically from Nandrolone Decanoate and requires separate documentation covering composition, quality testing and safety precautions.",
  },
];

const TESTOVA_BASE_RELATED_PRODUCTS = [
  {
    name: "STANOVA 10",
    href: "/products/tablets/stanova-10",
    description:
      "is a tablet formulation containing Stanozolol 10 mg, associated with CAS Number 10418-03-8. It is a separate anabolic-androgenic compound and has different formulation, liver-related safety considerations and contraindications from injectable testosterone products.",
  },
  {
    name: "SUSTOVA",
    href: "/products/injectables/sustova",
    description:
      "is presented as a Testosterone Blend 250 mg/ml injectable. Because it combines testosterone components, the identity and strength of every ester should be confirmed through its current label and batch documentation before the product is supplied or professionally assessed.",
  },
  {
    name: "TESTOVA P",
    href: "/products/injectables/testova-p",
    description:
      "contains Testosterone Propionate 100 mg/ml and is identified with CAS Number 57-85-2. The propionate ester distinguishes this product from non-esterified TESTOVA BASE and requires separate prescribing, monitoring, storage and quality documentation.",
  },
  {
    name: "TESTOVA PP",
    href: "/products/injectables/testova-pp",
    description:
      "is a Testosterone Phenylpropionate 100 mg/ml injectable with CAS Number 1255-49-8. Its short ester formulation has a different pharmaceutical profile from Testosterone Base, Propionate and Cypionate and should only be considered under licensed professional supervision.",
  },
  {
    name: "TESTOVA C",
    href: "/products/injectables/testova-c",
    description:
      "contains Testosterone Cypionate 250 mg/ml and carries CAS Number 58-20-8. It is an esterified testosterone formulation requiring clear batch traceability, appropriate hormonal monitoring, verified contraindication information and compliance with applicable pharmaceutical regulations.",
  },
];

const TESTOVA_PP_RELATED_PRODUCTS = [
  {
    name: "ROXONOVA",
    href: "/products/injectables/roxonova",
    description:
      "is listed as an injectable formulation containing Stanozolol, identified by CAS Number 10418-03-8. It is chemically different from testosterone esters and has separate contraindications and safety considerations. Product documentation should clearly cover its concentration, batch testing, liver-related precautions and authorised supply status.",
  },
  {
    name: "TRENOVA E",
    href: "/products/injectables/trenova-e",
    description:
      "is presented as Trenbolone Enanthate 200 mg/ml with CAS Number 10161-34-9. It is a separate anabolic compound rather than a testosterone-replacement product. Its page should prioritise accurate chemical identification, prominent risk communication, batch traceability and warnings against self-medication or non-medical use.",
  },
  {
    name: "NANDROVA P",
    href: "/products/injectables/nandrova-p",
    description:
      "contains Nandrolone Phenylpropionate 100 mg/ml and is identified by CAS Number 62-90-8. The phenylpropionate ester gives it a distinct formulation profile from Nandrolone Decanoate. It requires separate quality records, contraindication information and professional assessment rather than being treated as interchangeable.",
  },
  {
    name: "TESTOVA E",
    href: "/products/injectables/testova-e",
    description:
      "contains Testosterone Enanthate and is listed with CAS Number 315-37-7. It is an esterified testosterone formulation with a different release profile from Testosterone Phenylpropionate. Its label should clearly distinguish its strength, storage instructions, monitoring requirements and applicable regulatory status.",
  },
  {
    name: "NANDROVA D",
    href: "/products/injectables/nandrova-d",
    description:
      "is presented as Nandrolone Decanoate 250 mg/ml with CAS Number 360-70-3. It differs from NANDROVA P in ester identity and formulation profile. Responsible product information should focus on verified composition, batch documentation, contraindications, adverse-effect reporting and professional medical supervision.",
  },
];

const ROXONOVA_RELATED_PRODUCTS = [
  {
    name: "TESTOVA P",
    href: "/products/injectables/testova-p",
    description:
      "contains Testosterone Propionate 100 mg/ml, identified by CAS Number 57-85-2. It is an esterified testosterone formulation with a different chemical identity and release profile from Stanozolol. Its information should cover verified composition, contraindications, medical monitoring and regulatory status.",
  },
  {
    name: "TESTOVA E",
    href: "/products/injectables/testova-e",
    description:
      "is presented as Testosterone Enanthate 250 mg/ml with CAS Number 315-37-7. This longer-chain testosterone ester requires separate quality records and professional assessment. It should not be considered interchangeable with ROXONOVA or other injectable compounds without authorised clinical direction.",
  },
  {
    name: "TRENOVA A",
    href: "/products/injectables/trenova-a",
    description:
      "contains Trenbolone Acetate 100 mg/ml and carries CAS Number 10161-34-9. It is a potent anabolic-androgenic compound with significant cardiovascular, hormonal and psychological safety concerns. Product information should prioritise risk communication, contraindications and controlled professional oversight.",
  },
  {
    name: "NOVA CUT MIX",
    href: "/products/injectables/nova-cut-mix",
    description:
      "is a multi-compound injectable containing testosterone, trenbolone and drostanolone derivatives. Because several active ingredients are combined, its CAS information varies. The individual substances, ester forms and concentrations should be confirmed through the current label and Certificate of Analysis.",
  },
  {
    name: "TESTOVA BASE",
    href: "/products/injectables/testova-base",
    description:
      "is listed as a water-based Testosterone Suspension 100 mg/ml with CAS Number 58-22-0. Unlike esterified testosterone products, it contains non-esterified Testosterone Base. Its packaging should clearly distinguish its formulation, storage requirements, contraindications and monitoring information.",
  },
];

const TRENOVA_E_RELATED_PRODUCTS = [
  {
    name: "STANOVA 10",
    href: "/products/tablets/stanova-10",
    description:
      "is a tablet product containing Stanozolol 10 mg, associated with CAS Number 10418-03-8. It is chemically different from trenbolone compounds and requires separate product documentation, liver-related precautions, contraindications and regulatory review.",
  },
  {
    name: "TESTOVA P",
    href: "/products/injectables/testova-p",
    description:
      "contains Testosterone Propionate 100 mg/ml and is identified with CAS Number 57-85-2. It is an esterified testosterone formulation with a different compound profile, safety-monitoring requirement and regulatory status from TRENOVA E.",
  },
  {
    name: "SUSTOVA",
    href: "/products/injectables/sustova",
    description:
      "is presented as a Testosterone Blend 250 mg/ml injectable. Because it combines testosterone components, each ester and concentration should be verified through the label, Certificate of Analysis and current batch records.",
  },
  {
    name: "TESTOVA C",
    href: "/products/injectables/testova-c",
    description:
      "is listed as Testosterone Cypionate 250 mg/ml, with CAS Number 58-20-8. Its product information should clearly cover composition, contraindications, traceability, storage and the need for qualified professional supervision.",
  },
  {
    name: "TESTOVA E",
    href: "/products/injectables/testova-e",
    description:
      "is the Nova Techsciences Testosterone Enanthate injectable listed in the company’s product range. Its exact strength, CAS identification, excipients, storage conditions and market-authorisation status should be checked against the latest label and official batch documentation before publication.",
  },
];

const NANDROVA_P_RELATED_PRODUCTS = [
  {
    name: "ROXONOVA",
    href: "/products/injectables/roxonova",
    description:
      "is listed as an injectable formulation containing Stanozolol 50 mg/ml, with CAS Number 10418-03-8. It is a separate anabolic-androgenic compound requiring its own quality records, liver-related safety warnings, contraindications and regulatory assessment.",
  },
  {
    name: "TRENOVA E",
    href: "/products/injectables/trenova-e",
    description:
      "is presented as a Trenbolone Enanthate 200 mg/ml injectable. Its page previously displayed CAS Number 10161-34-9, which identifies Trenbolone Acetate; the TRENOVA E product record has been corrected to CAS Number 1629618-98-9.",
  },
  {
    name: "NANDROVA D",
    href: "/products/injectables/nandrova-d",
    description:
      "contains Nandrolone Decanoate 250 mg/ml, with CAS Number 360-70-3. Its decanoate ester distinguishes it chemically from NANDROVA P, so the two products should not be treated as interchangeable.",
  },
  {
    name: "TESTOVA P",
    href: "/products/injectables/testova-p",
    description:
      "is presented as Testosterone Propionate 100 mg/ml, identified by CAS Number 57-85-2. Its product information should emphasise verified composition, contraindications, professional supervision, batch testing and applicable pharmaceutical regulation.",
  },
];

const SUSTOVA_RELATED_PRODUCTS = [
  {
    name: "TESTOVA P",
    href: "/products/injectables/testova-p",
    description:
      "is another Nova Techsciences testosterone injectable. Its product page should clearly distinguish its testosterone ester, stated concentration, CAS information, storage requirements and monitoring considerations from the multi-component SUSTOVA formulation.",
  },
  {
    name: "NANDROVA D",
    href: "/products/injectables/nandrova-d",
    description:
      "belongs to the nandrolone product range and is chemically different from testosterone-based formulations. Its supporting information should cover the exact compound identity, strength, batch testing, contraindications and applicable legal supply status.",
  },
  {
    name: "TRENOVA E",
    href: "/products/injectables/trenova-e",
    description:
      "is listed within the trenbolone injectable range. Because trenbolone compounds are distinct from testosterone medicines, its page should use carefully verified CAS data, clear risk communication, traceable laboratory documentation and prominent warnings against unsupervised use.",
  },
  {
    name: "NANDROVA P",
    href: "/products/injectables/nandrova-p",
    description:
      "is a separate nandrolone formulation from NANDROVA D. Its ester identity, product strength, quality records and safety information should be presented independently, since products within the same compound family are not automatically interchangeable.",
  },
];

const STANOVA_10_RELATED_PRODUCTS = [
  {
    name: "TESTOVA BASE",
    href: "/products/injectables/testova-base",
    description:
      "is presented as a non-esterified testosterone injectable formulation. It is chemically different from Stanozolol and requires separate documentation covering its exact strength, excipients, sterility testing, storage conditions, contraindications and applicable prescription status.",
  },
  {
    name: "TESTOVA PP",
    href: "/products/injectables/testova-pp",
    description:
      "contains Testosterone Phenylpropionate, an esterified testosterone compound associated with CAS Number 1255-49-8. Its pharmaceutical profile differs from an oral Stanozolol tablet, and its composition, batch testing, professional monitoring and regulatory status should be documented independently.",
  },
  {
    name: "DROSTANOVA P",
    href: "/products/injectables/drostanova-p",
    description:
      "is a Drostanolone Propionate injectable product associated with CAS Number 521-12-0. Drostanolone and Stanozolol are separate anabolic-androgenic substances with different chemical structures, formulations, safety concerns and quality-control requirements.",
  },
  {
    name: "TESTOVA E",
    href: "/products/injectables/testova-e",
    description:
      "is presented as a Testosterone Enanthate injectable formulation. The enanthate ester differentiates it from non-esterified testosterone and shorter ester products. Its label should clearly identify its strength, ingredients, storage instructions, batch details and contraindications.",
  },
  {
    name: "TESTOVA P",
    href: "/products/injectables/testova-p",
    description:
      "contains Testosterone Propionate, identified by CAS Number 57-85-2. It is an injectable testosterone ester rather than an oral Stanozolol formulation. It requires separate sterility documentation, composition verification, medical supervision and country-specific regulatory review.",
  },
];

function Stanova10EditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>STANOVA 10 by Nova Techsciences</strong> is presented as a tablet formulation
            containing{" "}
            <Link
              href="/compounds/stanozolol-roxonova"
              className="font-semibold text-[#1f5f99] underline underline-offset-2"
            >
              Stanozolol 10 mg
            </Link>
            . Stanozolol is a synthetic anabolic-androgenic steroid identified by CAS Number
            10418-03-8 and the molecular formula C21H32N2O. It is chemically distinct from testosterone
            esters and other injectable anabolic compounds.
          </p>
          <p>
            This page provides general product-identification, quality and safety information. It is
            not a replacement for authorised prescribing information, an approved patient leaflet or
            advice from a qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Key STANOVA 10 information includes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> STANOVA 10</li>
            <li><strong>Active compound:</strong> Stanozolol</li>
            <li><strong>Strength:</strong> 10 mg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 10418-03-8</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The complete label should clearly identify the active ingredient, excipients, tablet
            quantity, batch number, manufacturing date, expiry date and approved storage conditions.
            Information displayed online should remain consistent with the packaging, catalogue,
            laboratory documents and Certificate of Analysis.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality and Documentation</h2>
          <p>
            Tablet manufacturing requires documented controls for active-ingredient identity, strength,
            content uniformity, dissolution, impurities and microbiological quality. Finished tablets
            should also be assessed for appearance, weight consistency, packaging integrity and
            stability throughout their stated shelf life.
          </p>
          <p>
            Every STANOVA 10 batch should have a unique number linked to its production history and
            laboratory results. Claims involving purity, pharmaceutical quality or manufacturing
            standards should only be published when supporting records are available.
          </p>
          <p>
            For the United Kingdom and Netherlands, Nova Techsciences should clearly disclose whether
            the product holds the necessary marketing authorisation. The MHRA regulates medicines in
            the UK, while the Dutch Medicines Evaluation Board manages national medicine authorisations
            and pharmacovigilance in the Netherlands.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Safety Information</h2>
          <p>
            Stanozolol belongs to the anabolic-steroid category. Unsupervised use may cause serious
            cardiovascular, hormonal, reproductive, liver and psychological complications. The NHS
            states that anabolic steroids are prescription-only medicines in the UK and warns that
            non-medical use may cause serious side effects and dependence.
          </p>
          <p>
            STANOVA 10 should not be presented for self-medication, unsupervised performance enhancement
            or use by minors. It is also prohibited in competitive sport under the World Anti-Doping
            Agency’s anabolic-agent category.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {STANOVA_10_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          STANOVA 10 should be presented using accurate chemical identification, transparent quality
          records, clear regulatory status and balanced safety information. This creates a more reliable
          product page for healthcare professionals and regulatory reviewers without relying on
          unsupported performance claims.
        </p>
      </div>
    </section>
  );
}

function AromanovaEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>AROMANOVA by Nova Techsciences</strong> is a tablet formulation containing{" "}
            <Link href="/compounds/exemestane" className={linkClass}>Exemestane 25 mg</Link>.
            Exemestane is a steroidal aromatase inhibitor identified by CAS Number 107868-30-4,
            molecular formula C20H24O2 and molecular weight of approximately 296.4 g/mol. It works by
            reducing the production of oestrogen through irreversible inhibition of the aromatase enzyme.
          </p>
          <p>
            Exemestane is an established prescription medicine used in authorised settings for certain
            hormone-dependent breast cancers, particularly in postmenopausal patients. Its use must be
            based on an individual medical assessment and the approved prescribing information for the
            market in which it is supplied.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">AROMANOVA Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Important product details include:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> AROMANOVA</li>
            <li><strong>Active compound:</strong> Exemestane</li>
            <li><strong>Strength:</strong> 25 mg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 107868-30-4</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should clearly identify the complete formulation, inactive ingredients,
            tablet quantity, batch number, manufacturing date, expiry date and approved storage
            instructions. All information published online should remain consistent with the packaging,
            Certificate of Analysis and current regulatory documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality and Product Traceability</h2>
          <p>
            Each AROMANOVA batch should be supported by appropriate quality-control records. These may
            include raw-material identification, active-ingredient assay, content-uniformity testing,
            dissolution assessment, impurity analysis, microbiological examination and
            packaging-integrity checks.
          </p>
          <p>
            Nova Techsciences should publish claims relating to purity, manufacturing standards or
            pharmaceutical quality only when they can be supported by current documentation. For the
            United Kingdom and Netherlands, the product page should also state the applicable
            marketing-authorisation status, prescription category, responsible manufacturer and
            adverse-event reporting process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Safety and Responsible Use</h2>
          <p>
            Exemestane can cause adverse effects such as hot flushes, tiredness, joint or muscle
            discomfort, headache, sleep disturbance and reduced bone-mineral density. Clinical
            monitoring may be required depending on the patient’s condition, treatment duration and
            other medicines being used.
          </p>
          <p>
            AROMANOVA should not be used during pregnancy or breastfeeding and should not be taken for
            unsupervised hormone management, bodybuilding or post-cycle treatment. Patients should
            inform their healthcare professional about existing liver, kidney or bone conditions and
            all medicines or supplements they use.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">CABERNOVA</h3>
            <p>
              <Link href="/products/tablets/cabernova" className={linkClass}>CABERNOVA</Link>{" "}
              contains Cabergoline 0.5 mg, identified by CAS Number 81409-90-7. Cabergoline is a
              dopamine agonist used in authorised clinical settings for disorders involving elevated
              prolactin. Its contraindications, cardiovascular precautions, interactions and monitoring
              requirements should be reviewed by a qualified prescriber.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">CLOMINOVA</h3>
            <p>
              CLOMINOVA is presented as{" "}
              <Link href="/compounds/clomiphene-citrate" className={linkClass}>Clomiphene Citrate</Link>{" "}
              50 mg, with CAS Number 50-41-9. Clomiphene is associated with medically supervised
              fertility treatment and requires appropriate assessment because it may affect vision,
              ovarian response and hormone-sensitive conditions.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">ENCLOMINOVA</h3>
            <p>
              <Link href="/products/tablets/enclominova" className={linkClass}>ENCLOMINOVA</Link>{" "}
              contains Enclomiphene Citrate 25 mg, identified by CAS Number 7599-79-3. It is chemically
              related to clomiphene but should be documented independently. Its legal and
              marketing-authorisation status must be confirmed for each country before supply or
              publication of therapeutic claims.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">FEMANOVA</h3>
            <p>
              FEMANOVA contains{" "}
              <Link href="/compounds/letrozole" className={linkClass}>Letrozole 2.5 mg</Link>, with CAS
              Number 112809-51-5. Letrozole is another aromatase inhibitor used in authorised
              hormone-dependent breast-cancer treatment and, in selected cases, specialist-managed
              fertility care. It is distinct from Exemestane and is not automatically interchangeable.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">HALONOVA</h3>
            <p>
              <Link href="/products/tablets/halonova" className={linkClass}>HALONOVA</Link>{" "}
              contains Fluoxymesterone 5 mg, identified by CAS Number 76-43-7. Fluoxymesterone is an
              anabolic-androgenic medicine with significant liver, cardiovascular and hormonal safety
              considerations. It requires separate prescribing information, strict medical oversight
              and clear warnings against non-medical performance use.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          AROMANOVA should ultimately be presented through accurate compound identification, balanced
          safety information, transparent batch documentation and clearly stated regulatory status.
        </p>
      </div>
    </section>
  );
}

function CabernovaEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <p>
          <strong>CABERNOVA by Nova Techsciences</strong> is a tablet formulation containing{" "}
          <Link href="/compounds/cabergoline" className={linkClass}>Cabergoline 0.5 mg</Link>.
          Cabergoline is an ergot-derived dopamine D2 receptor agonist and prolactin inhibitor
          identified by CAS Number 81409-90-7. In authorised clinical settings, cabergoline is used for
          conditions associated with elevated prolactin levels. Treatment decisions should always
          follow local prescribing information and an assessment by a qualified healthcare professional.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">CABERNOVA Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Important product information includes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> CABERNOVA</li>
            <li><strong>Active compound:</strong> Cabergoline</li>
            <li><strong>Strength:</strong> 0.5 mg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 81409-90-7</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The website description, packaging and technical records should consistently state the
            complete formulation, excipients, tablet count, batch number, manufacturing date, expiry
            date and approved storage conditions. Any therapeutic claim should match the product’s
            authorised status in the country where it is supplied.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality, Documentation and Traceability</h2>
          <p>
            A reliable CABERNOVA product profile should be supported by documented quality controls.
            Relevant records can include raw-material identification, active-ingredient assay,
            content-uniformity testing, dissolution, impurity assessment, microbiological quality and
            packaging-integrity checks. Each batch should carry a unique number connected to its
            manufacturing and laboratory-release records.
          </p>
          <p>
            For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
            clearly communicate the medicine’s marketing-authorisation status, prescription category,
            responsible manufacturer and adverse-event reporting route. Claims concerning purity or
            pharmaceutical quality should only be used when current supporting evidence is available.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Safety and Responsible Use</h2>
          <p>
            Cabergoline can cause effects such as nausea, dizziness, headache, tiredness and low blood
            pressure. More serious concerns may include heart-valve or fibrotic disorders, particularly
            in circumstances requiring longer-term treatment. Appropriate cardiovascular assessment
            and clinical monitoring may therefore be necessary under authorised prescribing guidance.
          </p>
          <p>
            CABERNOVA should not be used for self-medication, unsupervised hormone management,
            bodybuilding or post-cycle treatment. Patients should tell their prescriber about
            cardiovascular conditions, uncontrolled hypertension, pregnancy, breastfeeding and all
            medicines they use. Interaction checks are important because dopamine-antagonist medicines
            and certain other treatments may affect cabergoline therapy.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">CLOMINOVA</h3>
            <p>
              <Link href="/products/tablets/clominova" className={linkClass}>CLOMINOVA</Link>{" "}
              contains Clomiphene Citrate, identified by CAS Number 50-41-9. It is a separate
              prescription compound associated with medically supervised reproductive treatment. Its
              contraindications, possible visual side effects, liver-related precautions and
              country-specific authorisation status should be reviewed independently.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">ENCLOMINOVA</h3>
            <p>
              ENCLOMINOVA is presented as{" "}
              <Link href="/compounds/clomiphene-citrate" className={linkClass}>
                Enclomiphene Citrate 25 mg
              </Link>
              , with CAS Number 7599-79-3. It is chemically related to clomiphene but requires its own
              regulatory assessment, verified indication, quality documentation and safety information
              rather than being treated as automatically interchangeable.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">FEMANOVA</h3>
            <p>
              <Link href="/products/tablets/femanova" className={linkClass}>FEMANOVA</Link>{" "}
              contains Letrozole 2.5 mg, an aromatase inhibitor identified by CAS Number 112809-51-5.
              Letrozole has distinct authorised uses and safety considerations, including
              pregnancy-related restrictions, and should only be described through current approved
              prescribing information.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">HALONOVA</h3>
            <p>
              HALONOVA contains{" "}
              <Link href="/compounds/fluoxymesterone" className={linkClass}>Fluoxymesterone 5 mg</Link>,
              with CAS Number 76-43-7. It is an anabolic-androgenic prescription medicine with important
              liver, cardiovascular and hormonal risks. Its page should include prominent
              contraindications, monitoring requirements and warnings against non-medical or
              performance-enhancing use.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVA-T3</h3>
            <p>
              <Link href="/products/tablets/nova-t3" className={linkClass}>NOVA-T3</Link>{" "}
              is presented within the Nova Techsciences thyroid-hormone product range and is associated
              with Liothyronine Sodium, CAS Number 55-06-1. Thyroid-hormone products require precise
              strength identification, medical monitoring and clear warnings against unsupervised
              weight-loss or performance use.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          CABERNOVA should ultimately be presented through accurate chemical identification, balanced
          safety information, transparent batch documentation and clearly stated regulatory status.
          This approach supports a more credible product page for healthcare professionals, distributors
          and regulatory reviewers.
        </p>
      </div>
    </section>
  );
}

function ClominovaEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>CLOMINOVA by Nova Techsciences</strong> is presented as an oral tablet containing{" "}
            <Link href="/compounds/clomiphene-citrate" className={linkClass}>
              Clomiphene Citrate 50 mg
            </Link>
            . Clomiphene, also written as clomifene in UK medical references, is an
            ovulation-stimulating medicine identified by CAS Number 50-41-9. It belongs to the selective
            oestrogen receptor modulator category and is used in authorised medical settings for
            certain cases of ovulatory failure in women who wish to become pregnant.
          </p>
          <p>
            CLOMINOVA should only be supplied or used according to applicable prescription requirements
            and professional medical guidance. Before treatment is considered, other possible causes of
            infertility should be assessed, including thyroid, adrenal, pituitary, uterine and
            male-factor conditions.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">CLOMINOVA Product Overview</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> CLOMINOVA</li>
            <li><strong>Active compound:</strong> Clomiphene Citrate</li>
            <li><strong>Strength:</strong> 50 mg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 50-41-9</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should clearly state the complete composition, excipients, tablet
            quantity, batch number, manufacturing date, expiry date and approved storage conditions.
            Information published online should match the packaging, Certificate of Analysis and
            authorised product documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality and Product Traceability</h2>
          <p>
            A dependable CLOMINOVA product profile should be supported by documented quality controls.
            These may include raw-material identification, active-ingredient assay, content-uniformity
            testing, dissolution analysis, impurity assessment, microbiological testing and
            packaging-integrity checks.
          </p>
          <p>
            Each manufactured batch should have a unique identification number linked to its production
            and laboratory-release records. Claims concerning pharmaceutical quality, purity or
            manufacturing standards should only appear when supporting evidence is current and verifiable.
          </p>
          <p>
            For the United Kingdom, Netherlands and other European markets, the page should clearly
            communicate the product’s marketing-authorisation status, prescription category,
            responsible manufacturer and adverse-event reporting process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Clomiphene treatment requires medical monitoring. Reported risks include ovarian
            enlargement, ovarian hyperstimulation syndrome, pelvic discomfort, visual disturbances and
            an increased possibility of multiple pregnancy. The medicine should not be used during
            pregnancy and may be unsuitable for people with liver disease, unexplained uterine bleeding,
            certain ovarian cysts or uncontrolled thyroid or adrenal conditions.
          </p>
          <p>
            CLOMINOVA must not be promoted for unsupervised hormone management, performance enhancement
            or post-cycle use. Patients should discuss all medicines, supplements, fertility treatments
            and existing medical conditions with a qualified prescriber.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">ENCLOMINOVA</h3>
            <p>
              ENCLOMINOVA contains{" "}
              <Link href="/compounds/enclomiphene-citrate" className={linkClass}>
                Enclomiphene Citrate
              </Link>
              , identified by CAS Number 7599-79-3. Although chemically related to clomiphene,
              enclomiphene is a distinct compound and requires separate regulatory, clinical and safety
              assessment. Its authorised status should be verified in every country where information
              is published.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">FEMANOVA</h3>
            <p>
              <Link href="/products/tablets/femanova" className={linkClass}>FEMANOVA</Link>{" "}
              contains Letrozole 2.5 mg, associated with CAS Number 112809-51-5. Letrozole is an
              aromatase inhibitor authorised for specific hormone-dependent breast-cancer treatments in
              postmenopausal patients. It is not interchangeable with clomiphene and carries separate
              pregnancy, bone-health, liver and kidney precautions.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">HALONOVA</h3>
            <p>
              HALONOVA contains{" "}
              <Link href="/compounds/fluoxymesterone" className={linkClass}>Fluoxymesterone</Link>,
              identified by CAS Number 76-43-7. Fluoxymesterone is an androgenic and anabolic compound
              with important liver, cardiovascular, hormonal and reproductive safety concerns. Its
              product information should include clear contraindications and strong warnings against
              unsupervised or performance-related use.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVA-T3</h3>
            <p>
              <Link href="/products/tablets/nova-t3" className={linkClass}>NOVA-T3</Link>{" "}
              is presented as a Liothyronine Sodium thyroid-hormone product associated with CAS Number
              55-06-1. Liothyronine is used in selected thyroid disorders under medical supervision. It
              should not be presented as a general weight-loss or metabolism-enhancing product.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVA-T4</h3>
            <p>
              NOVA-T4 is presented within the thyroid-hormone range. CAS Number 55-03-8 is associated
              with{" "}
              <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>levothyroxine</Link>,
              but the exact salt form, strength and regulatory details should be checked against the
              approved label. Thyroid replacement products require individual monitoring and accurate
              strength identification.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          CLOMINOVA should ultimately be presented through accurate chemical identification,
          transparent batch documentation, balanced safety information and clearly stated regulatory status.
        </p>
      </div>
    </section>
  );
}

function HalonovaEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>HALONOVA by Nova Techsciences</strong> is presented as an oral tablet containing{" "}
            <Link href="/compounds/fluoxymesterone" className={linkClass}>Fluoxymesterone 5 mg</Link>.
            Fluoxymesterone is a synthetic androgenic and anabolic steroid identified by CAS Number
            76-43-7. Its molecular formula is C20H29FO3, with a molecular weight of approximately
            336.44 g/mol.
          </p>
          <p>
            This page provides general product-identification, quality and safety information. HALONOVA
            should only be described according to verified regulatory documentation and must not replace
            authorised prescribing information, an approved patient leaflet or advice from a qualified
            healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">HALONOVA Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Important product information includes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> HALONOVA</li>
            <li><strong>Active compound:</strong> Fluoxymesterone</li>
            <li><strong>Strength:</strong> 5 mg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 76-43-7</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should clearly identify its full formulation, inactive ingredients,
            tablet quantity, batch number, manufacturing date, expiry date and approved storage
            conditions. Information published on the website should remain consistent with the
            packaging, Certificate of Analysis and batch-release records.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            Each HALONOVA batch should be supported by appropriate pharmaceutical quality checks. These
            may include raw-material identification, active-ingredient assay, tablet content uniformity,
            dissolution testing, impurity analysis, microbiological assessment and packaging-integrity
            verification.
          </p>
          <p>
            A unique batch number should connect the finished product with its manufacturing history and
            laboratory results. Claims concerning quality, purity or manufacturing standards should
            only be published when supported by current and verifiable documentation.
          </p>
          <p>
            For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
            clearly state the product’s marketing-authorisation status, legal supply category,
            responsible manufacturer and adverse-event reporting process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Fluoxymesterone belongs to the androgenic-steroid category. Oral androgenic steroids in this
            class have been associated with potentially serious liver injury, including prolonged
            cholestasis and, with long-term exposure, certain liver abnormalities and tumours.
          </p>
          <p>
            HALONOVA should not be presented for unsupervised hormone use, bodybuilding or performance
            enhancement. It is also listed as a prohibited anabolic agent under the 2026 World
            Anti-Doping Agency Prohibited List.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVA-T3</h3>
            <p>
              <Link href="/products/tablets/nova-t3" className={linkClass}>NOVA-T3</Link>{" "}
              contains Liothyronine Sodium, identified by CAS Number 55-06-1. It is a thyroid-hormone
              medicine used in selected clinical circumstances. Accurate strength identification and
              thyroid-function monitoring are essential, and it should not be promoted for unsupervised
              weight loss or metabolism enhancement.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVA-T4</h3>
            <p>
              NOVA-T4 is presented as a{" "}
              <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>
                Levothyroxine Sodium tablet
              </Link>
              . The sodium salt is associated with CAS Number 55-03-8, while CAS Number 51-48-9 refers
              to levothyroxine itself. These identifiers should be clearly distinguished across the
              product page, label, schema and technical records.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVABOL</h3>
            <p>
              <Link href="/products/tablets/novabol" className={linkClass}>NOVABOL</Link>{" "}
              contains Oxandrolone, identified by CAS Number 53-39-4. Oxandrolone is an
              anabolic-androgenic steroid and requires separate prescribing information,
              contraindications, liver-related warnings and regulatory assessment. It should not be
              treated as interchangeable with Fluoxymesterone or other oral androgenic compounds.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAMETH</h3>
            <p>
              NOVAMETH contains{" "}
              <Link href="/compounds/methandienone" className={linkClass}>Methandienone 10 mg</Link>,
              identified by CAS Number 72-63-9. Methandienone is an orally active anabolic-androgenic
              steroid with a distinct chemical and safety profile. Its page should prioritise
              regulatory status, liver and cardiovascular precautions, batch documentation and warnings
              against non-medical use.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAMOREN</h3>
            <p>
              <Link href="/products/tablets/novamoren" className={linkClass}>NOVAMOREN</Link>{" "}
              is presented as an MK-677 product containing Ibutamoren Mesylate, associated with CAS
              Number 159752-10-0. Ibutamoren is a non-peptide growth-hormone secretagogue and differs
              substantially from anabolic steroids and thyroid medicines. Its regulatory status and
              supporting clinical evidence should be stated accurately.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          HALONOVA should ultimately be presented through accurate chemical identification, transparent
          batch documentation, balanced risk information and clearly stated regulatory status.
        </p>
      </div>
    </section>
  );
}

function NovaT3EditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>NOVA-T3 by Nova Techsciences</strong> is presented as an oral tablet containing{" "}
            <Link href="/compounds/liothyronine-sodium-t3" className={linkClass}>
              Liothyronine Sodium 50 mcg
            </Link>
            . Liothyronine Sodium is a synthetic form of triiodothyronine, commonly known as T3, and is
            identified by CAS Number 55-06-1. T3 is an active thyroid hormone involved in regulating
            metabolism, growth, energy use and several essential body functions.
          </p>
          <p>
            Liothyronine is a prescription thyroid medicine. In authorised clinical settings, it may be
            considered for severe thyroid-hormone deficiency, selected hypothyroid conditions and
            certain specialist-managed situations. NHS England advises that most hypothyroidism is
            treated with levothyroxine alone, while liothyronine may be appropriate for a limited group
            of patients following specialist assessment.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NOVA-T3 Product Overview</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> NOVA-T3</li>
            <li><strong>Active compound:</strong> Liothyronine Sodium</li>
            <li><strong>Strength:</strong> 50 mcg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 55-06-1</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The NOVA-T3 label should clearly identify the complete composition, excipients, tablet
            quantity, batch number, manufacturing date, expiry date and approved storage conditions.
            Information displayed on the product page should remain consistent with the packaging,
            Certificate of Analysis and applicable regulatory documents.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            Thyroid-hormone tablets require precise manufacturing controls because small variations in
            strength may affect treatment outcomes. Relevant quality checks may include raw-material
            identification, active-ingredient assay, tablet content uniformity, dissolution testing,
            impurity analysis, stability assessment and packaging-integrity verification.
          </p>
          <p>
            Each NOVA-T3 batch should have a unique identification number linked to its manufacturing
            and laboratory-release records. Claims relating to purity, quality or manufacturing
            standards should only be published when supported by current documentation.
          </p>
          <p>
            For the United Kingdom, Netherlands and other European markets, the page should clearly
            disclose the medicine’s marketing-authorisation status, prescription category, responsible
            manufacturer and adverse-event reporting process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Excess thyroid-hormone exposure may produce symptoms such as palpitations, rapid heartbeat,
            sweating, tremor, anxiety, sleep disturbance, diarrhoea, muscle weakness or unexplained
            weight changes. People with untreated adrenal insufficiency, thyrotoxicosis or certain
            cardiovascular conditions require particular caution and professional assessment.
          </p>
          <p>
            NOVA-T3 should not be presented as a general weight-loss, fat-burning, bodybuilding or
            metabolism-enhancement product. Patients should not begin, change or discontinue thyroid
            treatment without medical guidance and appropriate thyroid-function monitoring.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVA-T4</h3>
            <p>
              <Link href="/products/tablets/nova-t4" className={linkClass}>NOVA-T4</Link>{" "}
              is presented as a Levothyroxine Sodium 50 mcg tablet. Levothyroxine is synthetic T4 and is
              commonly used as thyroid-hormone replacement. Product records should clearly distinguish
              levothyroxine CAS 51-48-9 from levothyroxine sodium CAS 55-03-8.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVABOL</h3>
            <p>
              NOVABOL contains{" "}
              <Link href="/compounds/oxandrolone" className={linkClass}>Oxandrolone 10 mg</Link>,
              identified by CAS Number 53-39-4. Oxandrolone is an anabolic-androgenic steroid with
              separate liver, cardiovascular, hormonal and reproductive risks. It requires its own
              regulatory documentation and must not be treated as a thyroid medicine.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAMETH</h3>
            <p>
              <Link href="/products/tablets/novameth" className={linkClass}>NOVAMETH</Link>{" "}
              contains Methandienone 10 mg, identified by CAS Number 72-63-9. It is an oral
              anabolic-androgenic compound with a different chemical and safety profile from
              Liothyronine Sodium. Its information should prioritise legal status, contraindications,
              liver-related warnings and responsible medical oversight.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAMOREN</h3>
            <p>
              NOVAMOREN is presented as an{" "}
              <Link href="/compounds/nandrolone-phenylpropionate" className={linkClass}>
                Ibutamoren Mesylate product
              </Link>{" "}
              associated with CAS Number 159752-10-0. Ibutamoren is a growth-hormone secretagogue under
              clinical investigation; an EMA orphan designation does not constitute marketing
              authorisation. Its regulatory status must therefore be stated accurately.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAZOLE</h3>
            <p>
              <Link href="/products/tablets/novazole" className={linkClass}>NOVAZOLE</Link>{" "}
              contains Anastrozole 1 mg, identified by CAS Number 120511-73-1. Anastrozole is an
              aromatase inhibitor used in authorised settings for specific hormone-dependent breast
              cancers. It is distinct from thyroid medicines and requires separate contraindications,
              bone-health precautions and prescribing information.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          NOVA-T3 should ultimately be presented through accurate chemical identification, precise
          strength information, transparent batch documentation, balanced safety guidance and clearly
          stated regulatory status.
        </p>
      </div>
    </section>
  );
}

function NovaT4EditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>NOVA-T4 by Nova Techsciences</strong> is presented as an oral tablet containing{" "}
            <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>
              Levothyroxine Sodium 50 mcg
            </Link>
            . Levothyroxine Sodium is a synthetic form of thyroxine, commonly called T4, and is
            identified by CAS Number 55-03-8. It replaces or supplements thyroid hormone when the
            thyroid gland cannot produce an adequate amount naturally.
          </p>
          <p>
            Levothyroxine is an established prescription medicine used in the management of
            hypothyroidism and certain other thyroid-related conditions. Treatment must be individually
            assessed because thyroid-hormone requirements vary between patients and can be affected by
            age, medical history, pregnancy, other medicines and laboratory findings.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NOVA-T4 Product Overview</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> NOVA-T4</li>
            <li><strong>Active compound:</strong> Levothyroxine Sodium</li>
            <li><strong>Strength:</strong> 50 mcg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 55-03-8</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The NOVA-T4 label should identify the complete formulation, excipients, tablet quantity,
            storage requirements, batch number, manufacturing date and expiry date. Information shown
            on the website should remain consistent with the packaging, Certificate of Analysis and
            applicable regulatory documents.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            Thyroid-hormone tablets require precise production controls because small variations in
            active-ingredient content may affect treatment. Suitable testing may include raw-material
            identification, active-compound assay, content uniformity, dissolution, impurity analysis,
            stability assessment and packaging-integrity checks.
          </p>
          <p>
            Each NOVA-T4 batch should have a traceable identification number connected to its
            manufacturing and laboratory-release records. For the United Kingdom, Netherlands and other
            European markets, Nova Techsciences should clearly state the product’s marketing-authorisation
            status, prescription category, responsible manufacturer and adverse-event reporting process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Safety and Responsible Use</h2>
          <p>
            Excessive thyroid-hormone exposure can produce symptoms associated with an overactive
            thyroid, including palpitations, rapid heartbeat, sweating, tremor, anxiety, sleep
            disturbance and unexplained weight loss. Levothyroxine also requires particular care in
            patients with cardiovascular disease, untreated adrenal insufficiency or long-standing
            hypothyroidism.
          </p>
          <p>
            NOVA-T4 should not be presented as a general weight-loss, fat-burning, bodybuilding or
            metabolism-enhancement product. Patients should not start, stop or change thyroid treatment
            without professional guidance and appropriate thyroid-function monitoring.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVABOL</h3>
            <p>
              <Link href="/products/tablets/novabol" className={linkClass}>NOVABOL</Link>{" "}
              contains Oxandrolone USP 10 mg, identified by CAS Number 53-39-4. It is an
              anabolic-androgenic compound rather than a thyroid medicine. Its page should provide
              separate information covering regulatory status, liver and cardiovascular precautions,
              contraindications, batch testing and warnings against non-medical use.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAMETH</h3>
            <p>
              NOVAMETH contains{" "}
              <Link href="/compounds/methandienone" className={linkClass}>Methandienone 10 mg</Link>,
              with CAS Number 72-63-9. Methandienone is an oral anabolic-androgenic steroid with a
              distinct safety profile. It requires clear liver, cardiovascular, hormonal and
              reproductive warnings and should not be presented as interchangeable with Levothyroxine
              Sodium.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAMOREN</h3>
            <p>
              <Link href="/products/tablets/novamoren" className={linkClass}>NOVAMOREN</Link>{" "}
              is presented as an MK-677 or Ibutamoren product, associated with CAS Number 159752-10-0.
              Ibutamoren is a growth-hormone secretagogue and is chemically different from thyroid
              hormones and anabolic steroids. Its legal status and supporting clinical evidence should
              be stated accurately.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAZOLE</h3>
            <p>
              NOVAZOLE contains{" "}
              <Link href="/compounds/anastrozole" className={linkClass}>Anastrozole 1 mg</Link>,
              identified by CAS Number 120511-73-1. Anastrozole is an aromatase inhibitor used in
              authorised medical settings for specific hormone-dependent breast cancers. It has
              separate contraindications, bone-health considerations and prescribing requirements.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">OXYDROL</h3>
            <p>
              <Link href="/products/tablets/oxydrol" className={linkClass}>OXYDROL</Link>{" "}
              contains Oxymetholone USP 50 mg, associated with CAS Number 434-07-1. Oxymetholone is an
              anabolic-androgenic medicine with significant liver, cardiovascular and hormonal risks.
              Its product page should prioritise regulatory status, contraindications, professional
              oversight and responsible safety communication.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          NOVA-T4 should ultimately be presented through accurate compound identification, precise
          strength information, transparent batch documentation and balanced medical safety guidance.
        </p>
      </div>
    </section>
  );
}

function NovamethEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>NOVAMETH by Nova Techsciences</strong> is presented as an oral tablet containing{" "}
            <Link href="/compounds/methandienone" className={linkClass}>Methandienone 10 mg</Link>.
            Methandienone, also known as methandrostenolone, is an orally active anabolic-androgenic
            steroid identified by CAS Number 72-63-9. It is a synthetic androgen rather than a
            nutritional supplement, so its legal status, authorised indications and prescription
            requirements must be confirmed in every country where the product is displayed or supplied.
          </p>
          <p>
            This page provides neutral product-identification, quality and safety information. It does
            not replace an authorised Summary of Product Characteristics, patient information leaflet
            or advice from an appropriately qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NOVAMETH Product Overview</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> NOVAMETH</li>
            <li><strong>Active compound:</strong> Methandienone</li>
            <li><strong>Strength:</strong> 10 mg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 72-63-9</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should identify all excipients, tablet quantity, storage conditions,
            batch number, manufacturing date and expiry date. Information published online should
            remain consistent with the finished packaging, Certificate of Analysis and current
            regulatory documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            Oral pharmaceutical products require documented controls for identity, strength, content
            uniformity, dissolution, impurities, microbiological quality and packaging integrity. Each
            NOVAMETH batch should carry a unique number connected to its manufacturing and
            laboratory-release records.
          </p>
          <p>
            Claims involving purity, pharmaceutical grade or manufacturing compliance should only
            appear when supported by current evidence. For audiences in the Netherlands and United
            Kingdom, Nova Techsciences should clearly state the product’s marketing-authorisation
            status, legal supply category, responsible organisation and adverse-event reporting route.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Methandienone belongs to the anabolic-androgenic steroid class. Oral 17-alpha-alkylated
            androgens have been associated with liver injury, including cholestasis, vascular changes
            and liver tumours. Anabolic-steroid misuse may also affect cardiovascular, hormonal,
            reproductive and psychological health.
          </p>
          <p>
            NOVAMETH should not be presented for unsupervised bodybuilding, performance enhancement,
            self-medication or use by minors. No dose, cycle, stacking or post-cycle guidance should be
            taken from unofficial online sources. People with liver, kidney, cardiovascular, prostate,
            breast or hormone-sensitive conditions require professional medical assessment.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAMOREN</h3>
            <p>
              <Link href="/products/tablets/novamoren" className={linkClass}>NOVAMOREN</Link>{" "}
              is presented as an Ibutamoren Mesylate or MK-677 product associated with CAS Number
              159752-10-0. Ibutamoren is a non-peptide growth-hormone secretagogue rather than an
              anabolic steroid. Its investigational and market-authorisation status should be stated
              accurately, particularly for European audiences.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAZOLE</h3>
            <p>
              NOVAZOLE contains{" "}
              <Link href="/compounds/anastrozole" className={linkClass}>Anastrozole 1 mg</Link>,
              identified by CAS Number 120511-73-1. Anastrozole is an aromatase inhibitor authorised in
              selected settings for hormone-receptor-positive breast cancer in postmenopausal women. It
              requires separate contraindications, bone-health information and professional prescribing
              guidance.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">OXYDROL</h3>
            <p>
              <Link href="/products/tablets/oxydrol" className={linkClass}>OXYDROL</Link>{" "}
              contains Oxymetholone 50 mg, associated with CAS Number 434-07-1. Oxymetholone is a
              synthetic anabolic-androgenic steroid with significant liver-related safety concerns. Its
              product information should emphasise regulatory status, contraindications, batch
              documentation and warnings against non-medical use.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">PRIMONOVA</h3>
            <p>
              PRIMONOVA contains{" "}
              <Link href="/compounds/metenolone-acetate" className={linkClass}>Metenolone Acetate 25 mg</Link>,
              identified by CAS Number 434-05-9. Metenolone Acetate is a steroid ester with a different
              chemical and safety profile from Methandienone. It requires independent quality records,
              regulatory review, contraindications and balanced risk communication.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">PROVINOVA</h3>
            <p>
              <Link href="/products/tablets/provinova" className={linkClass}>PROVINOVA</Link>{" "}
              contains Mesterolone 25 mg, identified by CAS Number 1424-00-6. Mesterolone is a synthetic
              androgen derived from dihydrotestosterone. Its product information should separately
              address authorised use, contraindications, prostate-related precautions, medicine
              interactions and applicable prescription requirements.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          NOVAMETH should ultimately be presented through accurate chemical identification, transparent
          batch documentation, clear safety information and verified regulatory status rather than
          exaggerated performance claims or repetitive keyword placement.
        </p>
      </div>
    </section>
  );
}

function NovamorenEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>NOVAMOREN by Nova Techsciences</strong> is presented as an oral tablet containing{" "}
            <Link href="/compounds/nandrolone-phenylpropionate" className={linkClass}>
              Ibutamoren Mesylate
            </Link>
            , also known as MK-677. Ibutamoren Mesylate is a small-molecule, non-peptide growth-hormone
            secretagogue identified by CAS Number 159752-10-0. It acts through the ghrelin-receptor
            pathway and has been investigated for its effects on natural growth-hormone and IGF-1 secretion.
          </p>
          <p>
            The European Medicines Agency granted ibutamoren mesilate an orphan designation for
            investigation in growth-hormone deficiency. However, the EMA clearly states that an orphan
            designation is not a marketing authorisation. Evidence of quality, safety and efficacy is
            still required before an investigational compound can be authorised as a medicine.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">NOVAMOREN Product Overview</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> NOVAMOREN</li>
            <li><strong>Active compound:</strong> Ibutamoren Mesylate or MK-677</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>Compound category:</strong> Growth-hormone secretagogue</li>
            <li><strong>CAS Number:</strong> 159752-10-0</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The NOVAMOREN label should state the verified strength, complete list of excipients, tablet
            quantity, approved storage conditions, batch number, manufacturing date and expiry date.
            Online information should remain consistent with the packaging, Certificate of Analysis and
            applicable regulatory documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            A dependable NOVAMOREN product profile should be supported by identity testing,
            active-ingredient assay, tablet content-uniformity analysis, dissolution testing, impurity
            assessment, microbiological controls and packaging-integrity verification.
          </p>
          <p>
            Every manufactured batch should carry a unique identification number linked to its
            production history and laboratory-release records. Claims concerning pharmaceutical
            quality, purity or clinical benefits should only be published when supported by current and
            verifiable evidence.
          </p>
          <p>
            For audiences in the United Kingdom, the Netherlands and other European markets, Nova
            Techsciences should clearly state the product’s marketing-authorisation status, responsible
            manufacturer and adverse-event reporting procedure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Ibutamoren remains investigational in the context described by the EMA. In a randomised
            study involving older adults, MK-677 increased fasting blood glucose by an average of
            approximately 5 mg/dL and reduced insulin sensitivity. These findings demonstrate why
            glucose regulation and other possible effects require proper clinical assessment.
          </p>
          <p>
            NOVAMOREN should not be presented for unsupervised muscle gain, fat loss, bodybuilding or
            hormone enhancement. Ibutamoren is also prohibited at all times under the 2026 World
            Anti-Doping Agency Prohibited List. It should not be used by minors or without qualified
            medical and regulatory oversight.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">NOVAZOLE</h3>
            <p>
              <Link href="/products/tablets/novazole" className={linkClass}>NOVAZOLE</Link>{" "}
              contains Anastrozole, identified by CAS Number 120511-73-1. Anastrozole is an aromatase
              inhibitor with specific authorised medical uses and separate contraindications,
              bone-health considerations and prescription requirements. It should not be presented as a
              general hormone-management or performance product.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">OXYDROL</h3>
            <p>
              OXYDROL contains{" "}
              <Link href="/compounds/oxymetholone" className={linkClass}>Oxymetholone</Link>, associated
              with CAS Number 434-07-1. Oxymetholone is a synthetic anabolic-androgenic steroid with a
              substantially different chemical and safety profile from Ibutamoren Mesylate. Its product
              information should prioritise legal status, contraindications and professional oversight.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">PRIMONOVA</h3>
            <p>
              <Link href="/products/tablets/primonova" className={linkClass}>PRIMONOVA</Link>{" "}
              contains Methenolone Acetate, identified by CAS Number 434-05-9. Methenolone Acetate is a
              steroid ester and must be supported by separate quality records, regulatory documentation
              and safety information. It should not be treated as interchangeable with growth-hormone
              secretagogues.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">PROVINOVA</h3>
            <p>
              PROVINOVA contains{" "}
              <Link href="/compounds/mesterolone" className={linkClass}>Mesterolone USP</Link>, identified
              by CAS Number 1424-00-6. Mesterolone is a synthetic anabolic-androgenic steroid derived
              from dihydrotestosterone. Its product page should independently address authorised status,
              contraindications, interaction checks and country-specific prescription requirements.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">SPIROCLEN</h3>
            <p>
              <Link href="/products/tablets/spiroclen" className={linkClass}>SPIROCLEN</Link>{" "}
              contains Clenbuterol Hydrochloride, associated with CAS Number 21898-19-1. It is
              chemically and pharmacologically distinct from Ibutamoren. Its information should clearly
              state the applicable legal status, verified formulation, contraindications and need for
              qualified medical supervision.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          NOVAMOREN should ultimately be presented through accurate compound identification,
          transparent batch documentation, balanced safety information and clearly stated regulatory status.
        </p>
      </div>
    </section>
  );
}

function SpiroclenEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>SPIROCLEN by Nova Techsciences</strong> is presented as an oral tablet containing{" "}
            <Link href="/compounds/clenbuterol-hydrochloride" className={linkClass}>
              Clenbuterol Hydrochloride 40 mcg
            </Link>
            . Clenbuterol Hydrochloride is a beta-adrenergic agonist identified by CAS Number
            21898-19-1. PubChem classifies it as the hydrochloride salt of clenbuterol and notes its
            pharmacological role as a beta-adrenergic agonist and bronchodilator.
          </p>
          <p>
            Clenbuterol has been authorised for limited medical uses in certain countries, but its
            regulatory status differs considerably between markets. Therefore, any indication or
            therapeutic claim displayed for SPIROCLEN must match the current marketing authorisation in
            the country where the product is offered.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">SPIROCLEN Product Overview</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> SPIROCLEN</li>
            <li><strong>Active compound:</strong> Clenbuterol Hydrochloride</li>
            <li><strong>Strength:</strong> 40 mcg per tablet</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 21898-19-1</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should clearly identify the full composition, tablet quantity, excipients,
            batch number, manufacturing date, expiry date and approved storage conditions. Information
            displayed on the website must remain consistent with the finished packaging, Certificate of
            Analysis and current regulatory documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            A dependable SPIROCLEN product profile should be supported by appropriate pharmaceutical
            testing. Relevant controls may include raw-material identification, active-ingredient assay,
            tablet content uniformity, dissolution testing, impurity analysis, microbiological
            assessment and packaging-integrity verification.
          </p>
          <p>
            Each manufactured batch should carry a unique number connected to its production history
            and laboratory-release results. Statements relating to pharmaceutical quality, purity or
            manufacturing standards should only be published when supported by verifiable records.
          </p>
          <p>
            For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
            clearly disclose the product’s marketing-authorisation status, legal supply category,
            responsible manufacturer and adverse-event reporting procedure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Clenbuterol may affect the cardiovascular and nervous systems. Reported adverse effects can
            include palpitations, tremor and restlessness, while people with heart conditions, abnormal
            heart rhythms, high blood pressure or an overactive thyroid may face additional risks.
          </p>
          <p>
            SPIROCLEN should not be presented as a weight-loss, fat-burning, cutting or bodybuilding
            product. It should not be used by minors or without appropriate medical supervision.
            Clenbuterol and other beta-2 agonists are also prohibited under the 2026 World Anti-Doping
            Agency Prohibited List, subject to limited exceptions for specified inhaled medicines.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">STANOVA 10</h3>
            <p>
              <Link href="/products/tablets/stanova-10" className={linkClass}>STANOVA 10</Link>{" "}
              contains Stanozolol 10 mg, identified by CAS Number 10418-03-8. Stanozolol is an
              anabolic-androgenic steroid with separate liver, cardiovascular and hormonal safety
              concerns. Its information should emphasise regulatory status, contraindications and
              professional oversight rather than physique or performance claims.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">STANOVA 50</h3>
            <p>
              STANOVA 50 contains{" "}
              <Link href="/compounds/stanozolol-roxonova" className={linkClass}>Stanozolol 50 mg</Link>{" "}
              and shares CAS Number 10418-03-8 with the lower-strength formulation. The different
              strength should be displayed prominently to reduce selection errors. Batch documentation,
              liver-related precautions and legal supply requirements should be stated independently.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">SUPERNOVA</h3>
            <p>
              <Link href="/products/tablets/supernova" className={linkClass}>SUPERNOVA</Link>{" "}
              is presented as a tablet containing Methyldrostanolone 10 mg, identified by CAS Number
              3381-88-2. It is an oral anabolic compound requiring separate quality records, clear liver
              and cardiovascular warnings, verified regulatory status and prominent advice against
              unsupervised non-medical use.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">TAMONOVA</h3>
            <p>
              TAMONOVA contains{" "}
              <Link href="/compounds/tamoxifen-citrate" className={linkClass}>Tamoxifen Citrate 20 mg</Link>,
              associated with CAS Number 54965-24-1. Tamoxifen is a selective oestrogen-receptor
              modulator with authorised clinical uses and important risks, including blood-clot and
              pregnancy-related considerations. It should not be promoted for unsupervised post-cycle
              hormone management.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">TELINOVA</h3>
            <p>
              <Link href="/products/tablets/telinova" className={linkClass}>TELINOVA</Link>{" "}
              contains Telmisartan 20 mg, identified by CAS Number 144701-48-4. Telmisartan is an
              antihypertensive medicine and is chemically unrelated to Clenbuterol Hydrochloride. Its
              information should cover blood-pressure monitoring, pregnancy restrictions, interactions,
              kidney considerations and authorised prescribing requirements.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          SPIROCLEN should ultimately be presented through accurate chemical identification, transparent
          batch documentation, balanced safety information and clearly stated regulatory status.
        </p>
      </div>
    </section>
  );
}

function TurinovaEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>TURINOVA by Nova Techsciences</strong> is presented as an oral tablet formulation
            containing{" "}
            <Link href="/compounds/chlorodehydromethyltestosterone" className={linkClass}>
              Chlorodehydromethyltestosterone
            </Link>
            , also known as Dehydrochloromethyltestosterone. The compound is identified by CAS Number
            2446-23-3 and has the molecular formula C20H27ClO2. It belongs to the synthetic
            anabolic-androgenic steroid category and is chemically distinct from testosterone,
            aromatase inhibitors, dopamine agonists and fertility medicines.
          </p>
          <p>
            This page provides neutral product-identification, quality, regulatory and safety
            information. It does not replace authorised prescribing information, an approved patient
            leaflet or guidance from a qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">TURINOVA Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Important identification details include:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> TURINOVA</li>
            <li><strong>Active compound:</strong> Chlorodehydromethyltestosterone</li>
            <li><strong>Alternative name:</strong> Dehydrochloromethyltestosterone</li>
            <li><strong>Dosage form:</strong> Oral tablet</li>
            <li><strong>CAS Number:</strong> 2446-23-3</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The finished product label should clearly identify the verified tablet strength, complete
            formulation, inactive ingredients, tablet quantity, batch number, manufacturing date,
            expiry date and approved storage conditions. Information published online should remain
            consistent with the product packaging, Certificate of Analysis and batch-release documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            An oral pharmaceutical product requires documented controls for raw-material identity,
            active-ingredient concentration, tablet content uniformity, dissolution, impurities,
            microbiological quality, stability and packaging integrity.
          </p>
          <p>
            Each TURINOVA batch should carry a unique identification number connected to its
            manufacturing history and laboratory-release results. Claims relating to pharmaceutical
            grade, purity, testing or manufacturing standards should only be published when current
            supporting evidence is available.
          </p>
          <p>
            For the United Kingdom, the Netherlands and other European markets, Nova Techsciences should
            clearly disclose the product’s marketing-authorisation status, legal supply category,
            responsible manufacturer and adverse-event reporting procedure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Chlorodehydromethyltestosterone is an anabolic steroid. The NHS warns that non-medical
            anabolic-steroid use can cause serious cardiovascular, hormonal, reproductive, liver,
            kidney and psychological effects and may lead to dependence.
          </p>
          <p>
            TURINOVA should not be presented for bodybuilding, muscle gain, athletic recovery,
            unsupervised hormone management or use by minors. Dosage schedules, cycles, combinations or
            methods intended to reduce adverse effects should not be taken from unofficial sources.
          </p>
          <p>
            Dehydrochloromethyltestosterone is also listed as a prohibited anabolic agent under the 2026
            World Anti-Doping Agency Prohibited List.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">AROMANOVA</h3>
            <p>
              <Link href="/products/tablets/aromanova" className={linkClass}>AROMANOVA</Link>{" "}
              contains Exemestane, identified by CAS Number 107868-30-4. Exemestane is an aromatase
              inhibitor with specific authorised medical applications. Its product information should
              separately address prescription status, pregnancy restrictions, bone-health
              considerations, adverse reactions and applicable market authorisation.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">CABERNOVA</h3>
            <p>
              CABERNOVA contains{" "}
              <Link href="/compounds/cabergoline" className={linkClass}>Cabergoline</Link>, identified by
              CAS Number 81409-90-7. Cabergoline is a dopamine-receptor agonist used in selected
              medically supervised circumstances involving prolactin. Its information should cover
              cardiovascular precautions, contraindications, medicine interactions and appropriate
              clinical monitoring.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">CLOMINOVA</h3>
            <p>
              <Link href="/products/tablets/clominova" className={linkClass}>CLOMINOVA</Link>{" "}
              contains Clomiphene Citrate, identified by CAS Number 50-41-9. Clomiphene is associated
              with medically supervised ovulation treatment. Its page should include information about
              pregnancy restrictions, visual disturbances, ovarian response, liver conditions and
              professional fertility assessment.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">ENCLOMINOVA</h3>
            <p>
              ENCLOMINOVA contains{" "}
              <Link href="/compounds/enclomiphene-citrate" className={linkClass}>Enclomiphene Citrate</Link>,
              identified by CAS Number 7599-79-3. Although chemically related to clomiphene, it is a
              distinct compound requiring independent evidence, regulatory review, safety documentation
              and confirmation of its authorised status in each intended market.
            </p>
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-semibold text-gray-800">FEMANOVA</h3>
            <p>
              <Link href="/products/tablets/femanova" className={linkClass}>FEMANOVA</Link>{" "}
              contains Letrozole, identified by CAS Number 112809-51-5. Letrozole is an aromatase
              inhibitor with authorised uses in specific hormone-dependent breast-cancer settings. It
              is not interchangeable with Exemestane or fertility medicines and requires separate
              contraindication and monitoring information.
            </p>
          </div>
        </div>

        <p className="font-semibold text-gray-800">
          TURINOVA should ultimately be presented through accurate chemical identification, transparent
          batch documentation, prominent safety information and clearly verified regulatory status
          rather than performance claims or unnatural keyword repetition.
        </p>
      </div>
    </section>
  );
}

function SustovaEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>SUSTOVA by Nova Techsciences</strong> is presented as a testosterone blend
            injectable with a stated strength of 250 mg/ml. The product information associates the
            formulation with CAS Number 58-22-0. This CAS number identifies testosterone, the parent
            hormone, rather than every possible testosterone ester that may be included in a blended
            formulation. For complete accuracy, the website, vial label and Certificate of Analysis
            should identify each{" "}
            <Link
              href="/compounds/testosterone-blend"
              className="font-semibold text-[#1f5f99] underline underline-offset-2"
            >
              testosterone component
            </Link>{" "}
            and its individual concentration.
          </p>
          <p>
            This page provides neutral product-identification, quality and safety information. It does
            not replace an authorised Summary of Product Characteristics, patient information leaflet
            or advice from a qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">SUSTOVA Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Important product details include:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> SUSTOVA</li>
            <li><strong>Product category:</strong> Testosterone blend injectable</li>
            <li><strong>Stated strength:</strong> 250 mg/ml</li>
            <li><strong>Parent-compound CAS Number:</strong> 58-22-0</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            When a medicine contains esterified forms of testosterone, accurate documentation should
            distinguish the parent hormone from each ester used in the finished formulation. The
            complete composition, excipients, administration route, storage conditions, batch number,
            manufacturing date and expiry date should appear consistently across the label, packaging
            and official product records.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            Injectable formulations require controlled manufacturing and documented quality
            assessment. Relevant records may include raw-material identity testing, active-compound
            assay, impurity analysis, sterility testing, microbiological controls, particulate
            assessment and container-closure integrity.
          </p>
          <p>
            Every SUSTOVA batch should carry a unique batch number linked to production and laboratory
            records. Claims regarding purity, pharmaceutical quality or manufacturing standards should
            only be published when current evidence is available. Clear traceability also helps
            healthcare professionals and regulatory reviewers confirm that the product information
            matches the batch being evaluated.
          </p>
          <p>
            For the{" "}
            <Link href="/uk" className="font-semibold text-[#1f5f99] underline underline-offset-2">
              United Kingdom
            </Link>{" "}
            and the{" "}
            <Link href="/nl" className="font-semibold text-[#1f5f99] underline underline-offset-2">
              Netherlands
            </Link>
            , the page should state whether the product holds the required marketing authorisation. The
            MHRA regulates medicines in the UK, while the Medicines Evaluation Board evaluates and
            registers medicines in the Netherlands.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Testosterone belongs to the anabolic-androgenic steroid class. In the UK, anabolic steroids
            are prescription-only medicines, and non-medical use may lead to serious side effects and
            dependence. Potential concerns can include hormonal disruption, fertility changes, altered
            cholesterol, cardiovascular complications, mood changes and injection-related problems.
          </p>
          <p>
            SUSTOVA should not be presented for self-medication, use by minors or unsupervised
            performance enhancement. Dosage schedules, injection techniques, cycles and product
            combinations should not be taken from unofficial online sources. Any lawful medical use
            requires individual assessment and ongoing monitoring by an appropriately qualified
            healthcare professional.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {SUSTOVA_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          SUSTOVA should ultimately be presented through accurate composition, transparent batch
          documentation, balanced safety information and clearly stated regulatory status. This
          approach creates a more trustworthy product page for healthcare professionals, distributors
          and regulatory reviewers in European markets.
        </p>
      </div>
    </section>
  );
}

function NandrovaPEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>NANDROVA P by Nova Techsciences</strong> is presented as an injectable formulation
            containing{" "}
            <Link
              href="/compounds/nandrolone-phenylpropionate"
              className="font-semibold text-[#1f5f99] underline underline-offset-2"
            >
              Nandrolone Phenylpropionate
            </Link>{" "}
            at 100 mg/ml. Nandrolone Phenylpropionate is an esterified nandrolone compound identified by
            CAS Number 62-90-8. It is chemically different from Nandrolone Decanoate and should be
            treated as a separate pharmaceutical substance with its own composition, quality
            documentation, contraindications and regulatory status.
          </p>
          <p>
            This information is intended to provide clear product identification and responsible safety
            guidance. It does not replace an authorised Summary of Product Characteristics, prescribing
            information, patient leaflet or consultation with a qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Product Information</h2>
          <h3 className="text-lg font-semibold text-gray-800">Important NANDROVA P details include:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> NANDROVA P</li>
            <li><strong>Active compound:</strong> Nandrolone Phenylpropionate</li>
            <li><strong>Strength:</strong> 100 mg/ml</li>
            <li><strong>Dosage form:</strong> Injectable formulation</li>
            <li><strong>CAS Number:</strong> 62-90-8</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should clearly state the full ingredient composition, excipients,
            administration route, batch number, manufacturing date, expiry date and approved storage
            conditions. Website information should remain consistent with the vial, outer packaging,
            catalogue and Certificate of Analysis.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            Injectable formulations require controlled production and documented laboratory
            assessment. Quality records may include raw-material identification, active-compound assay,
            impurity analysis, sterility testing, microbiological controls, particulate examination and
            container-closure integrity.
          </p>
          <p>
            Every NANDROVA P batch should have a unique identification number linked to its production
            and testing records. Statements relating to purity, manufacturing quality or compliance
            should only be published when supported by current, verifiable documentation.
          </p>
          <p>
            For the United Kingdom, Netherlands and other European markets, the page should clearly
            disclose the applicable marketing-authorisation status, legal supply category, responsible
            manufacturer and adverse-event reporting procedure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Nandrolone is an anabolic-androgenic steroid. It may produce serious adverse effects and
            should only be considered under qualified medical supervision where its use is legally
            authorised. Potential concerns associated with nandrolone include hormonal suppression,
            fertility changes, cardiovascular effects, altered cholesterol levels, liver or kidney
            complications and signs of virilisation.
          </p>
          <p>
            NANDROVA P must not be presented for self-medication, unsupervised physique enhancement or
            use by minors. Dosing schedules, injection techniques, cycles and compound combinations
            should not be taken from unofficial internet sources.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {NANDROVA_P_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          NANDROVA P should ultimately be presented through accurate compound identification,
          transparent quality documentation, clear regulatory status and balanced safety communication.
        </p>
      </div>
    </section>
  );
}

function TrenovaEEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>TRENOVA E by Nova Techsciences</strong> is presented as an injectable formulation
            containing{" "}
            <Link
              href="/compounds/trenbolone-enanthate"
              className="font-semibold text-[#1f5f99] underline underline-offset-2"
            >
              Trenbolone Enanthate
            </Link>{" "}
            at 200 mg/ml. The enanthate ester gives the compound a different chemical identity from
            Trenbolone Acetate and Trenbolone Hexahydrobenzylcarbonate. The Nova Techsciences product
            page previously displayed CAS Number 10161-34-9; authoritative NIH records identify
            Trenbolone Enanthate with CAS Number 1629618-98-9.
          </p>
          <p>
            This information is intended to explain the product’s identity, documentation requirements
            and safety considerations. It must not replace authorised prescribing information, an
            approved Summary of Product Characteristics or advice from a qualified healthcare
            professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">TRENOVA E Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">The principal product details are:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> TRENOVA E</li>
            <li><strong>Active compound:</strong> Trenbolone Enanthate</li>
            <li><strong>Strength:</strong> 200 mg/ml</li>
            <li><strong>Dosage form:</strong> Injectable formulation</li>
            <li><strong>Correct CAS Number:</strong> 1629618-98-9</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The complete product label should also identify the excipients, administration route,
            batch number, manufacturing date, expiry date and approved storage conditions. Information
            shown online must remain consistent with the vial, packaging and supporting laboratory
            documents.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Control and Traceability</h2>
          <p>
            Injectable formulations require carefully controlled manufacturing and testing. Relevant
            quality records may include active-ingredient identification, concentration analysis,
            impurity testing, sterility examination, particulate assessment, microbiological controls
            and container-closure integrity.
          </p>
          <p>
            Each batch should have a unique identification number connected to its production history,
            testing results and expiry information. Nova Techsciences should only publish claims
            regarding quality, purity or manufacturing compliance when current evidence is available.
          </p>
          <p>
            For visitors in the Netherlands and United Kingdom, the page should clearly state the
            product’s marketing-authorisation status, legal supply category, responsible manufacturer
            and adverse-event reporting procedure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Trenbolone belongs to the anabolic-androgenic steroid category. Unsupervised
            anabolic-steroid use can lead to serious cardiovascular, hormonal, reproductive, liver,
            kidney and psychological effects. The NHS warns that misuse can also cause dependence and
            potentially dangerous medical complications.
          </p>
          <p>
            TRENOVA E should not be presented for self-medication, unsupervised physique enhancement or
            use by minors. Dosage, injection frequency, cycles and combinations must not be taken from
            unofficial online sources.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {TRENOVA_E_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          TRENOVA E should ultimately be presented using accurate compound identification, transparent
          quality records and clear safety communication. This approach supports trustworthy product
          information without unsupported performance claims or unnatural keyword repetition.
        </p>
      </div>
    </section>
  );
}

function RoxonovaEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>ROXONOVA by Nova Techsciences</strong> is an injectable formulation containing{" "}
            <Link
              href="/compounds/stanozolol-roxonova"
              className="font-semibold text-[#1f5f99] underline underline-offset-2"
            >
              Stanozolol at 50 mg/ml
            </Link>
            . Stanozolol is a synthetic anabolic-androgenic compound identified by CAS Number
            10418-03-8. It has a different chemical structure and pharmaceutical profile from
            esterified testosterone and trenbolone formulations.
          </p>
          <p>
            This product information is intended to provide clear details about ROXONOVA’s identity,
            composition, quality requirements and safety considerations. It does not replace an
            authorised Summary of Product Characteristics, patient leaflet or guidance from a
            qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">ROXONOVA Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Key product-identification details include:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> ROXONOVA</li>
            <li><strong>Active compound:</strong> Stanozolol</li>
            <li><strong>Strength:</strong> 50 mg/ml</li>
            <li><strong>Dosage form:</strong> Injectable formulation</li>
            <li><strong>CAS Number:</strong> 10418-03-8</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should clearly identify the complete formulation, excipients,
            administration route, storage conditions, batch number, manufacturing date and expiry
            date. Information shown on the Nova Techsciences website should remain consistent with the
            vial label, outer packaging and verified batch documents.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Testing and Product Traceability</h2>
          <p>
            Injectable products require controlled manufacturing and documented quality testing.
            Appropriate checks may include active-ingredient identification, concentration analysis,
            impurity testing, sterility assessment, microbiological examination, particulate testing
            and container-closure integrity.
          </p>
          <p>
            Every ROXONOVA batch should carry a unique number linked to its manufacturing and testing
            records. Claims regarding quality, purity or compliance should only be published where
            current supporting documentation is available.
          </p>
          <p>
            For the Netherlands, United Kingdom and other European markets, the page should clearly
            state the applicable marketing-authorisation status, legal supply category, responsible
            manufacturer and adverse-event reporting procedure.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Stanozolol belongs to the anabolic-androgenic steroid class. Unsupervised anabolic-steroid
            use may cause serious cardiovascular, hormonal, reproductive, liver, kidney and
            psychological effects. The NHS also identifies anabolic steroids as prescription-only
            medicines in the UK and warns that misuse may lead to serious side effects and dependence.
          </p>
          <p>
            ROXONOVA should not be used for self-medication, unsupervised physique enhancement or by
            minors. People with liver disease, cardiovascular conditions, prostate or breast cancer,
            uncontrolled cholesterol disorders or sensitivity to formulation ingredients require
            professional medical assessment.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {ROXONOVA_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          ROXONOVA should be presented through accurate chemical identification, transparent batch
          documentation and balanced safety information. This gives healthcare professionals,
          distributors and regulatory reviewers clearer product information without relying on
          unsupported or excessively promotional claims.
        </p>
      </div>
    </section>
  );
}

function TestovaPPEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>TESTOVA PP by Nova Techsciences</strong> is an injectable formulation containing{" "}
            <Link
              href="/compounds/testosterone-phenylpropionate"
              className="font-semibold text-[#1f5f99] underline underline-offset-2"
            >
              Testosterone Phenylpropionate at 100 mg/ml
            </Link>
            . Testosterone Phenylpropionate is an esterified testosterone compound identified by CAS
            Number 1255-49-8. Chemical databases list its molecular formula as C28H36O3. Its esterified
            structure distinguishes it from Testosterone Enanthate, Testosterone Cypionate and
            non-esterified testosterone formulations.
          </p>
          <p>
            This page provides clear product-identification, quality and safety information. It does
            not replace an authorised Summary of Product Characteristics, patient information leaflet
            or advice from a licensed healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">TESTOVA PP Product Overview</h2>
          <h3 className="text-lg font-semibold text-gray-800">Important product information includes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> TESTOVA PP</li>
            <li><strong>Active compound:</strong> Testosterone Phenylpropionate</li>
            <li><strong>Strength:</strong> 100 mg/ml</li>
            <li><strong>Dosage form:</strong> Injectable formulation</li>
            <li><strong>CAS Number:</strong> 1255-49-8</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The TESTOVA PP label should clearly state its complete composition, excipients,
            administration route, storage conditions, batch number, manufacturing date and expiry
            date. Information displayed on the Nova Techsciences website should remain consistent with
            the vial label, outer packaging, catalogue and supporting batch documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality Testing and Traceability</h2>
          <p>
            An injectable pharmaceutical formulation requires controlled manufacturing and documented
            quality checks. Relevant records may include raw-material identity testing, compound assay,
            impurity analysis, sterility testing, microbiological examination, particulate assessment
            and container-closure integrity.
          </p>
          <p>
            Each TESTOVA PP batch should carry a unique batch number connected to its production
            records, laboratory results and expiry information. Claims concerning quality, purity or
            pharmaceutical standards should only be published when supported by current and verifiable
            documentation.
          </p>
          <p>
            For the United Kingdom and{" "}
            <Link href="/nl" className="font-semibold text-[#1f5f99] underline underline-offset-2">
              Netherlands
            </Link>
            , the product page should clearly explain the applicable legal supply and
            marketing-authorisation status. Medicines licensed in the UK can be checked through the
            official MHRA product-information system.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Testosterone belongs to the anabolic-androgenic steroid class. Unsupervised
            anabolic-steroid use can cause serious adverse effects and dependence. Potential concerns
            may include hormonal suppression, fertility changes, altered cholesterol levels,
            cardiovascular complications, mood changes and injection-related problems.
          </p>
          <p>
            TESTOVA PP should not be used for self-medication, unsupervised performance enhancement or
            by minors. Dosage, injection frequency, cycles or compound combinations should not be taken
            from unofficial online sources. Any lawful medical use requires assessment and monitoring
            by an appropriately qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {TESTOVA_PP_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          TESTOVA PP should ultimately be presented through accurate compound identification,
          transparent quality records and balanced safety information. This approach provides clearer
          information for healthcare professionals, distributors and regulatory reviewers without
          relying on exaggerated claims or unnatural keyword repetition.
        </p>
      </div>
    </section>
  );
}

function TestovaBaseEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <div className="space-y-4">
          <p>
            <strong>TESTOVA BASE by Nova Techsciences</strong> is an injectable testosterone
            suspension containing{" "}
            <Link
              href="/compounds/testosterone-suspension"
              className="font-semibold text-[#1f5f99] underline underline-offset-2"
            >
              Testosterone Base at 100 mg/ml
            </Link>
            . Unlike esterified testosterone compounds, Testosterone Base does not contain an attached
            ester. The Nova Techsciences product page identifies the active compound with CAS Number
            58-22-0 and describes the formulation as water-based.
          </p>
          <p>
            This product information is intended to explain the identity, formulation, quality
            requirements and safety considerations associated with TESTOVA BASE. It does not replace
            an authorised Summary of Product Characteristics, prescribing information or advice from a
            qualified healthcare professional.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">TESTOVA BASE Product Overview</h2>
          <p>
            As a non-esterified testosterone formulation, TESTOVA BASE has a different pharmaceutical
            profile from Testosterone Propionate, Testosterone Phenylpropionate and Testosterone
            Cypionate. These products should not be considered interchangeable, because their
            formulations, concentrations and release characteristics are different.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">Important product details include:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> TESTOVA BASE</li>
            <li><strong>Active compound:</strong> Testosterone Base</li>
            <li><strong>Strength:</strong> 100 mg/ml</li>
            <li><strong>Dosage form:</strong> Injectable testosterone suspension</li>
            <li><strong>CAS Number:</strong> 58-22-0</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
          </ul>
          <p>
            The product label should clearly state the complete composition, excipients,
            administration route, storage conditions, batch number, manufacturing date and expiry date.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality, Testing and Traceability</h2>
          <p>
            Every TESTOVA BASE batch should be supported by appropriate quality-control documentation.
            Relevant checks may include active-ingredient identification, concentration testing,
            impurity analysis, sterility testing, microbiological examination, particulate assessment
            and container-closure integrity.
          </p>
          <p>
            Nova Techsciences should ensure that information published on the website is consistent
            with the vial, outer packaging, catalogue and Certificate of Analysis. For the UK,
            Netherlands and other European markets, product information should also clearly communicate
            its marketing-authorisation status, legal supply category and adverse-event reporting process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Safety Information</h2>
          <p>
            Testosterone is an anabolic-androgenic steroid and prescription-only medicine in the United
            Kingdom. Unsupervised anabolic-steroid use can cause serious hormonal, cardiovascular,
            reproductive, liver, kidney and psychological effects.
          </p>
          <p>
            TESTOVA BASE should only be used where legally authorised and under qualified medical
            supervision. It should not be promoted for self-medication, unsupervised bodybuilding or
            use by minors. Patients with prostate or breast cancer, cardiovascular disease, liver or
            kidney disorders, polycythaemia or sensitivity to any formulation ingredient require
            professional medical assessment.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {TESTOVA_BASE_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          TESTOVA BASE should ultimately be presented through accurate chemical identification,
          transparent quality documentation and responsible safety communication. This approach gives
          healthcare professionals, distributors and regulatory reviewers clearer information about
          the Nova Techsciences product.
        </p>
      </div>
    </section>
  );
}

function NovaGainCEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <p>
          <strong>NOVA GAIN C by Nova Techsciences</strong> is presented as a{" "}
          <Link
            href="/products/injectables/nova-cut-mix"
            className="font-semibold text-[#1f5f99] underline underline-offset-2"
          >
            multi-compound injectable
          </Link>{" "}
          formulation containing testosterone, nandrolone and boldenone derivatives. Because the
          formulation contains several active substances, the exact ester form, concentration and
          pharmaceutical specification of each ingredient should always be confirmed through the
          approved product label, batch documentation and Certificate of Analysis. The product page
          currently lists its CAS information as variable because it is a multi-compound blend.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2>
          <p>
            A combination injectable requires careful product identification and consistent
            manufacturing controls. Each active ingredient must be tested for identity, concentration,
            purity and conformity with the approved specification. The finished formulation should
            also be evaluated for sterility, particulate contamination, container integrity and
            stability throughout its stated shelf life.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">
            Important NOVA GAIN C information should include:
          </h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> NOVA GAIN C</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
            <li><strong>Dosage form:</strong> Injectable formulation</li>
            <li><strong>Active-compound group:</strong> Testosterone, nandrolone and boldenone derivatives</li>
            <li><strong>CAS number:</strong> Varies according to the ingredients used</li>
            <li><strong>Supply status:</strong> Subject to medical and national regulatory requirements</li>
          </ul>
          <p>
            Nova Techsciences should ensure that the composition shown on the website matches the vial
            label, outer packaging, catalogue and batch-release documents.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality and Traceability</h2>
          <p>
            Every NOVA GAIN C batch should carry a unique batch number connected to its manufacturing
            date, expiry date and laboratory-testing records. Supporting information may include an
            assay report, impurity profile, raw-material specifications, sterility testing,
            microbiological controls and packaging-integrity checks.
          </p>
          <p>
            For audiences in the{" "}
            <Link href="/nl" className="font-semibold text-[#1f5f99] underline underline-offset-2">
              Netherlands
            </Link>{" "}
            and{" "}
            <Link href="/uk" className="font-semibold text-[#1f5f99] underline underline-offset-2">
              United Kingdom
            </Link>
            , the product page should clearly communicate its regulatory status, responsible
            manufacturer, authorised supply category and adverse-event reporting process. Claims
            regarding pharmaceutical quality or manufacturing standards should only be published when
            they can be supported by current documentation.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Safety Information</h2>
          <p>
            Testosterone, nandrolone and boldenone belong to the anabolic-androgenic steroid category.
            Products containing these substances may affect hormonal function, fertility, cholesterol,
            blood pressure, cardiovascular health, mood and other body systems. Anabolic steroids are
            prescription-only medicines in the UK, and their non-medical use can result in serious side
            effects and dependence.
          </p>
          <p>
            NOVA GAIN C should not be presented for self-medication, unsupervised performance
            enhancement or use by minors. No dosage, injection schedule, cycle or combination guidance
            should be followed from unofficial online material.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {NOVA_GAIN_C_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          NOVA GAIN C should ultimately be presented through transparent composition, verifiable
          quality records and responsible safety information rather than unsupported performance or
          physique claims.
        </p>
      </div>
    </section>
  );
}

function NovaCutMixEditorialContent() {
  return (
    <section className="bg-white rounded-xl shadow-lg p-6 sm:p-8 text-gray-700">
      <div className="max-w-5xl space-y-8 leading-7">
        <p>
          <strong>NOVA CUT MIX by Nova Techsciences</strong> is presented as a multi-compound
          injectable containing testosterone, trenbolone and drostanolone derivatives. Because
          several anabolic-androgenic substances are combined in one formulation, the exact ester
          forms, individual concentrations, excipients and regulatory status should be confirmed
          through the current product label, Certificate of Analysis and supporting documentation.
          The Nova Techsciences website lists the CAS information as varying because NOVA CUT MIX
          contains multiple compounds.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Product Overview</h2>
          <p>
            A multi-ingredient injectable requires clear identification of every active substance.
            Product documentation should state the name and concentration of each compound, batch
            number, manufacturing date, expiry date, recommended storage conditions and responsible
            manufacturer.
          </p>
          <h3 className="text-lg font-semibold text-gray-800">Important product information includes:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Product name:</strong> NOVA CUT MIX</li>
            <li><strong>Brand:</strong> Nova Techsciences</li>
            <li><strong>Dosage form:</strong> Injectable formulation</li>
            <li><strong>Compound group:</strong> Anabolic-androgenic substances</li>
            <li><strong>CAS number:</strong> Varies according to the individual ingredients</li>
            <li><strong>Supply status:</strong> Subject to prescription requirements and applicable national regulations</li>
          </ul>
          <p>
            Information published on the product page should remain consistent with the vial label,
            packaging, compound documentation and verified laboratory records.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Quality and Product Traceability</h2>
          <p>
            Each NOVA CUT MIX batch should be supported by appropriate identity, concentration,
            impurity, sterility and container-integrity testing. Statements concerning purity,
            pharmaceutical quality or manufacturing standards should only be published when
            supporting documents are available.
          </p>
          <p>
            For visitors in the{" "}
            <Link href="/nl" className="font-semibold text-[#1f5f99] underline underline-offset-2">
              Netherlands
            </Link>
            , United Kingdom and other European markets, the product page should also clearly explain
            the applicable marketing-authorisation status, legal supply category, responsible company
            and adverse-event reporting process.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Important Safety Information</h2>
          <p>
            Anabolic steroids are prescription-only medicines in the UK and can produce serious
            adverse effects when used without medical advice. Public-health authorities associate
            anabolic-steroid misuse with cardiovascular, hormonal, reproductive, liver, kidney and
            psychological harm.
          </p>
          <p>
            NOVA CUT MIX should not be presented for self-medication, unsupervised physique
            enhancement or use by minors. Dosage, injection frequency, cycles, stacking combinations
            and treatment duration should not be taken from unofficial online content.
          </p>
        </div>

        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Related Nova Techsciences Products</h2>
          {NOVA_CUT_MIX_RELATED_PRODUCTS.map((relatedProduct) => (
            <div key={relatedProduct.name} className="space-y-1">
              <h3 className="text-lg font-semibold text-gray-800">{relatedProduct.name}</h3>
              <p>
                <Link
                  href={relatedProduct.href}
                  className="font-semibold text-[#1f5f99] underline underline-offset-2"
                >
                  {relatedProduct.name}
                </Link>{" "}
                {relatedProduct.description}
              </p>
            </div>
          ))}
        </div>

        <p className="font-semibold text-gray-800">
          NOVA CUT MIX should ultimately be presented through transparent composition, evidence-based
          safety communication and verifiable quality records. This provides clearer user information
          and stronger credibility than repetitive keyword use or unsupported promotional claims.
        </p>
      </div>
    </section>
  );
}

/* ================= IMAGE HELPER ================= */
const getProductImages = (product) => {
  if (Array.isArray(product?.images) && product.images.length > 0) {
    const localImages = product.images.filter(isLocalAssetPath);
    if (localImages.length > 0) return localImages;
  }

  if (!product?.category || !product?.imageKey) return [];

  return getLocalProductImages(product.category, product.imageKey, 3);
};

const getMainImage = (src, product) =>
  src?.startsWith("/")
    ? src
    : getLocalProductImagePath(product?.category, product?.imageKey, 1);

const getThumbImage = (src, product) => getMainImage(src, product);

const INTERNAL_PRODUCT_LINKS = [
  {
    terms: ["Letrozole 2.5 mg", "Letrozole"],
    href: "/compounds/letrozole",
  },
  {
    terms: ["Tamoxifen Citrate 20 mg", "Tamoxifen Citrate"],
    href: "/compounds/tamonova",
  },
  {
    terms: ["Exemestane 25 mg", "Exemestane"],
    href: "/compounds/aromanova",
  },
  {
    terms: ["Enclomiphene Citrate 25 mg", "Enclomiphene Citrate"],
    href: "/compounds/enclominova",
  },
  {
    terms: ["Clomiphene Citrate 50 mg", "Clomiphene Citrate"],
    href: "/compounds/clominova",
  },
  {
    terms: ["multi-steroid blend injection"],
    href: "/compounds/nova-gain-c",
  },
  {
    terms: ["Testosterone Phenylpropionate"],
    href: "/compounds/testosterone-phenylpropionate",
  },
  {
    terms: ["Testosterone Propionate"],
    href: "/compounds/testova-p",
  },
  {
    terms: ["Testosterone Enanthate"],
    href: "/compounds/testova-e",
  },
  {
    terms: ["Testosterone Suspension"],
    href: "/compounds/testova-base",
  },
  {
    terms: ["Boldenone Undecylenate", "Boldenone"],
    href: "/compounds/boldenova",
  },
  {
    terms: ["strength support."],
    href: "/compounds/methenolone-enanthate",
  },
  {
    terms: ["Drostanolone Propionate"],
    href: "/compounds/drostanolone-propionate",
  },
  {
    terms: ["Trenbolone Hexa"],
    href: "/compounds/trenbolone-hexa-hydrobenzylcarbonate",
  },
  {
    terms: ["Trenbolone Enanthate"],
    href: "/compounds/trenbolone-enanthate",
  },
  {
    terms: ["Trenbolone Acetate"],
    href: "/compounds/trenbolone-acetate",
  },
  {
    terms: ["Nandrolone Phenylpropionate", "muscle recovery"],
    href: "/compounds/nandrolone-phenylpropionate",
  },
  {
    terms: ["TESTOVA C", "Testosterone Cypionate"],
    href: "/compounds/testosterone-cypionate",
  },
  {
    terms: ["Nandrolone Decanoate"],
    href: "/compounds/nandrolone-decanoate",
  },
  {
    terms: ["supporting balanced hormone levels"],
    href: "/compounds/testosterone-blend",
  },
  {
    terms: ["STANOVA 10"],
    href: "/compounds/stanozolol-usp",
  },
  {
    terms: ["Clenbuterol 40 mcg"],
    href: "/compounds/clenbuterol-hydrochloride",
  },
  {
    terms: ["Oxymetholone USP 50 mg"],
    href: "/compounds/oxymetholone",
  },
  {
    terms: ["Liothyronine Sodium T3 50 mcg"],
    href: "/compounds/liothyronine-sodium-t3",
  },
  {
    terms: ["Fluoxymesterone 5 mg"],
    href: "/compounds/fluoxymesterone",
  },
  {
    terms: ["Cabergoline 0.5 mg"],
    href: "/compounds/cabergoline",
  },
  {
    terms: ["Levothyroxine Sodium T4 50 mcg"],
    href: "/compounds/levothyroxine-sodium-t4",
  },
  {
    terms: [
      "Chlorodehydromethyltestosterone 10 mg",
      "Chlorodehydromethyltestosterone",
    ],
    href: "/compounds/chlorodehydromethyltestosterone",
  },
  {
    terms: ["Anastrozole 1 mg"],
    href: "/compounds/anastrozole",
  },
  {
    terms: ["Metenolone Acetate"],
    href: "/compounds/metenolone-acetate",
  },
  {
    terms: ["Methyldrostanolone"],
    href: "/compounds/methyldrostanolone",
  },
  {
    terms: ["Telmisartan"],
    href: "/compounds/telmisartan",
  },
  {
    terms: ["Oxandrolone USP"],
    href: "/compounds/oxandrolone",
  },
  {
    terms: ["Mesterolone USP"],
    href: "/compounds/mesterolone",
  },
  {
    terms: ["Methandienone"],
    href: "/compounds/methandienone",
  },
  {
    terms: ["Stanozolol"],
    href: "/compounds/stanozolol-roxonova",
  },
].flatMap(({ terms, href }) =>
  terms.map((term) => ({
    term,
    href,
    regex: new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"),
  }))
);

const getNonSelfHref = (href, currentHref) =>
  href === currentHref ? "/compounds" : href;

/* ================= ZOOM IMAGE ================= */
function ZoomImage({ src, alt }) {
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [zoom, setZoom] = useState(false);

  const handleMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPos({ x, y });
  };

  return (
    <div
      className="relative overflow-hidden rounded-xl border border-gray-100 bg-white"
      onMouseMove={handleMove}
      onMouseEnter={() => setZoom(true)}
      onMouseLeave={() => setZoom(false)}
    >
      <img
        src={src}
        alt={alt}
        style={{
          transformOrigin: `${pos.x}% ${pos.y}%`,
          transform: zoom ? "scale(2)" : "scale(1)",
          transition: "transform 0.3s ease-out",
        }}
        className="w-full h-[420px] object-contain select-none transition-transform duration-200"
      />
    </div>
  );
}

/* ================= PAGE ================= */
export default function ProductDetails({
  initialProduct,
  initialRelated,
  category,
  productSlug,
  initialLang = "en",
}) {
  const { language } = useLanguage();

  const [product, setProduct] = useState(initialProduct || null);
  const [related, setRelated] = useState(initialRelated || []);
  const [activeTab, setActiveTab] = useState("indication");
  const [openFAQ, setOpenFAQ] = useState(null);

  const productImages = useMemo(() => getProductImages(product), [product]);
  const [selectedImage, setSelectedImage] = useState(
    getMainImage(productImages[0], product) || "/products/placeholder.jpg"
  );

  useEffect(() => {
    setSelectedImage(
      getMainImage(productImages[0], product) || "/products/placeholder.jpg"
    );
  }, [product, productImages]);

  useEffect(() => {
    if (language === initialLang) {
      setProduct(initialProduct || null);
      setRelated(initialRelated || []);
      return;
    }

    let ignore = false;

    const loadLocalizedProduct = async () => {
      try {
        const res = await fetch(
          `/api/products?slug=${productSlug}&category=${category}&lang=${language}`,
          { cache: "force-cache" }
        );
        if (!res.ok) return;

        const data = await res.json();
        if (!ignore) {
          setProduct(data.product || null);
          setRelated(Array.isArray(data.related) ? data.related : []);
        }
      } catch (_) {
        // keep initial server data if request fails
      }
    };

    loadLocalizedProduct();

    return () => {
      ignore = true;
    };
  }, [language, category, productSlug, initialLang, initialProduct, initialRelated]);

  if (!product) {
    return (
      <div className="max-w-3xl mx-auto mt-8 text-center">
        <Breadcrumbs />
        <h2 className="text-xl text-gray-600">Product not found.</h2>
      </div>
    );
  }

  const faqs = product.faq || [];
  const faqMidpoint = Math.ceil(faqs.length / 2);
  const faqColumns = [faqs.slice(0, faqMidpoint), faqs.slice(faqMidpoint)];

  const canonicalUrl =
    product.seoCanonical ||
    `https://www.novatechsciences.com/products/${category}/${productSlug}`;

  const description =
    product.seoDescription || product.shortDescription || product.description;

  const currentProductHref = `/products/${String(category).toLowerCase()}/${productSlug}`;
  const linkedProductHrefs = new Set();

  const renderInternalLinks = (text, keyPrefix = "text") => {
    if (!text) return text;

    const parts = [];
    let remaining = text;
    let partIndex = 0;

    while (remaining) {
      const match = INTERNAL_PRODUCT_LINKS.reduce((best, link) => {
        const href = getNonSelfHref(link.href, currentProductHref);
        if (linkedProductHrefs.has(href)) return best;

        const result = link.regex.exec(remaining);
        if (!result) return best;

        if (!best || result.index < best.index) {
          return { ...link, href, index: result.index, text: result[0] };
        }

        if (result.index === best.index && result[0].length > best.text.length) {
          return { ...link, href, index: result.index, text: result[0] };
        }

        return best;
      }, null);

      if (!match) {
        parts.push(remaining);
        break;
      }

      if (match.index > 0) {
        parts.push(remaining.slice(0, match.index));
      }

      linkedProductHrefs.add(match.href);
      parts.push(
        <Link
          key={`${keyPrefix}-${partIndex}`}
          href={match.href}
          className="font-semibold text-[#1f5f99] underline underline-offset-2"
        >
          {match.text}
        </Link>
      );

      remaining = remaining.slice(match.index + match.text.length);
      partIndex += 1;
    }

    return parts;
  };

  const renderMultiline = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

    if (lines.length <= 1) return <p>{renderInternalLinks(lines[0], "single-line")}</p>;

    return (
      <ul className="list-disc pl-6 space-y-1">
        {lines.map((line, idx) => (
          <li key={idx}>{renderInternalLinks(line, `multiline-${idx}`)}</li>
        ))}
      </ul>
    );
  };

  const renderBulletLines = (text) => {
    if (!text) return null;
    const lines = text.split(/\r?\n/).map((l) => l.trim()).filter(Boolean);

    return (
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {lines.map((line, idx) => (
          <li key={idx}>{renderInternalLinks(line, `bullet-${idx}`)}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className="min-h-screen pt-14 sm:pt-16 md:pt-20 bg-gradient-to-b from-[#f5f9fb] via-[#f3f8fa] to-[#e8f3f8]">
      {/* ===== SEO ===== */}
      <Head>
        <title>{product.seoTitle || product.name}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
      </Head>

      {/* Product JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: product.name,
          image: productImages,
          description: description,
          brand: {
            "@type": "Brand",
            name: product.schemaBrand || "NovaTech Sciences",
          },
          category: product.schemaCategory || product.category,
          sku: product.id,
          mpn: product.cas,
        })}
      </script>

      {/* FAQ JSON-LD */}
      {faqs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.question || f.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: f.answer || f.a,
              },
            })),
          })}
        </script>
      )}

      {/* ===== HEADER ===== */}
      <div className="bg-gradient-to-r from-[#0b1e39] via-[#18487d] to-[#3386bc] text-white py-10 shadow-md mb-10">
        <Breadcrumbs />
      </div>

      {/* ===== CONTENT ===== */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-12 pb-20">
        {/* PRODUCT CARD */}
        <div className="bg-white rounded-xl shadow-lg p-6 md:flex gap-10">
          <div className="md:w-1/2">
            <ZoomImage src={selectedImage} alt={product.name} />
            <div className="flex gap-3 mt-4 justify-center flex-wrap">
              {productImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(getMainImage(img, product))}
                  className="w-28 h-24 border rounded-lg overflow-hidden cursor-pointer"
                >
                  <img
                    src={getThumbImage(img, product)}
                    alt={`${product.name} ${idx + 1}`}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
            <p className="text-gray-600">{renderInternalLinks(description, "description")}</p>

            <p className="mt-3">
              <strong>CAS Number:</strong> {product.cas}
            </p>

            {/* TABS */}
            <div className="flex gap-4 mt-8 border-b">
              {["indication", "presentation"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-2 font-semibold capitalize ${
                    activeTab === tab
                      ? "text-[#314977] border-b-2 border-[#314977]"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="mt-6 min-h-[120px]">
              {activeTab === "indication" && renderMultiline(product.indication)}
              {activeTab === "presentation" && renderMultiline(product.presentation)}
            </div>

            <div className="mt-6 flex gap-4 flex-wrap">
              <Link
                href="/contact"
                className="bg-[#3386bc] text-white px-8 py-3 rounded-lg hover:bg-[#4bb2e5]"
              >
                Enquire Now
              </Link>

              <a
                href={catalogue}
                download
                className="flex items-center gap-2 border border-[#3386bc] text-[#3386bc] px-6 py-3 rounded-lg"
              >
                <Download className="w-5 h-5" /> Download Catalogue
              </a>
            </div>
          </div>
        </div>

        {productSlug === "nova-cut-mix" && <NovaCutMixEditorialContent />}
        {productSlug === "nova-gain-c" && <NovaGainCEditorialContent />}
        {productSlug === "testova-base" && <TestovaBaseEditorialContent />}
        {productSlug === "testova-pp" && <TestovaPPEditorialContent />}
        {productSlug === "roxonova" && <RoxonovaEditorialContent />}
        {productSlug === "trenova-e" && <TrenovaEEditorialContent />}
        {productSlug === "nandrova-p" && <NandrovaPEditorialContent />}
        {productSlug === "sustova" && <SustovaEditorialContent />}
        {productSlug === "stanova-10" && <Stanova10EditorialContent />}
        {productSlug === "aromanova" && <AromanovaEditorialContent />}
        {productSlug === "cabernova" && <CabernovaEditorialContent />}
        {productSlug === "clominova" && <ClominovaEditorialContent />}
        {productSlug === "halonova" && <HalonovaEditorialContent />}
        {productSlug === "nova-t3" && <NovaT3EditorialContent />}
        {productSlug === "nova-t4" && <NovaT4EditorialContent />}
        {productSlug === "novameth" && <NovamethEditorialContent />}
        {productSlug === "novamoren" && <NovamorenEditorialContent />}
        {productSlug === "spiroclen" && <SpiroclenEditorialContent />}
        {productSlug === "turinova" && <TurinovaEditorialContent />}

        {/* FAQ */}
        {faqs.length > 0 && (
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Important Information & FAQs</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqColumns.map((column, colIdx) => (
                <div key={`faq-col-${colIdx}`} className="space-y-6">
                  {column.map((faq, idx) => {
                    const globalIdx = colIdx === 0 ? idx : idx + faqMidpoint;
                    const faqId = `faq-${globalIdx}`;
                    const isOpen = openFAQ === faqId;

                    return (
                      <div key={faqId} className="bg-gray-50 p-4 sm:p-5 rounded-lg">
                        <button
                          className="w-full flex items-start justify-between gap-3 text-left font-semibold"
                          onClick={() => setOpenFAQ(isOpen ? null : faqId)}
                        >
                          <span className="flex-1 text-[18px] leading-snug sm:text-xl">
                            {faq.question || faq.q}
                          </span>
                          <motion.div
                            className="shrink-0 mt-0.5"
                            animate={{ rotate: isOpen ? 180 : 0 }}
                          >
                            <ChevronDown />
                          </motion.div>
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="mt-3 text-gray-600"
                            >
                              {renderInternalLinks(
                                faq.answer || faq.a,
                                `faq-answer-${globalIdx}`
                              )}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Precautions */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:flex items-center gap-10">
          <div className="md:w-2/3 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">Precautions & Contraindications</h2>

            {/* Precautions */}
            {product.precautions && (
              <>
                <h3 className="text-lg font-semibold text-gray-800">Precautions</h3>
                {renderBulletLines(product.precautions)}
              </>
            )}

            {/* Contraindications */}
            {product.contraindications && (
              <>
                <h3 className="text-lg font-semibold text-gray-800 mt-4">
                  Contraindications
                </h3>
                {renderBulletLines(product.contraindications)}
              </>
            )}
          </div>

          <div className="md:w-1/3 relative flex justify-center mt-8 md:mt-0">
            <img
              src={getMainImage(productImages[0], product)}
              alt={product.name}
              loading="lazy"
              className="w-72 h-72 object-contain  rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* RELATED */}
        {related.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {related.map((p) => (
                <ProductCard
                  key={p.slug || p.id}
                  product={{ ...p, id: p.slug || p.id }}
                />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
