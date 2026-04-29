import type { Dispatch } from "@/data/child/dispatches";
import type { CtaSectionContent } from "@/types/cta";

export type DispatchCategory = Dispatch["category"];
export type DispatchCategoryFilter = "All" | DispatchCategory;

type DispatchesSectionHeader = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

type DispatchesHeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  titleHighlightSlice: [number, number];
  titleLineBreakBefore: string;
  stats: {
    value: string;
    label: string;
  }[];
};

type DispatchesStatCardCopy = {
  label: string;
  color: string;
};

type DispatchesPageCtaContent = CtaSectionContent;

export const DISPATCHES_PAGE_CONTENT = {
  hero: {
    eyebrow: "Dispatches from the field",
    title: "We ship. Here's proof.",
    subtitle:
      "Real-time field reports from teams embedded across the federal government. Every entry reflects measurable delivery in production, pilot, or deployment motion.",
    titleHighlightSlice: [3, 7],
    titleLineBreakBefore: "Here's",
    stats: [
      { value: "4", label: "Features shipped" },
      { value: "8", label: "Agencies active" },
      { value: "20", label: "People deployed" },
      { value: "2", label: "Teams deployed" },
    ],
  } satisfies DispatchesHeroContent,
  sections: {
    dashboard: {
      eyebrow: "Ship dashboard",
      title: "Delivery at a glance",
      subtitle:
        "A fast snapshot of shipped features, active agencies, deployed teams, and recent staffing movement.",
    } satisfies DispatchesSectionHeader,
    shippingActivity: {
      eyebrow: "Monthly dispatches",
      title: "Monthly dispatch activity",
      subtitle:
        "A month-by-month stacked activity chart highlighting shipped, deployed, and supporting delivery events over the latest 12-month window.",
      legend: {
        shipped: "Shipped",
        deployed: "Deployed",
        other: "Other",
      },
    },
    feed: {
      eyebrow: "Feed",
      title: "Latest dispatches",
      subtitle:
        "Filter by category and drill into linked initiatives, milestones, and field notes.",
    } satisfies DispatchesSectionHeader,
  },
  statsCards: [
    { label: "Features shipped", color: "var(--tertiary-color)" },
    { label: "Agencies active", color: "var(--secondary-color)" },
    { label: "People deployed", color: "var(--secondary-color-light)" },
    { label: "Teams deployed", color: "var(--primary-yellow-color)" },
  ] as DispatchesStatCardCopy[],
  statusRow: {
    dispatchesFiledSuffix: "dispatches filed",
    agenciesActiveSuffix: "agencies active",
    lastShipPrefix: "Last ship:",
    lastShipFallback: "N/A",
    updateCategoriesSuffix: "update categories",
  },
  feed: {
    emptyState: "No dispatches in this category yet.",
    fullStoryLabel: "Full story",
  },
  cta: {
    eyebrow: "Join",
    title: "Write the next dispatch",
    body: "Join a team that ships measurable work for real people. Your first dispatch could be next.",
    primary: { text: "Apply now", href: "/apply" },
    secondary: { text: "Open impact", href: "/impact" },
  } satisfies DispatchesPageCtaContent,
};

export const DISPATCHES_PAGE_FILTERS: DispatchCategoryFilter[] = [
  "All",
  "Shipped",
  "Deployed",
  "Milestone",
  "New Faces",
  "Field Note",
];

export const DISPATCH_CATEGORY_KEYS = {
  shipped: "Shipped",
  deployed: "Deployed",
  milestone: "Milestone",
  newFaces: "New Faces",
  fieldNote: "Field Note",
} as const;

export const DISPATCHES_PAGE_DATE_FORMAT_TEXT = {
  locale: "en-US",
  chartLabelSeparator: " · ",
};

export const DISPATCHES_PAGE_TIME_AGO_TEXT = {
  today: "Today",
  yesterday: "Yesterday",
  daySuffix: "d ago",
  weekSuffix: "w ago",
  monthSuffix: "mo ago",
  yearSuffix: "y ago",
};

export const DISPATCHES_PAGE_UI_TEXT = {
  allFilterLabel: "All",
} as const;
