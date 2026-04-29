import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/sections/CTASection";
import CardSurface from "@/components/cards/CardSurface";
import LongFeatureCard, { type SideTone } from "@/components/cards/LongFeatureCard";
import SectionHeader from "@/components/general/SectionHeader";
import HeroFrame from "@/components/sections/PageHero";
import ImpactCaseStudyCards, {
  type ImpactCaseStudyTone,
} from "@/components/sections/ImpactCaseStudyCards";
import DividerStars from "@/ui/DividerStars";
import caseStudies from "@/data/child/case-studies";
import dispatches from "@/data/child/dispatches";
import agencyEngagements from "@/data/child/agency-engagements";
import type { AgencyEngagement } from "@/data/child/agency-engagements";
import milestones from "@/data/child/milestones";
import coverage, { featuredCoverage } from "@/data/child/press-coverage";
import teamMembers, {
  alumniDestinations,
  beforeAfter,
  profiles,
} from "@/data/child/team-members";
import { objectives, values } from "@/data/child/values";
import { SHARED_METADATA_TEXT, SITE_URL_FALLBACK } from "@/text/metadata";
import { getImageBreakScene } from "@/text/imageBreaks";
import { toAbsoluteSiteUrl, withBasePath } from "@/utils/basePath";
import DataTable from "@/components/general/DataTable";
import styles from "./LegacyPage.module.css";
import careersStyles from "@/app/careers/careers.module.css";

const LEGACY_PAGE_PATHS = [
  "about",
  "about/people",
  "about/people/seth-eheart",
  "impact",
  "impact/congress",
  "impact/fafsa",
  "impact/va-ai",
  "impact/state-visas",
  "impact/passport",
  "agencies",
  "dispatches",
  "press",
  "join",
  "join/alumni",
  "apply",
  "privacy",
  "contact",
  "accessibility",
  "design-system",
] as const;

type LegacyPagePath = (typeof LEGACY_PAGE_PATHS)[number];

type LegacyPageParams = {
  legacy: string[];
};

type LegacyPageProps = {
  params: Promise<LegacyPageParams>;
};

type Stat = {
  value: string;
  label: string;
};

type MetaContent = {
  title: string;
  description: string;
  keywords: string[];
};

const LEGACY_PATH_SET = new Set<string>(LEGACY_PAGE_PATHS);
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || SITE_URL_FALLBACK;
const logoPath = withBasePath(SHARED_METADATA_TEXT.logoImagePath);
const ENGAGEMENT_TABLE_HEADERS = [
  "Agency",
  "Domain",
  "Teams",
  "People",
  "Status",
  "Highlights",
];
const IMPACT_SHOWCASE_TONES: readonly ImpactCaseStudyTone[] = [
  "blue",
  "sky",
  "gold",
  "teal",
];
const WIDE_CARD_TONES: readonly SideTone[] = ["blue", "teal", "gold", "sky"];

function toEngagementTableRows(entries: AgencyEngagement[]) {
  return entries.map((entry) => ({
    key: entry.name,
    cells: [
      entry.name,
      entry.domain,
      entry.teams,
      entry.people,
      entry.status,
      entry.highlights.join(", "),
    ],
  }));
}

const LEGACY_PAGE_META: Record<LegacyPagePath, MetaContent> = {
  about: {
    title: "About",
    description:
      "Learn how USDS operates, the mission timeline, and the principles that guide delivery teams.",
    keywords: ["USDS about", "USDS mission", "federal digital service"],
  },
  "about/people": {
    title: "People",
    description:
      "Read opt-in employee profiles sharing what they have shipped and why they like working at USDS.",
    keywords: ["USDS people", "USDS employee profiles", "USDS team stories"],
  },
  "about/people/seth-eheart": {
    title: "Seth Eheart",
    description:
      "Profile for Seth Eheart and the portfolio of public-impact work led at USDS.",
    keywords: ["Seth Eheart", "USDS profile", "USDS employee profile"],
  },
  impact: {
    title: "Impact",
    description:
      "Review measurable USDS outcomes, case studies, and active delivery dispatches.",
    keywords: ["USDS impact", "government modernization", "federal outcomes"],
  },
  "impact/congress": {
    title: "Impact for Congress",
    description:
      "Agency-by-agency impact summary with workforce, cost, and delivery signals for oversight.",
    keywords: [
      "USDS congressional impact",
      "federal delivery metrics",
      "agency outcomes",
    ],
  },
  "impact/fafsa": {
    title: "FAFSA Modernization",
    description:
      "Case study on FAFSA modernization, from form redesign to completion gains.",
    keywords: [
      "FAFSA modernization",
      "Dept. of Education",
      "USDS case study",
    ],
  },
  "impact/va-ai": {
    title: "VA AI Claims Processing",
    description:
      "Case study on AI-assisted disability claims processing at the Dept. of Veterans Affairs.",
    keywords: ["VA AI", "veterans claims", "USDS case study"],
  },
  "impact/state-visas": {
    title: "Visa System Recovery",
    description:
      "Case study on restoring State Dept. visa throughput and platform stability.",
    keywords: ["visa system", "Dept. of State", "USDS case study"],
  },
  "impact/passport": {
    title: "Passport Renewal System",
    description:
      "Case study on digital passport renewal and operational cycle-time improvements.",
    keywords: ["passport renewal", "Dept. of State", "USDS case study"],
  },
  agencies: {
    title: "Agencies",
    description:
      "Browse active and completed USDS agency engagements across healthcare, defense, and benefits systems.",
    keywords: [
      "USDS agencies",
      "federal partnerships",
      "digital modernization",
    ],
  },
  dispatches: {
    title: "Dispatches",
    description:
      "Latest USDS delivery updates, milestones, field notes, and deployment signals.",
    keywords: ["USDS dispatches", "delivery updates", "federal tech"],
  },
  press: {
    title: "Press",
    description: "USDS press coverage, featured reporting, and media context.",
    keywords: ["USDS press", "media coverage", "government technology news"],
  },
  join: {
    title: "Join",
    description:
      "Explore tours of service and role pathways for engineers, designers, and product leaders.",
    keywords: ["USDS join", "USDS careers", "public service tech"],
  },
  "join/alumni": {
    title: "Alumni",
    description:
      "See where USDS alumni lead next and how tours of service shape long-term career impact.",
    keywords: ["USDS alumni", "public service alumni", "tour of duty"],
  },
  apply: {
    title: "Apply",
    description:
      "Application overview for USDS tours of service, including process steps and preparation guidance.",
    keywords: ["apply USDS", "USDS hiring", "federal technology application"],
  },
  privacy: {
    title: "Privacy",
    description:
      "USDS privacy principles and handling practices for digital services.",
    keywords: ["USDS privacy", "privacy policy", "government web privacy"],
  },
  contact: {
    title: "Contact",
    description:
      "Ways to contact USDS for agency partnerships, media, and careers information.",
    keywords: ["contact USDS", "USDS partnerships", "USDS support"],
  },
  accessibility: {
    title: "Accessibility",
    description:
      "USDS accessibility commitment, standards alignment, and reporting guidance.",
    keywords: ["USDS accessibility", "Section 508", "WCAG"],
  },
  "design-system": {
    title: "Design System",
    description:
      "Overview of parent site design-system tokens, patterns, and implementation conventions.",
    keywords: ["USDS design system", "design tokens", "component patterns"],
  },
};

