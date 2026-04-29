import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTASection from "@/components/sections/CTASection";
import ImpactCaseStudyCards from "@/components/sections/ImpactCaseStudyCards";
import QuoteSection, { type QuoteSectionItem } from "@/components/sections/QuoteSection";
import WideHorizontalCards from "@/components/sections/WideHorizontalCards";
import HeroFrame from "@/components/sections/PageHero";
import LongFeatureCard from "@/components/cards/LongFeatureCard";
import DataTable from "@/components/general/DataTable";
import agencyEngagements from "@/data/child/agency-engagements";
import caseStudies, { type CaseStudy } from "@/data/child/case-studies";
import { getImageBreakScene } from "@/text/imageBreaks";
import {
  AGENCIES_PAGE_CONTENT,
  AGENCIES_PAGE_UI_TEXT,
  formatDirectorySubtitle,
  formatDomainSnapshotAgencyLabel,
  formatDomainSnapshotResult,
  formatLongCardImageAlt,
} from "@/text/agencies";
import {
  generateMetadata as generateLegacyMetadata,
} from "@/features/legacy-pages/LegacyPage";
import styles from "./page.module.css";

const SHOWCASE_TONES = ["teal", "blue", "gold", "sky"] as const;

function getLegacyParams() {
  return Promise.resolve({ legacy: ["agencies"] });
}

export async function generateMetadata() {
  return generateLegacyMetadata({ params: getLegacyParams() });
}

function toEngagementTableRows() {
  return agencyEngagements.map((entry) => ({
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

function toDomainSnapshotStudies(
  domainRollup: [string, { teams: number; people: number; agencies: number }][],
): CaseStudy[] {
  return domainRollup.map(([domain, stats], index) => {
    const domainShowcase = caseStudies.find((study) => study.domain === domain);
    const fallbackScene = getImageBreakScene(index);

    return {
      slug: null,
      title: domain,
      agency: formatDomainSnapshotAgencyLabel(stats.agencies),
      domain,
      result: formatDomainSnapshotResult(stats.teams, stats.people),
      before: formatDomainSnapshotAgencyLabel(stats.agencies),
      after: `${stats.people} people`,
      metricLabel: AGENCIES_PAGE_CONTENT.domainSnapshot.metricLabel,
      featured: false,
      image: domainShowcase?.image ?? fallbackScene.src,
    };
  });
}

export default function Page() {
  const { hero, sections, engagementTableHeaders, serviceCards, partnerQuotes } =
    AGENCIES_PAGE_CONTENT;

  const activeCount = agencyEngagements.filter(
    (entry) => entry.status === AGENCIES_PAGE_UI_TEXT.activeStatusValue,
  ).length;
  const activePeople = agencyEngagements
    .filter((entry) => entry.status === AGENCIES_PAGE_UI_TEXT.activeStatusValue)
    .reduce((sum, entry) => sum + entry.people, 0);
  const totalTeams = agencyEngagements.reduce((sum, entry) => sum + entry.teams, 0);
  const showcaseStudies = caseStudies.slice(0, 5);
  const partnerQuoteCards: QuoteSectionItem[] = partnerQuotes.map((item) => ({
    id: `${item.agency}-${item.name}`,
    quote: item.quote,
    name: item.name,
    role: item.agency,
  }));
  const engagementModelCards = serviceCards.map((service, index) => {
    const scene = getImageBreakScene(index);

    return {
      id: `engagement-model-${index + 1}`,
      eyebrow: sections.engagementModel.eyebrow,
      title: service.title,
      description: service.description,
      imageSrc: scene.src,
      imageAlt: scene.alt,
      sideValue: String(index + 1).padStart(2, "0"),
    };
  });

  const domainRollup = Array.from(
    agencyEngagements.reduce(
      (acc, entry) => {
        const existing = acc.get(entry.domain) ?? { teams: 0, people: 0, agencies: 0 };
        acc.set(entry.domain, {
          teams: existing.teams + entry.teams,
          people: existing.people + entry.people,
          agencies: existing.agencies + 1,
        });
        return acc;
      },
      new Map<string, { teams: number; people: number; agencies: number }>(),
    ),
  ).sort((a, b) => b[1].people - a[1].people);
  const domainSnapshotStudies = toDomainSnapshotStudies(domainRollup);

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <HeroFrame
        className={styles.hero}
        headerClassName={`${styles.heroHeader} ${styles.heroHeaderChild}`}
        variant="left"
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleSize="heroChild"
        subtitle={hero.subtitle}
        titleHighlightSlice={hero.titleHighlightSlice}
        titleLineBreakBefore={hero.titleLineBreakBefore}
        splitContentLayout="stacked"
        frameStyle="frameless"
        imageSrc={hero.imageSrc}
        imageAlt={hero.imageAlt}
        statsPlacement="content"
        statsStyle="frameless"
        ctaPlacement="afterStats"
        stats={[
          {
            label: hero.statText.activeEngagementsLabel,
            value: `${activeCount}`,
            tone: "blue",
          },
          {
            label: hero.statText.peopleEmbeddedNowLabel,
            value: `${activePeople}+`,
            tone: "sky",
          },
          {
            label: hero.statText.workModelLabel,
            value: hero.statText.workModelValue,
            tone: "teal",
            animateValue: false,
          },
          {
            label: hero.statText.vendorLockInLabel,
            value: hero.statText.vendorLockInValue,
            tone: "gold",
            animateValue: false,
          },
        ]}
        cta={{
          text: hero.cta.text,
          href: hero.cta.href,
          backgroundColor: "var(--primary-color)",
          textColor: "var(--primary-light)",
        }}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.engagementModel.eyebrow}
          title={sections.engagementModel.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={sections.engagementModel.subtitle}
        />

        <WideHorizontalCards cards={engagementModelCards} tones={SHOWCASE_TONES} />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.partnerQuotes.eyebrow}
          title={sections.partnerQuotes.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={sections.partnerQuotes.subtitle}
        />

        <QuoteSection className={styles.partnerQuotes} items={partnerQuoteCards} />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.portfolioSnapshot.eyebrow}
          title={sections.portfolioSnapshot.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={sections.portfolioSnapshot.subtitle}
        />

        <ImpactCaseStudyCards studies={domainSnapshotStudies} showcaseTones={SHOWCASE_TONES} />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.pastWork.eyebrow}
          title={sections.pastWork.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={sections.pastWork.subtitle}
        />

        <div className={styles.longCardStack}>
          {showcaseStudies.map((study, index) => (
            <LongFeatureCard
              key={study.title}
              href={study.slug ? `/impact/${study.slug}` : "/impact"}
              eyebrow={study.agency}
              title={study.title}
              description={study.result}
              imageSrc={study.image}
              imageAlt={formatLongCardImageAlt(study.title)}
              sideValue={study.after}
              sideLabel={study.metricLabel}
              sideTone={SHOWCASE_TONES[index % SHOWCASE_TONES.length]}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.directory.eyebrow}
          title={sections.directory.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={formatDirectorySubtitle(totalTeams)}
        />

        <DataTable
          headers={engagementTableHeaders}
          rows={toEngagementTableRows()}
          size="sm"
          minWidth={740}
        />
      </section>

      <DividerStars />

      <CTASection {...AGENCIES_PAGE_CONTENT.cta} />
    </div>
  );
}
