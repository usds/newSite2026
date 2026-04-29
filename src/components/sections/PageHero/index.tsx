"use client";

import HeroFrame, { type HeroFrameProps } from "./HeroFrame";
import styles from "./PageHero.module.css";

export { default as HeroFrame } from "./HeroFrame";
export { default as HeroTop } from "./HeroTop";
export { default as HeroBottom } from "./HeroBottom";

export type {
  HeroCta,
  HeroFrameProps,
  HeroStat,
  HeroStatTone,
  HeroVariant,
} from "./HeroFrame";
export type { HeroFrameProps as PageHeroProps } from "./HeroFrame";

export default function PageHero({ className, ...rest }: HeroFrameProps) {
  return <HeroFrame {...rest} className={`${styles.wrapper} ${className ?? ""}`} />;
}
