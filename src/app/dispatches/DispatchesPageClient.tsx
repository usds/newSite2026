"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import HeroFrame from "@/components/sections/PageHero";
import CTASection from "@/components/sections/CTASection";
import CardSurface from "@/components/cards/CardSurface";
import dispatches from "@/data/child/dispatches";
import type { Dispatch } from "@/data/child/dispatches";
import {
  DISPATCH_CATEGORY_KEYS,
  DISPATCHES_PAGE_CONTENT,
  DISPATCHES_PAGE_DATE_FORMAT_TEXT,
  DISPATCHES_PAGE_FILTERS,
  DISPATCHES_PAGE_TIME_AGO_TEXT,
  DISPATCHES_PAGE_UI_TEXT,
  type DispatchCategory,
  type DispatchCategoryFilter,
} from "@/text/dispatches";
import styles from "./page.module.css";

type ActivityBucket = {
  label: string;
  shipped: number;
  deployed: number;
  other: number;
  total: number;
};

const CATEGORY_COLORS: Record<
  DispatchCategory,
  {
    surface: string;
    text: string;
  }
> = {
  [DISPATCH_CATEGORY_KEYS.shipped]: {
    surface: "var(--tertiary-color-transparent)",
    text: "var(--tertiary-color)",
  },
  [DISPATCH_CATEGORY_KEYS.deployed]: {
    surface: "var(--secondary-color-transparent)",
    text: "var(--secondary-color)",
  },
  [DISPATCH_CATEGORY_KEYS.milestone]: {
    surface: "var(--primary-yellow-color-transparent)",
    text: "var(--primary-yellow-color)",
  },
  [DISPATCH_CATEGORY_KEYS.newFaces]: {
    surface: "var(--secondary-color-light-transparent)",
    text: "var(--secondary-color-light)",
  },
  [DISPATCH_CATEGORY_KEYS.fieldNote]: {
    surface: "var(--primary-color-transparent)",
    text: "var(--primary-color-light)",
  },
};

const ENV_COLORS: Record<NonNullable<Dispatch["env"]>, string> = {
  Production: "var(--tertiary-color)",
  Pilot: "var(--primary-yellow-color)",
  "All Regions": "var(--secondary-color)",
  Nationwide: "var(--secondary-color-light)",
};

const DISPLAY_DATE_FORMATTER = new Intl.DateTimeFormat(DISPATCHES_PAGE_DATE_FORMAT_TEXT.locale, {
  month: "short",
  day: "numeric",
  year: "numeric",
  timeZone: "UTC",
});
const CHART_LABEL_FORMATTER = new Intl.DateTimeFormat(DISPATCHES_PAGE_DATE_FORMAT_TEXT.locale, {
  month: "short",
  year: "2-digit",
  timeZone: "UTC",
});

