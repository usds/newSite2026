import { COMMUNITY_DISCIPLINES } from "./communities";
import type { BasicTextCard } from "@/types/cards";
import type { CtaLink, CtaSectionContent } from "@/types/cta";

type HomeHeaderContent = {
  eyebrow: string;
  title: string;
  subTitle: string;
  linkText: string;
  linkHref: string;
};

type HomeHeroContent = {
  imageSrc: string;
  imageAlt: string;
  titleParts: {
    prefix: string;
    highlight: string;
    suffix: string;
  };
  subTitle: string;
  ctas: (CtaLink & {
    ariaLabel?: string;
  })[];
};

type HomePractice = BasicTextCard;

type HomeHowWeWorkContent = {
  header: HomeHeaderContent;
  sidePanelTitle: string;
  sidePanelCta: CtaLink;
  practices: HomePractice[];
  communities: string[];
};

type HomeRole = {
  label: string;
};

type HomeProcessStep = {
  step: string;
  title: string;
  body: string;
};

type HomeHowToJoinContent = {
  header: HomeHeaderContent;
  rolesTitle: string;
  roles: HomeRole[];
  processTitle: string;
  process: HomeProcessStep[];
  cta: CtaLink;
  ctaNote: string;
};

type HomeExpectationItem = {
  id: string;
  title: string;
  body: string;
};

type HomeWhatToExpectContent = {
  header: HomeHeaderContent;
  accordionItems: HomeExpectationItem[];
};

type ImpactListCard = {
  status?: string;
  eyebrow?: string;
  title: string;
  bullets: string[];
};

type ImpactStatCard = {
  value: string;
  title: string;
  subtitle: string;
};

type HomeOurImpactContent = {
  header: HomeHeaderContent;
  leftCards: ImpactListCard[];
  statsTop: ImpactStatCard[];
  statsBottom?: ImpactStatCard[];
  wideCard: ImpactListCard;
};

export const HOME_HERO_CONTENT: HomeHeroContent = {
  imageSrc: "/whImage.avif",
  imageAlt: "White House",
  titleParts: {
    prefix: "Building Tech ",
    highlight: "America",
    suffix: " Deserves",
  },
  subTitle:
    "Modernizing federal systems, cutting waste, and bringing Silicon Valley speed to public service.",
  ctas: [
    {
      text: "See Our Impact",
      href: "#impact",
      ariaLabel: "See our impact: read results and success stories",
    },
    {
      text: "Join DOGE",
      href: "#join",
      ariaLabel: "Join DOGE: view careers and ways to participate",
    },
  ],
};

export const HOME_OUR_IMPACT_CONTENT: HomeOurImpactContent = {
  header: {
    eyebrow: "Performance Highlights",
    title: "Our Impact",
    subTitle:
      "Delivering measurable results for the American people through technology, efficiency, and cross-agency collaboration.",
    linkText: "See our mission work",
    linkHref: "/mission",
  },
  leftCards: [
    {
      status: "Active",
      eyebrow: "Technical Capacity",
      title: "Building Tech Across Government",
      bullets: [
        "Supporting TechForce initiative with OPM",
        "Resume reviews & interview assistance",
        "Pairing early-career hires with senior leadership",
      ],
    },
    {
      status: "Active",
      eyebrow: "Fraud, Waste & Abuse",
      title: "Protecting Taxpayer Dollars",
      bullets: [
        "Cross-agency data connectivity for verification",
        "Millions of duplicate Medicaid enrollments identified",
        "Hundreds of contracts canceled or modified",
        "Strengthened payment integrity at VA",
      ],
    },
    {
      status: "Active",
      eyebrow: "Critical Systems",
      title: "Shipping Mission-Critical Services",
      bullets: [
        "FAFSA now averaging 15-minute completion",
        "Online Passport Renewal launched with State",
        "VA.gov proactively notifies Veterans of decisions",
        "ATF systems updated for NFA tax changes",
      ],
    },
  ],
  statsTop: [
    {
      value: "$3B+",
      title: "Medicare Fraud Stopped",
      subtitle: "Improper payments halted with CMS",
    },
    {
      value: "$1B+",
      title: "Student Aid Fraud Prevented",
      subtitle: "Before funds were disbursed",
    },
    {
      value: "10+",
      title: "Major Agency Partners",
      subtitle: "VA, CMS, GSA, OPM, State & more",
    },
    {
      value: "$6B",
      title: "Est. Healthcare Savings",
      subtitle: "National Provider Directory",
    },
  ],
  wideCard: {
    eyebrow: "Security & Infrastructure",
    title: "Modernizing Federal Security",
    bullets: [
      "Cloud authorization in weeks, not months",
      "Authority to Operate processes modernized",
      "Dozens of APIs enabling secure data access",
    ],
  },
};

