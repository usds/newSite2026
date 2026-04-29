import type { CtaLink } from "@/types/cta";

export type HeaderNavItem =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "dropdown";
      label: string;
      items: readonly {
        label: string;
        href: string;
      }[];
    }
  | ({
      type: "cta";
    } & CtaLink);

export type FooterSocialItem = {
  label: string;
  href: string;
};

export type FooterColumn = {
  title: string;
  links: readonly {
    label: string;
    href: string;
  }[];
};

type FooterCalloutContent = {
  title: string;
  body: string;
  cta: CtaLink;
};

export const HEADER_NAV_ITEMS: readonly HeaderNavItem[] = [
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "Our Mission", href: "/mission" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Projects", href: "/projects" },
      { label: "About USDS", href: "/about" },
      { label: "Dispatches", href: "/dispatches" },
      { label: "People", href: "/about/people" },
      { label: "Hiring FAQ", href: "/hiring-faq" },
    ],
  },
  {
    type: "dropdown",
    label: "Impact",
    items: [
      { label: "Impact Overview", href: "/impact" },
      { label: "Congressional Snapshot", href: "/impact/congress" },
      { label: "FAFSA Modernization", href: "/impact/fafsa" },
      { label: "VA AI Claims", href: "/impact/va-ai" },
      { label: "Visa Recovery", href: "/impact/state-visas" },
      { label: "Passport Renewal", href: "/impact/passport" },
    ],
  },
  {
    type: "link",
    label: "Agencies",
    href: "/agencies",
  },
  {
    type: "link",
    label: "Careers",
    href: "/careers",
  },
  {
    type: "cta",
    text: "Apply now",
    href: "/apply",
  },
];

export const FOOTER_SOCIALS: FooterSocialItem[] = [
  { label: "X", href: "https://x.com/USDS" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/united-states-doge-service",
  },
  { label: "GitHub", href: "https://github.com/usds" },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@u.s.digitalservice",
  },
];

export const FOOTER_COLUMNS: readonly FooterColumn[] = [
  {
    title: "Programs",
    links: [
      { label: "Mission", href: "/mission" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Impact", href: "/impact" },
      { label: "Dispatches", href: "/dispatches" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Who We Help",
    links: [
      { label: "Veterans", href: "/mission#whoWeHelp" },
      { label: "Students", href: "/mission#whoWeHelp" },
      { label: "Military Families", href: "/mission#whoWeHelp" },
      { label: "Small Businesses", href: "/mission#whoWeHelp" },
    ],
  },
  {
    title: "About",
    links: [
      { label: "Our Values", href: "/mission#ourValues" },
      { label: "About USDS", href: "/about" },
      { label: "People", href: "/about/people" },
      { label: "Hiring FAQ", href: "/hiring-faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const FOOTER_CALLOUT_CONTENT: FooterCalloutContent = {
  title: "Digital services for the people.",
  body: "We partner with federal teams to modernize the systems Americans depend on, from benefits to education and public health services.",
  cta: {
    text: "Apply now",
    href: "/apply",
  },
};

export const FOOTER_ACTIONS = [
  {
    text: "View mission",
    href: "/mission",
  },
  {
    text: "Contact us",
    href: "/contact",
  },
] as const satisfies readonly CtaLink[];

export const FOOTER_POLICIES = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Contact", href: "/contact" },
] as const;
