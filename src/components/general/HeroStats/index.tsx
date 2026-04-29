"use client";

import HeroCard, {
  type HeroCardTone,
  type HeroCardVariant,
} from "@/components/cards/HeroCard";
import styles from "./HeroStats.module.css";

type HeroStatTone = HeroCardTone;

type HeroStat = {
  id?: string;
  label: string;
  value: string;
  tone?: HeroStatTone;
  animateValue?: boolean;
};

type HeroStatsVariant = HeroCardVariant;

type HeroStatsProps = {
  stats: HeroStat[];
  className?: string;
  variant?: HeroStatsVariant;
};

const DEFAULT_STAT_TONES: HeroStatTone[] = ["blue", "teal", "gold", "sky"];

const STAT_SURFACE_CLASSES: Record<HeroStatTone, string> = {
  blue: styles.toneBlue,
  teal: styles.toneTeal,
  gold: styles.toneGold,
  sky: styles.toneSky,
};

export type { HeroStat, HeroStatTone, HeroStatsVariant, HeroStatsProps };

export default function HeroStats({
  stats,
  className,
  variant = "framed",
}: HeroStatsProps) {
  if (stats.length === 0) {
    return null;
  }

  const isFrameless = variant === "frameless";

  return (
    <ul className={`${styles.wrapper} ${className ?? ""}`}>
      {stats.map((stat, index) => {
        const tone =
          stat.tone ?? DEFAULT_STAT_TONES[index % DEFAULT_STAT_TONES.length];

        return (
          <li
            key={stat.id ?? `${stat.label}-${stat.value}`}
            className={`${styles.item} ${isFrameless ? "" : STAT_SURFACE_CLASSES[tone]}`}
          >
            <HeroCard
              label={stat.label}
              value={stat.value}
              tone={tone}
              variant={isFrameless ? "frameless" : "framed"}
              animateValue={stat.animateValue}
            />
          </li>
        );
      })}
    </ul>
  );
}
