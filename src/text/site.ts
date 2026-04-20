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
      items: {
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
  links: {
    label: string;
    href: string;
  }[];
};

type FooterCalloutContent = {
  title: string;
  body: string;
  cta: CtaLink;
};

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "Our Mission", href: "/mission" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Hiring FAQ", href: "/hiring-faq" },
    ],
  },
  {
    type: "link",
    label: "Projects",
    href: "/projects",
  },
  {
    type: "link",
    label: "Careers",
    href: "/careers",
  },
  {
    type: "cta",
    text: "Apply now",
    href: "/mission#applyNow",
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

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    title: "Programs",
    links: [
      { label: "Mission", href: "/mission" },
      { label: "How We Work", href: "/how-we-work" },
      { label: "Impact", href: "/mission#impact" },
      { label: "Stories", href: "/mission#stories" },
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
      { label: "Origin Story", href: "/mission#originStory" },
      { label: "Hiring FAQ", href: "/hiring-faq" },
      { label: "Contact", href: "/mission#contact" },
      { label: "Press", href: "/mission#stories" },
    ],
  },
];

export const FOOTER_CALLOUT_CONTENT: FooterCalloutContent = {
  title: "Digital services for the people.",
  body: "We partner with federal teams to modernize the systems Americans depend on, from benefits to education and public health services.",
  cta: {
    text: "Apply now",
    href: "/mission#applyNow",
  },
};

export const FOOTER_ACTIONS = [
  {
    text: "View mission",
    href: "/mission",
  },
  {
    text: "Contact us",
    href: "/mission#contact",
  },
] as CtaLink[];

export const FOOTER_POLICIES = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Accessibility", href: "/accessibility" },
  { label: "FOIA", href: "/foia" },
];
