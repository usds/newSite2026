import type { Metadata } from "next";
import styles from "./hiringFaq.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import FaqItem from "./FaqItem";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://www.usds.gov";

export const metadata: Metadata = {
  title: "Hiring FAQ",
  description:
    "Frequently asked questions about USDS hiring, interviews, onboarding, relocation, and life at the U.S. DOGE Service.",
  keywords: [
    "USDS hiring FAQ",
    "U.S. DOGE Service application process",
    "USDS onboarding",
    "USDS background check",
    "federal tech hiring",
  ],
  alternates: {
    canonical: "/hiring-faq",
  },
  openGraph: {
    url: `${siteUrl}/hiring-faq`,
    title: "Hiring FAQ | U.S. DOGE Service (USDS)",
    description:
      "Learn what to expect in the USDS hiring process, interview stages, timelines, onboarding requirements, and relocation expectations.",
    images: [
      {
        url: "/usds-logo-cropped.svg",
        alt: "U.S. DOGE Service logo",
      },
    ],
  },
  twitter: {
    title: "Hiring FAQ | U.S. DOGE Service (USDS)",
    description:
      "Learn what to expect in the USDS hiring process, interview stages, timelines, onboarding requirements, and relocation expectations.",
    images: ["/usds-logo-cropped.svg"],
  },
};

type Faq = {
  question: string;
  paragraphs: string[];
  bullets?: string[];
};

const GETTING_HIRED_FAQS: Faq[] = [
  {
    question: "Who is eligible to apply?",
    paragraphs: [
      "Anyone with U.S. citizenship, including dual citizenship, or those who are a national (a resident of American Samoa and Swain Island).",
    ],
  },
  {
    question: "Do I need a federal resume?",
    paragraphs: [
      "The federal standard is a two-page resume. Anything beyond two pages will not be read or considered by our talent team.",
      "Within your resume, focus on the accomplishments of your work. Do not only list your tech stack or design approaches. Describe what you did and what outcomes you drove so we can assess your full breadth and depth of experience quickly.",
    ],
  },
  {
    question: "I applied, what is next?",
    paragraphs: [
      "First, your resume is reviewed by our talent team. If you meet our baseline for technical qualifications and experience, a recruiter will contact you for a 20-minute phone call.",
      "That call covers more about USDS and the roles we are filling, and helps us better understand your professional background.",
    ],
  },
  {
    question: "What is the process and how long does it take?",
    paragraphs: [
      "Everyone's onboarding journey in government is a little different. We have outlined average steps below, but timelines vary by person and by security process details.",
      "Our HR and security partners fill critical roles across the Executive Office of the President, which includes USDS. As part of work with a White House component, all candidates must undergo background investigations.",
      "We have streamlined onboarding relative to typical federal timelines, but it is still often longer than private-sector hiring.",
      "Onboarding to USDS can take several weeks depending on completion of required background checks. Our talent team provides updates throughout.",
    ],
  },
  {
    question: "How do we interview?",
    paragraphs: [
      "USDS requires an initial phone screen to share more about the role and to learn more about your background.",
      "After the phone screen, next steps vary by role:",
    ],
    bullets: [
      "Technical candidates (for example engineers and product managers): complete a take-home assessment in 3-4 days. If successful, move to up to three virtual interviews (two technical, one behavioral) via Webex.",
      "Design candidates: submit a portfolio link and one case study after phone screen. If successful, move to virtual interviews (two technical, one behavioral).",
      "Non-technical candidates: may complete two virtual interviews (one specialty-focused and one behavioral).",
      "Our talent team provides instructions throughout every step.",
    ],
  },
  {
    question: "Why do you not have traditional job descriptions?",
    paragraphs: [
      "We do have role descriptions, but they are different from typical government position descriptions. The best starting point is the How We Work page, which explains our role types and how we create impact across agencies.",
      "USDS responsibilities vary significantly because agencies and projects have distinct needs. Given the breadth and unpredictability of engagements, we hire adaptable experts and also hire specialists for targeted projects.",
      "We are always hiring for multiple roles. If you are an expert in your field and want to contribute, you should apply.",
    ],
  },
];

const HIRING_TIMELINE = [
  { step: "Phone screen", days: "1 - 3" },
  { step: "Take-home technical assessment", days: "5 - 7" },
  { step: "Interviews (technical and behavioral)", days: "10 - 18" },
  { step: "Total from application", days: "16 - 28" },
] as const;

