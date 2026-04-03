"use client";

import { useRef } from "react";
import Link from "next/link";
import SectionHeader from "@/components/general/SectionHeader";
import { useBodyReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./originStory.module.css";
import { MISSION_ORIGIN_STORY_CONTENT } from "@/text/mission";

export default function OriginStory() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const p1Ref = useRef<HTMLParagraphElement | null>(null);
  const p2Ref = useRef<HTMLParagraphElement | null>(null);
  const p3Ref = useRef<HTMLParagraphElement | null>(null);
  const strategyBlockRef = useRef<HTMLDivElement | null>(null);
  const p4Ref = useRef<HTMLParagraphElement | null>(null);

  useBodyReveal(sectionRef, p1Ref, []);
  useBodyReveal(sectionRef, p2Ref, []);
  useBodyReveal(sectionRef, p3Ref, []);
  useBodyReveal(sectionRef, strategyBlockRef, []);
  useBodyReveal(sectionRef, p4Ref, []);

  return (
    <section className={`sectionFrameBase ${styles.wrapper}`} ref={sectionRef}>
      <SectionHeader
        className={styles.originHeader}
        eyebrow={MISSION_ORIGIN_STORY_CONTENT.header.eyebrow}
        title={MISSION_ORIGIN_STORY_CONTENT.header.title}
        titleAlignment="left"
        subtitle={MISSION_ORIGIN_STORY_CONTENT.header.subtitle}
        subtitleAlignment="left"
        subtitleSize={MISSION_ORIGIN_STORY_CONTENT.header.subtitleSize}
        linkText={MISSION_ORIGIN_STORY_CONTENT.header.linkText}
        linkHref={MISSION_ORIGIN_STORY_CONTENT.header.linkHref}
        titleHighlightSlice={MISSION_ORIGIN_STORY_CONTENT.header.titleHighlightSlice}
      />

      <div className={styles.layout}>
        <article className={styles.copy}>
          <p className={styles.paragraph} ref={p1Ref}>
            {MISSION_ORIGIN_STORY_CONTENT.paragraphs[0]}
          </p>

          <p className={styles.paragraph} ref={p2Ref}>
            {MISSION_ORIGIN_STORY_CONTENT.paragraphs[1]}
          </p>

          <p className={styles.paragraph} ref={p3Ref}>
            {MISSION_ORIGIN_STORY_CONTENT.paragraphs[2]}
          </p>

          <div className={styles.strategyBlock} ref={strategyBlockRef}>
            {MISSION_ORIGIN_STORY_CONTENT.strategyLines.map((line) => (
              <p key={line} className={styles.strategyLine}>
                {line}
              </p>
            ))}
          </div>

          <p className={styles.paragraph} ref={p4Ref}>
            {`${MISSION_ORIGIN_STORY_CONTENT.paragraphs[3]} `}
            <Link
              className={styles.inlineLink}
              href={MISSION_ORIGIN_STORY_CONTENT.header.linkHref}
            >
              {MISSION_ORIGIN_STORY_CONTENT.applyLinkLabel}
            </Link>
          </p>
        </article>
      </div>
    </section>
  );
}
