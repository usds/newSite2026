import type { BasicTextCard } from "@/types/cards";
import type { CtaSectionContent } from "@/types/cta";

type ObjectiveItem = {
  title: string;
  description: string;
};

type WhoWeHelpContent = {
  eyebrow: string;
  title: string;
  titleHighlightSlice: [number, number];
  link: {
    text: string;
    href: string;
  };
  subTitle: string;
};

type WhoWeHelpCard = {
  title: string;
  summary: string;
  details: string;
};

export type Items = Item[];

export type Item = {
  id: number;
  className?: string;
  src: string;
};

export const MISSION_PAGE_CONTENT = {
  infoCards: [
    {
      id: "who-we-are",
      title: "Who We Are",
      body: "We are mission-driven professionals who are passionate about applying our work and lived experiences to public service. We come from a range of backgrounds, just like the people we serve. We are curious about understanding the needs of people and are excited to use our short tours of service to make a positive impact.",
    },
    {
      id: "what-we-do",
      title: "What We Do",
      body: "We collaborate with public servants throughout the government to address some of the most critical needs and ultimately deliver a better government experience to people. We work across multiple agencies and bring best practices from our various disciplines, which include engineering, product, design, procurement, data science, operations, talent, and communications.",
    },
  ] as BasicTextCard[],
  objectives: {
    header: "Our Objectives",
    items: [
      {
        title: "Improve Critical Services",
        description:
          "Continuously strengthen and modernize essential government systems that serve the American people.",
      },
      {
        title: "Bring Top Technical Talent to Public Service",
        description:
          "Recruit and empower world-class engineers, designers, and operators to work on high-impact federal challenges.",
      },
      {
        title: "Modernize Through Partnership",
        description:
          "Collaborate directly with federal agencies to design, build, and scale modern, reliable solutions.",
      },
      {
        title: "Protect Taxpayer Dollars",
        description:
          "Reduce fraud, waste, and abuse by improving system integrity, oversight, and accountability.",
      },
    ] as ObjectiveItem[],
  },
  whoWeHelp: {
    content: {
      eyebrow: "Public Impact",
      title: "Who We Help",
      titleHighlightSlice: [4, 11] as [number, number],
      link: {
        text: "Explore our partners",
        href: "/projects",
      },
      subTitle:
        "Our products engage real users before launch. We apply user-centered design and iterative development to prioritize user needs and learn what works as quickly as possible.",
    } satisfies WhoWeHelpContent,
    cards: [
      {
        title: "Farmers",
        summary:
          "Modern, reliable digital tools for agriculture and rural communities.",
        details:
          "We help farmers access benefits faster, reduce paperwork burden, and improve field service coordination through clearer forms, resilient platforms, and better data sharing.",
      },
      {
        title: "Veterans",
        summary: "Faster, clearer access to benefits and service decisions.",
        details:
          "We improve claim workflows, communication touchpoints, and VA product performance so Veterans can complete tasks quicker and get transparent status updates.",
      },
      {
        title: "Medicare beneficiaries",
        summary:
          "Safer systems that protect care delivery and payment integrity.",
        details:
          "We strengthen identity and eligibility checks, reduce fraud vectors, and streamline beneficiary-facing services so people get trusted access to care.",
      },
      {
        title: "Students",
        summary:
          "Simpler aid experiences that reduce friction and uncertainty.",
        details:
          "We modernize student aid journeys, improve completion flows, and reduce outages so students can apply, verify, and receive support with less confusion.",
      },
      {
        title: "Military Service Members",
        summary:
          "Reliable digital pathways for critical military and transition services.",
        details:
          "We support secure, mission-ready systems that improve access to records, benefits, and essential workflows used by Service Members and their families.",
      },
      {
        title: "Small Business Owners",
        summary:
          "Clearer federal interactions so businesses can grow and compete.",
        details:
          "We simplify complex service touchpoints, modernize application processes, and improve platform trust so owners can spend less time navigating bureaucracy.",
      },
    ] as WhoWeHelpCard[],
  },
  values: [
    {
      id: "hire-and-empower",
      title: "Hire and empower great people.",
      body: "Humans move our mission forward. Empathy and tenacity matter as much as technical depth.",
      gradientPosition: { x: "20%", y: "80%" },
    },
    {
      id: "tell-the-truth",
      title: "Find the truth. Tell the truth.",
      body: "We question assumptions and follow evidence, even when the answer is uncomfortable.",
      gradientPosition: { x: "50%", y: "80%" },
    },
    {
      id: "results-over-optics",
      title: "Optimize for results, not optics.",
      body: "We focus on practical outcomes for people over vanity metrics, headlines, or noise.",
      gradientPosition: { x: "80%", y: "80%" },
    },
    {
      id: "go-where-work-is",
      title: "Go where the work is.",
      body: "We partner directly with civil servants and users where decisions happen.",
      gradientPosition: { x: "20%", y: "20%" },
    },
    {
      id: "create-momentum",
      title: "Create momentum.",
      body: "Ship quickly, learn continuously, and build durable systems that compound value.",
      gradientPosition: { x: "50%", y: "20%" },
    },
    {
      id: "design-with-users",
      title: "Design with users, not for them.",
      body: "We involve real people early and often so products fit their needs in practice.",
      gradientPosition: { x: "80%", y: "20%" },
    },
  ] as BasicTextCard[],
};

