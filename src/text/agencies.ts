import type { CtaSectionContent } from "@/types/cta";

type AgenciesHeroStatText = {
  activeEngagementsLabel: string;
  peopleEmbeddedNowLabel: string;
  workModelLabel: string;
  workModelValue: string;
  vendorLockInLabel: string;
  vendorLockInValue: string;
};

type AgenciesSectionHeader = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

type AgenciesServiceCard = {
  title: string;
  description: string;
};

type AgenciesPartnerQuote = {
  quote: string;
  name: string;
  agency: string;
};

type AgenciesPageCtaContent = CtaSectionContent;

export const AGENCIES_PAGE_CONTENT = {
  hero: {
    eyebrow: "For Federal Agencies",
    title: "We help agencies ship.",
    titleHighlightSlice: [17, 21] as [number, number],
    titleLineBreakBefore: "ship",
    subtitle:
      "Your agency has a mission. We have the engineers, designers, and product experts to help you deliver on it. Embedded teams, not outside consultants.",
    imageSrc:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80",
    imageAlt: "Agency team whiteboarding session",
    cta: {
      text: "Bring it to us",
      href: "/contact",
    },
    statText: {
      activeEngagementsLabel: "Active engagements",
      peopleEmbeddedNowLabel: "People embedded now",
      workModelLabel: "How we work",
      workModelValue: "Embedded",
      vendorLockInLabel: "Vendor lock-in",
      vendorLockInValue: "Zero",
    } satisfies AgenciesHeroStatText,
  },
  sections: {
    engagementModel: {
      eyebrow: "How we engage",
      title: "Delivery support for mission systems",
      subtitle:
        "The core engagement model from child-site agency pages, translated into parent-site components and spacing.",
    } satisfies AgenciesSectionHeader,
    partnerQuotes: {
      eyebrow: "From our partners",
      title: "What agencies say",
      subtitle: "Real feedback from agencies we have embedded with.",
    } satisfies AgenciesSectionHeader,
    portfolioSnapshot: {
      eyebrow: "Portfolio snapshot",
      title: "Where teams are currently working",
      subtitle:
        "Domain-level rollup from active and completed engagement records.",
    } satisfies AgenciesSectionHeader,
    pastWork: {
      eyebrow: "Past agency work",
      title: "Systems we transformed with agency partners",
      subtitle:
        "Long horizontal cards now use the same structure and shape language as your homepage transformed-systems cards.",
    } satisfies AgenciesSectionHeader,
    directory: {
      eyebrow: "Engagement directory",
      title: "Agency-by-agency detail",
      totalFootprintPrefix: "Total team footprint represented:",
    },
  },
  engagementTableHeaders: [
    "Agency",
    "Domain",
    "Teams",
    "People",
    "Status",
    "Highlights",
  ],
  serviceCards: [
    {
      title: "Embedded engineering teams",
      description:
        "Engineers, designers, and product leaders embed directly with agency staff to ship modern, reliable systems.",
    },
    {
      title: "Technical assessments",
      description:
        "We evaluate critical systems, identify risk, and provide a concrete modernization plan tied to measurable outcomes.",
    },
    {
      title: "Critical incident response",
      description:
        "When mission systems degrade, teams deploy fast to stabilize reliability and restore public access quickly.",
    },
    {
      title: "Transition and handoff",
      description:
        "We train internal teams, document implementation details, and leave durable delivery capability behind.",
    },
  ] as AgenciesServiceCard[],
  partnerQuotes: [
    {
      quote:
        "USDS did not show up with a slide deck. They sat with our engineers and shipped in the first sprint.",
      name: "Deputy CTO",
      agency: "Dept. of Veterans Affairs",
    },
    {
      quote:
        "The team did not just build and leave. They documented, paired, and made sure our staff could run the systems after handoff.",
      name: "Chief Information Officer",
      agency: "Dept. of Education",
    },
    {
      quote: "Quote from Jen at ATF coming soon.",
      name: "Jen",
      agency: "Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF)",
    },
  ] as AgenciesPartnerQuote[],
  domainSnapshot: {
    metricLabel: "Current footprint",
    agenciesSuffix: "agencies",
  },
  longCardImageAltSuffix: "representative visual",
  cta: {
    eyebrow: "Next",
    title: "Review outcomes tied to these partnerships",
    body: "Open impact stories or the full dispatch feed for recent field updates.",
    primary: {
      text: "Open impact",
      href: "/impact",
    },
    secondary: {
      text: "Read dispatches",
      href: "/dispatches",
    },
  } satisfies AgenciesPageCtaContent,
};

export const AGENCIES_PAGE_UI_TEXT = {
  activeStatusValue: "active",
};

export function formatDirectorySubtitle(totalTeams: number): string {
  return `${AGENCIES_PAGE_CONTENT.sections.directory.totalFootprintPrefix} ${totalTeams}.`;
}

export function formatDomainSnapshotAgencyLabel(agencyCount: number): string {
  return `${agencyCount} ${AGENCIES_PAGE_CONTENT.domainSnapshot.agenciesSuffix}`;
}

export function formatDomainSnapshotResult(teams: number, people: number): string {
  return `${teams} teams with ${people} people currently embedded across this domain.`;
}

export function formatLongCardImageAlt(title: string): string {
  return `${title} ${AGENCIES_PAGE_CONTENT.longCardImageAltSuffix}`;
}
