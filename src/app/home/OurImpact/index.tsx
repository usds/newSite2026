"use client";

import styles from "./OurImpact.module.css";
import ImpactCard from "@/components/cards/ImpactCard";
import SectionHeader from "@/components/general/SectionHeader";
import { HOME_OUR_IMPACT_CONTENT } from "@/content/home";
import { AnimatePresence } from "motion/react";

export default function OurImpact() {
  const { header, leftCards, statsTop, statsBottom, wideCard } = HOME_OUR_IMPACT_CONTENT;
  const leftCardStyles = [
    { variant: "default", icon: "groups", animateWaves: false },
    { variant: "feature", icon: "verified", animateWaves: true },
    { variant: "gradientTeal", icon: "iphone", animateWaves: false },
  ] as const;
  const topStatIcons = ["dollar", "school", "building", "globe"] as const;
  const bottomStatIcons = ["trendingUp", "map"] as const;

  return (
    <section
      className={`sectionFrameBase homeSection ${styles.wrapper}`}
      aria-labelledby="impact-title"
    >
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        titleHighlightSlice={[4, 10]}
        titleAlignment="center"
        subTitle={header.subTitle}
        subTitleAlignment="center"
        linkText={header.linkText}
        linkHref={header.linkHref}
      />

      <div className={styles.layout}>
        <div className={styles.colLeft}>
          <AnimatePresence mode="popLayout">
            {leftCards.map((card, index) => (
              <ImpactCard
                key={card.title}
                variant={leftCardStyles[index]?.variant ?? "default"}
                icon={leftCardStyles[index]?.icon ?? "groups"}
                status={card.status}
                eyebrow={card.eyebrow}
                title={card.title}
                bullets={card.bullets}
                animateWaves={leftCardStyles[index]?.animateWaves ?? false}
              />
            ))}
          </AnimatePresence>
        </div>

        <div className={styles.colRight}>
          <div className={styles.statGrid}>
            <AnimatePresence mode="popLayout">
              {statsTop.map((card, index) => (
                <ImpactCard
                  key={card.title}
                  variant="stat"
                  icon={topStatIcons[index] ?? "dollar"}
                  value={card.value}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}

              <div className={styles.wideRow} key={wideCard.title}>
                <ImpactCard
                  variant="soft"
                  icon="storage"
                  eyebrow={wideCard.eyebrow}
                  title={wideCard.title}
                  bullets={wideCard.bullets}
                />
              </div>

              {statsBottom.map((card, index) => (
                <ImpactCard
                  key={card.title}
                  variant="stat"
                  icon={bottomStatIcons[index] ?? "trendingUp"}
                  value={card.value}
                  title={card.title}
                  subtitle={card.subtitle}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