export const HOME_HOW_WE_WORK_CONTENT: HomeHowWeWorkContent = {
  header: {
    eyebrow: "How We Work",
    title: "Mission teams for government's toughest challenges.",
    subTitle:
      "We embed with federal agencies to deliver durable improvements in critical public services through short tours of service and modern delivery practices.",
    linkText: "View full approach",
    linkHref: "/how-we-work",
  },
  sidePanelTitle: "Communities we hire from",
  sidePanelCta: {
    text: "Explore how we work",
    href: "/how-we-work",
  },
  practices: [
    {
      id: "short-tours-high-trust",
      title: "Short tours, high trust",
      body: "Teams deploy on focused tours of service and work directly with civil servants on hard, high-impact delivery problems.",
      gradientPosition: { x: "20%", y: "80%" },
    },
    {
      id: "cross-functional",
      title: "Cross-functional",
      body: "Engineering, product, design, data, and acquisition expertise move together so execution decisions stay practical and user-centered.",
      gradientPosition: { x: "50%", y: "80%" },
    },
    {
      id: "outcomes-over-optics",
      title: "Outcomes over optics",
      body: "We prioritize measurable service improvements that make government more effective, accountable, and useful for people.",
      gradientPosition: { x: "80%", y: "80%" },
    },
  ],
  communities: COMMUNITY_DISCIPLINES.map(({ title }) => title),
};

export const HOME_HOW_TO_JOIN_CONTENT: HomeHowToJoinContent = {
  header: {
    eyebrow: "Tour of Service",
    title: "How to Join",
    subTitle:
      "Join a tour of duty that makes a difference. We're looking for talented professionals ready to bring private sector innovation to public service.",
    linkText: "View open roles",
    linkHref: "#apply",
  },
  rolesTitle: "Who We're Looking For",
  roles: [
    { label: "Software Engineers" },
    { label: "Designers" },
    { label: "Product Managers" },
    { label: "Policy Experts" },
  ],
  processTitle: "Application Process",
  process: [
    {
      step: "1",
      title: "Apply Online",
      body: "Submit your application through our streamlined portal.",
    },
    {
      step: "2",
      title: "Interview",
      body: "Meet with our team to discuss your skills and interests.",
    },
    {
      step: "3",
      title: "Security Clearance",
      body: "Complete the necessary background verification.",
    },
    {
      step: "4",
      title: "Start Serving",
      body: "Begin your tour of duty making an impact.",
    },
  ],
  cta: {
    text: "Start Your Application",
    href: "#apply",
  },
  ctaNote: "Applications are reviewed on a rolling basis",
};

export const HOME_WHAT_TO_EXPECT_CONTENT: HomeWhatToExpectContent = {
  header: {
    eyebrow: "What to Expect",
    title: "What your tour of service includes.",
    subTitle:
      "Clear expectations before you apply: commitment, benefits, impact, and how teams collaborate.",
    linkText: "Read hiring FAQ",
    linkHref: "/hiring-faq",
  },
  accordionItems: [
    {
      id: "tour",
      title: "Flexible tour of duty",
      body: "Most tours run 2 to 4 years and are structured for focused, high-impact delivery.",
    },
    {
      id: "compensation",
      title: "Competitive compensation and benefits",
      body: "Federal compensation and benefits are designed for long-term service and mission continuity.",
    },
    {
      id: "impact",
      title: "High-impact projects at scale",
      body: "You will work on systems used by millions of people across benefits, healthcare, education, and more.",
    },
    {
      id: "collaboration",
      title: "Cross-sector collaboration",
      body: "You will partner with top civil servants and subject-matter experts from government and industry.",
    },
  ],
};

export const HOME_SECTION_ARIA_TEXT = {
  heroPrimaryActions: "Primary actions",
  howWeWork: "How we work",
  whatToExpect: "What to expect",
  applicationProcess: "Application Process",
};

export const HOME_COMMUNITIES_CONTENT = {
  header: "Communities We Hire From",
  cursorLabel: "View",
  linkMeta: "View details",
  fallbackHref: "/how-we-work#who-we-hire",
};

export const HOME_PAGE_CTA_CONTENT = {
  eyebrow: "Take the next step",
  title: "Bring your skills to public service.",
  body: "Explore open roles and start your USDS application.",
  primary: {
    text: "Apply now",
    href: "/mission#applyNow",
  },
  secondary: {
    text: "View careers",
    href: "/careers",
  },
} as CtaSectionContent;
