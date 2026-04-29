"use client";

import HeroFrame from "@/components/sections/PageHero";
import styles from "./Hero.module.css";
import { MISSION_HERO_CONTENT } from "@/text/mission";

export default function Hero() {
  return (
    <HeroFrame
      className={styles.wrapper}
      headerClassName={styles.header}
      variant="center"
      eyebrow={MISSION_HERO_CONTENT.eyebrow}
      title={MISSION_HERO_CONTENT.title}
      titleHighlightSlice={MISSION_HERO_CONTENT.titleHighlightSlice}
      subtitle={MISSION_HERO_CONTENT.message}
      stats={MISSION_HERO_CONTENT.stats.map((stat) => ({
        label: stat.label,
        value: stat.value,
      }))}
    />
  );
}
