import type { BasicTextCard } from "@/types/cards";
import type { CtaSectionContent } from "@/types/cta";

type Tone = "ocean" | "teal" | "amber";

type SectionHeaderContent = {
  eyebrow: string;
  title: string;
  titleHighlightSlice?: [number, number];
  linkText?: string;
  linkHref?: string;
};

type PrincipleCardContent = BasicTextCard & {
  tone: Tone;
};

type SpotlightCardContent = BasicTextCard & {
  eyebrow: string;
  tone: Tone;
  linkHref: string;
  linkText: string;
};

type HowWeWorkCtaSectionContent = CtaSectionContent;

export const HOW_WE_WORK_PAGE_CONTENT = {
  hero: {
    eyebrow: "Mission-Driven Service Tours",
    title: "How We Work",
    body: "We deploy mission-driven experts with federal teams to solve urgent service problems and deliver measurable improvements for the people.",
    details: [
      {
        label: "Tour length",
        value: "Up to 4 years",
      },
      {
        label: "Working model",
        value: "Embedded with agency teams",
      },
      {
        label: "Delivery focus",
        value: "Fast, measurable outcomes",
      },
      {
        label: "Team composition",
        value: "Cross-functional delivery squads",
      },
    ],
  },
  valuesSection: {
    header: {
      eyebrow: "Team and Values",
      title: "Building a team with a broad range of experiences to transform government.",
      titleHighlightSlice: [21, 50] as [number, number],
    } satisfies SectionHeaderContent,
    intro:
      "With tours of service lasting no more than four years, the U.S. DOGE Service brings fresh perspectives on technology and delivery to government. To build the best possible team, we focus on the same values in our hiring as we do in our work.",
    cards: [
      {
        id: "hire-and-empower",
        title: "Hire and empower great people.",
        body: "We work to address some of our nation's most critical needs. We hire people with the experience, skills, compassion, curiosity, and tenacity to find new paths forward.",
        gradientPosition: { x: "20%", y: "80%" },
      },
      {
        id: "design-with-users",
        title: "Design with users, not for them.",
        body: "We build better solutions when our team reflects the people we serve, including people from communities that are traditionally underserved.",
        gradientPosition: { x: "50%", y: "80%" },
      },
      {
        id: "go-where-work-is",
        title: "Go where the work is.",
        body: "We prioritize based on where we are needed most and where we can do the greatest good for the greatest number of people in the greatest need.",
        gradientPosition: { x: "80%", y: "80%" },
      },
    ] as BasicTextCard[],
  },
  disciplinesSection: {
    header: {
      eyebrow: "Communities",
      title: "Our Fields of Work",
      linkText: "View careers",
      linkHref: "/careers",
    } satisfies SectionHeaderContent,
  },
  principlesSection: {
    header: {
      eyebrow: "Digital Services Playbook",
      title: "Bringing private sector best practices to the Federal Government",
      titleHighlightSlice: [46, 64] as [number, number],
    } satisfies SectionHeaderContent,
    intro:
      "Private industry knows how to move fast, stay lean, and keep the focus on users. Our teams bring those practices into public service delivery.",
    cards: [
      {
        id: "put-users-first",
        title: "Put users first",
        body: "Good design works for everyone. We want users to feel informed, empowered, prepared, and in control.",
        tone: "ocean",
        gradientPosition: { x: "20%", y: "80%" },
      },
      {
        id: "build-iteratively",
        title: "Build iteratively",
        body: "We release frequently with modern infrastructure and automation to improve services quickly with minimal risk.",
        tone: "teal",
        gradientPosition: { x: "50%", y: "80%" },
      },
      {
        id: "data-drives-decisions",
        title: "Let data drive decisions",
        body: "Data-centered decisions help us reflect reality, minimize bias, and focus on measurable outcomes over politics.",
        tone: "amber",
        gradientPosition: { x: "80%", y: "80%" },
      },
    ] as PrincipleCardContent[],
  },
  spotlightsSection: {
    header: {
      eyebrow: "Project Spotlights",
      title: "Prioritizing the greatest good for the greatest number of people in the greatest need",
      titleHighlightSlice: [39, 72] as [number, number],
      linkText: "See all projects",
      linkHref: "/projects",
    } satisfies SectionHeaderContent,
    cards: [
      {
        id: "cms-modernization",
        eyebrow: "CMS Partnership",
        title: "Modernizing Medicare and Medicaid",
        body: "Working with CMS to modernize critical healthcare systems by reducing waste, fraud, and abuse while improving secure, user-friendly tools for patients and providers.",
        tone: "ocean",
        linkHref: "/projects",
        linkText: "Learn more",
        gradientPosition: { x: "20%", y: "80%" },
      },
      {
        id: "va-veteran-care",
        eyebrow: "Dept. of Veterans Affairs",
        title: "Transforming Veteran care",
        body: "Partnering with VA teams to modernize legacy systems and deliver faster, more secure digital benefits and services for Veterans and their families.",
        tone: "teal",
        linkHref: "/projects",
        linkText: "Learn more",
        gradientPosition: { x: "50%", y: "80%" },
      },
      {
        id: "education-fafsa",
        eyebrow: "Dept. of Education",
        title: "Modernizing FAFSA and student aid",
        body: "Collaborating with Education to modernize FAFSA and student aid systems so millions of students can apply for and receive support without disruption.",
        tone: "amber",
        linkHref: "/projects",
        linkText: "Learn more",
        gradientPosition: { x: "80%", y: "80%" },
      },
      {
        id: "opm-recruitment",
        eyebrow: "Office of Personnel Management",
        title: "Modernizing federal recruitment",
        body: "Strengthening hiring systems and safeguards while improving speed, quality, and access in federal talent acquisition.",
        tone: "ocean",
        linkHref: "/projects",
        linkText: "Learn more",
        gradientPosition: { x: "20%", y: "20%" },
      },
      {
        id: "cross-agency-talent",
        eyebrow: "Cross-agency",
        title: "Changing how government hires technical talent",
        body: "We helped build hiring processes that use subject-matter experts to evaluate specialized candidates, restoring fair access while shortening timelines and improving qualification quality.",
        tone: "teal",
        linkHref: "/projects",
        linkText: "Learn more",
        gradientPosition: { x: "50%", y: "20%" },
      },
      {
        id: "va-gov-simplification",
        eyebrow: "Veterans Affairs",
        title: "Simplifying Veteran-facing services through VA.gov",
        body: "With over 10 million monthly users, VA modernization focused on improving content clarity, findability, and user experience so Veterans can complete key tasks with less friction.",
        tone: "amber",
        linkHref: "/projects",
        linkText: "Learn more",
        gradientPosition: { x: "80%", y: "20%" },
      },
    ] as SpotlightCardContent[],
  },
  ctaSection: {
    eyebrow: "Tour of service",
    title: "Join a high-impact tour of service.",
    body: "Work directly with federal teams to ship measurable improvements.",
    primary: {
      text: "Apply now",
      href: "/apply",
    },
    secondary: {
      text: "View careers",
      href: "/careers",
    },
  } satisfies HowWeWorkCtaSectionContent,
};

export const HOW_WE_WORK_PAGE_UI_TEXT = {
  communityListAriaLabel: "Community list",
};
