"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import type { CaseStudy } from "@/data/child/case-studies";
import SelectorRow from "@/components/general/SelectorRow";
import { withBasePath } from "@/utils/basePath";
import {
  formatImpactCaseStudyImageAlt,
  IMPACT_CASE_STUDY_CARDS_TEXT,
} from "@/text/ui";
import styles from "./ImpactCaseStudyCards.module.css";

type DomainFilter = typeof IMPACT_CASE_STUDY_CARDS_TEXT.allFilterLabel | CaseStudy["domain"];
type ImpactCaseStudyTone = "blue" | "teal" | "gold" | "sky";

const DEFAULT_TONES: readonly ImpactCaseStudyTone[] = ["blue", "sky", "gold", "teal"];

const STAT_TONE_CLASS: Record<ImpactCaseStudyTone, string> = {
  blue: styles.statBlue,
  teal: styles.statTeal,
  gold: styles.statGold,
  sky: styles.statSky,
};

type ImpactCaseStudyCardsProps = {
  studies: CaseStudy[];
  showcaseTones?: readonly ImpactCaseStudyTone[];
  filterMode?: "none" | "domain";
  className?: string;
};

function buildDomainFilters(studies: CaseStudy[]): DomainFilter[] {
  const domainSet = new Set(studies.map((study) => study.domain));
  const preferredDomains = IMPACT_CASE_STUDY_CARDS_TEXT.domainFilterOrder.filter((domain) =>
    domainSet.has(domain),
  );
  const preferredDomainSet = new Set<string>(preferredDomains);
  const remainingDomains = Array.from(domainSet)
    .filter((domain) => !preferredDomainSet.has(domain))
    .sort((first, second) => first.localeCompare(second));

  return [IMPACT_CASE_STUDY_CARDS_TEXT.allFilterLabel, ...preferredDomains, ...remainingDomains];
}

export default function ImpactCaseStudyCards({
  studies,
  showcaseTones = DEFAULT_TONES,
  filterMode = "none",
  className,
}: ImpactCaseStudyCardsProps) {
  const [activeFilter, setActiveFilter] = useState<DomainFilter>(
    IMPACT_CASE_STUDY_CARDS_TEXT.allFilterLabel,
  );
  const useDomainFilters = filterMode === "domain";
  const filters = useMemo(
    () => (useDomainFilters ? buildDomainFilters(studies) : []),
    [studies, useDomainFilters],
  );

  const filteredStudies = useMemo(
    () =>
      !useDomainFilters || activeFilter === IMPACT_CASE_STUDY_CARDS_TEXT.allFilterLabel
        ? studies
        : studies.filter((study) => study.domain === activeFilter),
    [activeFilter, studies, useDomainFilters],
  );

  return (
    <div className={`${styles.wrapper} ${className ?? ""}`}>
      {useDomainFilters ? (
        <SelectorRow
          ariaLabel={IMPACT_CASE_STUDY_CARDS_TEXT.domainFilterAriaLabel}
          addBottomSpacing
          items={filters.map((filter) => ({
            key: filter,
            label: filter,
            isAll: filter === IMPACT_CASE_STUDY_CARDS_TEXT.allFilterLabel,
            isActive: filter === activeFilter,
            onSelect: () => setActiveFilter(filter),
          }))}
        />
      ) : null}

      <div className={styles.stack}>
        {filteredStudies.map((study, index) => {
          const tone =
            showcaseTones.length > 0
              ? showcaseTones[index % showcaseTones.length]
              : DEFAULT_TONES[0];
          const toneClass = STAT_TONE_CLASS[tone];
          const splitClass =
            index % 2 === 0 ? styles.card : `${styles.card} ${styles.cardReverse}`;
          const article = (
            <motion.article
              className={splitClass}
              initial={{ y: 20, opacity: 0, scale: 0.985 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.imageFrame}>
                <Image
                  className={styles.image}
                  src={withBasePath(study.image)}
                  alt={formatImpactCaseStudyImageAlt(study.title)}
                  fill
                  sizes="(max-width: 56em) 100vw, 50vw"
                />
              </div>

              <div className={styles.textPane}>
                <p className={styles.eyebrow}>{`${study.agency} • ${study.domain}`}</p>
                <h3 className={styles.title}>{study.title}</h3>
                <p className={styles.body}>{study.detail ?? study.result}</p>

                <div className={styles.metricRow}>
                  <span className={styles.metricBefore}>{study.before}</span>
                  <span className={styles.metricArrow} aria-hidden="true">
                    &rarr;
                  </span>
                  <span className={`${styles.metricAfter} ${toneClass}`}>{study.after}</span>
                  <span className={styles.metricLabel}>{study.metricLabel}</span>
                </div>

                {study.slug ? (
                  <span className={styles.cta}>
                    {IMPACT_CASE_STUDY_CARDS_TEXT.openCaseStudyLabel} &rarr;
                  </span>
                ) : null}
              </div>
            </motion.article>
          );

          if (!study.slug) {
            return (
              <div key={`${study.title}-${study.agency}-${study.metricLabel}`} className={styles.cardStatic}>
                {article}
              </div>
            );
          }

          return (
            <Link key={study.slug} href={`/impact/${study.slug}`} className={styles.cardLink}>
              {article}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export type { ImpactCaseStudyCardsProps, ImpactCaseStudyTone };
