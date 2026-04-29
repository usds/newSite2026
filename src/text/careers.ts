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
  details: {
    mission: string;
    impact: string;
    responsibilities: string[];
    profile: string[];
  };
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
    eyebrow: "Careers at USDS",
    title: "built here. Felt everywhere.",
    subTitle:
      "The mission is too important for average.",
    body: "You will work with agency teams on services used by millions of people. The work is practical, mission-driven, and focused on outcomes that improve how government serves the public.",
    primaryCta: {
      text: "Apply now",
      href: "/apply",
    },
    secondaryCta: {
      text: "Read hiring FAQ",
      href: "/hiring-faq",
    },
    facts: [
      { label: "Tour length", value: "2 years" },
      { label: "Pay grade", value: "GS-13 to GS-15" },
      { label: "Benefits", value: "100%" },
      { label: "Agencies", value: "30+" },
    ] as CareersHeroFact[],
  } satisfies CareersHeroContent,
  rolesSection: {
    eyebrow: "Open Disciplines",
    title: "Your code becomes policy.",
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
      applyHref: "/apply",
      details: {
        mission:
          "Deliver resilient public-serving platforms that replace fragile legacy workflows with secure, modern software.",
        impact:
          "Your decisions directly influence benefit delivery, identity systems, and frontline service reliability at national scale.",
        responsibilities: [
          "Lead architecture for high-risk modernization efforts with agency engineering teams.",
          "Ship incremental improvements safely using observability, feature flags, and rollback planning.",
          "Improve uptime, incident response, and deployment confidence in mission-critical environments.",
          "Coach civil-service teams on maintainable engineering practices and delivery operations.",
        ],
        profile: [
          "Deep practical experience with distributed systems and production operations.",
          "Ability to convert policy and operational constraints into tractable technical plans.",
          "Clear written communication for technical and non-technical stakeholders.",
        ],
      },
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
      applyHref: "/apply",
      details: {
        mission:
          "Design services that feel trustworthy, accessible, and understandable for people under real-world stress.",
        impact:
          "You shape end-to-end experiences for programs that affect households, workers, veterans, and small businesses.",
        responsibilities: [
          "Run discovery and usability research with the public and agency staff.",
          "Translate policy and operational complexity into clear service journeys.",
          "Define content and interaction standards that reduce confusion and abandonment.",
          "Partner with engineering and product leads to deliver accessible-by-default experiences.",
        ],
        profile: [
          "Strong portfolio showing research-to-delivery product work in complex domains.",
          "Practical command of accessibility standards and inclusive design methods.",
          "Confidence facilitating alignment across policy, operations, and delivery teams.",
        ],
      },
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
      applyHref: "/apply",
      details: {
        mission:
          "Turn fragmented operational data into evidence that improves outcomes and reduces systemic risk.",
        impact:
          "Your analysis informs major delivery decisions, program integrity controls, and equitable access strategies.",
        responsibilities: [
          "Design decision-grade analyses for service performance, fraud risk, and user outcomes.",
          "Build reliable data pipelines and shared metrics with agency teams.",
          "Develop transparent models and forecasts suitable for policy-sensitive environments.",
          "Present insights clearly to leaders making high-consequence tradeoffs.",
        ],
        profile: [
          "Experience delivering analytics products in operational or public-interest contexts.",
          "Strong statistical judgment and disciplined approach to uncertainty.",
          "Ability to communicate methods, limitations, and implications with precision.",
        ],
      },
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
      applyHref: "/apply",
      details: {
        mission:
          "Align teams around clear outcomes and build operating rhythms that keep high-stakes delivery on track.",
        impact:
          "You help agencies convert urgent mission goals into execution plans with measurable public value.",
        responsibilities: [
          "Define product strategy and milestones tied to service outcomes.",
          "Coordinate dependencies across policy, legal, operations, procurement, and technology teams.",
          "Establish decision forums, delivery cadences, and risk escalation pathways.",
          "Track outcomes and adjust scope to protect mission-critical deadlines.",
        ],
        profile: [
          "Track record leading cross-functional initiatives through ambiguity and constraint.",
          "Strong systems thinking with practical bias toward execution.",
          "Comfort operating with senior stakeholders in public-sector settings.",
        ],
      },
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
      applyHref: "/apply",
      details: {
        mission:
          "Design acquisition pathways that make high-quality digital delivery possible inside federal constraints.",
        impact:
          "Your work improves speed, value, and accountability in contracts that shape critical public services.",
        responsibilities: [
          "Develop acquisition strategies aligned to delivery goals and technical realities.",
          "Structure evaluation criteria that reward capability, usability, and outcomes.",
          "Guide teams on modular procurement and iterative contracting approaches.",
          "Partner with legal, finance, and program leaders to reduce procurement friction.",
        ],
        profile: [
          "Hands-on federal acquisition experience in technology or digital services.",
          "Ability to write clear requirements and evaluation frameworks.",
          "Strong collaboration style across contracting officers and delivery teams.",
        ],
      },
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
      href: "/apply",
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
