"use client";

import SectionHeader from "@/components/general/SectionHeader";
import LongFeatureCard, {
  type SideTone,
} from "@/components/cards/LongFeatureCard";
import styles from "./WhoWeHelp.module.css";
import { MISSION_WHO_WE_HELP_UI_TEXT } from "@/text/mission";

type WhoWeHelpCard = {
  title: string;
  summary: string;
  details: string;
  imageSrc: string;
  imageAlt: string;
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

const CARD_TONES: SideTone[] = ["blue", "teal", "gold", "sky"];

export default function WhoWeHelp({ cards, content }: Props) {
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

      <div className={styles.cardStack}>
        {cards.map((item, index) => (
          <LongFeatureCard
            key={`${item.title}-${index}`}
            eyebrow={content.eyebrow ?? MISSION_WHO_WE_HELP_UI_TEXT.defaultEyebrow}
            title={item.title}
            description={item.summary}
            imageSrc={item.imageSrc}
            imageAlt={item.imageAlt}
            sideValue={`${index + 1}`.padStart(2, "0")}
            sideLabel={MISSION_WHO_WE_HELP_UI_TEXT.cardSideLabel}
            sideTone={CARD_TONES[index % CARD_TONES.length] ?? "blue"}
            animateSideValue={false}
            footer={<p className={styles.cardDetails}>{item.details}</p>}
          />
        ))}
      </div>
    </section>
  );
}
