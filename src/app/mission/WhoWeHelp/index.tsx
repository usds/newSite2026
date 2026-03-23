"use client";

import { useRef, useState } from "react";
import SectionHeader from "@/components/general/SectionHeader";
import ColorImageBlock from "@/components/general/ColorImageBlock";
import usePerspectiveTilt from "@/hooks/usePerspectiveTilt";
import { useBodyReveal, useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./whoWeHelp.module.css";

type CardTone = "ocean" | "teal" | "amber";

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
  cards: readonly WhoWeHelpCard[];
  content: WhoWeHelpContent;
};

type WhoWeHelpCardProps = {
  item: WhoWeHelpCard;
  tone: CardTone;
  expanded: boolean;
  onToggle: () => void;
  detailsId: string;
};

const tones: readonly CardTone[] = ["ocean", "teal", "amber"];

function WhoWeHelpCardItem({
  item,
  tone,
  expanded,
  onToggle,
  detailsId,
}: WhoWeHelpCardProps) {
  const cardRef = useRef<HTMLElement | null>(null);
  const tiltRef = useRef<HTMLDivElement | null>(null);
  const visualRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const summaryRef = useRef<HTMLParagraphElement | null>(null);
  const detailsRef = useRef<HTMLParagraphElement | null>(null);

  useTitleReveal(cardRef, titleRef, [expanded]);
  useBodyReveal(cardRef, summaryRef, [expanded]);
  useBodyReveal(cardRef, detailsRef, [expanded]);

  usePerspectiveTilt({
    containerRef: cardRef,
    tiltRef,
    parallaxRefs: [visualRef],
    perspective: 650,
    rotateMax: 4,
    parallaxMax: 8,
    duration: 0.28,
  });

  return (
    <article
      className={`${styles.card} ${expanded ? styles.cardExpanded : ""}`}
      ref={cardRef}
    >
      <div className={styles.cardInner}>
        <button
          type="button"
          className={styles.cardButton}
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={detailsId}
        >
          <div className={styles.cardTilt} ref={tiltRef}>
            <div className={styles.cardMedia} ref={visualRef}>
              <ColorImageBlock tone={tone} micro className={styles.cardVisual} />
            </div>

            <div className={styles.cardText}>
              <div className={styles.titleRow}>
                <h3 className={styles.cardTitle} ref={titleRef}>
                  {item.title}
                </h3>
                <span className={styles.cardHint}>{expanded ? "Less" : "More"}</span>
              </div>

              <p className={styles.cardSummary} ref={summaryRef}>
                {item.summary}
              </p>

              <p className={styles.cardDetails} id={detailsId} ref={detailsRef}>
                {item.details}
              </p>
            </div>
          </div>
        </button>
      </div>
    </article>
  );
}

export default function WhoWeHelp({ cards, content }: Props) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section
      className={`sectionFrameBase ${styles.wrapper}`}
      id="whoWeHelp"
      aria-label="Who we help"
    >
      <SectionHeader
        eyebrow={content.eyebrow}
        title={content.title}
        titleAs="h2"
        titleSize="large"
        titleAlignment="left"
        titleColor="primaryLight"
        titleHighlightColor="primaryColorLight"
        titleHighlightSlice={content.titleHighlightSlice}
        subTitle={content.subTitle}
        subTitleAlignment="left"
        linkText={content.link?.text}
        linkHref={content.link?.href}
      />

      <div className={styles.grid}>
        {cards.map((item, index) => (
          <WhoWeHelpCardItem
            key={item.title}
            item={item}
            tone={tones[index % tones.length]}
            expanded={expandedIndex === index}
            onToggle={() => {
              setExpandedIndex((current) => (current === index ? null : index));
            }}
            detailsId={`who-we-help-details-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
