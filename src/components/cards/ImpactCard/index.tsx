"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
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
  variant?: CardVariant;
  icon?: IconName;
  status?: string;
  eyebrow?: string;
  title: string;
  bullets?: readonly string[];
  value?: string;
  subtitle?: string;
  animateWaves?: boolean;
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
  variant = "default",
  icon,
  status,
  title,
  bullets,
  value,
  subtitle,
  animateWaves = false,
}: Props) {
  const cardRef = useRef<HTMLElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const wavesRef = useRef<HTMLDivElement | null>(null);

  useTitleReveal(cardRef, titleRef, []);
  useBodyReveal(cardRef, bodyRef, []);

  useGSAP(
    () => {
      if (!animateWaves || !wavesRef.current) return;
      const lines = wavesRef.current.querySelectorAll(`.${styles.waveLine}`);
      if (!lines.length) return;

      gsap.fromTo(
        lines,
        { xPercent: -10, opacity: 0.3, scaleX: 0.7 },
        {
          xPercent: 10,
          opacity: 0.85,
          scaleX: 1,
          duration: 2.1,
          ease: "sine.inOut",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        }
      );
    },
    { scope: cardRef, dependencies: [animateWaves] }
  );

  const iconNode = icon ? iconMap[icon] : null;
  const isStat = variant === "stat";

  return (
    <motion.article
      ref={cardRef}
      className={`${styles.card} ${styles[variant]}`}
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
      <div className={styles.cardTop}>
        {iconNode ? (
          <span className={styles.iconPill} aria-hidden="true">
            {iconNode}
          </span>
        ) : (
          <span />
        )}

        {status ? <span className={styles.statusPill}>{status}</span> : null}
      </div>

      <div className={styles.cardBody}>
        {/* {!isStat && eyebrow ? <Eyebrow text={eyebrow} alignment="left" /> : null} */}

        {isStat && value ? <p className={`${styles.value} ${styles.statValue}`}>{value}</p> : null}

        <h3 className={styles.title} ref={titleRef}>
          {title}
        </h3>

        <div className={styles.bodyCopy} ref={bodyRef}>
          {isStat && subtitle ? (
            <p className={styles.subtitle}>{subtitle}</p>
          ) : null}

          {!isStat && bullets?.length ? (
            <ul className={styles.bullets}>
              {bullets.map((bullet) => (
                <li key={bullet} className={styles.bullet}>
                  <span className={styles.bulletDot} aria-hidden="true" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        {animateWaves ? (
          <div className={styles.waves} ref={wavesRef} aria-hidden="true">
            <span className={styles.waveLine} />
            <span className={styles.waveLine} />
            <span className={styles.waveLine} />
          </div>
        ) : null}
      </div>
    </motion.article>
  );
}
