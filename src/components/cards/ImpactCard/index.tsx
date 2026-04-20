"use client";

import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import gsap from "gsap";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import {
  Building,
  CircleDollarSign,
  Database,
  FileCheck,
  Globe,
  GraduationCap,
  ShieldCheck,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";
import { useBodyReveal, useTitleReveal } from "@/hooks/useSplitReveal/presets";
import styles from "./ImpactCard.module.css";

type CardVariant =
  | "default"
  | "soft"
  | "feature"
  | "gradientBlue"
  | "gradientTeal"
  | "stat";

type IconName =
  | "groups"
  | "storage"
  | "verified"
  | "iphone"
  | "dollar"
  | "school"
  | "building"
  | "globe"
  | "trendingUp"
  | "map";

type Props = {
  className?: string;
  variant?: CardVariant;
  icon?: IconName;
  status?: string;
  eyebrow?: string;
  title: string;
  bullets?: string[];
  value?: string;
  subtitle?: string;
  animateWaves?: boolean;
  gradientPosition?: {
    x: string;
    y: string;
  };
};

export type { IconName };

const iconMap: Record<IconName, ReactNode> = {
  groups: <Users />,
  storage: <Database />,
  verified: <ShieldCheck />,
  iphone: <Smartphone />,
  dollar: <CircleDollarSign />,
  school: <GraduationCap />,
  building: <Building />,
  globe: <Globe />,
  trendingUp: <TrendingUp />,
  map: <FileCheck />,
};

export default function ImpactCard({
  className,
  variant = "default",
  icon,
  status,
  title,
  bullets,
  value,
  subtitle,
  animateWaves = false,
  gradientPosition,
}: Props) {
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const wavesRef = useRef<HTMLDivElement | null>(null);

  useTitleReveal(cardRef, titleRef, []);
  useBodyReveal(cardRef, bodyRef, []);

  const iconNode = icon ? iconMap[icon] : null;
  const isStat = variant === "stat";
  const gradientStyle = {
    "--impact-gradient-x": gradientPosition?.x,
    "--impact-gradient-y": gradientPosition?.y,
  } as CSSProperties;

  return (
    <motion.article
      ref={cardRef}
      className={`${styles.card} ${styles[variant]} ${className ?? className}`}
      style={gradientStyle}
      aria-label={title}
      layout
      initial={{
        y: 20,
        // filter: "blur(5px)"
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        y: 0, 
        // filter: "blur(0px)"
        opacity: 1,
        scale: 1,
      }}
      exit={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      transition={{
        duration: 0.5,
        ease: "easeOut"
      }}
      viewport={{
        amount: 0.2
      }}
    >
      <div className={`${styles.cardTop} ${!isStat ? styles.cardTopInline : ""}`}>
        {iconNode ? (
          <span className={styles.iconPill} aria-hidden="true">
            {iconNode}
          </span>
        ) : (
          <span />
        )}

        {!isStat ? (
          <h3 className={`${styles.title} ${styles.inlineTitle}`} ref={titleRef}>
            {title}
          </h3>
        ) : null}

        {/* {status ? <span className={styles.statusPill}>{status}</span> : null} */}
      </div>

      <div className={styles.cardBody}>
        {isStat && value ? <p className={`${styles.value} ${styles.statValue}`}>{value}</p> : null}

        {isStat ? (
          <h3 className={styles.title} ref={titleRef}>
            {title}
          </h3>
        ) : null}

        {!isStat && bullets?.length ? (
          <div className={styles.bodyCopy} ref={bodyRef}>
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
                <li key={bullet} className={styles.bullet}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  <span className={styles.bulletText}>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
