"use client";

import styles from "./OurImpact.module.css";
import ImpactCard, { type IconName } from "@/components/cards/ImpactCard";
import SectionHeader from "@/components/general/SectionHeader";
import { HOME_OUR_IMPACT_CONTENT } from "@/text/home";
import { AnimatePresence } from "motion/react";

export default function OurImpact() {
  const { header, leftCards, statsTop, statsBottom, wideCard } = HOME_OUR_IMPACT_CONTENT;
  const leftCardStyles: Array<{
    variant: "default" | "feature" | "gradientTeal";
    icon: IconName;
    animateWaves: boolean;
  }> = [
    { variant: "default", icon: "groups", animateWaves: false },
    { variant: "feature", icon: "verified", animateWaves: true },
    { variant: "gradientTeal", icon: "iphone", animateWaves: false },
  ];
  const leftGradientPositions: Array<{ x: string; y: string }> = [
    { x: "50%", y: "10%" },
    { x: "90%", y: "90%" },
    { x: "10%", y: "90%" },
  ];
  const topStatIcons: IconName[] = ["dollar", "school", "building", "globe"];
  const topStatGradientPositions: Array<{ x: string; y: string }> = [
    { x: "90%", y: "10%" },
    { x: "10%", y: "10%" },
    { x: "90%", y: "90%" },
    { x: "10%", y: "90%" },
  ];
  const bottomStatIcons: IconName[] = ["trendingUp", "map"];
  const bottomStatGradientPositions: Array<{ x: string; y: string }> = [
    { x: "50%", y: "10%" },
    { x: "90%", y: "90%" },
  ];

  return (
    <section
      className={`sectionFrameBase homeSection ${styles.wrapper}`}
      aria-labelledby="impact-title"
    >
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        titleHighlightSlice={[4, 10]}
        subtitle={header.subTitle}
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
                gradientPosition={leftGradientPositions[index]}
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
                  gradientPosition={topStatGradientPositions[index]}
                />
              ))}

              <div className={styles.wideRow} key={wideCard.title}>
                <ImpactCard
                  variant="soft"
                  icon="storage"
                  eyebrow={wideCard.eyebrow}
                  title={wideCard.title}
                  bullets={wideCard.bullets}
                  gradientPosition={{ x: "10%", y: "10%" }}
                />
              </div>

              {statsBottom?.map((card, index) => (
                <ImpactCard
                  key={card.title}
                  variant="stat"
                  icon={bottomStatIcons[index] ?? "trendingUp"}
                  value={card.value}
                  title={card.title}
                  subtitle={card.subtitle}
                  gradientPosition={bottomStatGradientPositions[index]}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
