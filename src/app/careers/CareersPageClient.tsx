"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import styles from "./careers.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import HorizontalCards from "@/components/sections/HorizontalCards";
import {
  CAREERS_PAGE_CONTENT,
  type CareersRole,
  type CareersProcessStep,
} from "@/content/careers";

type RoleCardProps = CareersRole & {
  index: number;
};

function RoleCard({
  title,
  summary,
  skills,
  location,
  tour,
  applyHref,
  index,
}: RoleCardProps) {
  const isFeatured = index === 0;

  return (
    <motion.article
      className={`${styles.roleCard} ${isFeatured ? styles.roleCardFeatured : ""}`}
      layout
      initial={{
        y: 20,
        opacity: 0,
        scale: 0.97,
      }}
      whileInView={{
        y: 0,
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
        ease: "easeOut",
      }}
      viewport={{
        amount: 0.2,
      }}
    >
      <div className={styles.roleCardInner}>
        <div className={styles.roleTop}>
          <p className={styles.roleStatus}>Open Position</p>

          <div className={styles.roleBadges}>
            <span className={styles.roleBadge}>{location}</span>
            <span className={styles.roleBadge}>{tour}</span>
          </div>
        </div>

        <h3 className={styles.roleTitle}>{title}</h3>
        <p className={styles.roleSummary}>{summary}</p>

        <ul className={styles.skillList}>
          {skills.map((skill) => (
            <li key={skill} className={styles.skillItem}>
              {skill}
            </li>
          ))}
        </ul>

        <Link href={applyHref} className={styles.roleApply}>
          View position
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}

function ProcessCard({
  title,
  body,
  timeline,
  index,
}: CareersProcessStep & { index: number }) {
  const backgrounds = [
    "radial-gradient(circle at 20% 80%, var(--primary-color-transparent), transparent 80%)",
    "radial-gradient(circle at 40% 90%, var(--primary-color-transparent), transparent 80%)",
    "radial-gradient(circle at 60% 90%, var(--primary-color-transparent), transparent 80%)",
    "radial-gradient(circle at 80% 80%, var(--primary-color-transparent), transparent 80%)",
  ];

  return (
    <article
      className={styles.processCard}
      style={{
        ["--process-card-background" as string]:
          backgrounds[index % backgrounds.length],
      }}
    >
      <div className={styles.processCardInner}>
        <p className={styles.processStep}>Step {index + 1}</p>
        <h3 className={styles.processTitle}>{title}</h3>
        <p className={styles.processTime}>{timeline}</p>

        <p className={styles.processBody}>{body}</p>
      </div>
    </article>
  );
}

export default function CareersPageClient() {
  const { hero, rolesSection, roles, processSection, process, cta } =
    CAREERS_PAGE_CONTENT;

  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <div className="pageInnerWrapper">
        <section className={`sectionFrameBase ${styles.hero}`}>
          <div className={styles.heroLayout}>
            <SectionHeader
              className={styles.sectionHeader}
              eyebrow={hero.eyebrow}
              title={hero.title}
              titleAs="h1"
              titleSize="large"
              titleAlignment="center"
              titleColor="primaryLight"
              titleHighlightColor="primaryColorLight"
              titleHighlightSlice={[24, 38]}
              subTitle={hero.subTitle}
              subTitleAlignment="center"
            />

            <div className={styles.heroActions}>
              <CTA
                text={hero.primaryCta.text}
                href={hero.primaryCta.href}
                icon="arrowRight"
                backgroundColor="var(--primary-color)"
                textColor="var(--primary-light)"
              />

              <CTA
                text={hero.secondaryCta.text}
                href={hero.secondaryCta.href}
                icon="arrowRight"
                backgroundColor="var(--primary-dark-panel-muted)"
                textColor="var(--primary-light)"
              />
            </div>
          </div>
        </section>

        <DividerStars />

        <section className={`sectionFrameBase ${styles.positionsSection}`}>
          <SectionHeader
            eyebrow={rolesSection.eyebrow}
            title={rolesSection.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[0, 14]}
            subTitle={rolesSection.subTitle}
            subTitleAlignment="left"
          />

          <div className={styles.positionsLayout}>
            <div className={styles.roleGrid}>
              {roles.map((role, index) => (
                <RoleCard key={role.title} {...role} index={index} />
              ))}
            </div>

            <aside
              className={styles.positionsAside}
              aria-label="Application details"
            >
              <div className={styles.positionsAsideInner}>
                <p className={styles.asideEyebrow}>Apply</p>
                <h3 className={styles.asideTitle}>Focused tours. Real outcomes.</h3>
                <p className={styles.asideBody}>
                  Submit one application and we will evaluate you across tracks
                  where your skills are strongest.
                </p>

                <ul className={styles.asideFacts}>
                  {hero.facts.map((fact) => (
                    <li key={fact.label} className={styles.asideFact}>
                      <span className={styles.asideFactLabel}>{fact.label}</span>
                      <span className={styles.asideFactValue}>{fact.value}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.asideActions}>
                  <Link
                    href={hero.secondaryCta.href}
                    className={styles.asideLink}
                  >
                    Read hiring FAQ
                    <ArrowUpRight size={16} />
                  </Link>
                  <CTA
                    text={cta.text}
                    href={cta.href}
                    icon="arrowRight"
                    backgroundColor="var(--primary-color)"
                    textColor="var(--primary-light)"
                  />
                </div>
              </div>
            </aside>
          </div>
        </section>

        <DividerStars />

        <section
          className={`sectionFrameBase sectionFrameToneSoft ${styles.processSection}`}
        >
          <SectionHeader
            eyebrow={processSection.eyebrow}
            title={processSection.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[14, 30]}
            subTitle={processSection.subTitle}
            subTitleAlignment="left"
          />

          <HorizontalCards
            className={styles.processGrid}
            cards={process}
            renderCard={(step, index) => (
              <ProcessCard
                key={step.title}
                title={step.title}
                body={step.body}
                timeline={step.timeline}
                index={index}
              />
            )}
          />
        </section>
      </div>
    </div>
  );
}
