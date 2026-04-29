"use client";

import SectionHeader from "@/components/general/SectionHeader";
import LongFeatureCard, {
  type SideTone,
} from "@/components/cards/LongFeatureCard";
import styles from "./OurValues.module.css";
import type { BasicTextCard } from "@/types/cards";
import { MISSION_VALUES_SECTION_CONTENT } from "@/text/mission";

type Props = {
  items: readonly BasicTextCard[];
};

const CARD_TONES: SideTone[] = ["blue", "teal", "gold", "sky"];

export default function OurValues({ items }: Props) {
  return (
    <section className={`sectionFrameBase ${styles.wrapper}`} id="ourValues">
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

      <div className={styles.cardStack}>
        {items.map((item, index) => (
          <LongFeatureCard
            key={item.id ?? item.title ?? index}
            eyebrow={MISSION_VALUES_SECTION_CONTENT.eyebrow}
            title={item.title}
            description={item.body}
            sideValue={`${index + 1}`.padStart(2, "0")}
            sideLabel={MISSION_VALUES_SECTION_CONTENT.cardSideLabel}
            sideTone={CARD_TONES[index % CARD_TONES.length] ?? "blue"}
            animateSideValue={false}
            surface="plain"
            showBackground={false}
          />
        ))}
      </div>
    </section>
  );
}