const ONBOARDING_TIMELINE = [
  { step: "Tentative offer of employment", days: "2 - 7" },
  { step: "Background investigation and drug test", days: "10 - 30" },
  { step: "Final offer of employment", days: "2 - 7" },
  { step: "Total from application", days: "14 - 44" },
] as const;

const ONBOARDING_FAQS: Faq[] = [
  {
    question: "Where am I in the background check process?",
    paragraphs: [
      "USDS does not have direct insight into individual candidate background investigation status.",
      "Our security partners work closely with intelligence agencies to keep the process moving as quickly as possible while ensuring suitability for employment with a White House component.",
      "Estimated timeframe is generally 10 to 30 business days. If you are deployed to an agency, you may also undergo an additional agency-specific investigation.",
    ],
  },
  {
    question:
      "I submitted background paperwork and have not heard in two weeks. What is happening?",
    paragraphs: [
      "During the Tentative Job Offer (TJO) process, the first phase of your federal background check determines whether you are suitable for employment with the Executive Office of the President.",
      "Once that phase is complete and you pass, you receive your Full-Time Job Offer.",
      "After onboarding, your investigation continues as part of adjudication for security clearance, which can take several additional months.",
    ],
  },
  {
    question: "What happens if I fail my background check?",
    paragraphs: [
      "If you do not pass, you are ineligible for employment with the Executive Office of the President and your Tentative Job Offer is rescinded.",
      "A failed check with EOP does not automatically make you ineligible to apply to other U.S. government agencies.",
      "For questions on determination results, contact the security team listed in your determination email.",
    ],
  },
  {
    question: "Did I pass my background check?",
    paragraphs: [
      "You may know before we do. You will receive a formal offer letter from HR when you have passed the background check and drug test.",
      "The HR team that issued your Tentative Job Offer will follow up when you are considered suitable for employment. Your broader investigation may continue for many months after employment starts.",
      "Please keep the talent team informed about timeline changes during onboarding.",
    ],
  },
  {
    question: "What is the process to receive an offer?",
    paragraphs: [
      "You receive a Tentative Job Offer (TJO) first. It is conditional on passing background checks and drug testing.",
      "Because it is conditional, candidates should avoid major long-term decisions until receiving a Formal Job Offer.",
      "You receive the Formal Job Offer after successfully passing required checks.",
    ],
  },
  {
    question: "When do I start?",
    paragraphs: [
      "Once you pass background investigation and drug test, the talent team coordinates your start date and sends your Formal Job Offer.",
      "After taking the drug test, you must start within 30 days or results become invalid.",
    ],
  },
];

const RELOCATION_FAQS: Faq[] = [
  {
    question: "Where will I live?",
    paragraphs: [
      "USDS staff work in-person five days per week at the Washington, D.C. office and/or at an assigned agency office in the D.C.-Maryland-Virginia area.",
      "You are assigned to the Washington, D.C. locality pay area under General Schedule (GS) compensation.",
    ],
  },
  {
    question: "Is there a relocation package?",
    paragraphs: ["No. USDS does not offer relocation incentives."],
  },
  {
    question: "I want to visit the office in D.C. Can you help?",
    paragraphs: [
      "Yes. We can help arrange visits for incoming candidates who have received a Tentative Job Offer.",
      "Reach out to the talent team to schedule a visit.",
    ],
  },
];

const LIFE_FAQS: Faq[] = [
  {
    question: "What will I do during my time at USDS?",
    paragraphs: [
      "There is no typical USDS experience.",
      "Depending on your skillset and interests, you may be matched to an agency team (for example Veterans Affairs or CMS), or you may join the Rapid Response Team for high-priority 6-8 week sprints.",
      "Project type and scope can vary significantly, and your work may include tasks you have never done before, from field visits to senior stakeholder briefings.",
    ],
  },
  {
    question: "Is there a dress code?",
    paragraphs: [
      "USDS encourages people to dress for their day. Days focused on heads-down project work are often casual, while leadership and stakeholder meetings may call for business casual or more formal attire.",
      "Our culture is laid back, and we encourage sound judgment. You can always ask experienced teammates for guidance in specific situations.",
    ],
  },
  {
    question: "What is the culture of USDS?",
    paragraphs: [
      "USDS is made up of scrappy, mission-driven, and passionate people.",
      "We are unusual within government in both small and large ways. Core factors behind our impact include close partnership with civil servants, positioning within the Executive Office of the President, hands-on expertise in technology and design, and our limited tour-of-duty model.",
      "The team works hard because the mission matters and outcomes are visible in real people's lives. Even when bureaucracy creates friction, the USDS community supports one another to troubleshoot and deliver.",
    ],
  },
];

