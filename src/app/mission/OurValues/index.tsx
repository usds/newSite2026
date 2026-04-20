"use client";

import SectionHeader from "@/components/general/SectionHeader";
import HorizontalCards from "@/components/sections/HorizontalCards";
import styles from "./ourValues.module.css";
import type { BasicTextCard } from "@/types/cards";
import { MISSION_VALUES_SECTION_CONTENT } from "@/text/mission";

type Props = {
  items: BasicTextCard[];
};

export default function OurValues({ items }: Props) {
  return (
    <section className={styles.wrapper} id="ourValues">
      <SectionHeader
        eyebrow={MISSION_VALUES_SECTION_CONTENT.eyebrow}
        title={MISSION_VALUES_SECTION_CONTENT.title}
        titleAlignment="left"
        titleHighlightSlice={MISSION_VALUES_SECTION_CONTENT.titleHighlightSlice}
        subtitle={MISSION_VALUES_SECTION_CONTENT.subtitle}
        subtitleAlignment="left"
        linkText={MISSION_VALUES_SECTION_CONTENT.linkText}
        linkHref={MISSION_VALUES_SECTION_CONTENT.linkHref}
      />

      <HorizontalCards className={styles.grid} cards={items} />
    </section>
  );
}
