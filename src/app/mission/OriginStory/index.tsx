"use client";

import SectionHeader from "@/components/general/SectionHeader";
import styles from "./originStory.module.css";
import { MISSION_ORIGIN_STORY_CONTENT } from "@/text/mission";
import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import FlipGallery from "./FlipGallery";

gsap.registerPlugin(Flip);

export default function OriginStory() {
  return (
    <section className={`sectionFrameBase ${styles.wrapper}`} >
      <SectionHeader
        className={styles.originHeader}
        eyebrow={MISSION_ORIGIN_STORY_CONTENT.header.eyebrow}
        title={MISSION_ORIGIN_STORY_CONTENT.header.title}
        titleAlignment="left"
        subtitle={MISSION_ORIGIN_STORY_CONTENT.header.subtitle}
        subtitleAlignment="left"
        linkText={MISSION_ORIGIN_STORY_CONTENT.header.linkText}
        linkHref={MISSION_ORIGIN_STORY_CONTENT.header.linkHref}
        titleHighlightSlice={
          MISSION_ORIGIN_STORY_CONTENT.header.titleHighlightSlice
        }
      />

      <article className={styles.layout}>
        <section className={styles.side}>
          <p className={styles.paragraph}>{MISSION_ORIGIN_STORY_CONTENT.body}</p>
        </section>
        <section className={styles.originGallery}>
          <FlipGallery items={MISSION_ORIGIN_STORY_CONTENT.items}/>
        </section>
      </article>
    </section>
  );
}
