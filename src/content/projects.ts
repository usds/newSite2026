export type ProjectCardContent = {
  area: string;
  title: string;
  summary: string;
  impact: string;
  status: "Active" | "Scaling" | "In Delivery";
};

export const PROJECTS_PAGE_CONTENT = {
  hero: {
    eyebrow: "Project Portfolio",
    title: "Projects that improve everyday public services.",
    body: "We partner with federal agencies to modernize systems used by millions of people. Our teams focus on durable improvements to reliability, usability, and measurable outcomes across high-impact public services.",
    primaryCta: {
      text: "See our mission",
      href: "/mission",
    },
    secondaryCta: {
      text: "How we work",
      href: "/how-we-work",
    },
    stats: [
      { label: "Active engagements", value: "30+" },
      { label: "Agencies supported", value: "10+" },
      { label: "Critical service lines", value: "8" },
      { label: "People impacted", value: "Millions" },
    ] as const,
  },
  section: {
    eyebrow: "Current Work",
    title: "Where we deliver impact",
    subTitle:
      "A snapshot of modernization efforts underway across healthcare, veterans services, education, and emergency response.",
  },
  projects: [
    {
      area: "Veterans Affairs",
      title: "Veterans benefits modernization",
      summary:
        "Redesigned core digital flows so Veterans can apply for and track benefits with fewer steps and clearer status updates.",
      impact: "Faster access to earned services with less administrative burden.",
      status: "Active",
    },
    {
      area: "Immigration",
      title: "Casework and adjudication tooling",
      summary:
        "Improved operations software used by officers to reduce rework, increase reliability, and support secure decision workflows.",
      impact: "More resilient systems for high-volume immigration services.",
      status: "In Delivery",
    },
    {
      area: "Tax Filing",
      title: "Simplified filing experiences",
      summary:
        "Partnered on modern tax service interfaces to reduce confusion and make filing pathways easier to complete across devices.",
      impact: "Lower friction for taxpayers and stronger service continuity.",
      status: "Scaling",
    },
    {
      area: "Public Health",
      title: "Health data delivery improvements",
      summary:
        "Upgraded data-sharing platforms used by public health teams for faster, more reliable insights and response coordination.",
      impact: "Better visibility for policy and frontline health operations.",
      status: "Active",
    },
    {
      area: "Student Aid",
      title: "Aid application reliability",
      summary:
        "Stabilized student aid systems and improved form completion journeys to help students and families finish critical tasks.",
      impact: "Improved access to education support at scale.",
      status: "In Delivery",
    },
    {
      area: "Disaster Response",
      title: "Relief application service updates",
      summary:
        "Streamlined digital pathways for emergency assistance and strengthened platform performance during peak demand windows.",
      impact: "Quicker support for communities during crisis events.",
      status: "Active",
    },
    {
      area: "Healthcare",
      title: "Coverage and enrollment systems",
      summary:
        "Worked with agency teams to improve stability, accessibility, and user guidance in healthcare enrollment experiences.",
      impact: "More dependable access to healthcare services.",
      status: "Scaling",
    },
    {
      area: "Child Welfare",
      title: "Cross-agency service coordination",
      summary:
        "Supported workflow modernization to help child welfare teams coordinate services across government programs.",
      impact: "Better outcomes through clearer and faster case coordination.",
      status: "In Delivery",
    },
  ] as const satisfies readonly ProjectCardContent[],
  cta: {
    title: "Have a high-impact service challenge?",
    body: "We partner with federal teams where modernization can deliver the greatest public value.",
    primary: {
      text: "Apply now",
      href: "/mission#applyNow",
    },
    secondary: {
      text: "Contact us",
      href: "/mission#contact",
    },
  },
} as const;
