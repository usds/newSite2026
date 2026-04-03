"use client";

import styles from "./hiringFaq.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import FaqItem from "./FaqItem";
import { motion } from "motion/react";
import { HIRING_FAQ_PAGE_CONTENT, type HiringTimelineRow } from "@/text/hiringFaq";
import CTASection from "@/components/sections/CTASection";

function TimelineCard({
  title,
  rows,
}: {
  title: string;
  rows: ReadonlyArray<HiringTimelineRow>;
}) {
  return (
    <article className={styles.timelineCard}>
      <div className={styles.timelineCardInner}>
        <h3 className={styles.timelineTitle}>{title}</h3>
        <table className={styles.timelineTable}>
          <thead>
            <tr>
              <th>{HIRING_FAQ_PAGE_CONTENT.timelineTableHeaders.stage}</th>
              <th>{HIRING_FAQ_PAGE_CONTENT.timelineTableHeaders.businessDays}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.step}>
                <td>{row.step}</td>
                <td>{row.days}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
}

export default function ClientHiringFaq() {
  const { hero, quickLinks, sections, cta } = HIRING_FAQ_PAGE_CONTENT;

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <section className={`${styles.frame} ${styles.gapLg} ${styles.hero}`}>
        <SectionHeader
          eyebrow={hero.eyebrow}
          title={hero.title}
          isPageTitle
          titleHighlightSlice={hero.titleHighlightSlice}
          subtitle={hero.subtitle}
        />

        <div className={styles.quickLinks}>
          {quickLinks.map((link) => (
            <a key={link.href} href={link.href} className={styles.quickLink}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      <DividerStars />

      <section
        id={sections.gettingHired.id}
        className={`${styles.frame} ${styles.gapLg} ${styles.panelTone} ${styles.section}`}
      >
        <SectionHeader
          eyebrow={sections.gettingHired.header.eyebrow}
          title={sections.gettingHired.header.title}
          titleSize={sections.gettingHired.header.titleSize}
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
          titleSize={sections.onboarding.header.titleSize}
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
          titleSize={sections.relocation.header.titleSize}
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
          titleSize={sections.lifeAtUsds.header.titleSize}
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
