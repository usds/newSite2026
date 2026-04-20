import type { CtaLink, CtaSectionContent } from "@/types/cta";

export type CareerTone = "ocean" | "teal" | "amber";

export type CareersHeroFact = {
  label: string;
  value: string;
};

export type CareersRole = {
  title: string;
  summary: string;
  skills: string[];
  location: string;
  tour: string;
  tone: CareerTone;
  applyHref: string;
};

export type CareersProcessStep = {
  title: string;
  body: string;
  timeline: string;
};

type CareersHeroContent = {
  eyebrow: string;
  title: string;
  subTitle: string;
  body: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  facts: CareersHeroFact[];
};

type CareersCtaContent = CtaSectionContent;

export const CAREERS_PAGE_CONTENT = {
  hero: {
    eyebrow: "High-Impact Service Tours",
    title: "Careers",
    subTitle:
      "USDS hires engineers, designers, product leaders, data scientists, and procurement specialists for high-impact tours of service.",
    body: "You will work with agency teams on services used by millions of people. The work is practical, mission-driven, and focused on outcomes that improve how government serves the public.",
    primaryCta: {
      text: "Apply now",
      href: "/mission#applyNow",
    },
    secondaryCta: {
      text: "Read hiring FAQ",
      href: "/hiring-faq",
    },
    facts: [
      { label: "Tour length", value: "Up to 4 years" },
      { label: "Work model", value: "In-person, Washington, DC area" },
      { label: "Team model", value: "Cross-functional mission squads" },
      { label: "Focus", value: "High-impact public services" },
    ] as CareersHeroFact[],
  } satisfies CareersHeroContent,
  rolesSection: {
    eyebrow: "Open Disciplines",
    title: "Open positions across USDS",
    subTitle:
      "Most candidates are evaluated across multiple tracks. If your experience spans disciplines, apply once and we will route your application where it fits best.",
  },
  roles: [
    {
      title: "Engineering",
      summary:
        "Build and modernize mission-critical systems, improve reliability, and ship improvements safely at scale.",
      skills: [
        "Software architecture",
        "APIs and integration",
        "Incident response",
        "System modernization",
      ],
      location: "Washington, DC metro",
      tour: "2-4 years",
      tone: "ocean",
      applyHref: "/mission#applyNow",
    },
    {
      title: "Design and UX",
      summary:
        "Design alongside the public and civil servants so services are clear, accessible, and easy to complete.",
      skills: [
        "User research",
        "Service design",
        "Content strategy",
        "Interaction design",
      ],
      location: "Washington, DC metro",
      tour: "2-4 years",
      tone: "teal",
      applyHref: "/mission#applyNow",
    },
    {
      title: "Data science",
      summary:
        "Turn operational data into decisions that reduce risk, improve service delivery, and surface inequities.",
      skills: [
        "Statistical analysis",
        "Data engineering",
        "Modeling and forecasting",
        "Policy analytics",
      ],
      location: "Washington, DC metro",
      tour: "2-4 years",
      tone: "amber",
      applyHref: "/mission#applyNow",
    },
    {
      title: "Product, Strategy, & Operations",
      summary:
        "Lead delivery with clear priorities, measurable outcomes, and strong coordination across agency stakeholders.",
      skills: [
        "Product strategy",
        "Execution planning",
        "Stakeholder alignment",
        "Outcome measurement",
      ],
      location: "Washington, DC metro",
      tour: "2-4 years",
      tone: "ocean",
      applyHref: "/mission#applyNow",
    },
    {
      title: "Procurement",
      summary:
        "Shape acquisition strategies and contracts that enable faster, better digital delivery in government.",
      skills: [
        "Federal acquisition",
        "Market intelligence",
        "Evaluation design",
        "Digital services buying",
      ],
      location: "Washington, DC metro",
      tour: "2-4 years",
      tone: "teal",
      applyHref: "/mission#applyNow",
    },
  ] as CareersRole[],
  processSection: {
    eyebrow: "Hiring Process",
    title: "What to expect after you apply",
    subTitle:
      "Our team stays in touch through each stage. Timelines vary by role and background requirements.",
  },
  process: [
    {
      title: "Screening",
      body: "A recruiter connects with you to understand your background and discuss role fit.",
      timeline: "1-3 business days",
    },
    {
      title: "Assessments",
      body: "Role-aligned exercise or portfolio review to evaluate practical delivery skills.",
      timeline: "5-7 business days",
    },
    {
      title: "Interviews",
      body: "Up to three virtual interviews covering technical depth, collaboration, and mission alignment.",
      timeline: "10-18 business days",
    },
    {
      title: "Onboarding",
      body: "Tentative offer, background process, and final offer with start-date coordination.",
      timeline: "14-44 business days",
    },
  ] as CareersProcessStep[],
  workModel: {
    eyebrow: "Tour Model",
    title: "Short tours. Lasting impact.",
    body: "USDS tours are designed for focused, high-impact service. Teams are in-person and embedded with agencies where decisions are made.",
  },
  cta: {
    eyebrow: "Ready to apply",
    title: "Ready to apply?",
    body: "Submit your application today and help modernize the systems millions of people depend on.",
    primary: {
      text: "Apply to USDS",
      href: "/mission#applyNow",
    },
    secondary: {
      text: "Read hiring FAQ",
      href: "/hiring-faq",
    },
  } satisfies CareersCtaContent,
};

export const CAREERS_PAGE_UI_TEXT = {
  viewPositionLabel: "View position",
  applicationDetailsAriaLabel: "Application details",
  focusedToursTitle: "Focused tours. Real outcomes.",
  focusedToursBody:
    "Submit one application and we will evaluate you across tracks where your skills are strongest.",
  readHiringFaqLabel: "Read hiring FAQ",
};