const IMPACT_DETAIL_COPY = {
  fafsa: {
    subtitle:
      "Reducing form friction, clarifying eligibility, and improving mobile completion for students and families.",
    highlights: [
      "Condensed the application from 108 prompts to 36 guided questions.",
      "Rebuilt the flow for mobile-first completion with clearer dependency logic.",
      "Improved plain-language copy so applicants understand progress and next steps.",
      "Integrated validation checkpoints earlier to prevent late-stage form failures.",
    ],
    outcomes: [
      "Record FAFSA completion gains over prior years.",
      "Higher completion confidence among first-generation students.",
      "Lower support-ticket volume for form navigation questions.",
    ],
  },
  "va-ai": {
    subtitle:
      "Pairing adjudicators with explainable AI signals to reduce backlog while maintaining decision quality.",
    highlights: [
      "Introduced AI-assisted triage for disability-claim intake routing.",
      "Added reliability and observability controls around model-assisted workflows.",
      "Built reviewer interfaces that surface model context for human verification.",
      "Modernized data pipelines to keep downstream processing continuously updated.",
    ],
    outcomes: [
      "Major cycle-time improvements for disability-claim decisions.",
      "Sustained high-quality outcomes with human-in-the-loop review.",
      "More predictable queue operations for high-volume intake periods.",
    ],
  },
  "state-visas": {
    subtitle:
      "Stabilizing throughput for a mission-critical international processing platform under production load.",
    highlights: [
      "Identified and resolved timeout behavior that silently dropped submissions.",
      "Added instrumentation and alerting for failure-pattern detection before user impact.",
      "Hardened queue and session management for sustained peak traffic.",
      "Implemented release safeguards to reduce regression risk during high-demand windows.",
    ],
    outcomes: [
      "Throughput recovered to large-scale daily application volumes.",
      "Improved operational resilience and uptime consistency.",
      "Shorter incident-diagnosis cycles across platform teams.",
    ],
  },
  passport: {
    subtitle:
      "Designing an end-to-end digital renewal journey with clearer status visibility and lower processing delay.",
    highlights: [
      "Launched a structured online renewal flow replacing paper-heavy handoffs.",
      "Improved applicant status transparency with clearer state transitions.",
      "Reduced operational bottlenecks through better case prioritization paths.",
      "Expanded national rollout with staged reliability checks.",
    ],
    outcomes: [
      "Lower end-to-end renewal time for applicants.",
      "Increased completion rates for online submission.",
      "Higher support efficiency due to cleaner status reporting.",
    ],
  },
} as const;

type ImpactDetailSlug = keyof typeof IMPACT_DETAIL_COPY;

export function generateStaticParams(): LegacyPageParams[] {
  return LEGACY_PAGE_PATHS.map((path) => ({ legacy: path.split("/") }));
}

export async function generateMetadata({
  params,
}: LegacyPageProps): Promise<Metadata> {
  const { legacy } = await params;
  const pathKey = toPathKey(legacy);

  if (!pathKey) {
    return {};
  }

  const pageMeta = LEGACY_PAGE_META[pathKey];
  const canonicalPath = withBasePath(`/${pathKey}`);

  return {
    title: pageMeta.title,
    description: pageMeta.description,
    keywords: [...pageMeta.keywords],
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: toAbsoluteSiteUrl(`/${pathKey}`, siteUrl),
      title: `${pageMeta.title} | U.S. DOGE Service (USDS)`,
      description: pageMeta.description,
      images: [
        {
          url: logoPath,
          alt: SHARED_METADATA_TEXT.logoAlt,
        },
      ],
    },
    twitter: {
      title: `${pageMeta.title} | U.S. DOGE Service (USDS)`,
      description: pageMeta.description,
      images: [logoPath],
    },
  };
}

export default async function LegacyPage({ params }: LegacyPageProps) {
  const { legacy } = await params;
  const pathKey = toPathKey(legacy);

  if (!pathKey) {
    notFound();
  }

  return (
    <div className={`pageWrap ${styles.wrapper}`}>{renderPage(pathKey)}</div>
  );
}

function toPathKey(segments: string[]): LegacyPagePath | null {
  const candidate = segments.join("/");
  if (!LEGACY_PATH_SET.has(candidate)) {
    return null;
  }

  return candidate as LegacyPagePath;
}