function TimelineCard({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<{ step: string; days: string }>;
}) {
  return (
    <article className={styles.timelineCard}>
      <div className={styles.timelineCardInner}>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <table className={styles.timelineTable}>
          <thead>
            <tr>
              <th>Stage</th>
              <th>Business days</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.step}>
                <td>{row.step}</td>
                <td>{row.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default function HiringFaqPage() {
  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <div className="pageInnerWrapper">
        <section className={`${styles.frame} ${styles.gapLg} ${styles.hero}`}>
          <SectionHeader
            eyebrow="Hiring FAQ"
            title="Everything to expect from application to onboarding."
            titleAs="h1"
            titleSize="large"
            titleAlignment="center"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[0, 20]}
            subTitle="Guidance on eligibility, interviews, timelines, background checks, relocation expectations, and day-to-day life at USDS."
            subTitleAlignment="center"
          />

          <div className={styles.quickLinks}>
            <a href="#getting-hired" className={styles.quickLink}>
              Getting hired
            </a>
            <a href="#onboarding" className={styles.quickLink}>
              Onboarding
            </a>
            <a href="#relocation" className={styles.quickLink}>
              Relocation
            </a>
            <a href="#life-at-usds" className={styles.quickLink}>
              Life at USDS
            </a>
          </div>
        </section>

        <DividerStars />

        <section
          id="getting-hired"
          className={`${styles.frame} ${styles.gapLg} ${styles.panelTone} ${styles.section}`}
        >
          <SectionHeader
            eyebrow="Getting Hired"
            title="Application and interview process"
            titleAs="h2"
            titleSize="medium"
            titleAlignment="center"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
          />

          <div className={styles.faqList}>
            {GETTING_HIRED_FAQS.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>

          <div className={styles.timelineGrid}>
            <TimelineCard title="Hiring process" rows={HIRING_TIMELINE} />
            <TimelineCard
              title="Onboarding process"
              rows={ONBOARDING_TIMELINE}
            />
          </div>

          <article className={styles.equalOpportunity}>
            <div className={styles.equalOpportunityInner}>
              <h3 className={styles.question}>
                USDS is an equal employment opportunity employer
              </h3>
              <p className={styles.answer}>
                As part of the federal government, we are building a team that
                reflects the full mosaic of our country. We do not discriminate
                in employment on the basis of race, color, religion, sex
                (including pregnancy and gender identity), national origin,
                political affiliation, sexual orientation, marital status,
                disability, genetic information, age, membership in an employee
                organization, retaliation, parental status, military service, or
                other non-merit factors.
              </p>
              <p className={styles.answer}>
                To learn more, please visit the Office of Equal Opportunity.
              </p>
            </div>
          </article>
        </section>

        <DividerStars />

        <section
          id="onboarding"
          className={`${styles.frame} ${styles.gapLg} ${styles.section}`}
        >
          <SectionHeader
            eyebrow="Onboarding"
            title="Background checks, offers, and start dates"
            titleAs="h2"
            titleSize="medium"
            titleAlignment="center"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
          />

          <div className={styles.faqList}>
            {ONBOARDING_FAQS.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>

        <DividerStars />

        <section
          id="relocation"
          className={`${styles.frame} ${styles.gapLg} ${styles.panelTone} ${styles.section}`}
        >
          <SectionHeader
            eyebrow="Relocation"
            title="In-person expectations and office visits"
            titleAs="h2"
            titleSize="medium"
            titleAlignment="center"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
          />

          <div className={styles.faqList}>
            {RELOCATION_FAQS.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>

        <DividerStars />

        <section
          id="life-at-usds"
          className={`${styles.frame} ${styles.gapLg} ${styles.section}`}
        >
          <SectionHeader
            eyebrow="Life at USDS"
            title="Culture, work style, and day-to-day experience"
            titleAs="h2"
            titleSize="medium"
            titleAlignment="center"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
          />

          <div className={styles.faqList}>
            {LIFE_FAQS.map((faq) => (
              <FaqItem key={faq.question} {...faq} />
            ))}
          </div>
        </section>

        <DividerStars />

        <section
          className={`${styles.frame} ${styles.gapMd} ${styles.panelTone} ${styles.ctaSection}`}
        >
          <h2 className={styles.ctaTitle}>
            We need you.
            <br />
            Let&apos;s help millions of people together.
          </h2>
          <div className={styles.ctaAction}>
            <CTA
              text="Apply now"
              href="/mission#applyNow"
              icon="arrowRight"
              backgroundColor="var(--primary-color-light)"
              textColor="var(--primary-dark)"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
