"use client";

import ImpactCard from "@/components/cards/ImpactCard";
import type { IconName } from "@/components/cards/ImpactCard";
import styles from "./StatCard.module.css";

type StatCardProps = {
  icon: IconName;
  value: string;
  title: string;
  subtitle: string;
};

export default function StatCard({
  icon,
  value,
  title,
  subtitle,
}: StatCardProps) {
  return (
    <div className={styles.wrapper}>
      <ImpactCard
        className={styles.statCard}
        variant="stat"
        icon={icon}
        value={value}
        title={title}
        // subtitle={subtitle}
      />
    </div>
  );
}
