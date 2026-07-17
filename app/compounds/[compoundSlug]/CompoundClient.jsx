"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, ShieldCheck, FlaskConical, FileText } from "lucide-react";
import { getCompounds } from "../../../data/compounds";
import Breadcrumbs from "../../../components/Breadcrumbs";
import CompoundCard from "../../../components/CompoundCard";
import { getLocalProductImagePath } from "../../../lib/local-image-paths";

const parseLines = (value) =>
  (value || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

const getHighlightPoints = (lines = []) =>
  lines
    .filter((line) => {
      const words = line.split(/\s+/).length;
      return words >= 2 && words <= 8 && line.length <= 72 && !line.endsWith(":");
    })
    .slice(0, 6);

const isIndicationHeading = (line = "") => {
  const normalized = line.trim();
  if (!normalized) return false;

  const endsWithColon = normalized.endsWith(":");
  const looksLikeTitle =
    normalized.length <= 95 &&
    /^(what is|mechanism|key benefits|why choose|quality|conclusion|pharmaceutical|consistent|tamoxifen citrate vs|through effective|for those seeking|nova techsciences)/i.test(
      normalized
    );

  return endsWithColon || looksLikeTitle;
};

const splitIndicationSections = (lines = []) => {
  const sections = [];
  let current = { heading: "", content: [] };

  lines.forEach((line, idx) => {
    if (idx === 0 && !isIndicationHeading(line)) {
      current.content.push(line);
      return;
    }

    if (isIndicationHeading(line)) {
      if (current.heading || current.content.length) {
        sections.push(current);
      }
      current = { heading: line.replace(/:$/, ""), content: [] };
      return;
    }

    current.content.push(line);
  });

  if (current.heading || current.content.length) {
    sections.push(current);
  }

  return sections;
};

const parseKeyValueLines = (value) =>
  parseLines(value)
    .map((line) => {
      const index = line.indexOf(":");
      if (index === -1) return null;
      return {
        label: line.slice(0, index).trim(),
        value: line.slice(index + 1).trim(),
      };
    })
    .filter(Boolean);

const isBulletLikeLine = (line = "") => {
  const text = line.trim();
  if (!text) return false;

  if (/^[-*•]\s+/.test(text) || /^\d+[\).]\s+/.test(text)) return true;
  if (text.endsWith(":")) return false;

  const wordCount = text.split(/\s+/).length;
  return wordCount <= 9 && !/[.!?]$/.test(text);
};

function EnclomipheneCitrateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Enclomiphene Citrate</strong> is a selective oestrogen
              receptor modulator identified by{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/Enclomiphene-Citrate?utm_source=chatgpt.com#section=Drug-Indication"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                CAS Number 7599-79-3
              </a>
              . It is the citrate salt of enclomiphene, the trans-isomer found within clomiphene. The
              compound has been studied for its effects on hormonal signalling, particularly the
              relationship between oestrogen feedback, gonadotropin release and endogenous testosterone
              production. Its molecular formula is C32H36ClNO8.
            </p>
            <p>
              This Nova Techsciences compound page should present Enclomiphene Citrate through accurate
              chemical identification, balanced scientific information and transparent regulatory
              context. It should not replace approved prescribing information or professional medical advice.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Enclomiphene Citrate Quick Facts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong> Enclomiphene Citrate</li>
              <li><strong>CAS Number:</strong> 7599-79-3</li>
              <li><strong>Compound class:</strong> Selective oestrogen receptor modulator</li>
              <li><strong>Form shown by Nova Techsciences:</strong> Oral tablet</li>
              <li><strong>Brand association:</strong> ENCLOMINOVA</li>
              <li><strong>Company:</strong> Nova Techsciences</li>
            </ul>
            <p>
              Enclomiphene has been investigated for secondary hypogonadism in adult men. However, the
              European Medicines Agency refused marketing authorisation for the enclomiphene medicine
              EnCyzix in 2018 because the submitted evidence did not sufficiently demonstrate a
              favourable balance of efficacy and safety. The page should therefore avoid presenting
              Enclomiphene Citrate as an authorised treatment across Europe unless a valid
              country-specific authorisation can be demonstrated.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality, Testing and Traceability</h2>
            <p>
              A dependable Enclomiphene Citrate compound profile should be supported by appropriate
              documentation. Relevant controls may include raw-material identity testing,
              active-compound assay, impurity analysis, tablet content uniformity, dissolution
              assessment, stability studies and packaging-integrity checks.
            </p>
            <p>
              Every batch should carry a unique identification number connected to its manufacturing
              history and laboratory-release records. Claims involving purity, pharmaceutical grade,
              manufacturing standards or clinical performance should only be published when supported
              by current and verifiable evidence.
            </p>
            <p>
              For audiences in the Netherlands and United Kingdom, Nova Techsciences should clearly
              state the compound’s marketing-authorisation status, responsible manufacturer, legal
              supply category and adverse-event reporting procedure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Considerations</h2>
            <p>
              The EMA assessment identified uncertainties concerning long-term exposure and discussed
              possible cardiovascular, thromboembolic, visual and laboratory-related safety concerns.
              Enclomiphene Citrate should not be promoted for unsupervised hormone management,
              post-cycle therapy, bodybuilding or use by minors. Any clinical consideration requires
              qualified professional assessment and country-specific regulatory approval.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Metenolone Acetate</h3>
              <p>
                <Link href="/compounds/metenolone-acetate" className={linkClass}>Metenolone Acetate</Link>{" "}
                is a steroid ester identified by CAS Number 434-05-9. It is chemically unrelated to
                Enclomiphene Citrate and belongs to the anabolic-androgenic category. Its compound page
                should independently address legal status, liver and cardiovascular considerations,
                contraindications and batch traceability.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Methyldrostanolone</h3>
              <p>
                <a href="http://methyldrostanolone" className={linkClass}>Methyldrostanolone</a>, also
                called Methasterone, is identified by CAS Number 3381-88-2. It is an orally active
                anabolic-androgenic compound rather than a selective oestrogen receptor modulator. Its
                information should prioritise regulatory status, liver-related risks, quality records
                and warnings against non-medical use.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Cabergoline</h3>
              <p>
                <Link href="/compounds/cabergoline" className={linkClass}>Cabergoline</Link> is a
                dopamine-receptor agonist identified by CAS Number 81409-90-7. It is pharmacologically
                different from Enclomiphene Citrate and has authorised uses involving prolactin-related
                conditions in certain markets. Its cardiovascular precautions, interactions and
                prescribing requirements should be documented separately.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Liothyronine Sodium T3</h3>
              <p>
                <Link href="/compounds/liothyronine-sodium-t3" className={linkClass}>Liothyronine Sodium</Link>{" "}
                is a synthetic thyroid hormone identified by CAS Number 55-06-1. It is used in selected
                thyroid-related clinical settings and requires precise strength identification and
                thyroid-function monitoring. It should not be presented for unsupervised metabolism or
                weight-management purposes.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Oxandrolone</h3>
              <p>
                <Link href="/compounds/oxandrolone" className={linkClass}>Oxandrolone</Link> is an
                anabolic-androgenic steroid identified by CAS Number 53-39-4. It has a completely
                different mechanism and safety profile from Enclomiphene Citrate. Its page should
                clearly address regulatory status, liver and cardiovascular warnings, contraindications
                and professional medical oversight.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Enclomiphene Citrate should ultimately be presented through correct CAS identification,
            transparent scientific evidence, documented quality controls and clearly stated regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function MetenoloneAcetateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Metenolone Acetate</strong>, also written as
              Methenolone Acetate, is a synthetic steroid ester identified by CAS Number 434-05-9. It
              has the molecular formula C₂₂H₃₂O₃ and a molecular weight of approximately 344.5 g/mol.
              The compound is the acetate ester of metenolone and belongs to the androgenic and anabolic
              steroid category.
            </p>
            <p>
              The Nova Techsciences compound page should present Metenolone Acetate through accurate
              chemical identification, verifiable documentation and balanced safety information. It
              should not be presented as a nutritional supplement or promoted for unsupervised physique,
              sporting or hormone-related use.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Metenolone Acetate Overview</h2>
            <h3 className="text-lg font-semibold text-[#123a6d]">Important compound information includes:</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong> Metenolone Acetate</li>
              <li><strong>Alternative spelling:</strong> Methenolone Acetate</li>
              <li><strong>CAS Number:</strong> 434-05-9</li>
              <li><strong>Molecular formula:</strong> C₂₂H₃₂O₃</li>
              <li><strong>Molecular weight:</strong> Approximately 344.5 g/mol</li>
              <li><strong>Compound category:</strong> Androgen and anabolic steroid ester</li>
              <li>
                <strong>Associated Nova Techsciences product:</strong>{" "}
                <Link href="/products/tablets/primonova" className={linkClass}>PRIMONOVA</Link>
              </li>
            </ul>
            <p>
              Metenolone Acetate should be distinguished from Metenolone Enanthate. Although both are
              derived from the same active steroidal structure, the attached ester is different,
              resulting in separate chemical identifiers and technical specifications. Product labels,
              compound pages, Certificates of Analysis and structured data should therefore use the
              correct compound name and CAS number.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality Documentation and Traceability</h2>
            <p>
              A reliable compound profile should be supported by appropriate analytical records. These
              may include raw-material identification, assay testing, impurity analysis,
              reference-standard comparison, stability data and batch-specific documentation.
            </p>
            <p>
              Every batch should carry a unique identification number linked to its manufacturing and
              laboratory-release history. Claims concerning purity, pharmaceutical grade or
              manufacturing standards should only be published when supported by current evidence.
            </p>
            <p>
              For audiences in the United Kingdom, Netherlands and other European markets, Nova
              Techsciences should clearly disclose the compound’s regulatory status, responsible
              organisation and intended-use limitations. Metenolone is prohibited at all times in
              competitive sport under the anabolic-agent category.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety Considerations</h2>
            <p>
              Metenolone Acetate is an anabolic-androgenic substance. Compounds in this category may
              affect hormonal balance, reproductive health, cholesterol, cardiovascular function, mood
              and other body systems. It should not be promoted for self-medication, use by minors or
              unsupervised performance enhancement.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Methyldrostanolone</h3>
              <p>
                Methyldrostanolone, also known as Methasterone, is an{" "}
                <Link href="/compounds/methyldrostanolone" className={linkClass}>
                  anabolic-androgenic compound
                </Link>{" "}
                identified by CAS Number 3381-88-2. It is chemically distinct from Metenolone Acetate
                and requires separate regulatory information, batch documentation, contraindications
                and prominent liver and cardiovascular safety warnings.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Telmisartan</h3>
              <p>
                Telmisartan is a{" "}
                <Link href="/compounds/telmisartan" className={linkClass}>
                  non-steroidal antihypertensive compound
                </Link>{" "}
                identified by CAS Number 144701-48-4. It is chemically unrelated to Metenolone Acetate
                and is associated with blood-pressure management in authorised medical settings. Its
                page should address pregnancy restrictions, kidney monitoring, interactions and
                prescription status.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Chlorodehydromethyltestosterone</h3>
              <p>
                Chlorodehydromethyltestosterone is an{" "}
                <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>
                  anabolic-androgenic steroid
                </Link>{" "}
                identified by CAS Number 2446-23-3. It has a different chemical structure from
                Metenolone Acetate and requires independent information covering regulatory status,
                liver-related risks, batch traceability and warnings against sporting or unsupervised use.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Levothyroxine Sodium T4</h3>
              <p>
                Levothyroxine Sodium is a synthetic{" "}
                <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>
                  thyroid-hormone compound
                </Link>{" "}
                identified by CAS Number 55-03-8. It is used in authorised thyroid-replacement settings
                and requires precise strength control and thyroid-function monitoring. It should not be
                presented for general weight loss or metabolism enhancement.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Cabergoline</h3>
              <p>
                <Link href="/compounds/cabergoline" className={linkClass}>Cabergoline</Link> is a dopamine
                D2 receptor agonist identified by CAS Number 81409-90-7. It is pharmacologically
                unrelated to anabolic steroids and is used in selected medically supervised
                prolactin-related settings. Its information should cover cardiovascular precautions,
                interactions and professional monitoring.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            <Link href="/compounds/metenolone-acetate" className={linkClass}>Metenolone Acetate</Link>{" "}
            should ultimately be presented through correct CAS identification, transparent laboratory
            documentation, balanced risk communication and clearly stated regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function MethyldrostanoloneEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Methyldrostanolone</strong>, also known as Methasterone
              or Superdrol, is a synthetic anabolic-androgenic steroid identified by CAS Number
              3381-88-2. It has the molecular{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/Methasterone"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                formula C21H34O2
              </a>{" "}
              and belongs to the group of orally active androgenic compounds. Nova Techsciences
              associates Methyldrostanolone with its SUPERNOVA tablet formulation, presented as 10 mg
              per tablet.
            </p>
            <p>
              This compound page is intended to provide clear chemical, quality and safety information.
              It should not replace authorised prescribing literature, professional medical advice or
              country-specific regulatory documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Methyldrostanolone Quick Facts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong> Methyldrostanolone</li>
              <li><strong>Alternative name:</strong> Methasterone</li>
              <li><strong>Common name:</strong> Superdrol</li>
              <li><strong>CAS Number:</strong> 3381-88-2</li>
              <li><strong>Molecular formula:</strong> C21H34O2</li>
              <li><strong>Compound class:</strong> Anabolic-androgenic steroid</li>
              <li>
                <strong>Associated product:</strong>{" "}
                <Link href="/products/tablets/supernova" className={linkClass}>SUPERNOVA tablets</Link>
              </li>
              <li><strong>Company:</strong> Nova Techsciences</li>
            </ul>
            <p>
              The compound name, CAS number and product strength should remain consistent across the
              Nova Techsciences website, packaging, structured data, laboratory reports and Certificates
              of Analysis.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Documentation</h2>
            <p>
              Methyldrostanolone is structurally related to dihydrotestosterone and is classified as an
              orally active{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK548931/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                anabolic compound
              </a>
              . Its CAS number provides a standard identifier for distinguishing it from Drostanolone,
              Metenolone and other steroidal substances with similar names.
            </p>
            <p>
              A responsible compound profile should be supported by analytical documentation. Suitable
              records may include raw-material identity testing, assay results, impurity analysis,
              reference-standard comparison, tablet content uniformity, dissolution data, stability
              information and packaging-integrity checks.
            </p>
            <p>
              Every manufactured batch should have a unique batch number linked to its production
              history and laboratory-release results. Claims involving purity, pharmaceutical grade,
              manufacturing standards or regulatory compliance should only be published when current
              supporting documents are available.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Considerations</h2>
            <p>
              Methyldrostanolone is not an ordinary dietary or wellness ingredient. Oral androgenic
              steroids can affect liver function, cholesterol, cardiovascular health, hormonal balance,
              fertility and psychological well-being.
            </p>
            <p>
              The LiverTox database reports that C-17α-alkylated androgenic steroids have been associated
              with serious forms of liver injury, including prolonged cholestasis, vascular liver damage
              and liver tumours. Methyldrostanolone should therefore not be presented for
              self-medication, bodybuilding, sporting performance or use by minors.
            </p>
            <p>
              For audiences in the Netherlands and United Kingdom, Nova Techsciences should clearly
              disclose the compound’s marketing-authorisation status, legal supply category, responsible
              organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Telmisartan</h3>
              <p>
                <Link href="/compounds/telmisartan" className={linkClass}>Telmisartan</Link> is an
                angiotensin II receptor blocker identified by CAS Number 144701-48-4. Nova Techsciences
                presents it as a 20 mg tablet. It is chemically unrelated to Methyldrostanolone and
                requires separate information covering blood-pressure monitoring, pregnancy
                restrictions, kidney function, medicine interactions and prescription status.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Chlorodehydromethyltestosterone</h3>
              <p>
                <Link href="/compounds/chlorodehydromethyltestosterone" className={linkClass}>
                  Chlorodehydromethyltestosterone
                </Link>{" "}
                is an oral anabolic-androgenic compound identified by CAS Number 2446-23-3. Nova
                Techsciences presents it as a 10 mg tablet. It has a separate chemical identity and
                requires independent safety information, liver-related precautions, batch records and
                regulatory assessment.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Levothyroxine Sodium T4</h3>
              <p>
                <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>
                  Levothyroxine Sodium
                </Link>{" "}
                is a synthetic thyroid hormone identified by CAS Number 55-03-8. Nova Techsciences
                lists a strength of 50 mcg per tablet. Thyroid medicines require accurate strength
                control, professional monitoring and clear warnings against unsupervised weight-loss or
                metabolism-related use.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Cabergoline</h3>
              <p>
                <Link href="/compounds/cabergoline" className={linkClass}>Cabergoline</Link> is a dopamine
                D2 receptor agonist identified by CAS Number 81409-90-7. Nova Techsciences presents it as
                a 0.5 mg tablet. It is pharmacologically unrelated to anabolic steroids and requires
                separate cardiovascular precautions, interaction information, contraindications and
                professional monitoring.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Fluoxymesterone</h3>
              <p>
                Fluoxymesterone is an oral androgenic and anabolic steroid identified by CAS Number
                76-43-7. Nova Techsciences presents it as a 5 mg tablet. Its compound page should
                independently address liver, cardiovascular, hormonal and reproductive risks, alongside
                legal status and batch traceability.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Methyldrostanolone should ultimately be presented through accurate chemical identification,
            transparent laboratory documentation, prominent safety information and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function TelmisartanEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Telmisartan</strong> is a prescription antihypertensive
              compound identified by CAS Number 144701-48-4. It belongs to the angiotensin II receptor
              blocker class, commonly known as ARBs. Nova Techsciences presents Telmisartan as the active
              compound associated with its TELINOVA tablet range.
            </p>
            <p>
              Telmisartan is used in authorised medical settings for the treatment of{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/substance/7847693"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                essential hypertension
              </a>{" "}
              in adults. Certain authorised products are also used to reduce cardiovascular events in
              appropriately assessed high-risk patients. The exact indication must always reflect the
              approved product information in the country where the{" "}
              <a
                href="https://www.ema.europa.eu/en/medicines/human/EPAR/micardis"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                medicine is supplied
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Telmisartan Quick Facts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong> Telmisartan</li>
              <li><strong>CAS Number:</strong> 144701-48-4</li>
              <li><strong>Molecular formula:</strong> C33H30N4O2</li>
              <li><strong>Compound class:</strong> Angiotensin II receptor blocker</li>
              <li><strong>Pharmaceutical form:</strong> Commonly formulated as oral tablets</li>
              <li>
                <strong>Associated Nova Techsciences product:</strong>{" "}
                <Link href="/products/tablets/telinova" className={linkClass}>TELINOVA</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">How Telmisartan Works</h2>
            <p>
              Angiotensin II is a naturally occurring substance that causes blood vessels to tighten and
              encourages the body to retain sodium and water. Telmisartan selectively blocks angiotensin
              II type-1 receptors, helping blood vessels relax and reducing the pressure against which
              the heart must pump.
            </p>
            <p>
              As a prescription medicine, Telmisartan requires individual clinical assessment. Blood
              pressure, kidney function and electrolyte levels may require monitoring, particularly in
              patients with existing kidney disease, cardiovascular conditions or other medicines that
              affect the renin–angiotensin system.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality Control and Traceability</h2>
            <p>
              A dependable{" "}
              <a
                href="https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=29bddc43-2809-4e1f-ae35-2865e15e9bb6"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Telmisartan compound
              </a>{" "}
              profile should be supported by documented analytical controls. These may include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Raw-material identity testing</li>
              <li>Active-compound assay and impurity analysis</li>
              <li>Tablet content-uniformity and dissolution testing</li>
              <li>Stability and packaging-integrity assessment</li>
              <li>Batch-specific Certificates of Analysis</li>
            </ul>
            <p>
              Every batch should carry a unique identification number linked to its manufacturing
              history and laboratory-release results. Claims involving purity, pharmaceutical quality
              or manufacturing compliance should only be published when supported by current documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Information</h2>
            <p>
              Telmisartan should only be used under qualified medical supervision. Possible adverse
              effects include dizziness, reduced blood pressure and changes in kidney function or
              potassium levels. Medicines acting on the renin–angiotensin system can harm a developing
              foetus, making pregnancy an important contraindication requiring immediate professional review.
            </p>
            <p>
              For the UK, Netherlands and other European markets, Nova Techsciences should clearly state
              the applicable marketing-authorisation status, prescription category, responsible
              organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Chlorodehydromethyltestosterone</h3>
              <p>
                <Link href="/compounds/chlorodehydromethyltestosterone" className={linkClass}>
                  Chlorodehydromethyltestosterone
                </Link>
                , identified by CAS Number 2446-23-3, is an anabolic-androgenic steroid chemically
                unrelated to Telmisartan. Its compound page should independently address regulatory
                status, liver and cardiovascular risks, batch traceability and prominent warnings
                against sporting or unsupervised use.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Levothyroxine Sodium T4</h3>
              <p>
                <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>
                  Levothyroxine Sodium
                </Link>{" "}
                is a synthetic thyroid hormone associated with CAS Number 55-03-8. It is used in
                authorised thyroid-replacement treatment and requires precise strength control,
                thyroid-function monitoring and clear warnings against unsupervised weight-loss or
                metabolism-related use.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Cabergoline</h3>
              <p>
                <a href="http://cabergoline" className={linkClass}>Cabergoline</a>, identified by CAS
                Number 81409-90-7, is a dopamine-receptor agonist used in selected prolactin-related
                conditions. Its product information should separately cover cardiovascular assessment,
                low-blood-pressure precautions, medicine interactions, pregnancy considerations and
                professional monitoring.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Fluoxymesterone</h3>
              <p>
                <Link href="/compounds/fluoxymesterone" className={linkClass}>Fluoxymesterone</Link> is an
                androgenic and anabolic steroid identified by CAS Number 76-43-7. It has a different
                mechanism and risk profile from Telmisartan. Its compound information should prioritise
                liver, cardiovascular, hormonal and reproductive precautions alongside its verified
                legal status.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Liothyronine Sodium T3</h3>
              <p>
                <Link href="/compounds/liothyronine-sodium-t3" className={linkClass}>
                  Liothyronine Sodium
                </Link>{" "}
                is an active synthetic thyroid hormone identified by CAS Number 55-06-1. It is used in
                selected thyroid-related clinical circumstances and requires careful thyroid and
                cardiovascular monitoring. It should not be presented for unsupervised metabolism or
                weight-management purposes.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Telmisartan should ultimately be presented through accurate chemical identification,
            transparent quality documentation, balanced medical information and clearly stated
            regulatory status.
          </p>
        </div>
      </article>
    </section>
  );
}

function ChlorodehydromethyltestosteroneEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Chlorodehydromethyltestosterone</strong> is a synthetic
              anabolic-androgenic steroid identified by CAS Number 2446-23-3. It is also known as
              Dehydrochloromethyltestosterone, 4-Chloromethandienone and Oral Turinabol. The compound has
              the molecular{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/98521"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                formula C₂₀H₂₇ClO₂
              </a>{" "}
              and a molecular weight of approximately 334.9 g/mol.
            </p>
            <p>
              Nova Techsciences associates Chlorodehydromethyltestosterone with its TURINOVA tablet
              formulation. The current compound page lists a strength of 10 mg per tablet and a bottle
              containing 50 tablets. These details should remain consistent across the compound page,
              product page, packaging, structured data and batch documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Compound Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Chlorodehydromethyltestosterone"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chlorodehydromethyltestosterone
                </a>
              </li>
              <li><strong>Alternative name:</strong> Dehydrochloromethyltestosterone</li>
              <li><strong>CAS Number:</strong> 2446-23-3</li>
              <li><strong>Molecular formula:</strong> C₂₀H₂₇ClO₂</li>
              <li><strong>Molecular weight:</strong> Approximately 334.9 g/mol</li>
              <li><strong>Compound category:</strong> Anabolic-androgenic steroid</li>
              <li>
                <strong>Associated product:</strong>{" "}
                <Link href="/products/tablets/turinova" className={linkClass}>TURINOVA</Link>
              </li>
            </ul>
            <p>
              The CAS number provides a standard chemical identifier that distinguishes
              Chlorodehydromethyltestosterone from Methandienone, Fluoxymesterone, Oxandrolone and other
              steroidal compounds with different structures and safety profiles.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Documentation</h2>
            <p>
              Chlorodehydromethyltestosterone is structurally related to testosterone and Methandienone
              but includes chemical modifications that give it a separate identity. A responsible
              compound page should avoid unsupported therapeutic or performance claims and instead focus
              on verified chemistry, analytical testing and regulatory status.
            </p>
            <p>
              Suitable supporting documentation may include raw-material identification,
              active-compound assay, impurity analysis, reference-standard comparison, stability testing
              and batch-specific Certificates of Analysis.
            </p>
            <p>
              Each batch should have a unique identification number linked to its manufacturing and
              laboratory-release records. Claims concerning purity, pharmaceutical grade or
              manufacturing compliance should only be published when supported by current documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Considerations</h2>
            <p>
              Chlorodehydromethyltestosterone is not a general health supplement. Anabolic-androgenic
              steroids can affect liver function, cardiovascular health, cholesterol, hormonal balance,
              fertility and psychological wellbeing.
            </p>
            <p>
              The compound should not be presented for self-medication, bodybuilding, athletic
              enhancement or use by minors. It is included within the anabolic-agent category of the
              2026 World Anti-Doping Agency Prohibited List, which took effect on January 1, 2026.
            </p>
            <p>
              For audiences in the Netherlands, United Kingdom and other European markets, Nova
              Techsciences should clearly communicate the compound’s marketing-authorisation status,
              legal supply category, responsible organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Levothyroxine Sodium T4</h3>
              <p>
                <Link href="/compounds/levothyroxine-sodium-t4" className={linkClass}>
                  Levothyroxine Sodium T4
                </Link>{" "}
                is a synthetic thyroid hormone identified by CAS Number 55-03-8. Nova Techsciences
                presents it as a 50 mcg tablet. Thyroid medicines require precise strength control,
                professional monitoring and clear warnings against unsupervised weight-loss or metabolic use.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Cabergoline</h3>
              <p>
                <Link href="/compounds/cabergoline" className={linkClass}>Cabergoline</Link> is a dopamine
                D2 receptor agonist identified by CAS Number 81409-90-7. Nova Techsciences lists it as a
                0.5 mg tablet. It is pharmacologically different from anabolic steroids and requires
                separate cardiovascular precautions, interaction information and professional clinical monitoring.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Fluoxymesterone</h3>
              <p>
                <Link href="/compounds/fluoxymesterone" className={linkClass}>Fluoxymesterone</Link> is an
                oral anabolic-androgenic compound identified by CAS Number 76-43-7. Nova Techsciences
                presents it as a 5 mg tablet. Its compound information should independently address
                liver, cardiovascular, hormonal and reproductive risks alongside batch traceability and
                regulatory status.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Liothyronine Sodium T3</h3>
              <p>
                <Link href="/compounds/liothyronine-sodium-t3" className={linkClass}>
                  Liothyronine Sodium
                </Link>{" "}
                T3 is an active synthetic thyroid hormone identified by CAS Number 55-06-1. It requires
                precise formulation, thyroid-function monitoring and professional medical oversight. It
                should not be presented for unsupervised metabolism, fat-loss or sporting-performance purposes.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Oxandrolone</h3>
              <p>
                <Link href="/compounds/oxandrolone" className={linkClass}>Oxandrolone</Link> is an
                anabolic-androgenic steroid identified by CAS Number 53-39-4. It has a distinct chemical
                and safety profile from Chlorodehydromethyltestosterone. Its compound page should focus
                on verified identity, regulatory status, liver and cardiovascular precautions and
                transparent batch documentation.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Chlorodehydromethyltestosterone should ultimately be presented through accurate chemical
            identification, transparent quality records, balanced risk communication and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function LevothyroxineSodiumT4EditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Levothyroxine Sodium T4</strong> is a synthetic
              thyroid-hormone compound associated with NOVA-T4 tablets by Nova Techsciences. The
              company’s compound page lists Levothyroxine Sodium at 50 mcg per tablet, supplied in a
              blister pack of 10 tablets. Levothyroxine Sodium is identified by{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/Sodium-thyroxine"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                CAS Number 55-03-8
              </a>{" "}
              and represents the sodium salt of levothyroxine, a synthetic form of the natural thyroid
              hormone thyroxine, commonly called T4.
            </p>
            <p>
              This compound page is intended to provide clear chemical, pharmaceutical and safety
              information. It should not replace approved prescribing information, thyroid-function
              monitoring or advice from a qualified healthcare professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Compound Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Levothyroxine"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Levothyroxine Sodium T4
                </a>
              </li>
              <li><strong>CAS Number:</strong> 55-03-8</li>
              <li><strong>Dosage form:</strong> Oral tablet</li>
              <li><strong>Listed strength:</strong> 50 mcg per tablet</li>
              <li>
                <strong>Associated product:</strong>{" "}
                <Link href="/products/tablets/nova-t4" className={linkClass}>NOVA-T4</Link>
              </li>
              <li><strong>Brand:</strong> Nova Techsciences</li>
            </ul>
            <p>
              Levothyroxine is used in authorised medical settings as thyroid-hormone replacement,
              particularly for hypothyroidism. After administration, part of the circulating T4 is
              converted in body tissues to triiodothyronine, or T3. Thyroid hormones influence
              metabolism, growth, development and cardiovascular function. Treatment should be
              individualised using clinical assessment and thyroid-function tests.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality, Consistency and Traceability</h2>
            <p>
              Levothyroxine tablets require precise manufacturing controls because relatively small
              differences in active-ingredient content may influence treatment. A dependable compound
              profile should be supported by raw-material identity testing, active-ingredient assay,
              content-uniformity analysis, dissolution testing, impurity assessment, stability studies
              and packaging-integrity checks.
            </p>
            <p>
              Each batch should carry a unique number linked to its manufacturing history and
              laboratory-release results. Claims concerning pharmaceutical grade, purity or
              international compliance should only be published when supported by current documentation.
              For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
              clearly state the applicable marketing-authorisation status, prescription category,
              responsible manufacturer and adverse-event reporting route.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Responsible Use</h2>
            <p>
              Levothyroxine requires professional supervision. Excessive thyroid-hormone exposure may
              cause rapid heartbeat, palpitations, sweating, tremor, nervousness or unexplained weight
              loss. Particular caution is required in people with cardiovascular disease, long-standing
              hypothyroidism or untreated adrenal insufficiency. Official prescribing information states
              that thyroid hormones should not be used for weight reduction because excessive amounts
              can cause serious or life-threatening adverse effects.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Cabergoline</h3>
              <p>
                <Link href="/compounds/cabergoline" className={linkClass}>Cabergoline</Link> is a dopamine
                D2 receptor agonist identified by CAS Number 81409-90-7. Nova Techsciences lists it as a
                0.5 mg tablet. It is pharmacologically unrelated to thyroid hormones and requires
                separate information covering cardiovascular precautions, contraindications,
                interactions and professional monitoring.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Fluoxymesterone</h3>
              <p>
                <Link href="/compounds/fluoxymesterone" className={linkClass}>Fluoxymesterone</Link> is an
                oral androgenic and anabolic steroid identified by CAS Number 76-43-7. Nova Techsciences
                presents it as a 5 mg tablet. Its compound page should independently address liver,
                cardiovascular, hormonal and reproductive risks, together with verified regulatory
                status and batch documentation.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Liothyronine Sodium T3</h3>
              <p>
                <Link href="/compounds/liothyronine-sodium-t3" className={linkClass}>
                  Liothyronine Sodium T3
                </Link>{" "}
                is an active synthetic thyroid hormone identified by CAS Number 55-06-1. Nova
                Techsciences lists a strength of 50 mcg per tablet. It differs from T4 in its
                pharmaceutical behaviour and requires separate prescribing, monitoring and safety documentation.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Oxandrolone</h3>
              <p>
                <Link href="/compounds/oxandrolone" className={linkClass}>Oxandrolone</Link> is an
                anabolic-androgenic steroid identified by CAS Number 53-39-4. Nova Techsciences presents
                it as a 10 mg tablet. It is chemically distinct from Levothyroxine Sodium and requires
                separate information on legal status, contraindications, liver and cardiovascular risks
                and batch traceability.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Mesterolone</h3>
              <p>
                <Link href="/compounds/mesterolone" className={linkClass}>Mesterolone</Link> is an orally
                active androgen identified by CAS Number 1424-00-6. Nova Techsciences lists it as a 25
                mg tablet. Its compound information should separately cover authorised status, prostate
                and cardiovascular precautions, interaction checks, professional supervision and
                responsible risk communication.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Levothyroxine Sodium T4 should ultimately be presented through accurate CAS identification,
            precise strength information, transparent quality records, balanced safety guidance and
            clearly stated regulatory status.
          </p>
        </div>
      </article>
    </section>
  );
}

function OxymetholoneEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Oxymetholone</strong> is a synthetic
              anabolic-androgenic steroid identified by CAS Number 434-07-1. It has the molecular{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/434-07-1"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                formula C21H32O3
              </a>{" "}
              and is structurally related to testosterone. Nova Techsciences associates this compound
              with its OXYDROL tablet range; however, any product strength, indication or supply claim
              should match verified packaging and applicable regulatory documentation.
            </p>
            <p>
              This compound page provides general chemical, quality and safety information. It should
              not replace authorised prescribing information, a patient information leaflet or
              assessment by a qualified healthcare professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Oxymetholone Quick Facts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Oxymetholone"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Oxymetholone
                </a>
              </li>
              <li><strong>CAS Number:</strong> 434-07-1</li>
              <li><strong>Molecular formula:</strong> C21H32O3</li>
              <li><strong>Compound category:</strong> Synthetic anabolic-androgenic steroid</li>
              <li><strong>Common pharmaceutical form:</strong> Oral tablets</li>
              <li><strong>Associated Nova Techsciences range:</strong> OXYDROL</li>
            </ul>
            <p>
              The CAS number is an internationally recognised identifier that distinguishes
              Oxymetholone from Oxandrolone, Methandienone, Stanozolol and other compounds with
              similar-sounding names. The correct compound name and identifier should remain consistent
              across product pages, labels, structured data, Certificates of Analysis and batch records.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality Control and Traceability</h2>
            <p>
              A responsible{" "}
              <a
                href="https://www.ncbi.nlm.nih.gov/books/NBK548931/table/AndrogenicSteroids.Te/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Oxymetholone compound
              </a>{" "}
              profile should be supported by current analytical documentation. Suitable controls may
              include raw-material identification, active-compound assay, impurity analysis,
              reference-standard comparison, tablet content uniformity, dissolution assessment,
              stability testing and packaging-integrity verification.
            </p>
            <p>
              Each manufactured batch should carry a unique identification number connected to its
              production history and laboratory-release results. Statements involving purity,
              pharmaceutical grade, laboratory testing or manufacturing compliance should only be
              published when supporting evidence is available.
            </p>
            <p>
              For audiences in the United Kingdom, Netherlands and other European markets, Nova
              Techsciences should clearly state the compound’s marketing-authorisation status, legal
              supply classification, responsible organisation and adverse-event reporting procedure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Considerations</h2>
            <p>
              Oxymetholone is not an ordinary dietary or wellness ingredient. The NIH LiverTox database
              includes it among anabolic steroids associated with clinically important liver injury.
              Compounds in this class have been linked to cholestasis, vascular liver abnormalities and
              liver tumours. The US National Toxicology Program also reports evidence concerning
              oxymetholone and liver-tumour risk.
            </p>
            <p>
              Oxymetholone should not be presented for self-medication, bodybuilding, athletic
              performance or use by minors. Information about doses, cycles, combinations or methods
              intended to manage side effects should not be taken from unofficial online sources.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">MK-677</h3>
              <p>
                <Link href="/compounds/mk-677" className={linkClass}>MK-677</Link>, also known as
                Ibutamoren Mesylate, is a non-peptide growth-hormone secretagogue rather than an anabolic
                steroid. It is chemically distinct from Oxymetholone and requires separate information
                covering its investigational status, clinical evidence, metabolic safety considerations
                and regulatory position.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Methandienone</h3>
              <p>
                <Link href="/compounds/methandienone" className={linkClass}>Methandienone</Link> is an
                orally active anabolic-androgenic steroid identified by CAS Number 72-63-9. It has a
                separate chemical structure and risk profile from Oxymetholone. Its compound information
                should independently address liver, cardiovascular, hormonal and reproductive safety concerns.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Clenbuterol Hydrochloride</h3>
              <p>
                <Link href="/compounds/clenbuterol-hydrochloride" className={linkClass}>
                  Clenbuterol Hydrochloride
                </Link>{" "}
                is a beta-adrenergic agonist identified by CAS Number 21898-19-1. It is pharmacologically
                different from anabolic steroids and may affect cardiovascular and nervous-system
                function. Its legal and authorised status varies between markets and should be stated accurately.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol USP</h3>
              <p>
                <Link href="/compounds/stanozolol-usp" className={linkClass}>Stanozolol</Link> is an
                anabolic-androgenic steroid identified by CAS Number 10418-03-8. It is chemically
                distinct from Oxymetholone, although both belong to the anabolic-steroid category. Its
                page should provide independent chemical identification, batch documentation and
                prominent liver and cardiovascular safety information.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol STANOVA-50</h3>
              <p>
                <Link href="/compounds/stanozolol-stanova-50" className={linkClass}>STANOVA-50</Link>{" "}
                represents a higher-strength Stanozolol presentation rather than a different active
                compound. The page should clearly distinguish product strength while retaining the same
                CAS Number 10418-03-8, alongside appropriate contraindications, regulatory status and
                batch traceability.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Oxymetholone should ultimately be presented through accurate compound identification,
            transparent analytical documentation, balanced safety communication and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function Mk677EditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">MK-677</strong>, also known as Ibutamoren Mesylate or
              MK-0677, is an orally active, non-peptide growth-hormone secretagogue identified by{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/mk-0677"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                CAS Number 159752-10-0
              </a>
              . It interacts with the growth-hormone secretagogue receptor, a receptor also involved in
              ghrelin signalling, and has been investigated for its effects on growth-hormone and
              insulin-like growth factor 1 pathways.
            </p>
            <p>
              Nova Techsciences associates this compound with its NOVAMOREN tablet range. However,
              information published on an MK-677 compound page should clearly distinguish chemical
              identification and investigational research from an authorised therapeutic indication.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">MK-677 Quick Facts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Ibutamoren"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ibutamoren Mesylate
                </a>
              </li>
              <li><strong>Alternative names:</strong> MK-677 and MK-0677</li>
              <li><strong>CAS Number:</strong> 159752-10-0</li>
              <li><strong>Compound type:</strong> Non-peptide growth-hormone secretagogue</li>
              <li><strong>Pharmaceutical form:</strong> Commonly investigated as an oral compound</li>
              <li>
                <strong>Associated Nova Techsciences range:</strong>{" "}
                <Link href="/products/tablets/novamoren" className={linkClass}>NOVAMOREN</Link>
              </li>
            </ul>
            <p>
              The compound name, CAS number, strength and formulation should remain consistent across
              product labels, technical files, structured data, Certificates of Analysis and batch records.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Scientific and Regulatory Context</h2>
            <p>
              The European Commission granted Ibutamoren Mesylate an orphan designation in 2017 for
              investigation in growth-hormone deficiency. The European Medicines Agency states clearly
              that orphan designation is not a marketing authorisation. Quality, safety and efficacy
              must still be demonstrated before a medicine can receive authorisation.
            </p>
            <p>
              MK-677 has also been evaluated in clinical studies involving older adults and other
              patient populations. These studies should not be interpreted as approval for general
              hormone enhancement, muscle development or wellness use.
            </p>
            <p>
              For audiences in the Netherlands, United Kingdom and other European markets, Nova
              Techsciences should clearly disclose the compound’s current authorisation status,
              intended-use limitations, responsible organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality Control and Traceability</h2>
            <p>
              A reliable compound page should be supported by appropriate analytical documentation.
              Relevant controls may include raw-material identity testing, active-compound assay,
              impurity assessment, reference-standard comparison, tablet content uniformity,
              dissolution testing, stability evaluation and packaging-integrity checks.
            </p>
            <p>
              Each manufactured batch should carry a unique identification number linked to its
              production history and laboratory-release results. Claims concerning purity,
              pharmaceutical quality or manufacturing compliance should only appear when supported by
              current documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety Information</h2>
            <p>
              Clinical research has reported changes in glucose regulation during MK-677 administration.
              In one randomised study, fasting blood glucose increased and insulin sensitivity decreased.
              The FDA also warns that Ibutamoren is not an approved active ingredient in the United
              States and may cause increased appetite, fluid retention, fatigue, muscle discomfort and
              altered glucose metabolism.
            </p>
            <p>
              MK-677 should not be presented for unsupervised bodybuilding, recovery enhancement,
              self-medication or use by minors. It is also listed by WADA among prohibited
              growth-hormone-releasing factors.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Methandienone</h3>
              <p>
                <Link href="/compounds/methandienone" className={linkClass}>Methandienone</Link> is an
                orally active anabolic-androgenic steroid identified by CAS Number 72-63-9. It is
                chemically and pharmacologically different from Ibutamoren and requires separate
                information covering liver, cardiovascular, hormonal and reproductive risks, regulatory
                status and batch traceability.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Clenbuterol Hydrochloride</h3>
              <p>
                <Link href="/compounds/clenbuterol-hydrochloride" className={linkClass}>
                  Clenbuterol Hydrochloride
                </Link>{" "}
                is a beta-adrenergic agonist identified by CAS Number 21898-19-1. It is not a
                growth-hormone secretagogue and has separate cardiovascular and nervous-system safety
                considerations. Its authorised status varies between markets and must be communicated accurately.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol USP</h3>
              <p>
                <Link href="/compounds/stanozolol-usp" className={linkClass}>Stanozolol USP</Link> is an
                anabolic-androgenic steroid identified by CAS Number 10418-03-8. It has a distinct
                chemical identity and safety profile from MK-677. Its page should independently address
                regulatory status, liver-related risks, cardiovascular precautions and quality documentation.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol STANOVA-50</h3>
              <p>
                <Link href="/compounds/stanozolol-stanova-50" className={linkClass}>STANOVA-50</Link>{" "}
                represents a higher-strength Stanozolol presentation rather than a separate active
                compound. It retains CAS Number 10418-03-8, while the formulation strength, pack details,
                batch information and warnings should be clearly distinguished from lower-strength presentations.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Clomiphene Citrate</h3>
              <p>
                <Link href="/compounds/clomiphene-citrate" className={linkClass}>Clomiphene Citrate</Link>{" "}
                is a selective oestrogen receptor modulator identified by CAS Number 50-41-9. It is
                associated with medically supervised reproductive treatment and requires separate
                information covering visual adverse effects, ovarian response, contraindications and
                prescription requirements.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            MK-677 should ultimately be presented through accurate chemical identification, transparent
            scientific evidence, documented quality controls and clearly stated regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function ClenbuterolHydrochlorideEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Clenbuterol Hydrochloride</strong> is the hydrochloride
              salt of clenbuterol, identified by CAS Number 21898-19-1. It has the molecular{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/5702273"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                formula C12H19Cl3N2O
              </a>{" "}
              and a molecular weight of approximately 313.65 g/mol. The compound belongs to the
              beta-adrenergic agonist category and has bronchodilator activity through its interaction
              with beta-2 adrenergic receptors.
            </p>
            <p>
              Nova Techsciences associates Clenbuterol Hydrochloride with its SPIROCLEN oral tablet
              range. The current compound page lists the active ingredient, CAS number and tablet
              presentation. Website information should remain consistent with the finished packaging,
              batch records, structured data and Certificate of Analysis.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Compound Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Clenbuterol"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clenbuterol Hydrochloride
                </a>
              </li>
              <li><strong>CAS Number:</strong> 21898-19-1</li>
              <li><strong>Molecular formula:</strong> C12H19Cl3N2O</li>
              <li><strong>Molecular weight:</strong> Approximately 313.65 g/mol</li>
              <li><strong>Compound class:</strong> Beta-adrenergic agonist</li>
              <li>
                <strong>Associated range:</strong>{" "}
                <Link href="/products/tablets/spiroclen" className={linkClass}>SPIROCLEN</Link>
              </li>
              <li><strong>Brand:</strong> Nova Techsciences</li>
            </ul>
            <p>
              Clenbuterol Hydrochloride should be distinguished from clenbuterol base, which has a
              different CAS identifier. Using the correct salt name and chemical number helps prevent
              inconsistencies across labels, laboratory reports and technical documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Scientific and Regulatory Context</h2>
            <p>
              <a
                href="https://pubmed.ncbi.nlm.nih.gov/23844963/"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                Clenbuterol stimulates
              </a>{" "}
              beta-2 adrenergic receptors in smooth muscle. This explains its historical investigation
              and authorised use as a bronchodilator in certain countries. However, its regulatory
              status is not uniform across Europe. EMA records show that clenbuterol-containing human
              medicines have held national authorisations in only certain EU member states, so
              therapeutic claims must be checked against the current authorisation in each intended market.
            </p>
            <p>
              For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
              clearly disclose the compound’s marketing-authorisation status, legal supply category,
              responsible organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality Control and Traceability</h2>
            <p>
              A reliable Clenbuterol Hydrochloride compound profile should be supported by documented
              analytical controls. Appropriate records may include raw-material identification,
              active-compound assay, impurity analysis, reference-standard comparison, tablet content
              uniformity, dissolution testing, stability assessment and packaging-integrity verification.
            </p>
            <p>
              Every manufactured batch should carry a unique number linked to its production history and
              laboratory-release results. Claims concerning pharmaceutical quality, purity or
              manufacturing standards should only be published when supported by current, verifiable documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Important Safety Information</h2>
            <p>
              Clenbuterol can affect the cardiovascular and nervous systems. Reported concerns include
              palpitations, increased heart rate, tremor and nervousness. People with cardiovascular
              disease, abnormal heart rhythm, hypertension or hyperthyroidism may face additional risks.
            </p>
            <p>
              Clenbuterol Hydrochloride should not be presented for weight loss, physique enhancement,
              athletic performance or unsupervised use. It is classified as a prohibited anabolic agent
              under the 2026 World Anti-Doping Agency Prohibited List and is prohibited both in and out
              of competition.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol USP</h3>
              <p>
                <Link href="/compounds/stanozolol-usp" className={linkClass}>Stanozolol USP</Link> is an
                anabolic-androgenic steroid identified by CAS Number 10418-03-8. Nova Techsciences
                associates it with the lower-strength STANOVA tablet presentation. Its documentation
                should independently address liver, cardiovascular, hormonal and reproductive risks.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol STANOVA-50</h3>
              <p>
                <Link href="/compounds/stanozolol-stanova-50" className={linkClass}>STANOVA-50</Link>{" "}
                contains the same Stanozolol active compound but in a different product strength. It
                retains CAS Number 10418-03-8, while its packaging, strength, batch details and safety
                warnings should be clearly distinguished from the lower-strength presentation.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Clomiphene Citrate</h3>
              <p>
                <Link href="/compounds/clomiphene-citrate" className={linkClass}>Clomiphene Citrate</Link>{" "}
                is a selective oestrogen receptor modulator identified by CAS Number 50-41-9. It is
                associated with medically supervised treatment of ovulatory dysfunction and requires
                separate contraindication, pregnancy, visual-effect and ovarian-response information.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Propionate</h3>
              <p>
                <Link href="/compounds/testosterone-propionate" className={linkClass}>
                  Testosterone Propionate
                </Link>{" "}
                is an esterified testosterone compound identified by CAS Number 57-85-2. It is
                chemically and pharmacologically different from Clenbuterol Hydrochloride and requires
                independent information covering authorised status, contraindications, sterility
                controls and hormonal monitoring.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Blend</h3>
              <p>
                A{" "}
                <a
                  href="https://www.novatechsciences.com/_next/image?url=%2Fassets%2Fproducts%2Finjectables%2FSUSTOVA_1.jpg&w=640&q=75"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testosterone Blend
                </a>{" "}
                combines more than one testosterone component. The individual esters and strengths
                should be identified separately rather than relying only on CAS Number 58-22-0, which
                identifies the parent testosterone compound.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Clenbuterol Hydrochloride should ultimately be presented through accurate chemical
            identification, transparent batch documentation, balanced safety information and clearly
            verified regulatory status.
          </p>
        </div>
      </article>
    </section>
  );
}

function ClomipheneCitrateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Clomiphene Citrate</strong>, also written as Clomifene
              Citrate in UK medical references, is a selective oestrogen receptor modulator identified
              by CAS Number 50-41-9. Its molecular formula is{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/Clostilbegit"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                C32H36ClNO8
              </a>
              , with a molecular weight of approximately 598.08 g/mol. The compound is generally
              formulated as an oral prescription medicine and is associated with medically supervised
              fertility treatment.
            </p>
            <p>
              This Nova Techsciences compound page should provide accurate chemical identification,
              balanced safety information and transparent regulatory context. It must not replace
              authorised prescribing information, a patient information leaflet or consultation with an
              appropriately qualified healthcare professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Clomiphene Citrate Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Clomifene"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Clomiphene Citrate
                </a>
              </li>
              <li><strong>UK spelling:</strong> Clomifene Citrate</li>
              <li><strong>CAS Number:</strong> 50-41-9</li>
              <li><strong>Molecular formula:</strong> C32H36ClNO8</li>
              <li><strong>Molecular weight:</strong> Approximately 598.08 g/mol</li>
              <li><strong>Compound category:</strong> Selective oestrogen receptor modulator</li>
              <li>
                <strong>Common pharmaceutical form:</strong>{" "}
                <Link href="/products/tablets/clominova" className={linkClass}>Oral tablet</Link>
              </li>
            </ul>
            <p>
              Clomiphene Citrate belongs to a group of medicines described as ovulation stimulants. In
              authorised UK prescribing information, it is used for certain types of infertility in
              women who do not ovulate properly. The medicine is classified as prescription-only and
              requires assessment of other possible fertility problems before treatment begins.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">How the Compound Works</h2>
            <p>
              Clomiphene Citrate interacts with oestrogen receptors involved in hormonal feedback. Its
              effects on the hypothalamic-pituitary system can encourage the release of hormones
              associated with follicular development and ovulation.
            </p>
            <p>
              Because fertility conditions have different underlying causes, the compound is not
              suitable for every patient. Professional assessment may include reproductive history,
              pregnancy testing and evaluation of ovarian, thyroid, adrenal, pituitary, uterine and
              male-factor conditions.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality Control and Traceability</h2>
            <p>
              A dependable Clomiphene Citrate compound profile should be supported by documented
              pharmaceutical controls. These may include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Raw-material identity and reference-standard testing</li>
              <li>Active-compound assay and impurity analysis</li>
              <li>Tablet content uniformity and dissolution testing</li>
              <li>Stability and packaging-integrity assessment</li>
              <li>Batch-specific Certificates of Analysis</li>
            </ul>
            <p>
              Every batch should have a traceable identification number connected to manufacturing and
              laboratory-release records. Claims concerning pharmaceutical grade, purity or
              international compliance should only be published when supported by current documentation.
            </p>
            <p>
              For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
              clearly disclose the applicable marketing-authorisation status, legal supply category,
              responsible organisation and adverse-event reporting procedure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Responsible Use</h2>
            <p>
              Important risks associated with Clomiphene Citrate include multiple pregnancy, ectopic
              pregnancy, ovarian enlargement, ovarian hyperstimulation and visual disturbances.
              Authorised UK information states that it should not be used during pregnancy or by people
              with certain liver conditions, unexplained menstrual bleeding, hormone-sensitive cancers
              or particular ovarian cysts.
            </p>
            <p>
              Clomiphene Citrate should not be presented for unsupervised hormone management,
              bodybuilding or post-cycle use. Patients should not begin, change or discontinue treatment
              without professional medical guidance.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Compound Information</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Propionate</h3>
              <p>
                <Link href="/compounds/testosterone-propionate" className={linkClass}>
                  Testosterone Propionate
                </Link>{" "}
                is an esterified anabolic-androgenic hormone identified by CAS Number 57-85-2. It has
                different pharmaceutical properties, risks and regulatory requirements from Clomiphene
                Citrate and requires separate sterile-manufacturing documentation and professional
                hormonal monitoring.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Blend</h3>
              <p>
                A <Link href="/compounds/testosterone-blend" className={linkClass}>Testosterone Blend</Link>{" "}
                combines multiple testosterone esters within one formulation. Each ester and
                concentration should be identified separately in technical records because CAS Number
                58-22-0 refers to the parent testosterone compound rather than the complete blended preparation.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Cypionate</h3>
              <p>
                <Link href="/compounds/testosterone-cypionate" className={linkClass}>
                  Testosterone Cypionate
                </Link>{" "}
                is an esterified testosterone compound identified by CAS Number 58-20-8. Its product
                information should independently address prescription status, contraindications,
                cardiovascular and reproductive considerations, batch sterility and laboratory traceability.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Enanthate</h3>
              <p>
                <Link href="/compounds/testosterone-enanthate" className={linkClass}>
                  Testosterone Enanthate
                </Link>{" "}
                is identified by CAS Number 315-37-7. It is chemically distinct from Clomiphene Citrate
                and requires separate information covering formulation strength, endocrine monitoring,
                adverse reactions, legal supply conditions and injectable-product quality controls.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Boldenone Undecylenate</h3>
              <p>
                <Link href="/compounds/boldenone-undecylenate" className={linkClass}>
                  Boldenone Undecylenate
                </Link>{" "}
                is an anabolic-androgenic steroid identified by CAS Number 13103-34-9. It should not be
                presented as interchangeable with fertility medicines and requires independent
                regulatory, cardiovascular, hormonal and reproductive safety information.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Clomiphene Citrate should ultimately be presented through correct CAS identification,
            evidence-based medical information, transparent batch documentation and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function TestosteroneEnanthateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Testosterone Enanthate</strong> is an esterified form
              of testosterone identified by CAS Number 315-37-7. It has the molecular{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/Testosterone-Enanthate"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                formula C26H40O3
              </a>{" "}
              and a molecular weight of approximately 400.6 g/mol. The enanthate, or heptanoate, ester
              gives the substance a separate chemical identity from Testosterone Propionate,
              Testosterone Cypionate and unesterified testosterone.
            </p>
            <p>
              Nova Techsciences should present Testosterone Enanthate through accurate chemical
              identification, verifiable quality records and balanced safety information. This compound
              page is intended for general informational purposes and should not replace authorised
              prescribing information, an approved patient leaflet or assessment by a qualified
              healthcare professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Testosterone Enanthate Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Testosterone_enanthate"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testosterone Enanthate
                </a>
              </li>
              <li><strong>Alternative name:</strong> Testosterone Heptanoate</li>
              <li><strong>CAS Number:</strong> 315-37-7</li>
              <li><strong>Molecular formula:</strong> C26H40O3</li>
              <li><strong>Molecular weight:</strong> Approximately 400.6 g/mol</li>
              <li>
                <strong>Compound category:</strong>{" "}
                <a
                  href="https://gsrs.ncats.nih.gov/ginas/app/ui/substances/cb5f2d5f-07aa-490f-bd49-c7de7ce3cf09"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Esterified androgen
                </a>
              </li>
              <li><strong>Common pharmaceutical form:</strong> Injectable formulation</li>
            </ul>
            <p>
              The compound name and CAS number should remain consistent across the website, product
              packaging, structured data, laboratory reports and Certificates of Analysis. This helps
              distinguish Testosterone Enanthate from other testosterone esters that have different
              identifiers and technical specifications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Documentation</h2>
            <p>
              Testosterone Enanthate consists of testosterone linked to an enanthate ester. Any medical
              indication displayed on the website should match the current authorised product
              information for the country in which the medicine is supplied.
            </p>
            <p>
              A reliable compound profile should be supported by analytical and manufacturing
              documentation. Relevant controls may include raw-material identification, active-compound
              assay, impurity analysis, reference-standard comparison, sterility testing, particulate
              assessment, stability evaluation and container-closure integrity.
            </p>
            <p>
              Each manufactured batch should carry a unique batch number connected to its production
              history and laboratory-release results. Claims concerning purity, pharmaceutical quality
              or international manufacturing standards should only appear when supported by current evidence.
            </p>
            <p>
              For audiences in the United Kingdom, Netherlands and other European markets, Nova
              Techsciences should clearly disclose the compound’s marketing-authorisation status,
              prescription category, responsible organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Responsible Presentation</h2>
            <p>
              Testosterone Enanthate belongs to the anabolic-androgenic steroid category. Unsupervised
              anabolic-steroid use may cause serious cardiovascular, hormonal, reproductive, liver,
              kidney and psychological effects and can lead to dependence. The compound should not be
              presented for self-medication, use by minors, bodybuilding or unsupervised athletic performance.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Boldenone Undecylenate</h3>
              <p>
                <Link href="/compounds/boldenone-undecylenate" className={linkClass}>
                  Boldenone Undecylenate
                </Link>{" "}
                is an anabolic-androgenic steroid identified by CAS Number 13103-34-9. It has a
                different chemical structure and regulatory profile from Testosterone Enanthate. Its
                page should independently cover compound identity, cardiovascular and reproductive
                risks, analytical testing and legal status.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Trenbolone Acetate</h3>
              <p>
                <Link href="/compounds/trenbolone-acetate" className={linkClass}>Trenbolone Acetate</Link>{" "}
                is identified by CAS Number 10161-34-9 and has the molecular formula C20H24O3. It is not
                a testosterone ester and requires separate information covering regulatory restrictions,
                safety risks, batch traceability and warnings against unsupervised use.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Nandrolone Phenylpropionate</h3>
              <p>
                <Link href="/compounds/nandrolone-phenylpropionate" className={linkClass}>
                  Nandrolone Phenylpropionate
                </Link>{" "}
                is an esterified nandrolone compound identified by CAS Number 62-90-8. It differs from
                Testosterone Enanthate in active structure, ester identity and pharmaceutical profile.
                Its documentation should independently address purity, sterility, contraindications and
                applicable regulatory status.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Nandrolone Decanoate</h3>
              <p>
                <Link href="/compounds/nandrolone-decanoate" className={linkClass}>Nandrolone Decanoate</Link>{" "}
                is identified by CAS Number 360-70-3. The decanoate ester distinguishes it from
                Nandrolone Phenylpropionate and other injectable anabolic compounds. Its page should
                include separate quality records, safety information, batch documentation and
                country-specific prescription requirements.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Trenbolone Enanthate</h3>
              <p>
                <Link href="/compounds/trenbolone-enanthate" className={linkClass}>Trenbolone Enanthate</Link>{" "}
                is identified by CAS Number 1629618-98-9. It must not be confused with Trenbolone
                Acetate, CAS Number 10161-34-9. Any Nova Techsciences page, label or schema showing the
                acetate CAS number for the enanthate compound should be reviewed and corrected.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Testosterone Enanthate should ultimately be presented through correct CAS identification,
            transparent analytical documentation, responsible safety communication and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function TrenboloneAcetateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";

  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Trenbolone Acetate</strong> is a synthetic steroid
              ester identified by CAS Number 10161-34-9. It has the molecular{" "}
              <a
                href="https://pubchem.ncbi.nlm.nih.gov/compound/Trenbolone-Acetate"
                className={linkClass}
                target="_blank"
                rel="noopener noreferrer"
              >
                formula C20H24O3
              </a>{" "}
              and a molecular weight of approximately 312.4 g/mol. Chemically, it is the acetate ester
              of trenbolone and belongs to the androgenic and anabolic-steroid category.
            </p>
            <p>
              Trenbolone Acetate has primarily been associated with veterinary use, including regulated
              livestock applications, rather than authorised human treatment. Any Nova Techsciences
              compound page should clearly distinguish verified chemical information from unsupported
              human therapeutic, physique or performance claims.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Compound Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Compound name:</strong>{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Trenbolone_acetate"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Trenbolone Acetate
                </a>
              </li>
              <li><strong>CAS Number:</strong> 10161-34-9</li>
              <li><strong>Molecular formula:</strong> C20H24O3</li>
              <li><strong>Molecular weight:</strong> Approximately 312.4 g/mol</li>
              <li>
                <strong>Compound class:</strong> Androgenic and{" "}
                <a
                  href="https://pubmed.ncbi.nlm.nih.gov/38887114/"
                  className={linkClass}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  anabolic steroid ester
                </a>
              </li>
              <li><strong>Common form:</strong> Injectable or veterinary implant formulation</li>
            </ul>
            <p>
              The correct name and CAS number should remain consistent across compound pages, product
              records, labels, structured data, laboratory reports and Certificates of Analysis. This
              is particularly important because Trenbolone Acetate, Trenbolone Enanthate and Trenbolone
              Hexahydrobenzylcarbonate are different esters with separate chemical identities.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Documentation</h2>
            <p>
              Trenbolone Acetate consists of trenbolone linked to an acetate ester. A responsible
              compound profile should focus on confirmed chemical identity and documented analytical
              testing rather than promotional claims.
            </p>
            <p>
              Relevant quality records may include raw-material authentication, active-compound assay,
              impurity analysis, reference-standard comparison, sterility testing, particulate
              examination, stability assessment and container-closure integrity. Every batch should
              have a unique identification number connected to its manufacturing history and
              laboratory-release results.
            </p>
            <p>
              Claims concerning pharmaceutical grade, purity, sterile quality or international
              compliance should only be published when supported by current documentation. For
              audiences in the United Kingdom, Netherlands and other European markets, Nova Techsciences
              should clearly disclose the compound’s regulatory status, intended-use limitations,
              responsible organisation and adverse-event reporting route.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Considerations</h2>
            <p>
              Trenbolone is a high-risk anabolic-androgenic substance. Research and medical reviews
              associate its misuse with cardiovascular, hormonal, reproductive, liver, kidney and
              psychological concerns. Human safety evidence remains limited because trenbolone was not
              developed as a routinely authorised human medicine.
            </p>
            <p>
              Trenbolone Acetate should not be presented for self-medication, bodybuilding, athletic
              enhancement or use by minors. The 2026 World Anti-Doping Prohibited List classifies
              anabolic agents and their esters as substances prohibited in sport.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Nandrolone Phenylpropionate</h3>
              <p>
                <Link href="/compounds/nandrolone-phenylpropionate" className={linkClass}>
                  Nandrolone Phenylpropionate
                </Link>{" "}
                is an esterified nandrolone compound identified by CAS Number 62-90-8. It is chemically
                different from trenbolone and requires independent information covering formulation
                identity, sterility, contraindications, hormonal effects, batch testing and legal supply status.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Nandrolone Decanoate</h3>
              <p>
                <Link href="/compounds/nandrolone-decanoate" className={linkClass}>Nandrolone Decanoate</Link>{" "}
                is a separate nandrolone ester identified by CAS Number 360-70-3. Its longer ester
                structure distinguishes it from Nandrolone Phenylpropionate. The compound requires its
                own analytical records, safety information, prescription status and country-specific
                regulatory assessment.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Trenbolone Enanthate</h3>
              <p>
                <Link href="/compounds/trenbolone-enanthate" className={linkClass}>Trenbolone Enanthate</Link>{" "}
                is a different trenbolone ester from Trenbolone Acetate. Its primary compound record now
                uses CAS Number 1629618-98-9; any remaining copy that uses 10161-34-9 for the enanthate
                ester should be independently reviewed and corrected before publication.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Trenbolone Hexahydrobenzylcarbonate</h3>
              <p>
                <Link href="/compounds/trenbolone-hexa-hydrobenzylcarbonate" className={linkClass}>
                  Trenbolone Hexahydrobenzylcarbonate
                </Link>{" "}
                is another esterified trenbolone compound, listed by Nova Techsciences with CAS Number
                23454-33-3. It must be documented separately from the acetate and enanthate forms,
                including accurate chemical identity, regulatory status, analytical testing and safety limitations.
              </p>
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-[#123a6d]">Drostanolone Propionate</h3>
              <p>
                <Link href="/compounds/drostanolone-propionate" className={linkClass}>
                  Drostanolone Propionate
                </Link>{" "}
                is an androgenic steroid ester identified by CAS Number 521-12-0. It is chemically
                distinct from trenbolone compounds and requires separate information concerning batch
                identity, contraindications, cardiovascular and hormonal risks, quality controls and
                legal supply requirements.
              </p>
            </div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Trenbolone Acetate should ultimately be presented through correct CAS identification,
            transparent laboratory documentation, prominent safety information and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function TrenboloneHexaEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Trenbolone Hexahydrobenzylcarbonate</strong> is a
              synthetic anabolic-androgenic steroid ester identified by{" "}
              <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Parabolan" className={linkClass} target="_blank" rel="noopener noreferrer">CAS Number 23454-33-3</a>.
              Chemical databases list its molecular formula as C26H34O4. The hexahydrobenzylcarbonate
              ester gives it a distinct chemical identity from Trenbolone Acetate and Trenbolone Enanthate.
            </p>
            <p>
              This Nova Techsciences compound page should focus on verified chemistry, analytical
              documentation, regulatory clarity and responsible safety information rather than physique
              or performance claims.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Compound Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong>{" "}<a href="https://en.wikipedia.org/wiki/Trenbolone_hexahydrobenzylcarbonate" className={linkClass} target="_blank" rel="noopener noreferrer">Trenbolone Hexahydrobenzylcarbonate</a></li>
              <li><strong>CAS Number:</strong> 23454-33-3</li>
              <li><strong>Molecular formula:</strong>{" "}<a href="https://pubmed.ncbi.nlm.nih.gov/36992616/" className={linkClass} target="_blank" rel="noopener noreferrer">C26H34O4</a></li>
              <li><strong>Compound category:</strong> Synthetic anabolic-androgenic steroid ester</li>
              <li><strong>Common presentation:</strong> Injectable formulation</li>
              <li><strong>Associated Nova Techsciences range:</strong> TRENOVA-HEXA</li>
            </ul>
            <p>
              The compound name and CAS number should remain consistent across the website, packaging,
              structured data, Certificates of Analysis and batch-release records. This is especially
              important because several trenbolone esters have similar names but different chemical
              identifiers and technical specifications.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Quality Documentation</h2>
            <p>
              Trenbolone Hexahydrobenzylcarbonate consists of trenbolone linked to a
              hexahydrobenzylcarbonate ester. A credible compound profile should be supported by
              raw-material identity testing, active-compound assay, impurity analysis, reference-standard
              comparison, sterility testing, particulate assessment, stability evaluation and
              container-closure integrity.
            </p>
            <p>
              Every batch should carry a unique identification number connected to its manufacturing
              history and laboratory-release results. Claims involving purity, pharmaceutical grade,
              sterile quality or international compliance should only be published when current
              supporting evidence is available.
            </p>
            <p>
              For audiences in the United Kingdom, Netherlands and other European markets, Nova
              Techsciences should clearly state the compound’s legal and marketing-authorisation status,
              responsible organisation, intended-use limitations and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Considerations</h2>
            <p>
              Trenbolone compounds belong to the anabolic-androgenic steroid class. Published research
              associates anabolic-steroid misuse with cardiovascular, endocrine, reproductive, liver
              and psychological harms. Research specifically examining trenbolone users has also
              reported serious health concerns.
            </p>
            <p>
              Human safety evidence for this ester remains limited. Trenbolone Hexahydrobenzylcarbonate
              should therefore not be presented as a general health ingredient or routine human
              medicine. It should not be promoted for self-medication, athletic enhancement or use by minors.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Drostanolone Propionate</h3><p><Link href="/compounds/drostanolone-propionate" className={linkClass}>Drostanolone Propionate</Link>{" "}is a synthetic androgenic steroid ester identified by CAS Number 521-12-0. It is chemically distinct from trenbolone and requires separate documentation covering compound identity, sterile manufacturing, cardiovascular and hormonal risks, contraindications and regulatory status.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Phenylpropionate</h3><p><Link href="/compounds/testosterone-phenylpropionate" className={linkClass}>Testosterone Phenylpropionate</Link>{" "}is an esterified testosterone compound identified by CAS Number 1255-49-8. Although also associated with injectable formulations, it contains a different active hormone and has a separate chemical identity, safety profile and regulatory context.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol ROXONOVA</h3><p><a href="http://stanozolol" className={linkClass}>Stanozolol</a> is a synthetic anabolic-androgenic steroid identified by CAS Number 10418-03-8. The injectable presentation associated with ROXONOVA requires independent information covering formulation identity, liver and cardiovascular risks, hormonal effects, sterility and batch traceability.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Methenolone Enanthate</h3><p><Link href="/compounds/methenolone-enanthate" className={linkClass}>Methenolone Enanthate</Link>{" "}is an esterified anabolic compound identified by CAS Number 303-42-4. The primary Nova Techsciences compound record has been corrected; any remaining copy showing 303-40-4 should be reviewed across content, labels and technical documents.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Suspension</h3><p><Link href="/compounds/testosterone-suspension" className={linkClass}>Testosterone Suspension</Link>{" "}contains non-esterified testosterone, identified by CAS Number 58-22-0. It is chemically different from trenbolone esters and requires independent information covering formulation identity, sterile quality controls, prescription status, contraindications and professional hormonal monitoring.</p></div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Trenbolone Hexahydrobenzylcarbonate should ultimately be presented through correct CAS
            identification, transparent analytical records, prominent safety communication and clearly
            stated regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function TestosteronePhenylpropionateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Testosterone Phenylpropionate</strong> is an esterified
              testosterone compound identified by CAS Number 1255-49-8. It has the molecular{" "}
              <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Testosterone-phenylpropionate" className={linkClass} target="_blank" rel="noopener noreferrer">formula C₂₈H₃₆O₃</a>{" "}
              and contains testosterone attached to a phenylpropionate ester. This structure gives the
              substance a separate chemical identity from Testosterone Propionate, Testosterone
              Enanthate, Testosterone Cypionate and non-esterified testosterone.
            </p>
            <p>
              Nova Techsciences associates Testosterone Phenylpropionate with its TESTOVA-PP injectable
              formulation, listed at 100 mg/ml in a 10 ml vial. The compound name, concentration and CAS
              number should remain consistent across the website, packaging, structured data,
              Certificate of Analysis and batch-release documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Compound Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong>{" "}<a href="https://en.wikipedia.org/wiki/Testosterone_phenylpropionate" className={linkClass} target="_blank" rel="noopener noreferrer">Testosterone Phenylpropionate</a></li>
              <li><strong>CAS Number:</strong> 1255-49-8</li>
              <li><strong>Molecular formula:</strong> C₂₈H₃₆O₃</li>
              <li><strong>Compound category:</strong> Esterified androgen</li>
              <li><strong>Associated product:</strong>{" "}<Link href="/products/injectables/testova-pp" className={linkClass}>TESTOVA-PP</Link></li>
              <li><strong>Brand:</strong> Nova Techsciences</li>
            </ul>
            <p>
              Testosterone Phenylpropionate should not be grouped together with other testosterone
              esters without clearly distinguishing their chemical identifiers. Although these
              compounds share testosterone as the active hormone, their attached esters, technical
              specifications and pharmaceutical documentation are different.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Quality Control and Traceability</h2>
            <p>
              A reliable Testosterone Phenylpropionate compound profile should be supported by
              documented analytical and manufacturing controls. These may include raw-material
              authentication, active-compound assay, impurity analysis, reference-standard comparison,
              sterility testing, particulate examination, stability assessment and container-closure integrity.
            </p>
            <p>
              Every production batch should carry a unique number connected to its manufacturing history
              and laboratory-release results. Statements involving purity, pharmaceutical quality,
              sterile manufacturing or international compliance should only be published when supported
              by current and verifiable documents.
            </p>
            <p>
              For audiences in the Netherlands, United Kingdom and other European markets, Nova
              Techsciences should clearly disclose the compound’s marketing-authorisation status,
              prescription classification, responsible organisation and adverse-event reporting procedure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Responsible Presentation</h2>
            <p>
              Testosterone Phenylpropionate belongs to the anabolic-androgenic steroid class. The NHS
              warns that anabolic-steroid misuse can cause serious side effects and dependence,
              including cardiovascular, hormonal, reproductive, liver, kidney and psychological
              complications. The compound should not be presented for self-medication, bodybuilding,
              athletic enhancement or use by minors.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Stanozolol ROXONOVA</h3><p>Stanozolol is an{" "}<Link href="/compounds/stanozolol-roxonova" className={linkClass}>anabolic-androgenic compound</Link>{" "}identified by CAS Number 10418-03-8. Nova Techsciences lists the ROXONOVA presentation at 50 mg/ml. It requires separate information covering chemical identity, sterility controls, liver and cardiovascular risks, contraindications and batch traceability.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Methenolone Enanthate</h3><p><Link href="/compounds/methenolone-enanthate" className={linkClass}>Methenolone Enanthate</Link>{" "}is an esterified anabolic compound correctly identified by CAS Number 303-42-4. The primary Nova Techsciences record is corrected; any remaining copy showing 303-40-4 should be updated across content, metadata, packaging and laboratory documentation.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Suspension</h3><p><Link href="/compounds/testosterone-suspension" className={linkClass}>Testosterone Suspension</Link>{" "}contains non-esterified testosterone, identified by CAS Number 58-22-0. Nova Techsciences lists the TESTOVA-BASE formulation at 100 mg/ml. Because no ester is attached, it must be documented independently from Testosterone Phenylpropionate and other esterified preparations.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">NOVA GAIN C</h3><p><Link href="/compounds/nova-gain-c" className={linkClass}>NOVA GAIN C</Link>{" "}is a multi-compound formulation containing boldenone, nandrolone and several testosterone components. Nova Techsciences lists a total strength of 650 mg/ml. Since it is a blend, it does not have one CAS number; every active compound requires separate identification.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">NOVA CUT MIX</h3><p><Link href="/compounds/nova-cut-mix" className={linkClass}>NOVA CUT MIX</Link>{" "}is presented as a multi-compound blend containing Testosterone Propionate, Trenbolone Acetate and Drostanolone Propionate. Nova Techsciences lists a total concentration of 450 mg/ml. Each ingredient has its own CAS number, safety profile and regulatory documentation requirements.</p></div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Testosterone Phenylpropionate should ultimately be presented through correct CAS
            identification, transparent analytical documentation, balanced safety communication and
            clearly stated regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function NandrolonePhenylpropionateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Nandrolone Phenylpropionate</strong> is an esterified
              nandrolone compound identified by CAS Number 62-90-8. It is also known as Nandrolone
              Phenpropionate and has the molecular{" "}
              <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Nandrolone-Phenylpropionate" className={linkClass} target="_blank" rel="noopener noreferrer">formula C27H34O3</a>.
              The phenylpropionate ester gives the substance a separate chemical identity from
              Nandrolone Decanoate and other nandrolone formulations.
            </p>
            <p>
              Nova Techsciences should present Nandrolone Phenylpropionate through accurate chemical
              identification, transparent quality information and balanced safety communication. This
              page is intended as general compound information and should not replace authorised
              prescribing literature, regulatory documentation or assessment by a qualified healthcare professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Compound Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong>{" "}<a href="https://en.wikipedia.org/wiki/Nandrolone_phenylpropionate" className={linkClass} target="_blank" rel="noopener noreferrer">Nandrolone Phenylpropionate</a></li>
              <li><strong>Alternative name:</strong> Nandrolone Phenpropionate</li>
              <li><strong>CAS Number:</strong> 62-90-8</li>
              <li><strong>Molecular formula:</strong> C27H34O3</li>
              <li><strong>Compound class:</strong>{" "}<a href="https://my.clevelandclinic.org/health/drugs/24940-nandrolone" className={linkClass} target="_blank" rel="noopener noreferrer">Androgenic and anabolic steroid ester</a></li>
              <li><strong>Common pharmaceutical form:</strong> Injectable formulation</li>
              <li><strong>Associated Nova Techsciences range:</strong> NANDROVA-P</li>
            </ul>
            <p>
              The correct compound name and CAS number should remain consistent across the compound
              page, associated product page, packaging, structured data, laboratory reports and
              Certificate of Analysis. This reduces confusion between different nandrolone esters and
              supports accurate technical documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Quality Documentation</h2>
            <p>
              Nandrolone Phenylpropionate is the phenylpropionate ester of nandrolone. PubChem classifies
              the compound as both an anabolic agent and an androgen. It should be documented
              independently from the unesterified nandrolone molecule and from longer-chain esters such
              as Nandrolone Decanoate.
            </p>
            <p>
              A responsible compound profile should be supported by appropriate analytical records.
              These may include raw-material identity testing, active-compound assay, impurity analysis,
              reference-standard comparison, sterility testing, particulate assessment, stability
              evaluation and container-closure integrity.
            </p>
            <p>
              Every batch should carry a unique identification number linked to its manufacturing
              history and laboratory-release results. Claims concerning pharmaceutical grade, purity or
              manufacturing compliance should only be published when current evidence is available.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Regulatory Considerations</h2>
            <p>
              Nandrolone belongs to the anabolic-androgenic steroid category. Medical sources warn that
              nandrolone and related anabolic steroids can cause serious adverse effects and should only
              be considered under professional healthcare supervision where legally authorised.
            </p>
            <p>
              Misuse of anabolic steroids may affect cardiovascular health, fertility, hormonal balance,
              liver or kidney function and psychological wellbeing. Adolescents may also experience
              restricted growth. Nandrolone Phenylpropionate should not be presented for self-medication,
              bodybuilding, athletic enhancement or use by minors.
            </p>
            <p>
              For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
              clearly state the compound’s current marketing-authorisation status, legal supply category,
              responsible organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Nandrolone Decanoate</h3><p><Link href="/compounds/nandrolone-decanoate" className={linkClass}>Nandrolone Decanoate</Link>{" "}is a longer-chain nandrolone ester identified by CAS Number 360-70-3 and molecular formula C28H44O3. It is chemically distinct from Nandrolone Phenylpropionate and requires separate documentation covering formulation identity, quality testing, contraindications and regulatory status.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Trenbolone Enanthate</h3><p><Link href="/compounds/trenbolone-enanthate" className={linkClass}>Trenbolone Enanthate</Link>{" "}is an esterified trenbolone compound rather than a nandrolone medicine. Its chemical identifier, formulation details and regulatory status must be verified independently. It should not be confused with Trenbolone Acetate, which is identified by CAS Number 10161-34-9.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Trenbolone Hexahydrobenzylcarbonate</h3><p><Link href="/compounds/trenbolone-hexa-hydrobenzylcarbonate" className={linkClass}>Trenbolone Hexahydrobenzylcarbonate</Link>{" "}is another trenbolone ester with a separate molecular structure and chemical identity. Its compound page should independently address analytical testing, intended-use limitations, regulatory status and prominent warnings concerning unsupervised human use.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Drostanolone Propionate</h3><p><Link href="/compounds/drostanolone-propionate" className={linkClass}>Drostanolone Propionate</Link>{" "}is an androgenic and anabolic steroid ester chemically unrelated to nandrolone. It requires its own quality documentation, batch traceability, contraindication information and cardiovascular, hormonal and reproductive safety communication.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Phenylpropionate</h3><p><Link href="/compounds/testosterone-phenylpropionate" className={linkClass}>Testosterone Phenylpropionate</Link>{" "}is an esterified testosterone compound with the molecular formula C28H36O3. Although it shares a phenylpropionate ester, it has a different active hormone and must be documented separately from Nandrolone Phenylpropionate.</p></div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Nandrolone Phenylpropionate should ultimately be presented through correct CAS
            identification, verifiable quality records, responsible safety information and clearly
            stated regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function StanozololRoxonovaEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Stanozolol</strong> is a synthetic anabolic-androgenic
              compound identified by CAS Number 10418-03-8. It has the molecular{" "}
              <a href="https://pubchem.ncbi.nlm.nih.gov/compound/Stanozolol" className={linkClass} target="_blank" rel="noopener noreferrer">formula C21H32N2O</a>{" "}
              and is structurally derived from dihydrotestosterone. Nova Techsciences associates this
              compound with ROXONOVA, an injectable presentation listed at 50 mg/ml in a 10 ml multidose vial.
            </p>
            <p>
              This compound page provides general chemical, quality and safety information. It should
              not replace approved prescribing information, a patient leaflet or an individual
              assessment by a qualified healthcare professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Stanozolol ROXONOVA Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong>{" "}<a href="https://en.wikipedia.org/wiki/Stanozolol" className={linkClass} target="_blank" rel="noopener noreferrer">Stanozolol</a></li>
              <li><strong>CAS Number:</strong> 10418-03-8</li>
              <li><strong>Molecular formula:</strong> C21H32N2O</li>
              <li><strong>Listed strength:</strong> 50 mg/ml</li>
              <li><strong>Pharmaceutical form:</strong> Injectable formulation</li>
              <li><strong>Associated product:</strong>{" "}<Link href="/products/injectables/roxonova" className={linkClass}>ROXONOVA</Link></li>
              <li><strong>Brand:</strong> Nova Techsciences</li>
            </ul>
            <p>
              The compound name, concentration and CAS number should remain consistent across the Nova
              Techsciences compound page, product page, packaging, structured data, Certificate of
              Analysis and batch-release documentation.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Quality Documentation</h2>
            <p>
              Stanozolol belongs to the{" "}
              <a href="https://www.nhs.uk/conditions/anabolic-steroid-misuse/" className={linkClass} target="_blank" rel="noopener noreferrer">androgenic and anabolic-steroid</a>{" "}
              category. The CAS number provides a recognised identifier that distinguishes it from
              Methenolone, Testosterone, Trenbolone and other steroidal compounds with separate
              structures and safety profiles.
            </p>
            <p>
              A responsible Stanozolol ROXONOVA profile should be supported by documented analytical and
              manufacturing controls. Relevant records may include raw-material authentication,
              active-compound assay, impurity analysis, reference-standard comparison, sterility
              assessment, particulate testing, stability evaluation and container-closure integrity.
            </p>
            <p>
              Every production batch should have a unique identification number linked to its
              manufacturing history and laboratory-release results. Statements concerning purity,
              sterile quality, pharmaceutical standards or international compliance should only be
              published when current supporting evidence is available.
            </p>
            <p>
              For audiences in the United Kingdom, Netherlands and other European markets, Nova
              Techsciences should clearly disclose the compound’s marketing-authorisation status,
              prescription classification, responsible organisation and adverse-event reporting process.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Important Safety Information</h2>
            <p>
              Stanozolol is not an ordinary wellness or nutritional compound. The NHS warns that
              anabolic-steroid misuse can cause serious cardiovascular, liver, kidney, hormonal,
              reproductive and psychological effects. It can also lead to dependence, while misuse
              during adolescence may restrict normal growth.
            </p>
            <p>
              Stanozolol ROXONOVA should not be presented for self-medication, bodybuilding, sporting
              performance or use by minors. Dosage schedules, injection methods, cycles, combinations or
              strategies intended to reduce side effects should not be taken from unofficial sources.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Methenolone Enanthate</h3><p><Link href="/compounds/methenolone-enanthate" className={linkClass}>Methenolone Enanthate</Link>{" "}is an esterified anabolic compound correctly identified by CAS Number 303-42-4. The primary Nova Techsciences record is corrected; any remaining content, metadata, packaging or laboratory documentation showing 303-40-4 should be updated.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Suspension</h3><p><Link href="/compounds/testosterone-suspension" className={linkClass}>Testosterone Suspension</Link>{" "}contains non-esterified testosterone, identified by CAS Number 58-22-0. Nova Techsciences lists the TESTOVA-BASE presentation at 100 mg/ml. Because no ester is attached, it requires documentation separate from esterified testosterone and Stanozolol formulations.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">NOVA GAIN C</h3><p><Link href="/compounds/nova-gain-c" className={linkClass}>NOVA GAIN C</Link>{" "}is presented as a 650 mg/ml multi-compound injectable containing Boldenone, Nandrolone and several testosterone components. It does not have one CAS number because each active substance requires its own chemical identifier, analytical specification and safety documentation.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">NOVA CUT MIX</h3><p><Link href="/compounds/nova-cut-mix" className={linkClass}>NOVA CUT MIX</Link>{" "}is listed as a 450 mg/ml blend containing Testosterone Propionate, Trenbolone Acetate and Drostanolone Propionate. Each ingredient has a separate CAS number, contraindication profile and quality-control requirement, so the formulation should not be documented under one chemical identifier.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Letrozole</h3><p><Link href="/compounds/letrozole" className={linkClass}>Letrozole</Link>{" "}is a non-steroidal aromatase inhibitor identified by CAS Number 112809-51-5. Nova Techsciences associates it with FEMANOVA 2.5 mg tablets. It is pharmacologically different from Stanozolol and requires separate authorised-use information, pregnancy warnings, contraindications and professional prescribing oversight.</p></div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Stanozolol ROXONOVA should ultimately be presented through correct CAS identification,
            transparent batch documentation, balanced safety communication and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

function TestosteronePropionateEditorialContent() {
  const linkClass = "font-semibold text-[#1f5f99] underline underline-offset-2";
  return (
    <section className="mx-auto max-w-7xl px-4 pb-10">
      <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 text-[#3f6289] shadow-sm md:p-8">
        <div className="max-w-5xl space-y-8 leading-7">
          <div className="space-y-4">
            <p>
              <strong className="text-[#123a6d]">Testosterone Propionate</strong> is an esterified form
              of testosterone identified by CAS Number 57-85-2. It has the molecular{" "}
              <a href="http://en.wikipedia.org/wiki/Testosterone_propionate" className={linkClass} target="_blank" rel="noopener noreferrer">formula C22H32O3</a>{" "}
              and belongs to the androgen and anabolic-steroid class. The propionate ester gives this
              substance a separate chemical identity from Testosterone Cypionate, Testosterone
              Enanthate and unesterified testosterone.
            </p>
            <p>
              This Nova Techsciences page provides neutral chemical, quality and safety information
              about Testosterone Propionate. It should not replace authorised prescribing information,
              an approved patient leaflet or individual assessment by a qualified healthcare professional.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Testosterone Propionate Overview</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Compound name:</strong>{" "}<a href="https://en.wikipedia.org/wiki/Testosterone_propionate" className={linkClass} target="_blank" rel="noopener noreferrer">Testosterone Propionate</a></li>
              <li><strong>CAS Number:</strong> 57-85-2</li>
              <li><strong>Molecular formula:</strong> C22H32O3</li>
              <li><strong>Compound category:</strong> Esterified androgen</li>
              <li><strong>Common pharmaceutical form:</strong> Injectable preparation</li>
              <li><strong>Associated Nova Techsciences range:</strong>{" "}<Link href="/products/injectables/testova-p" className={linkClass}>TESTOVA-P</Link></li>
            </ul>
            <p>
              The CAS number should remain consistent across the compound page, product page, packaging,
              structured data, laboratory reports and Certificates of Analysis. This is particularly
              important because several testosterone esters have similar names but different chemical
              identifiers and formulation characteristics.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Chemical Identity and Documentation</h2>
            <p>
              Testosterone Propionate consists of testosterone linked to a propionate ester. Following
              authorised administration, the ester is separated from the active testosterone molecule,
              allowing testosterone to interact with androgen receptors. Any description of medical use
              should be limited to indications supported by the authorised product information for the
              relevant market.
            </p>
            <p>
              A dependable Testosterone Propionate profile should be supported by appropriate analytical
              and manufacturing records. These may include raw-material identification, active-compound
              assay, impurity analysis, reference-standard comparison, sterility testing, particulate
              assessment, stability data and container-closure integrity checks.
            </p>
            <p>
              Every batch should carry a unique identification number linked to its manufacturing
              history and laboratory-release results. Statements concerning pharmaceutical grade,
              purity, quality testing or international compliance should only appear when current
              supporting evidence is available.
            </p>
            <p>
              For the United Kingdom, Netherlands and other European markets, Nova Techsciences should
              clearly disclose the compound’s marketing-authorisation status, prescription category,
              responsible organisation and adverse-event reporting procedure.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-[#123a6d]">Safety and Responsible Presentation</h2>
            <p>
              Testosterone Propionate is not an ordinary wellness or sports supplement. Misuse of
              anabolic steroids can cause serious cardiovascular, hormonal, reproductive, liver, kidney
              and psychological effects. It may also lead to dependence. The compound should not be
              presented for self-medication, use by minors, physique enhancement or unsupervised
              athletic purposes.
            </p>
            <p>
              Testosterone and other anabolic agents are prohibited in competitive sport under the 2026
              World Anti-Doping Agency Prohibited List. Compound information should avoid performance
              claims and emphasise professional medical supervision and country-specific legal requirements.
            </p>
          </div>

          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-[#123a6d]">Related Nova Techsciences Compounds</h2>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Blend</h3><p>A <Link href="/compounds/testosterone-blend" className={linkClass}>Testosterone Blend</Link>{" "}combines more than one testosterone ester in a single formulation. Each ester and concentration should be identified independently because CAS Number 58-22-0 refers to the parent testosterone molecule rather than an entire multi-ester preparation.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Cypionate</h3><p><Link href="/compounds/testosterone-cypionate" className={linkClass}>Testosterone Cypionate</Link>{" "}is an esterified testosterone compound identified by CAS Number 58-20-8. It has a different chemical structure from Testosterone Propionate and requires separate information covering formulation strength, sterile manufacturing, contraindications, endocrine monitoring and legal supply status.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Testosterone Enanthate</h3><p><Link href="/compounds/testosterone-enanthate" className={linkClass}>Testosterone Enanthate</Link>{" "}is identified by CAS Number 315-37-7. It is another distinct testosterone ester and should have independent batch documentation, formulation details, storage requirements, safety information and regulatory assessment rather than being treated as interchangeable with other testosterone preparations.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Boldenone Undecylenate</h3><p><Link href="/compounds/boldenone-undecylenate" className={linkClass}>Boldenone Undecylenate</Link>{" "}is an anabolic-androgenic steroid identified by CAS Number 13103-34-9. It is chemically different from testosterone medicines and requires separate information covering regulatory status, cardiovascular and reproductive risks, analytical testing and anti-doping restrictions.</p></div>
            <div className="space-y-1"><h3 className="text-lg font-semibold text-[#123a6d]">Trenbolone Acetate</h3><p><Link href="/compounds/trenbolone-acetate" className={linkClass}>Trenbolone Acetate</Link>{" "}is an anabolic compound identified by CAS Number 10161-34-9. It is not a testosterone ester and has a distinct chemical, safety and regulatory profile. Its compound information should prioritise accurate identification, prominent risk communication and verifiable batch traceability.</p></div>
          </div>

          <p className="font-semibold text-[#123a6d]">
            Testosterone Propionate should ultimately be presented through correct CAS identification,
            transparent quality documentation, balanced safety information and clearly stated
            regulatory limitations.
          </p>
        </div>
      </article>
    </section>
  );
}

export default function CompoundClient({ compoundId }) {
  const compounds = useMemo(() => getCompounds(), []);
  const [products, setProducts] = useState([]);

  const compound = useMemo(
    () => compounds.find((item) => item.id.toLowerCase() === compoundId.toLowerCase()),
    [compounds, compoundId]
  );

  const [activeFAQ, setActiveFAQ] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    let ignore = false;

    const loadProducts = async () => {
      try {
        const res = await fetch("/api/products?lang=en", { cache: "force-cache" });
        if (!res.ok) throw new Error("Failed to fetch products");
        const data = await res.json();
        if (!ignore) setProducts(Array.isArray(data.products) ? data.products : []);
      } catch (_) {
        if (!ignore) setProducts([]);
      }
    };

    loadProducts();

    return () => {
      ignore = true;
    };
  }, []);

  if (!compound) {
    return (
      <div className="min-h-screen bg-white pt-28 text-center text-[#36597f]">
        Compound not found.
      </div>
    );
  }

  const images = [1, 2, 3].map((index) =>
    getLocalProductImagePath(compound.category, compound.imageKey, index)
  );
  const compoundTitle = compound.displayName || compound.name;

  const related = compounds
    .filter((item) => item.id !== compound.id && item.category === compound.category)
    .slice(0, 3);
  const mappedProduct = useMemo(
    () =>
      products.find(
        (item) =>
          item.category?.toLowerCase() === compound.category?.toLowerCase() &&
          item.imageKey?.toUpperCase() === compound.imageKey?.toUpperCase()
      ),
    [compound.category, compound.imageKey]
  );
  const mappedProductHref = mappedProduct
    ? `/products/${mappedProduct.category.toLowerCase()}/${mappedProduct.id}`
    : "";
  const mappedProductFirstWord = mappedProduct?.name?.trim()?.split(/\s+/)?.[0] || "";

  const faqs = compound.faq || [];
  const facts = parseKeyValueLines(compound.presentation).slice(0, 6);
  const indicationLines = parseLines(compound.indication);
  const indicationSections = splitIndicationSections(indicationLines);
  const indicationHighlights = getHighlightPoints(indicationLines);
  const precautionLines = parseLines(compound.precautions);
  const contraindicationLines = parseLines(compound.contraindications);

  const plainParagraphKeys = indicationSections
    .flatMap((section, sectionIdx) =>
      section.content
        .map((line, lineIdx) => ({ line, key: `${sectionIdx}-${lineIdx}` }))
        .filter(({ line }) => !isBulletLikeLine(line))
    )
    .map(({ key }) => key);

  const productLinkParagraphKey = plainParagraphKeys[0];
  const homeLinkParagraphKey = plainParagraphKeys[1];

  const replaceFirstOccurrenceWithLink = (line, term, href, keyPrefix) => {
    if (!term || !href) return line;

    const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const regex = new RegExp(escaped, "i");
    const match = regex.exec(line);
    if (!match) return line;

    const start = match.index;
    const end = start + match[0].length;

    return (
      <>
        <span>{line.slice(0, start)}</span>
        <Link href={href} className="font-semibold text-[#1f5f99] underline underline-offset-2">
          {line.slice(start, end)}
        </Link>
        <span>{line.slice(end)}</span>
      </>
    );
  };

  const renderLineWithLinks = (line, keyPrefix) => {
    if (keyPrefix === productLinkParagraphKey) {
      return replaceFirstOccurrenceWithLink(
        line,
        mappedProductFirstWord,
        mappedProductHref,
        keyPrefix
      );
    }

    if (keyPrefix === homeLinkParagraphKey) {
      return replaceFirstOccurrenceWithLink(line, "NovaTech Sciences", "/", keyPrefix);
    }

    return line;
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      <Breadcrumbs />

      <section className="relative overflow-hidden py-10 text-white">
        <img
          src="/bannernova.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#0c2b52]/60 via-[#18487d]/60 to-[#2f74ad]/60"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Compound Details
          </p>
          <h1 className="mt-2 text-3xl font-bold md:text-5xl">{compoundTitle}</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/90 md:text-base">
            {compound.shortDescription || compound.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              CAS: {compound.cas || "N/A"}
            </span>
            <span className="rounded-full bg-white/15 px-4 py-1.5 text-sm font-semibold backdrop-blur">
              {compound.category}
            </span>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-[#d5e5f2] bg-white p-4 shadow-sm lg:col-span-5 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-[#f8fcff]">
              <img
                src={images[activeImage]}
                alt={compoundTitle}
                onError={(e) => {
                  e.currentTarget.src = "/products/placeholder.jpg";
                }}
                className="h-[min(56vh,420px)] w-full object-contain"
              />
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {images.map((img, idx) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(idx)}
                  className={`overflow-hidden rounded-xl border transition ${
                    activeImage === idx
                      ? "border-[#1f5f99] ring-2 ring-[#d9ecfb]"
                      : "border-[#d5e5f2]"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${compoundTitle} ${idx + 1}`}
                    onError={(e) => {
                      e.currentTarget.src = "/products/placeholder.jpg";
                    }}
                    className="h-20 w-full object-contain bg-[#f9fcff]"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:col-span-7">
            <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#123a6d]">Quick Facts</h2>
              {facts.length > 0 ? (
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="rounded-xl border border-[#e2edf7] bg-[#f9fcff] px-4 py-3"
                    >
                      <p className="text-xs font-semibold uppercase tracking-wide text-[#4f739b]">
                        {fact.label}
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#123a6d]">{fact.value}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-sm text-[#48698e]">{compound.presentation}</p>
              )}
            </article>

            <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-bold text-[#123a6d]">
                <FlaskConical className="h-5 w-5" />
                Indication
              </h2>
              {indicationHighlights.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {indicationHighlights.map((point, idx) => (
                    <span
                      key={`${point}-${idx}`}
                      className="rounded-full border border-[#c9dff2] bg-[#edf6fd] px-3 py-1 text-xs font-semibold text-[#18487d]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              )}
              <div className="mt-4 space-y-5 text-sm text-[#3f6289]">
                {indicationSections.map((section, idx) => (
                  <div key={idx}>
                    {section.heading ? (
                      <h3 className="mb-2 text-base font-bold text-[#123a6d]">
                        {section.heading}
                      </h3>
                    ) : null}
                    <div className="space-y-2">
                      {section.content.map((line, lineIdx) =>
                        isBulletLikeLine(line) ? (
                          <div key={`${idx}-${lineIdx}`} className="flex items-start gap-2 pl-1">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-[#5f83aa]" />
                            <span>{line.replace(/^[-*•]\s+/, "")}</span>
                          </div>
                        ) : (
                          <p key={`${idx}-${lineIdx}`}>
                            {renderLineWithLinks(line, `${idx}-${lineIdx}`)}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
              <h2 className="flex items-center gap-2 text-xl font-bold text-[#123a6d]">
                <ShieldCheck className="h-5 w-5" />
                Safety Information
              </h2>
              <p className="mt-4 text-sm font-semibold text-[#123a6d]">Precautions</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
                {precautionLines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>

              <p className="mt-6 text-sm font-semibold text-[#123a6d]">Contraindications</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-[#3f6289]">
                {contraindicationLines.map((line, idx) => (
                  <li key={idx}>{line}</li>
                ))}
              </ul>
            </article>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex rounded-xl bg-[#1f5f99] px-6 py-3 font-semibold text-white transition hover:bg-[#174d7d]"
              >
                Enquire This Compound
              </Link>
            </div>
          </div>
        </div>
      </section>

      {compoundId.toLowerCase() === "enclominova" && (
        <EnclomipheneCitrateEditorialContent />
      )}
      {compoundId.toLowerCase() === "primonova" && <MetenoloneAcetateEditorialContent />}
      {compoundId.toLowerCase() === "supernova" && <MethyldrostanoloneEditorialContent />}
      {compoundId.toLowerCase() === "telinova" && <TelmisartanEditorialContent />}
      {compoundId.toLowerCase() === "turinova" && (
        <ChlorodehydromethyltestosteroneEditorialContent />
      )}
      {compoundId.toLowerCase() === "nova-t4" && <LevothyroxineSodiumT4EditorialContent />}
      {compoundId.toLowerCase() === "oxydrol" && <OxymetholoneEditorialContent />}
      {compoundId.toLowerCase() === "novamoren" && <Mk677EditorialContent />}
      {compoundId.toLowerCase() === "spiroclen" && <ClenbuterolHydrochlorideEditorialContent />}
      {compoundId.toLowerCase() === "clominova" && <ClomipheneCitrateEditorialContent />}
      {compoundId.toLowerCase() === "testova-e" && <TestosteroneEnanthateEditorialContent />}
      {compoundId.toLowerCase() === "trenova-a" && <TrenboloneAcetateEditorialContent />}
      {compoundId.toLowerCase() === "trenovahexa" && <TrenboloneHexaEditorialContent />}
      {compoundId.toLowerCase() === "testova-pp" && <TestosteronePhenylpropionateEditorialContent />}
      {compoundId.toLowerCase() === "nandrova-p" && <NandrolonePhenylpropionateEditorialContent />}
      {compoundId.toLowerCase() === "roxonova" && <StanozololRoxonovaEditorialContent />}
      {compoundId.toLowerCase() === "testova-p" && <TestosteronePropionateEditorialContent />}

      {faqs.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-8">
          <div className="rounded-3xl border border-[#d5e5f2] bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-[#123a6d]">
              <FileText className="h-6 w-6" />
              FAQs
            </h2>
            <div className="mt-5 space-y-3">
              {faqs.map((faq, idx) => (
                <div key={idx} className="rounded-xl border border-[#d9e7f3]">
                  <button
                    onClick={() => setActiveFAQ(activeFAQ === idx ? null : idx)}
                    className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-[#18487d]"
                  >
                    <span>{faq.q || faq.question}</span>
                    <span
                      className={`transition-transform duration-150 ${
                        activeFAQ === idx ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {activeFAQ === idx && (
                    <div className="border-t border-[#e5eff7] px-4 py-3 text-sm text-[#42658d]">
                      {faq.a || faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16">
          <h2 className="mb-5 text-2xl font-bold text-[#123a6d]">Related Compounds</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {related.map((item, idx) => (
              <CompoundCard key={item.id} compound={item} priority={idx < 3} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