function formatDispatchDate(dateValue: string): string {
  const parsed = new Date(`${dateValue}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    return dateValue;
  }
  return DISPLAY_DATE_FORMATTER.format(parsed);
}

function formatTimeAgo(dateValue: string): string {
  const parsed = new Date(`${dateValue}T00:00:00Z`);
  if (Number.isNaN(parsed.getTime())) {
    return "";
  }

  const now = new Date();
  const utcNow = Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate(),
  );
  const utcThen = Date.UTC(
    parsed.getUTCFullYear(),
    parsed.getUTCMonth(),
    parsed.getUTCDate(),
  );

  const days = Math.floor((utcNow - utcThen) / (24 * 60 * 60 * 1000));

  if (days <= 0) return DISPATCHES_PAGE_TIME_AGO_TEXT.today;
  if (days === 1) return DISPATCHES_PAGE_TIME_AGO_TEXT.yesterday;
  if (days < 7) return `${days}${DISPATCHES_PAGE_TIME_AGO_TEXT.daySuffix}`;
  if (days < 30) return `${Math.floor(days / 7)}${DISPATCHES_PAGE_TIME_AGO_TEXT.weekSuffix}`;
  if (days < 365) return `${Math.floor(days / 30)}${DISPATCHES_PAGE_TIME_AGO_TEXT.monthSuffix}`;
  return `${Math.floor(days / 365)}${DISPATCHES_PAGE_TIME_AGO_TEXT.yearSuffix}`;
}

function buildActivityBuckets(entries: Dispatch[], bucketCount = 12): ActivityBucket[] {
  const parsedDates = entries
    .map((entry) => new Date(`${entry.date}T00:00:00Z`))
    .filter((date) => !Number.isNaN(date.getTime()));

  if (parsedDates.length === 0) {
    return [];
  }

  const latestMs = Math.max(...parsedDates.map((date) => date.getTime()));
  const latest = new Date(latestMs);
  const latestMonthStart = new Date(Date.UTC(
    latest.getUTCFullYear(),
    latest.getUTCMonth(),
    1,
  ));
  const startMonth = new Date(latestMonthStart);
  startMonth.setUTCMonth(startMonth.getUTCMonth() - (bucketCount - 1));
  const startYear = startMonth.getUTCFullYear();
  const startMonthIndex = startMonth.getUTCMonth();

  const buckets: ActivityBucket[] = Array.from({ length: bucketCount }, (_, index) => {
    const bucketStart = new Date(Date.UTC(startYear, startMonthIndex + index, 1));
    return {
      label: CHART_LABEL_FORMATTER.format(bucketStart),
      shipped: 0,
      deployed: 0,
      other: 0,
      total: 0,
    };
  });

  entries.forEach((entry) => {
    const parsed = new Date(`${entry.date}T00:00:00Z`);
    if (Number.isNaN(parsed.getTime())) {
      return;
    }

    const bucketIndex =
      (parsed.getUTCFullYear() - startYear) * 12 +
      (parsed.getUTCMonth() - startMonthIndex);

    if (bucketIndex < 0 || bucketIndex >= buckets.length) {
      return;
    }

    const bucket = buckets[bucketIndex];
    if (!bucket) {
      return;
    }

    if (entry.category === "Shipped") {
      bucket.shipped += 1;
    } else if (entry.category === "Deployed") {
      bucket.deployed += 1;
    } else {
      bucket.other += 1;
    }

    bucket.total += 1;
  });

  return buckets;
}

export default function DispatchesPageClient() {
  const { hero, sections, statusRow, feed, cta } = DISPATCHES_PAGE_CONTENT;
  const [filter, setFilter] = useState<DispatchCategoryFilter>(
    DISPATCHES_PAGE_UI_TEXT.allFilterLabel,
  );
  const categories = useMemo(
    () => new Set(dispatches.map((entry) => entry.category)),
    [],
  );
  const uniqueAgencies = useMemo(
    () => new Set(dispatches.map((entry) => entry.agency).filter(Boolean)).size,
    [],
  );
  const latest = dispatches[0];
  const activity = useMemo(() => buildActivityBuckets(dispatches), []);

  const filteredDispatches = useMemo(
    () =>
      filter === DISPATCHES_PAGE_UI_TEXT.allFilterLabel
        ? dispatches
        : dispatches.filter((entry) => entry.category === filter),
    [filter],
  );

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <HeroFrame
        className={styles.hero}
        statsClassName={styles.heroStats}
        variant="center"
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.subtitle}
        titleHighlightSlice={hero.titleHighlightSlice}
        titleLineBreakBefore={hero.titleLineBreakBefore}
        stats={hero.stats}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.shippingActivity.eyebrow}
          title={sections.shippingActivity.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={sections.shippingActivity.subtitle}
        />

        <CardSurface tone="plain" className={styles.chartCard}>
          <div className={styles.chartLegend}>
            <span className={styles.legendItem}>
              <span className={`${styles.legendSwatch} ${styles.legendShipped}`} />
              {sections.shippingActivity.legend.shipped}
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendSwatch} ${styles.legendDeployed}`} />
              {sections.shippingActivity.legend.deployed}
            </span>
            <span className={styles.legendItem}>
              <span className={`${styles.legendSwatch} ${styles.legendOther}`} />
              {sections.shippingActivity.legend.other}
            </span>
          </div>

          <div className={styles.chartViewport}>
            <div
              className={styles.chartGrid}
              style={{
                gridTemplateColumns: `repeat(${Math.max(activity.length, 1)}, minmax(0, 1fr))`,
              }}
            >
              {activity.map((bucket) => (
                <div className={styles.chartColumn} key={bucket.label}>
                  <div className={styles.chartStack}>
                    {Array.from({ length: Math.max(bucket.total, 1) }).map((_, blockIndex) => {
                      const className =
                        bucket.total === 0
                          ? styles.blockEmpty
                          : blockIndex < bucket.shipped
                            ? styles.blockShipped
                            : blockIndex < bucket.shipped + bucket.deployed
                              ? styles.blockDeployed
                              : styles.blockOther;

                      return <span key={`${bucket.label}-${blockIndex}`} className={className} />;
                    })}
                  </div>
                  <p className={styles.chartLabel}>{bucket.label}</p>
                </div>
              ))}
            </div>
          </div>
        </CardSurface>
      </section>

      {/* <DividerStars /> */}

      {/* <section className={`sectionFrameBase ${styles.section}`}>
        <CardSurface tone="background" className={styles.statusCard}>
          <p className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.statusTeal}`} aria-hidden="true" />
            {dispatches.length} {statusRow.dispatchesFiledSuffix}
          </p>
          <p className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.statusSky}`} aria-hidden="true" />
            {uniqueAgencies} {statusRow.agenciesActiveSuffix}
          </p>
          <p className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.statusGold}`} aria-hidden="true" />
            {statusRow.lastShipPrefix} {latest ? formatTimeAgo(latest.date) : statusRow.lastShipFallback}
          </p>
          <p className={styles.statusItem}>
            <span className={`${styles.statusDot} ${styles.statusBlue}`} aria-hidden="true" />
            {categories.size} {statusRow.updateCategoriesSuffix}
          </p>
        </CardSurface>
      </section> */}

      <DividerStars />

      <section className={`sectionFrameBase ${styles.section}`}>
        <SectionHeader
          eyebrow={sections.feed.eyebrow}
          title={sections.feed.title}
          titleAlignment="left"
          subtitleAlignment="left"
          subtitle={sections.feed.subtitle}
        />

        <div className={styles.filterRow}>
          {DISPATCHES_PAGE_FILTERS.map((category) => {
            const active = category === filter;
            const isAllCategory = category === DISPATCHES_PAGE_UI_TEXT.allFilterLabel;
            const categoryKey = category as DispatchCategory;
            const count =
              isAllCategory
                ? dispatches.length
                : dispatches.filter((entry) => entry.category === categoryKey).length;

            return (
              <button
                key={category}
                type="button"
                className={styles.filterButton}
                onClick={() => setFilter(category)}
                style={
                  active
                    ? isAllCategory
                      ? {
                          background: "var(--primary-color-light)",
                          color: "var(--primary-dark)",
                          borderColor: "var(--primary-color-light)",
                        }
                      : {
                          background: CATEGORY_COLORS[categoryKey].surface,
                          color: CATEGORY_COLORS[categoryKey].text,
                          borderColor: CATEGORY_COLORS[categoryKey].text,
                        }
                    : undefined
                }
              >
                {category}
                <span className={styles.filterCount}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.feed}>
          {filteredDispatches.length === 0 ? (
            <CardSurface tone="background" className={styles.emptyState}>
              {feed.emptyState}
            </CardSurface>
          ) : (
            filteredDispatches.map((entry) => (
              <article className={styles.feedItem} key={entry.id}>
                <CardSurface tone="plain" className={styles.feedCard}>
                  <div className={styles.feedTop}>
                    <div className={styles.feedDateWrap}>
                      <p className={styles.feedDate}>{formatDispatchDate(entry.date)}</p>
                      <p className={styles.feedAgo}>{formatTimeAgo(entry.date)}</p>
                    </div>
                    <span
                      className={styles.feedCategory}
                      style={{
                        background: CATEGORY_COLORS[entry.category].surface,
                        color: CATEGORY_COLORS[entry.category].text,
                      }}
                    >
                      {entry.category}
                    </span>
                    {entry.env ? (
                      <span
                        className={styles.feedEnv}
                        style={{
                          color: ENV_COLORS[entry.env],
                          borderColor: ENV_COLORS[entry.env],
                        }}
                      >
                        {entry.env}
                      </span>
                    ) : null}
                    {entry.agency ? (
                      <span className={styles.feedAgency}>{entry.agency}</span>
                    ) : null}
                  </div>

                  <h3 className={styles.feedTitle}>{entry.title}</h3>
                  <p className={styles.feedBody}>{entry.body}</p>

                  <div className={styles.feedBottom}>
                    {entry.metric ? (
                      <div className={styles.metricRow}>
                        {entry.metric.before ? (
                          <>
                            <span className={styles.metricBefore}>{entry.metric.before}</span>
                            <span className={styles.metricArrow} aria-hidden="true">
                              &rarr;
                            </span>
                          </>
                        ) : null}
                        <span className={styles.metricAfter}>{entry.metric.after}</span>
                        <span className={styles.metricLabel}>{entry.metric.label}</span>
                      </div>
                    ) : (
                      <span />
                    )}

                    {entry.link ? (
                      <Link className={styles.feedLink} href={entry.link}>
                        {feed.fullStoryLabel}
                      </Link>
                    ) : null}
                  </div>
                </CardSurface>
              </article>
            ))
          )}
        </div>
      </section>

      <DividerStars />

      <CTASection {...cta} />
    </div>
  );
}
