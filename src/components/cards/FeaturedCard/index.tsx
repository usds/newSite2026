"use client";

import ImpactCard from "@/components/cards/ImpactCard";
import type { IconName } from "@/components/cards/ImpactCard";
import styles from "./FeaturedCard.module.css";

type FeaturedCardProps = {
  icon?: IconName;
  tag: string;
  title: string;
  bullets: string[];
  pill?: string;
};

export default function FeaturedCard({
  icon,
  tag,
  title,
  bullets,
  pill,
}: FeaturedCardProps) {
  return (
    <div className={styles.wrapper}>
      <ImpactCard
        variant="feature"
        icon={icon}
        status={pill}
        eyebrow={tag}
        title={title}
        bullets={bullets}
        animateWaves
      />
    </div>
  );
}
