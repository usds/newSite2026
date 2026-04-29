"use client";

import styles from "./WhyTheyServe.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import QuoteSection, { type QuoteSectionItem } from "@/components/sections/QuoteSection";
import { HOME_SECTION_ARIA_TEXT, HOME_WHY_THEY_SERVE_CONTENT } from "@/text/home";

export default function WhyTheyServe() {
  const { header, cards } = HOME_WHY_THEY_SERVE_CONTENT;

  const profileCards: QuoteSectionItem[] = cards.map((card) => ({
    id: card.name,
    quote: card.quote,
    name: card.name,
    role: card.role,
    detail: {
      label: HOME_SECTION_ARIA_TEXT.whyTheyServeShippedLabel,
      value: card.shipped,
    },
  }));

  return (
    <section
      className={`sectionFrameBase ${styles.wrapper}`}
      aria-label={HOME_SECTION_ARIA_TEXT.whyTheyServe}
    >
      <SectionHeader
        className={styles.header}
        eyebrow={header.eyebrow}
        title={header.title}
        subtitle={header.subTitle}
        titleAlignment="center"
        subtitleAlignment="center"
      />

      <QuoteSection className={styles.cards} items={profileCards} />
    </section>
  );
}
