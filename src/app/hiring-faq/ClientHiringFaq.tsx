"use client";

import styles from "./hiringFaq.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import DataTable from "@/components/general/DataTable";
import SelectorRow from "@/components/general/SelectorRow";
import FaqItem from "./FaqItem";
import { motion } from "motion/react";
import { HIRING_FAQ_PAGE_CONTENT, type HiringTimelineRow } from "@/text/hiringFaq";
import CTASection from "@/components/sections/CTASection";
import HeroFrame from "@/components/sections/PageHero";

function TimelineCard({
  title,
  rows,
}: {
  title: string;
  rows: Array<HiringTimelineRow>;
}) {
  return (
    <article className={styles.timelineCard}>
      <div className={styles.timelineCardInner}>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <DataTable
          headers={[
            HIRING_FAQ_PAGE_CONTENT.timelineTableHeaders.stage,
            HIRING_FAQ_PAGE_CONTENT.timelineTableHeaders.businessDays,
          ]}
          rows={rows.map((row) => ({
            key: row.step,
            cells: [row.step, row.days],
          }))}
          alignLastColumn="right"
          tableClassName={styles.timelineTable}
        />
      </div>
    </article>
  );
}

export default function ClientHiringFaq() {
  const { hero, quickLinks, sections, cta } = HIRING_FAQ_PAGE_CONTENT;

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <section className={`${styles.frame} ${styles.gapLg} ${styles.hero}`}>
        <HeroFrame
          className={styles.hero}
          headerClassName={styles.heroSectionHeader}
          variant="center"
          eyebrow={hero.eyebrow}
          title={hero.title}
          titleHighlightSlice={hero.titleHighlightSlice}
          subtitle={hero.subtitle}
          stats={hero.details.map((detail, index) => ({
            label: detail.label,
            value: detail.value,
            tone: (["blue", "teal", "gold"] as const)[index % 3],
          }))}
        />

        <SelectorRow
          ariaLabel={HIRING_FAQ_PAGE_CONTENT.quickLinksAriaLabel}
          items={quickLinks.map((link) => ({
            key: link.href,
            label: link.label,
            href: link.href,
          }))}
        />
      </section>

      <DividerStars />

      <section
        id={sections.gettingHired.id}
        className={`${styles.frame} ${styles.gapLg} ${styles.panelTone} ${styles.section}`}
      >
        <SectionHeader
          eyebrow={sections.gettingHired.header.eyebrow}
          title={sections.gettingHired.header.title}
          titleSize="large"
        />

        <div className={styles.faqList}>
          {sections.gettingHired.faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>

        <div className={styles.timelineGrid}>
          {sections.gettingHired.timelineCards.map((card) => (
            <TimelineCard key={card.title} title={card.title} rows={card.rows} />
          ))}
        </div>

        <motion.article
          className={styles.equalOpportunity}
          layout
          initial={{
            y: 20,
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          exit={{
            y: 20,
            opacity: 0,
            scale: 0.97,
          }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.2,
          }}
        >
          <div className={styles.equalOpportunityInner}>
            <h3 className={styles.question}>
              {sections.gettingHired.equalOpportunity.title}
            </h3>
            {sections.gettingHired.equalOpportunity.paragraphs.map((paragraph) => (
              <p key={paragraph} className={styles.answer}>
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>
      </section>

      <DividerStars />

      <section
        id={sections.onboarding.id}
        className={`${styles.frame} ${styles.gapLg} ${styles.section}`}
      >
        <SectionHeader
          eyebrow={sections.onboarding.header.eyebrow}
          title={sections.onboarding.header.title}
          titleSize="large"
        />

        <div className={styles.faqList}>
          {sections.onboarding.faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <DividerStars />

      <section
        id={sections.relocation.id}
        className={`${styles.frame} ${styles.gapLg} ${styles.panelTone} ${styles.section}`}
      >
        <SectionHeader
          eyebrow={sections.relocation.header.eyebrow}
          title={sections.relocation.header.title}
          titleSize="large"
        />

        <div className={styles.faqList}>
          {sections.relocation.faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <DividerStars />

      <section
        id={sections.lifeAtUsds.id}
        className={`${styles.frame} ${styles.gapLg} ${styles.section}`}
      >
        <SectionHeader
          eyebrow={sections.lifeAtUsds.header.eyebrow}
          title={sections.lifeAtUsds.header.title}
          titleSize="large"
        />

        <div className={styles.faqList}>
          {sections.lifeAtUsds.faqs.map((faq) => (
            <FaqItem key={faq.question} {...faq} />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection {...cta} />
    </div>
  );
}
