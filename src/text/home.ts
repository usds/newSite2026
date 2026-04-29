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

type HomeHeroAgencyMarqueeContent = {
  label: string;
  agencies: string[];
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

type ImpactFeaturedSection = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  linkText: string;
  linkHref: string;
  metric?: {
    before: string;
    after: string;
    label: string;
  };
};

type HomeOurImpactContent = {
  header: HomeHeaderContent;
  leftCards: ImpactListCard[];
  statsTop: ImpactStatCard[];
  featuredSections: ImpactFeaturedSection[];
  statsBottom?: ImpactStatCard[];
  wideCard: ImpactListCard;
};

type HomeImpactImage = {
  src: string;
  alt: string;
};

type HomeWhyTheyServeCard = {
  name: string;
  role: string;
  quote: string;
  shipped: string;
};

type HomeWhyTheyServeContent = {
  header: {
    eyebrow: string;
    title: string;
    subTitle: string;
  };
  cards: HomeWhyTheyServeCard[];
  link: CtaLink;
};

type HomeFeaturedProjectsProject = {
  id: string;
  agency: string;
  title: string;
  description: string;
  stat: string;
  href: string;
  imageSrc: string;
};

type HomeFeaturedProjectsContent = {
  header: {
    eyebrow: string;
    title: string;
    subTitle?: string;
  };
  projects: HomeFeaturedProjectsProject[];
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

export const HOME_HERO_AGENCY_MARQUEE_CONTENT: HomeHeroAgencyMarqueeContent = {
  label: "Embedded across 30+ federal agencies",
  agencies: [
    "Dept. of Veterans Affairs",
    "Dept. of War",
    "Dept. of State",
    "Internal Revenue Service",
    "Centers for Medicare & Medicaid Services",
    "Dept. of Education",
    "Dept. of Homeland Security",
    "Social Security Administration",
    "Dept. of Health & Human Services",
    "General Services Administration",
    "Small Business Administration",
    "U.S. Citizenship & Immigration Services",
  ],
};

export const HOME_OUR_IMPACT_IMAGES: HomeImpactImage[] = [
  {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=1600&q=80",
    alt: "USDS team collaborating on mission planning",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80",
    alt: "Cross-functional team discussing a delivery plan",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
    alt: "Delivery team reviewing priorities on sticky notes",
  },
  {
    src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&q=80",
    alt: "Program lead presenting service performance metrics",
  },
];

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
  featuredSections: [
    {
      id: "fafsa-simplified",
      eyebrow: "Featured Project",
      title: "FAFSA Simplified",
      body: "The federal student aid application was 108 questions long - confusing, intimidating, and a barrier that kept millions of families from financial aid. We cut it to 36, made it mobile-first, and unlocked aid for a generation.",
      imageSrc: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1000&q=80",
      imageAlt: "Students collaborating on laptops in a library.",
      linkText: "Read the full story",
      linkHref: "/impact/fafsa",
      metric: {
        before: "108 questions",
        after: "36 questions",
        label: "Form length",
      },
    },
    {
      id: "white-house-mandate",
      eyebrow: "Executive Office of the President",
      title: "White House-based. Deployed nationwide.",
      body: "USDS operates with a Presidential mandate to deploy across any federal agency. When a critical system is failing, we do not wait. We move. Codified into permanent law by Congress in 2022.",
      imageSrc: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1000&q=80",
      imageAlt: "Federal buildings and streets in Washington, D.C.",
      linkText: "Our story",
      linkHref: "/about",
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
      body: "Focused tours pair experts with civil servants on urgent public service work.",
      gradientPosition: { x: "20%", y: "80%" },
    },
    {
      id: "cross-functional",
      title: "Cross-functional",
      body: "Product, design, engineering, data, and acquisition move as one delivery team.",
      gradientPosition: { x: "50%", y: "80%" },
    },
    {
      id: "outcomes-over-optics",
      title: "Outcomes over optics",
      body: "We judge success by better services people can use quickly and trust.",
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
    linkHref: "/apply",
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
    href: "/apply",
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

export const HOME_WHY_THEY_SERVE_CONTENT: HomeWhyTheyServeContent = {
  header: {
    eyebrow: "Our People",
    title: "Why they serve",
    subTitle:
      "Mission-driven professionals from every background. What they share is the ability to deliver when it matters most.",
  },
  cards: [
    {
      name: "Sarah P.",
      role: "Senior Software Engineer",
      quote:
        "A single deploy can affect millions of veterans. There is no more consequential place to write code.",
      shipped:
        "Rebuilt the VA disability claims pipeline - processing time cut from 125 days to under 30.",
    },
    {
      name: "Marcus W.",
      role: "Product Designer",
      quote:
        "I grew up watching my grandmother struggle with government forms. I came here to make sure no one else has to.",
      shipped:
        "Redesigned FAFSA, reducing abandonment rates by 40% and unlocking billions in student aid.",
    },
    {
      name: "David T.",
      role: "Data Engineer",
      quote:
        "The government sits on some of the most consequential datasets in the world. I came to help make sense of them responsibly.",
      shipped:
        "Built the fraud detection pipeline that identified over $4 billion in fraudulent claims.",
    },
  ],
  link: {
    text: "Meet the full team",
    href: "/about/people",
  },
};

export const HOME_FEATURED_PROJECTS_CONTENT: HomeFeaturedProjectsContent = {
  header: {
    eyebrow: "Featured Projects",
    title: "Systems we transformed",
  },
  projects: [
    {
      id: "cms-claims-modernization",
      agency: "Centers for Medicare & Medicaid Services",
      title: "Medicare Claims Modernization",
      description:
        "Rebuilt the claims processing pipeline to reduce errors, accelerate payments, and bring transparency to one of the largest healthcare systems on earth.",
      stat: "40M+",
      href: "/impact",
      imageSrc:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
    },
    {
      id: "state-passport-renewal",
      agency: "Dept. of State",
      title: "Passport Renewal System",
      description:
        "Designed an end-to-end digital renewal experience, eliminating paper bottlenecks and reducing wait times for millions of Americans.",
      stat: "6wks",
      href: "/impact/passport",
      imageSrc:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1600&q=80",
    },
    {
      id: "va-claims-processing",
      agency: "Dept. of Veterans Affairs",
      title: "VA Claims Processing",
      description:
        "Transformed the disability claims pipeline with intelligent automation, reducing backlog and delivering faster decisions to veterans.",
      stat: "82%",
      href: "/impact/va-ai",
      imageSrc:
        "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80",
    },
    {
      id: "education-fafsa-modernization",
      agency: "Dept. of Education",
      title: "FAFSA Modernization",
      description:
        "Simplified the federal student aid experience so more families can complete applications quickly and access support sooner.",
      stat: "36",
      href: "/impact/fafsa",
      imageSrc:
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1600&q=80",
    },
  ],
};

export const HOME_SECTION_ARIA_TEXT = {
  heroPrimaryActions: "Primary actions",
  howWeWork: "How we work",
  whatToExpect: "What to expect",
  applicationProcess: "Application Process",
  whyTheyServe: "Why they serve",
  whyTheyServeShippedLabel: "Shipped:",
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
    href: "/apply",
  },
  secondary: {
    text: "View careers",
    href: "/careers",
  },
} as CtaSectionContent;