export const MISSION_HERO_CONTENT = {
  eyebrow: "Built for the public good",
  title: "Our Mission",
  titleHighlightSlice: [4, 11] as [number, number],
  message:
    "Transforming government to deliver fast, secure and user-centered digital services that millions of Americans rely on every day.",
};

export const MISSION_VALUES_SECTION_CONTENT = {
  eyebrow: "What Guides Us",
  title: "Our Values",
  titleHighlightSlice: [4, 10] as [number, number],
  subtitle:
    "Our values shape how we partner, how we build, and how we deliver measurable outcomes for the public.",
  linkText: "See how we work",
  linkHref: "/how-we-work",
};

export const MISSION_WHO_WE_HELP_UI_TEXT = {
  sectionAriaLabel: "Who we help",
};

export const MISSION_ORIGIN_STORY_CONTENT = {
  header: {
    eyebrow: "How We Started",
    title: "The USDS origin story",
    titleHighlightSlice: [4, 9] as [number, number],
    subtitle:
      "How a scrappy idea became a durable digital service for the American people.",
    linkText: "Apply now",
    linkHref: "#applyNow",
  },
  body: `The idea of a team like USDS had been percolating since 2012, and people across federal agencies had been exploring new modes of hiring and working since 2008. The HealthCare.gov launch crisis created an opportunity for a scrappy idea to become a reality. The challenges behind the launch made clear that accessing government services should be as easy as ordering a book online.

  Founded by President Obama in August of 2014, the U.S. Digital Service brought together the best engineering, design, and government talent to change our government's approach to technology. We planned to hire ten people for three critical national priorities: modernizing immigration, Veterans' benefits, and HealthCare.gov. During the 2015 State of the Union address, we launched an online application to join the team. We worried if ten people would even apply. 1000 did.

  - We quickly went to work with a simple strategy:
  - Recruit top designers and engineers.
  - Pair them with leading civil servants.
  - Deploy teams to address critical services.

  Does this sound like you? Apply now.`,
  items: [
    {
      id: 1,
      className: "one",
      src: "https://picsum.photos/id/237/200/300",
    } as Item,
    {
      id: 2,
      className: "two",
      src: "https://assets.codepen.io/16327/portrait-image-1.jpg",
    } as Item,
    {
      id: 3,
      className: "three",
      src: "https://assets.codepen.io/16327/portrait-image-12.jpg",
    } as Item,
    {
      id: 4,
      className: "four",
      src: "https://assets.codepen.io/16327/portrait-image-2.jpg",
    } as Item,
    {
      id: 5,
      className: "five",
      src: "https://assets.codepen.io/16327/portrait-image-4.jpg",
    } as Item,
    {
      id: 6,
      className: "six",
      src: "https://assets.codepen.io/16327/portrait-image-8.jpg",
    } as Item,
  ] as Items,
};

export const MISSION_PAGE_CTA_CONTENT = {
  eyebrow: "Join the mission",
  title: "Help modernize services millions rely on.",
  body: "USDS tours pair private-sector expertise with urgent federal delivery challenges.",
  primary: {
    text: "Apply now",
    href: "/mission#applyNow",
  },
  secondary: {
    text: "View projects",
    href: "/projects",
  },
} as CtaSectionContent;
