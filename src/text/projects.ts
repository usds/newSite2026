import type { CtaLink, CtaSectionContent } from "@/types/cta";

export type ProjectCardContent = {
  area: string;
  title: string;
  summary: string;
  impact: string;
  status: "Active" | "Scaling" | "In Delivery";
};

type ProjectsHeroStat = {
  label: string;
  value: string;
};

type ProjectsHeroContent = {
  eyebrow: string;
  title: string;
  body: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  stats: ProjectsHeroStat[];
};

type ProjectsCtaContent = CtaSectionContent;

export const PROJECTS_PAGE_CONTENT = {
  hero: {
    eyebrow: "Project portfolio and delivery highlights",
    title: "Projects",
    body: "We partner with federal agencies to modernize systems, improving reliability, usability, and outcomes across public services.",
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
    ],
  } satisfies ProjectsHeroContent,
  section: {
    eyebrow: "Current Work",
    title: "Where we deliver impact", 
    subTitle:
      "A snapshot of modernization efforts underway across healthcare, veterans services, education, and emergency response.",
  },
  projects: [
    {
      area: "Veterans Affairs",
      title: "Modernizing Veterans Benefits Delivery Platforms",
      summary:
        "Redesigned core digital flows so Veterans apply for and track benefits with fewer steps, clearer updates, and less paperwork burden.",
      impact: "Faster access to earned services with less administrative burden.",
      status: "Active",
    },
    {
      area: "Immigration",
      title: "Streamlining Casework and Adjudication Operations",
      summary:
        "Improved operations software for officers to reduce rework, increase reliability, and support secure adjudication workflow each day.",
      impact: "More resilient systems for high-volume immigration services.",
      status: "In Delivery",
    },
    {
      area: "Tax Filing",
      title: "Simplifying Tax Filing Service Journeys Nationwide",
      summary:
        "Partnered on modern tax service interfaces to reduce confusion, and help filers complete pathways quickly across devices nationwide.",
      impact: "Lower friction for taxpayers and stronger service continuity.",
      status: "Scaling",
    },
    {
      area: "Public Health",
      title: "Accelerating Public Health Data Delivery Systems",
      summary:
        "Upgraded data-sharing platforms used by public health teams for faster, more reliable insights and response coordination nationwide.",
      impact: "Better visibility for policy and frontline health operations.",
      status: "Active",
    },
    {
      area: "Student Aid",
      title: "Stabilizing Student Aid Application Systems Nationwide",
      summary:
        "Stabilized student aid systems and improved form journeys so students and families complete critical tasks faster with fewer errors.",
      impact: "Improved access to education support at scale.",
      status: "In Delivery",
    },
    {
      area: "Disaster Response",
      title: "Speeding Up Disaster Relief Applications for Families",
      summary:
        "Streamlined digital pathways for emergency assistance and strengthened platform performance, so services remain responsive at peaks.",
      impact: "Quicker support for communities during crisis events.",
      status: "Active",
    },
    {
      area: "Healthcare",
      title: "Improving Coverage and Enrollment Systems Reliability",
      summary:
        "Worked with agency teams to improve stability, accessibility, and support in healthcare enrollment experiences for users nationwide.",
      impact: "More dependable access to healthcare services.",
      status: "Scaling",
    },
    {
      area: "Child Welfare",
      title: "Coordinating Child Services Across Agencies Efficiently",
      summary:
        "Supported workflow modernization so child welfare teams coordinate services across programs, agencies and community partners faster.",
      impact: "Better outcomes through clearer and faster case coordination.",
      status: "In Delivery",
    },
  ] as ProjectCardContent[],
  cta: {
    eyebrow: "Project collaboration",
    title: "Have a high-impact service challenge?",
    body: "We partner with federal teams where modernization can deliver the greatest public value.",
    primary: {
      text: "Apply now",
      href: "/apply",
    },
    secondary: {
      text: "Contact us",
      href: "/contact",
    },
  } satisfies ProjectsCtaContent,
};

export const PROJECTS_PAGE_UI_TEXT = {
  heroAsideAriaLabel: "Portfolio highlights",
  projectLinkLabel: "Learn more",
  statusSideLabel: "Status",
};