function formatDispatchDate(dateText: string): string {
  const parsed = new Date(`${dateText}T00:00:00`);
  if (Number.isNaN(parsed.getTime())) {
    return dateText;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

function HeroSection({
  eyebrow,
  title,
  subtitle,
  stats,
  imageSrc,
  imageAlt,
  useCompactTitle,
  headerClassName,
  cta,
  variant,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  stats?: Stat[];
  imageSrc?: string;
  imageAlt?: string;
  useCompactTitle?: boolean;
  headerClassName?: string;
  cta?: { text: string; href: string }[];
  variant?: "left" | "center";
}) {
  const resolvedVariant = variant ?? (imageSrc ? "left" : "center");
  const isSplitHero = resolvedVariant === "left";
  const heroStats = stats?.map((stat) => ({
    label: stat.label,
    value: stat.value,
  }));
  const heroCtas = cta?.map((item, index) => ({
    text: item.text,
    href: item.href,
    backgroundColor:
      index === 0 ? "var(--primary-color)" : "var(--primary-dark-panel-muted)",
    textColor: "var(--primary-light)",
  }));

  return (
    <HeroFrame
      className={`${styles.hero} ${isSplitHero ? styles.heroSplit : ""}`}
      headerClassName={`${styles.heroHeader} ${
        isSplitHero ? styles.heroHeaderSplit : styles.heroHeaderCentered
      } ${useCompactTitle ? styles.heroHeaderCompact : ""} ${headerClassName ?? ""}`}
      statsClassName={isSplitHero ? styles.heroStatsGrid : undefined}
      variant={resolvedVariant}
      eyebrow={eyebrow}
      title={title}
      titleSize="heroChild"
      subtitle={subtitle}
      titleAlignment={isSplitHero ? "left" : "center"}
      subtitleAlignment={isSplitHero ? "left" : "center"}
      showTitleBorder={false}
      compactTitle={Boolean(useCompactTitle)}
      splitContentLayout={isSplitHero ? "stacked" : "default"}
      frameStyle={isSplitHero ? "frameless" : "framed"}
      imageSrc={imageSrc}
      imageAlt={imageAlt}
      stats={heroStats}
      statsPlacement={isSplitHero ? "content" : "bottom"}
      statsStyle={isSplitHero ? "frameless" : "framed"}
      cta={heroCtas}
      ctaPlacement={
        isSplitHero && heroCtas && heroCtas.length > 0 ? "afterStats" : "header"
      }
    />
  );
}

function PanelCard({
  eyebrow,
  title,
  body,
  footer,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  footer?: ReactNode;
}) {
  return (
    <CardSurface as="article" tone="background" className={styles.card}>
      {eyebrow ? <p className={styles.cardEyebrow}>{eyebrow}</p> : null}
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardBody}>{body}</p>
      {footer ? footer : null}
    </CardSurface>
  );
}

function ApplyOverviewRoleCard({
  eyebrow,
  title,
  summary,
  tags,
}: {
  eyebrow: string;
  title: string;
  summary: string;
  tags?: string[];
}) {
  return (
    <article className={careersStyles.roleCard}>
      <div className={careersStyles.roleCardInner}>
        <div className={careersStyles.roleTop}>
          <div className={careersStyles.roleBadges}>
            <span className={careersStyles.roleBadge}>{eyebrow}</span>
          </div>
        </div>

        <span className={careersStyles.roleHeader}>
          <div className={careersStyles.roleTitleWrap}>
            <h3 className={careersStyles.roleTitle}>{title}</h3>
          </div>
          <p className={careersStyles.roleSummary}>{summary}</p>
        </span>

        {tags && tags.length > 0 ? (
          <span className={careersStyles.roleCardBottom}>
            <ul className={careersStyles.skillList}>
              {tags.map((tag) => (
                <li key={`${title}-${tag}`} className={careersStyles.skillItem}>
                  {tag}
                </li>
              ))}
            </ul>
          </span>
        ) : null}
      </div>
    </article>
  );
}

function renderPage(pathKey: LegacyPagePath): ReactNode {
  switch (pathKey) {
    case "about":
      return renderAboutPage();
    case "about/people":
      return renderAboutPeoplePage();
    case "about/people/seth-eheart":
      return renderSethEheartPage();
    case "impact":
      return renderImpactPage();
    case "impact/congress":
      return renderImpactCongressPage();
    case "impact/fafsa":
      return renderImpactDetailPage("fafsa");
    case "impact/va-ai":
      return renderImpactDetailPage("va-ai");
    case "impact/state-visas":
      return renderImpactDetailPage("state-visas");
    case "impact/passport":
      return renderImpactDetailPage("passport");
    case "agencies":
      return renderAgenciesPage();
    case "dispatches":
      return renderDispatchesPage();
    case "press":
      return renderPressPage();
    case "join":
      return renderJoinPage();
    case "join/alumni":
      return renderJoinAlumniPage();
    case "apply":
      return renderJoinApplyPage();
    case "privacy":
      return renderPrivacyPage();
    case "contact":
      return renderContactPage();
    case "accessibility":
      return renderAccessibilityPage();
    case "design-system":
      return renderDesignSystemPage();
    default:
      return null;
  }
}

function renderAboutPage() {
  const profileCount = profiles.length;

  return (
    <>
      <HeroSection
        eyebrow="About"
        title="The government’s top technologists"
        subtitle="When a federal system fails and millions are affected, we deploy. USDS is the elite technology unit within government — engineers, designers, and product leaders who take on the hardest problems at the highest stakes."
        imageSrc={getImageBreakScene(0).src}
        imageAlt="Cross-functional government delivery teams collaborating"
        stats={[
          { value: "2014", label: "Organization founded" },
          { value: `${profileCount}`, label: "Employee profiles" },
          { value: `${milestones.length}`, label: "Recorded milestones" },
          { value: "30+", label: "Agencies served" },
        ]}
        cta={[
          { text: "View people", href: "/about/people" },
          { text: "See impact", href: "/impact" },
        ]}
      />
      <DividerStars />


      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Objectives"
          title="How the mission is translated into execution"
          titleAlignment="left"
          subtitle="These delivery objectives come directly from the child site and are now surfaced in the parent experience."
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {objectives.map((objective) => (
            <PanelCard
              key={objective.title}
              eyebrow={objective.stat}
              title={objective.title}
              body={objective.desc}
            />
          ))}
        </div>
      </section>
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Timeline"
          title="Major milestones"
          titleAlignment="left"
          subtitle="From initial crisis response to permanent authorization, this timeline captures key moments from the child site history pages."
          subtitleAlignment="left"
        />

        <div className={styles.timeline}>
          {milestones.map((milestone) => (
            <article
              key={`${milestone.year}-${milestone.event}`}
              className={styles.timelineItem}
            >
              <p className={styles.timelineYear}>{milestone.year}</p>
              <p className={styles.timelineBody}>{milestone.event}</p>
            </article>
          ))}
        </div>
      </section>
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Values"
          title="Operating principles"
          titleAlignment="left"
          subtitle="Consistent values are now represented in the parent site theme and components."
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {values.map((value) => (
            <PanelCard
              key={value.title}
              title={value.title}
              body={value.desc}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Explore"
        title="Meet the people behind the mission"
        body="Read opt-in employee profile stories about work delivered and why people choose mission-focused service."
        primary={{ text: "View people", href: "/about/people" }}
        secondary={{ text: "See impact", href: "/impact" }}
      />
    </>
  );
}

function renderAboutPeoplePage() {
  const featuredProfiles = profiles.slice(0, 6);
  const roleCount = new Set(featuredProfiles.map((profile) => profile.role))
    .size;
  const sharedProjectCount = featuredProfiles.filter(
    (profile) => profile.shipped.trim().length > 0,
  ).length;

  return (
    <>
      <HeroSection
        eyebrow="People"
        title="Employee profiles"
        subtitle="Opt-in stories from across USDS about what employees have worked on and why they like serving."
        variant="left"
        imageSrc={getImageBreakScene(1).src}
        imageAlt="USDS employee profile collaboration session"
        headerClassName={styles.peopleHeroHeader}
        stats={[
          { value: `${featuredProfiles.length}`, label: "Profiles shown" },
          { value: `${roleCount}`, label: "Role perspectives" },
          {
            value: `${sharedProjectCount}`,
            label: "Project highlights shared",
          },
          { value: "Opt-in", label: "Participation model" },
        ]}
        cta={[
          { text: "Open careers", href: "/careers" },
          { text: "See join page", href: "/join" },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <p className={styles.participationNotice}>
          Employee profiles are shared voluntarily and represent a sample of
          roles and mission work across USDS.
        </p>

        <SectionHeader
          eyebrow="Profiles"
          title="Employee stories"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle="Each story includes what the employee worked on and why they like serving at USDS."
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {featuredProfiles.map((profile) => (
            <article className={styles.card} key={profile.initials}>
              <p className={styles.cardEyebrow}>{profile.role}</p>
              <h3 className={styles.cardTitle}>{profile.name}</h3>
              <p className={styles.cardBody}>
                <strong>Worked on:</strong> {profile.shipped}
              </p>
              <p className={styles.cardBody}>
                <strong>Why USDS:</strong> {profile.whyJoined}
              </p>
            </article>
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Join"
        title="Bring your background to mission-critical work"
        body="Explore open career tracks and the tours of service model used across agencies."
        primary={{ text: "See join page", href: "/join" }}
        secondary={{ text: "Open careers", href: "/careers" }}
      />
    </>
  );
}

function renderSethEheartPage() {
  const seth = teamMembers.find((member) => member.initials === "SE");
  const featuredStudies = caseStudies
    .filter((study) => study.featured)
    .slice(0, 3);

  if (!seth) {
    notFound();
  }

  return (
    <>
      <HeroSection
        eyebrow="Profile"
        title="Seth Eheart"
        subtitle="Employee profile focused on cross-agency delivery planning, operational alignment, and measurable execution in public-service systems."
        stats={[
          { value: seth.role, label: "Role" },
          { value: seth.discipline, label: "Discipline" },
          { value: seth.from, label: "Prior background" },
          { value: "USDS", label: "Current org" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Focus"
          title="Current scope"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle="This profile route from the child site is now integrated into the parent experience with the same visual language."
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <PanelCard
            title="Delivery operations"
            body="Coordinates cross-functional teams, priorities, and sequencing so delivery tracks can move from planning into active shipping cycles."
          />
          <PanelCard
            title="Stakeholder alignment"
            body="Works with agency and central stakeholders to align constraints, timelines, and execution commitments."
          />
          <PanelCard
            title="Outcome tracking"
            body="Focuses on metrics that reflect service reliability, user outcomes, and sustained improvements after launch."
          />
          <PanelCard
            title="Team enablement"
            body="Supports embedded teams with process clarity, unblock pathways, and operational guardrails for high-stakes systems."
          />
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Related Work"
          title="Selected impact initiatives"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {featuredStudies.map((study) => (
            <PanelCard
              key={study.title}
              eyebrow={study.agency}
              title={study.title}
              body={study.result}
              footer={
                study.slug ? (
                  <Link className={styles.link} href={`/impact/${study.slug}`}>
                    Open case study
                  </Link>
                ) : undefined
              }
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Continue"
        title="Explore team and delivery impact"
        body="Return to the people directory or continue through mission impact pages."
        primary={{ text: "Back to people", href: "/about/people" }}
        secondary={{ text: "View impact", href: "/impact" }}
      />
    </>
  );
}

function renderImpactPage() {
  const featuredStudies = caseStudies.filter(
    (study): study is (typeof caseStudies)[number] & { slug: string } =>
      Boolean(study.slug) && study.featured,
  );
  const additionalStudies = caseStudies.filter((study) => !study.featured);
  const heroImage =
    featuredStudies[0]?.image ??
    caseStudies[0]?.image ??
    getImageBreakScene(0).src;

  return (
    <>
      <HeroSection
        eyebrow="Impact"
        title="Measurable service improvement across government"
        subtitle="These results are sourced from child-site case studies and dispatches, now integrated into the parent experience and navigation."
        imageSrc={heroImage}
        imageAlt="Public-service impact delivery teams"
        useCompactTitle
        stats={[
          { value: "$4B+", label: "Fraud identified" },
          { value: "1M+", label: "Veterans served" },
          { value: `${caseStudies.length}`, label: "Case studies" },
          { value: `${dispatches.length}`, label: "Recent dispatches" },
        ]}
        cta={[
          { text: "Open case studies", href: "/impact/fafsa" },
          { text: "Read dispatches", href: "/dispatches" },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Featured"
          title="Core case studies"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle="Detailed pages are available for the major impact tracks from the child site."
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {featuredStudies.map((study) => (
            <PanelCard
              key={study.slug}
              eyebrow={`${study.agency} • ${study.domain}`}
              title={study.title}
              body={study.result}
              footer={
                <>
                  <div className={styles.metricRow}>
                    <span className={styles.metricBefore}>{study.before}</span>
                    <span className={styles.metricAfter}>{study.after}</span>
                    <span className={styles.metricLabel}>
                      {study.metricLabel}
                    </span>
                  </div>
                  <Link className={styles.link} href={`/impact/${study.slug}`}>
                    Read case study
                  </Link>
                </>
              }
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Expanded"
          title="Additional impact areas"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {additionalStudies.map((study) => (
            <PanelCard
              key={study.title}
              eyebrow={`${study.agency} • ${study.domain}`}
              title={study.title}
              body={study.detail ?? study.result}
              footer={
                <div className={styles.metricRow}>
                  <span className={styles.metricBefore}>{study.before}</span>
                  <span className={styles.metricAfter}>{study.after}</span>
                  <span className={styles.metricLabel}>
                    {study.metricLabel}
                  </span>
                </div>
              }
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Dispatches"
          title="Latest delivery notes"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {dispatches.slice(0, 6).map((item) => (
            <PanelCard
              key={item.id}
              eyebrow={`${item.category} • ${formatDispatchDate(item.date)}`}
              title={item.title}
              body={item.body}
              footer={
                <>
                  {item.metric ? (
                    <div className={styles.metricRow}>
                      {item.metric.before ? (
                        <span className={styles.metricBefore}>
                          {item.metric.before}
                        </span>
                      ) : null}
                      <span className={styles.metricAfter}>
                        {item.metric.after}
                      </span>
                      <span className={styles.metricLabel}>
                        {item.metric.label}
                      </span>
                    </div>
                  ) : null}
                  {item.link ? (
                    <Link className={styles.link} href={item.link}>
                      View linked initiative
                    </Link>
                  ) : null}
                </>
              }
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Oversight"
        title="Need an agency-by-agency snapshot?"
        body="Open the congressional summary view for engagement and capacity metrics."
        primary={{ text: "Open congress view", href: "/impact/congress" }}
        secondary={{ text: "See agencies", href: "/agencies" }}
      />
    </>
  );
}

function renderImpactCongressPage() {
  const totalTeams = agencyEngagements.reduce((sum, row) => sum + row.teams, 0);
  const totalPeople = agencyEngagements.reduce(
    (sum, row) => sum + row.people,
    0,
  );
  const activeEngagements = agencyEngagements.filter(
    (engagement) => engagement.status === "active",
  ).length;
  const heroImage = getImageBreakScene(1).src;

  return (
    <>
      <HeroSection
        eyebrow="Impact for Congress"
        title="Agency-by-agency delivery and capacity snapshot"
        subtitle="A compact operational view for oversight and planning, built from child-site engagement and impact data."
        imageSrc={heroImage}
        imageAlt="Congressional impact overview background"
        useCompactTitle
        stats={[
          { value: `${agencyEngagements.length}`, label: "Agency engagements" },
          { value: `${activeEngagements}`, label: "Active engagements" },
          { value: `${totalTeams}`, label: "Embedded teams" },
          { value: `${totalPeople}`, label: "People deployed" },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Case studies"
          title="Representative results"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <ImpactCaseStudyCards
          studies={caseStudies.slice(0, 6)}
          showcaseTones={IMPACT_SHOWCASE_TONES}
        />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Portfolio"
          title="Engagement table"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle="Status, team footprint, and delivery focus by agency."
        />

        <DataTable
          headers={ENGAGEMENT_TABLE_HEADERS}
          rows={toEngagementTableRows(agencyEngagements)}
          size="sm"
          minWidth={740}
        />
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Continue"
        title="Review the full impact portfolio"
        body="Return to impact overview or browse agency-specific engagement details."
        primary={{ text: "Back to impact", href: "/impact" }}
        secondary={{ text: "Open agencies", href: "/agencies" }}
      />
    </>
  );
}

function renderImpactDetailPage(slug: ImpactDetailSlug) {
  const study = caseStudies.find((item) => item.slug === slug);

  if (!study) {
    notFound();
  }

  const detail = IMPACT_DETAIL_COPY[slug];
  const relatedCaseStudies = caseStudies.filter(
    (entry): entry is (typeof caseStudies)[number] & { slug: string } =>
      Boolean(entry.slug) && entry.slug !== slug,
  );

  return (
    <>
      <HeroSection
        eyebrow="Impact case study"
        title={study.title}
        subtitle={detail.subtitle}
        imageSrc={study.image}
        imageAlt={study.title}
        useCompactTitle
        stats={[
          { value: study.before, label: `Before (${study.metricLabel})` },
          { value: study.after, label: `After (${study.metricLabel})` },
          { value: study.agency, label: "Agency" },
          { value: study.domain, label: "Domain" },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Related case studies"
          title="More impact routes"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle="Continue into other impact pages from the same portfolio."
        />

        <ImpactCaseStudyCards
          studies={relatedCaseStudies}
          showcaseTones={IMPACT_SHOWCASE_TONES}
        />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Implementation"
          title="What changed"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={study.result}
        />

        <div className={styles.wideCardStack}>
          {detail.highlights.map((highlight, index) => (
            <LongFeatureCard
              key={highlight}
              eyebrow="Implementation"
              title="Delivery update"
              description={highlight}
              sideValue={`${index + 1}`.padStart(2, "0")}
              sideLabel="Update"
              sideTone={WIDE_CARD_TONES[index % WIDE_CARD_TONES.length] ?? "blue"}
              animateSideValue={false}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Outcomes"
          title="Why this mattered"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={styles.wideCardStack}>
          {detail.outcomes.map((outcome, index) => (
            <LongFeatureCard
              key={outcome}
              eyebrow="Outcomes"
              title={outcome}
              sideValue={`${index + 1}`.padStart(2, "0")}
              sideLabel="Result"
              sideTone={WIDE_CARD_TONES[index % WIDE_CARD_TONES.length] ?? "blue"}
              animateSideValue={false}
            />
          ))}
          <LongFeatureCard
            eyebrow="Measure"
            title={study.metricLabel}
            description={`Primary tracked movement: ${study.before} to ${study.after}.`}
            sideText={`${study.before} -> ${study.after}`}
            sideLabel="Change"
            sideTone={WIDE_CARD_TONES[detail.outcomes.length % WIDE_CARD_TONES.length] ?? "blue"}
          />
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Explore"
        title="Continue through impact content"
        body="Return to the impact index or open the congressional summary view."
        primary={{ text: "Back to impact", href: "/impact" }}
        secondary={{ text: "Congress view", href: "/impact/congress" }}
      />
    </>
  );
}

function renderAgenciesPage() {
  const activeCount = agencyEngagements.filter(
    (entry) => entry.status === "active",
  ).length;
  const completedCount = agencyEngagements.length - activeCount;
  const totalPeople = agencyEngagements.reduce(
    (sum, entry) => sum + entry.people,
    0,
  );
  const totalTeams = agencyEngagements.reduce(
    (sum, entry) => sum + entry.teams,
    0,
  );

  const domainRollup = Array.from(
    agencyEngagements.reduce((acc, entry) => {
      const existing = acc.get(entry.domain) ?? {
        teams: 0,
        people: 0,
        agencies: 0,
      };
      acc.set(entry.domain, {
        teams: existing.teams + entry.teams,
        people: existing.people + entry.people,
        agencies: existing.agencies + 1,
      });
      return acc;
    }, new Map<string, { teams: number; people: number; agencies: number }>()),
  );
  const heroImage = getImageBreakScene(2).src;

  return (
    <>
      <HeroSection
        eyebrow="Agencies"
        title="Partnership footprint across the federal government"
        subtitle="Child-site agency engagement data is now directly available in the parent site, with the same visual system used throughout existing pages."
        imageSrc={heroImage}
        imageAlt="Federal agency collaboration"
        useCompactTitle
        stats={[
          { value: `${agencyEngagements.length}`, label: "Total engagements" },
          { value: `${activeCount}`, label: "Active" },
          { value: `${completedCount}`, label: "Completed" },
          { value: `${totalPeople}`, label: "People deployed" },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Domain summary"
          title="Where teams are working"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {domainRollup.map(([domain, stats]) => (
            <PanelCard
              key={domain}
              eyebrow={`${stats.agencies} agencies`}
              title={domain}
              body={`${stats.teams} teams and ${stats.people} people currently mapped in this domain.`}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Full list"
          title="Engagement table"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={`Total teams represented: ${totalTeams}.`}
        />

        <DataTable
          headers={ENGAGEMENT_TABLE_HEADERS}
          rows={toEngagementTableRows(agencyEngagements)}
          size="sm"
          minWidth={740}
        />
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Next"
        title="See outcomes tied to these partnerships"
        body="Open impact pages to review initiative-level metrics and dispatch updates."
        primary={{ text: "Open impact", href: "/impact" }}
        secondary={{ text: "Read dispatches", href: "/dispatches" }}
      />
    </>
  );
}

function renderDispatchesPage() {
  const categories = new Set(dispatches.map((dispatch) => dispatch.category));
  const latest = dispatches[0];

  return (
    <>
      <HeroSection
        eyebrow="Dispatches"
        title="Recent delivery updates from embedded teams"
        subtitle="Shipped items, milestones, and field notes from child-site dispatch data are now integrated into the parent site routes."
        stats={[
          { value: `${dispatches.length}`, label: "Dispatch entries" },
          { value: `${categories.size}`, label: "Update categories" },
          {
            value: latest ? formatDispatchDate(latest.date) : "N/A",
            label: "Latest update",
          },
          { value: "Nationwide", label: "Top environment signal" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Feed"
          title="Latest entries"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {dispatches.map((item) => (
            <PanelCard
              key={item.id}
              eyebrow={`${item.category} • ${formatDispatchDate(item.date)}`}
              title={item.title}
              body={item.body}
              footer={
                <>
                  <div className={styles.chips}>
                    {item.agency ? (
                      <span className={styles.chip}>{item.agency}</span>
                    ) : null}
                    {item.env ? (
                      <span className={styles.chip}>{item.env}</span>
                    ) : null}
                  </div>
                  {item.metric ? (
                    <div className={styles.metricRow}>
                      {item.metric.before ? (
                        <span className={styles.metricBefore}>
                          {item.metric.before}
                        </span>
                      ) : null}
                      <span className={styles.metricAfter}>
                        {item.metric.after}
                      </span>
                      <span className={styles.metricLabel}>
                        {item.metric.label}
                      </span>
                    </div>
                  ) : null}
                  {item.link ? (
                    <Link className={styles.link} href={item.link}>
                      View related page
                    </Link>
                  ) : null}
                </>
              }
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Continue"
        title="Need deeper context for a dispatch?"
        body="Open full impact case studies or continue through the dispatch archive."
        primary={{ text: "Open impact", href: "/impact" }}
        secondary={{ text: "Contact us", href: "/contact" }}
      />
    </>
  );
}

function renderPressPage() {
  const totalCoverage = featuredCoverage.length + coverage.length;

  return (
    <>
      <HeroSection
        eyebrow="Press"
        title="Media coverage and context"
        subtitle="Featured stories and broader coverage from the child site are now included in the parent route set."
        stats={[
          { value: `${featuredCoverage.length}`, label: "Featured articles" },
          { value: `${coverage.length}`, label: "Additional coverage" },
          { value: `${totalCoverage}`, label: "Total references" },
          { value: "2025-2026", label: "Coverage window" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Featured"
          title="Top coverage"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {featuredCoverage.map((article) => (
            <PanelCard
              key={`${article.publication}-${article.headline}`}
              eyebrow={`${article.publication} • ${article.date}`}
              title={article.headline}
              body={article.excerpt}
              footer={<span className={styles.chip}>{article.tag}</span>}
            />
          ))}
        </div>
      </section>
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Archive"
          title="Additional coverage"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {coverage.map((article) => (
            <PanelCard
              key={`${article.publication}-${article.headline}`}
              eyebrow={`${article.publication} • ${article.date}`}
              title={article.headline}
              body={article.excerpt}
              footer={<span className={styles.chip}>{article.tag}</span>}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        surface="plain"
        eyebrow="Resources"
        title="Press resource notes"
        body="Coverage links in this merged dataset are placeholders from the child site source. Use the contact page for media routing and update URLs as verified publication links become available."
        primary={{ text: "Contact page", href: "/contact" }}
        secondary={{ text: "Dispatches", href: "/dispatches" }}
      />
    </>
  );
}

function renderJoinPage() {
  const disciplines = Array.from(
    new Set(teamMembers.map((member) => member.discipline)),
  );

  return (
    <>
      <HeroSection
        eyebrow="Join"
        title="Tours of service for mission-critical systems"
        subtitle="The child site's join and career pathways are now available in the parent site using the same tone and layout conventions."
        stats={[
          { value: "6-24 months", label: "Typical tour range" },
          { value: `${disciplines.length}`, label: "Disciplines represented" },
          { value: `${beforeAfter.length}`, label: "Before/after journeys" },
          { value: "Mission-first", label: "Operating model" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Roles"
          title="Where people contribute"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {disciplines.map((discipline) => {
            const disciplineMembers = teamMembers.filter(
              (member) => member.discipline === discipline,
            );

            return (
              <PanelCard
                key={discipline}
                eyebrow={`${disciplineMembers.length} members`}
                title={discipline}
                body={`Representative roles: ${disciplineMembers
                  .slice(0, 3)
                  .map((entry) => entry.role)
                  .join(", ")}.`}
              />
            );
          })}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Journeys"
          title="From private sector to public impact"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {beforeAfter.map((entry) => (
            <PanelCard
              key={entry.name}
              eyebrow={entry.name}
              title={`${entry.before.title} to ${entry.now.title}`}
              body={`Before: ${entry.before.company} - ${entry.before.work} Now: ${entry.now.agency} - ${entry.now.work}`}
            />
          ))}
        </div>
      </section>
      <DividerStars />

      <CTASection
        eyebrow="Start"
        title="Ready to apply for a tour?"
        body="Review the application path or jump directly to current careers information."
        primary={{ text: "Open apply page", href: "/apply" }}
        secondary={{ text: "View careers", href: "/careers" }}
      />
    </>
  );
}

function renderJoinAlumniPage() {
  const totalTracked = alumniDestinations.reduce(
    (sum, entry) => sum + entry.count,
    0,
  );

  return (
    <>
      <HeroSection
        eyebrow="Alumni"
        title="Long-term impact beyond a single tour"
        subtitle="Alumni data from the child site is now connected to the parent site's join pathways."
        stats={[
          {
            value: `${alumniDestinations.length}`,
            label: "Destination categories",
          },
          { value: `${totalTracked}`, label: "Tracked outcomes" },
          { value: "1,000+", label: "Estimated alumni network" },
          { value: "Cross-sector", label: "Career paths" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Destinations"
          title="Where alumni lead"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridThree}`}>
          {alumniDestinations.map((destination) => (
            <PanelCard
              key={destination.company}
              eyebrow={`${destination.count}`}
              title={destination.company}
              body="Reported destination count from child-site alumni data."
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Stories"
          title="What alumni carry forward"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {profiles.slice(0, 6).map((profile) => (
            <PanelCard
              key={`${profile.initials}-alumni`}
              eyebrow={profile.role}
              title={profile.name}
              body={`${profile.whyJoined} ${profile.shipped}`}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Join"
        title="Start your own tour"
        body="Open the application route or return to careers to view active opportunities."
        primary={{ text: "Apply now", href: "/apply" }}
        secondary={{ text: "Open careers", href: "/careers" }}
      />
    </>
  );
}

function renderJoinApplyPage() {
  const disciplines = Array.from(
    new Set(teamMembers.map((member) => member.discipline)),
  ).sort();
  const compensationHighlights = [
    { value: "$197K", label: "Max salary (2026, DC)" },
    { value: "5%", label: "TSP match" },
    { value: "Day 1", label: "Benefits start" },
    { value: "$300/mo", label: "Transit stipend" },
  ];
  const benefits = [
    {
      title: "Health insurance",
      body: "Federal health-plan options are available for employees and eligible dependents.",
    },
    {
      title: "Dental and vision",
      body: "Dental and vision coverage options are available through federal employee programs.",
    },
    {
      title: "Retirement",
      body: "Includes Thrift Savings Plan participation and federal retirement system benefits.",
    },
    {
      title: "Flexible spending",
      body: "Pre-tax accounts are available for eligible healthcare and dependent-care expenses.",
    },
    {
      title: "Life insurance",
      body: "Baseline coverage is provided with options for additional voluntary coverage.",
    },
    {
      title: "Work-life support",
      body: "Employee assistance resources support mental health, family needs, and workplace continuity.",
    },
  ];
  const timeOff = [
    { value: "13", label: "Annual leave days" },
    { value: "13", label: "Paid sick days" },
    { value: "11", label: "Federal holidays" },
    { value: "12 wks", label: "Paid parental leave" },
  ];
  const requirements = [
    {
      title: "U.S. citizenship required",
      body: "USDS roles require U.S. citizenship as a federal employment requirement.",
    },
    {
      title: "Washington, DC duty station",
      body: "Roles support in-person collaboration in Washington, DC, with transit support available.",
    },
    {
      title: "Background check and drug screening",
      body: "Federal background investigation and screening are part of the hiring and onboarding process.",
    },
    {
      title: "Interview accommodations",
      body: "Accommodations are available throughout the hiring process upon request.",
    },
  ];

  return (
    <>
      <HeroSection
        eyebrow="Apply"
        title="Join the mission"
        subtitle="This apply route follows the child-site hiring journey while using parent-site layout, component, and token conventions."
        stats={[
          { value: "3", label: "Application steps" },
          { value: "5 mins", label: "Estimated form time" },
          { value: "Human review", label: "Every submission" },
          { value: "1-2 weeks", label: "Typical first response" },
        ]}
        cta={[
          { text: "Open careers", href: "/careers" },
          { text: "See dispatches", href: "/dispatches" },
        ]}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Compensation"
          title="Salary and benefits overview"
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle="Compensation guidance mirrors the child-site apply page while presented in parent card and spacing patterns."
        />

        <div className={styles.applyOverviewGrids}>
          <div className={careersStyles.roleGrid}>
            {compensationHighlights.map((item) => (
              <ApplyOverviewRoleCard
                key={item.label}
                eyebrow={item.label}
                title={item.value}
                summary="Reference value from the current apply-path compensation snapshot."
                tags={["Compensation"]}
              />
            ))}
          </div>

          <div className={careersStyles.roleGrid}>
            {benefits.map((benefit) => (
              <ApplyOverviewRoleCard
                key={benefit.title}
                eyebrow="Benefits"
                title={benefit.title}
                summary={benefit.body}
                tags={["Federal benefits"]}
              />
            ))}
          </div>
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Leave"
          title="Time off and support"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {timeOff.map((item) => (
            <PanelCard
              key={item.label}
              eyebrow={item.label}
              title={item.value}
              body="Typical federal leave and support baseline represented in the child-site apply content."
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Requirements"
          title="What to know before applying"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          {requirements.map((item) => (
            <PanelCard
              key={item.title}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Role families"
          title="Disciplines frequently represented"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={styles.chips}>
          {disciplines.map((discipline) => (
            <span className={styles.chip} key={discipline}>
              {discipline}
            </span>
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Ready"
        title="Continue to careers and hiring details"
        body="If you want additional context before applying, review careers, FAQs, or contact recruiting."
        primary={{ text: "Open careers", href: "/careers" }}
        secondary={{ text: "Contact", href: "/contact" }}
      />
    </>
  );
}

function renderPrivacyPage() {
  return (
    <>
      <HeroSection
        eyebrow="Privacy"
        title="Privacy and data handling"
        subtitle="This page brings child-site privacy routing into the parent experience with government-service aligned policy language."
        stats={[
          { value: "Minimal", label: "Collection principle" },
          { value: "Purpose-bound", label: "Use controls" },
          { value: "Secure", label: "Storage expectation" },
          { value: "Transparent", label: "Policy updates" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Overview"
          title="How information is handled"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <PanelCard
            title="Collection"
            body="Only information needed to operate and improve services is collected. We avoid collecting unnecessary personal data."
          />
          <PanelCard
            title="Use"
            body="Information is used to deliver requested services, monitor performance, and improve reliability and accessibility."
          />
          <PanelCard
            title="Protection"
            body="Systems are expected to follow federal security and privacy requirements, with access controls and monitoring safeguards."
          />
          <PanelCard
            title="Updates"
            body="Policy language and practices are reviewed as services evolve. Material changes are reflected on this route."
          />
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Support"
        title="Need clarification on privacy practices?"
        body="Use the contact route for policy questions tied to specific services."
        primary={{ text: "Contact us", href: "/contact" }}
      />
    </>
  );
}

function renderContactPage() {
  return (
    <>
      <HeroSection
        eyebrow="Contact"
        title="Bring it to us"
        subtitle="Contact pathways from the child site are now surfaced in the parent site's navigation and design system."
        stats={[
          { value: "Agency", label: "Partnership requests" },
          { value: "Media", label: "Press routing" },
          { value: "Careers", label: "Hiring questions" },
          { value: "Accessibility", label: "Issue reporting" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Channels"
          title="Where to route requests"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <PanelCard
            title="Agency partnerships"
            body="For collaboration or delivery-support discussions, start with the agencies and impact pages to establish context before outreach."
            footer={
              <Link className={styles.link} href="/agencies">
                Open agencies
              </Link>
            }
          />
          <PanelCard
            title="Media and updates"
            body="For media context and references, review the dispatch archive first."
            footer={
              <Link className={styles.link} href="/dispatches">
                Open dispatches
              </Link>
            }
          />
          <PanelCard
            title="Careers"
            body="For role questions and application details, use the careers and hiring FAQ routes."
            footer={
              <Link className={styles.link} href="/careers">
                Open careers
              </Link>
            }
          />
          <PanelCard
            title="Policy and privacy"
            body="Policy and privacy questions can be routed through the privacy or contact pages in this navigation set."
            footer={
              <div className={styles.ctaLinks}>
                <Link className={styles.link} href="/contact">
                  Contact
                </Link>
                <Link className={styles.link} href="/privacy">
                  Privacy
                </Link>
              </div>
            }
          />
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Explore"
        title="Start from mission and impact context"
        body="Most collaboration inquiries move faster with shared context from mission, impact, and agency pages."
        primary={{ text: "Bring it to us", href: "/contact" }}
        secondary={{ text: "View impact", href: "/impact" }}
      />
    </>
  );
}

function renderAccessibilityPage() {
  return (
    <>
      <HeroSection
        eyebrow="Accessibility"
        title="Accessible by design, test, and iteration"
        subtitle="This merged route preserves accessibility intent from the child site while aligning with parent-site structure and controls."
        stats={[
          { value: "WCAG 2.2 AA", label: "Target standard" },
          { value: "Section 508", label: "Federal baseline" },
          { value: "Manual + automated", label: "Testing approach" },
          { value: "Ongoing", label: "Remediation cycle" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Commitments"
          title="Accessibility practices"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <PanelCard
            title="Inclusive interaction"
            body="Navigation, semantic structure, and interactive elements are expected to support keyboard and assistive-technology workflows."
          />
          <PanelCard
            title="Content clarity"
            body="Content is written for comprehension with structure, hierarchy, and plain-language emphasis across key tasks."
          />
          <PanelCard
            title="Testing"
            body="Automated checks are paired with manual review to catch practical usability barriers that automation may miss."
          />
          <PanelCard
            title="Issue response"
            body="Reported accessibility issues are triaged and prioritized with remediation tracking tied to release work."
          />
        </div>
      </section>

      <DividerStars />

      <CTASection
        eyebrow="Report"
        title="Need to report an accessibility issue?"
        body="Use the contact route and include page URL, device, browser, and assistive technology details."
        primary={{ text: "Contact us", href: "/contact" }}
      />
    </>
  );
}

function renderDesignSystemPage() {
  return (
    <>
      <HeroSection
        eyebrow="Design System"
        title="Parent-site theme tokens and patterns"
        subtitle="This page documents how child routes were integrated using existing parent typography, spacing, color tokens, and section composition."
        stats={[
          { value: "Theme variables", label: "Token source" },
          { value: "SectionHeader", label: "Primary heading component" },
          { value: "CTASection", label: "Action pattern" },
          { value: "Panel cards", label: "Content primitives" },
        ]}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow="Tokens"
          title="Core primitives"
          titleAlignment="left"
          subtitleAlignment="left"
        />

        <div className={`${styles.grid} ${styles.gridTwo}`}>
          <PanelCard
            title="Color"
            body="Uses existing parent variables such as primary-light, primary-dark, primary-color-light, and panel transparency tokens."
          />
          <PanelCard
            title="Spacing"
            body="Uses parent spacing scale from xs through 2xl and consistent section paddings on pageWrap/sectionFrame patterns."
          />
          <PanelCard
            title="Typography"
            body="Uses parent font stacks and heading rhythm through SectionHeader and shared type-scale variables."
          />
          <PanelCard
            title="Surfaces"
            body="Uses panel and soft tones via existing gradients, border treatment, and shadow tokens."
          />
        </div>
      </section>

      <DividerStars />

      <CTASection
        surface="plain"
        eyebrow="Integration"
        title="Integration note"
        body="Child routes were added through a shared catch-all renderer and mapped into the header as first-class navigation items, while preserving the parent site's visual language."
        primary={{ text: "About", href: "/about" }}
        secondary={{ text: "Join", href: "/join" }}
      />
    </>
  );
}
