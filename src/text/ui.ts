export type StickyListHeaderOption = {
  eyebrow: string;
  header: string;
  linkText: string;
  href: string;
  highlightSlice?: [number, number];
  showLinkArrow?: boolean;
};

export const HEADER_WRAPPER_TEXT = {
  headerAriaLabel: "Site header",
  homeAriaLabel: "Home",
  logoAlt: "USDS logo",
  brandName: "U.S. DOGE Service",
  primaryNavigationAriaLabel: "Primary navigation",
  mobileToggleLabelOpen: "Open menu",
  mobileToggleLabelClose: "Close menu",
  mobileNavigationAriaLabel: "Mobile primary navigation",
};

export const FOOTER_WRAPPER_TEXT = {
  footerAriaLabel: "Footer",
  joinMissionAriaLabel: "Join the mission",
  logoAlt: "U.S. DOGE Service logo",
  logoHeading: "U.S. DOGE Service",
  brandMark: "USDS",
  primaryActionsAriaLabel: "Primary actions",
  officialSiteNotice:
    "An official website of the United States Government.",
  rightsReservedSuffix: "U.S. DOGE Service. All rights reserved.",
};

export const FOOTER_SOCIAL_LINKS_TEXT = {
  listAriaLabel: "Social media links",
};

export const PRELOADER_TEXT = {
  words: ["We're Building", "Tech & Efficiency", "Americans Deserve"],
  logoAlt: "USDS logo",
  logoLabel: "U.S. DOGE Service",
};

export const HOVER_CURSOR_PREVIEW_TEXT = {
  defaultCursorLabel: "View",
};

export const INFO_PANEL_CARD_TEXT = {
  images: {
    whoWeAre: {
      src: "/WhoWeAre.png",
      alt: "Who We Are",
    },
    whatWeDo: {
      src: "/whatWeDo.png",
      alt: "What We Do",
    },
  },
};

export const STICKY_LIST_HEADER_OPTIONS: Record<string, StickyListHeaderOption> = {
  "Our Objectives": {
    eyebrow: "What Drives Us",
    header: "Our Objectives",
    linkText: "See how we work",
    href: "/how-we-work",
    highlightSlice: [4, 14],
    showLinkArrow: true,
  },
  "How We Work": {
    eyebrow: "",
    header: "How We Work",
    linkText: "Back to mission",
    href: "/mission",
    highlightSlice: [4, 11],
    showLinkArrow: false,
  },
};

export const ROOT_LAYOUT_UI_TEXT = {
  skipLink: "Skip to main content",
};
