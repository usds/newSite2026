"use client";

import SectionHeader from "@/components/general/SectionHeader";
import HorizontalCards from "@/components/sections/HorizontalCards";
import type { Card } from "@/components/cards/ContentCard";
import styles from "./whoWeHelp.module.css";
import { MISSION_WHO_WE_HELP_UI_TEXT } from "@/text/mission";

type WhoWeHelpCard = {
  title: string;
  summary: string;
  details: string;
};

type WhoWeHelpContent = {
  eyebrow?: string;
  title: string;
  titleHighlightSlice?: [number, number];
  subTitle?: string;
  link?: {
    text: string;
    href: string;
  };
};

type Props = {
  cards: WhoWeHelpCard[];
  content: WhoWeHelpContent;
};

export default function WhoWeHelp({ cards, content }: Props) {
  const cardItems: Card[] = cards.map((item) => ({
    id: item.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    title: item.title,
    body: item.summary,
    footer: <p className={styles.cardDetails}>{item.details}</p>,
  }));

  return (
    <section
      className={`sectionFrameBase ${styles.wrapper}`}
      id="whoWeHelp"
      aria-label={MISSION_WHO_WE_HELP_UI_TEXT.sectionAriaLabel}
    >
      <SectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        titleAlignment="left"
        titleHighlightSlice={content.titleHighlightSlice}
        subtitle={content.subTitle}
        subtitleAlignment="left"
        linkText={content.link?.text}
        linkHref={content.link?.href}
      />

      <HorizontalCards className={styles.grid} cards={cardItems} />
    </section>
  );
}
