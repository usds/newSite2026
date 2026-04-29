"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import styles from "./careers.module.css";
import DividerStars from "@/ui/DividerStars";
import SectionHeader from "@/components/general/SectionHeader";
import CTA from "@/components/buttons/CTA";
import CTASection from "@/components/sections/CTASection";
import HorizontalCards from "@/components/sections/HorizontalCards";
import WideHorizontalCards from "@/components/sections/WideHorizontalCards";
import HeroFrame, { type HeroStatTone } from "@/components/sections/PageHero";
import {
  CAREERS_PAGE_CONTENT,
  CAREERS_PAGE_UI_TEXT,
  type CareersRole,
} from "@/text/careers";
import Title from "@/components/general/Title";

const HERO_STAT_TONES: HeroStatTone[] = ["blue", "teal", "gold", "sky"];
const BEFORE_APPLY_CARDS = [
  {
    id: "before-step-01",
    eyebrow: "Before you apply",
    title: "About you",
    description:
      "Share basic contact information so the recruiting team can review and follow up quickly.",
    imageSrc: "/image-breaks/white-house.jpg",
    imageAlt: "White House grounds in Washington, D.C., viewed from the lawn.",
    sideValue: "01",
    sideLabel: "Step",
  },
  {
    id: "before-step-02",
    eyebrow: "Before you apply",
    title: "Your background",
    description:
      "Describe what you have built, the constraints you handled, and where you have delivered measurable outcomes.",
    imageSrc: "/image-breaks/eop-building.jpg",
    imageAlt: "Exterior view of the Eisenhower Executive Office Building.",
    sideValue: "02",
    sideLabel: "Step",
  },
  {
    id: "before-step-03",
    eyebrow: "Before you apply",
    title: "Why USDS",
    description:
      "Explain why this mission matters to you and where you want to contribute in government service delivery.",
    imageSrc: "/image-breaks/jackson-place.jpg",
    imageAlt: "Street view of Jackson Place near Lafayette Square.",
    sideValue: "03",
    sideLabel: "Step",
  },
];

const AFTER_APPLY_CARDS = [
  {
    id: "after-step-01",
    eyebrow: "After you apply",
    title: "Application review",
    description:
      "A human reads every submission. If there is alignment, candidates typically hear back within 1-2 weeks.",
    imageSrc: "/image-breaks/eop-center.jpg",
    imageAlt: "Central perspective of the Eisenhower Executive Office Building facade.",
    sideValue: "01",
    sideLabel: "Stage",
  },
  {
    id: "after-step-02",
    eyebrow: "After you apply",
    title: "Phone screen",
    description:
      "A focused conversation to review background, role fit, and mission alignment.",
    imageSrc: "/image-breaks/eop-east.jpg",
    imageAlt: "East-facing angle of federal offices in Washington, D.C.",
    sideValue: "02",
    sideLabel: "Stage",
  },
  {
    id: "after-step-03",
    eyebrow: "After you apply",
    title: "Skill assessment",
    description:
      "Discipline-specific exercises and interviews with practitioners from relevant teams.",
    imageSrc: "/image-breaks/eop-west.jpg",
    imageAlt: "West-facing view of the executive office campus.",
    sideValue: "03",
    sideLabel: "Stage",
  },
  {
    id: "after-step-04",
    eyebrow: "After you apply",
    title: "Team match and onboarding",
    description:
      "Candidates are matched to agency teams based on skills and needs, followed by federal onboarding steps.",
    imageSrc: "/image-breaks/white-house-center.jpg",
    imageAlt: "Frontal view of the White House complex entrance.",
    sideValue: "04",
    sideLabel: "Stage",
  },
];

type RoleCardProps = {
  role: CareersRole;
  index: number;
  onViewPosition: (role: CareersRole) => void;
};

const roleTitleIdFromTitle = (title: string) =>
  `role-modal-title-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

function RoleCard({ role, index, onViewPosition }: RoleCardProps) {
  const { title, summary, skills, location } = role;
  const isFeatured = index === 0;
  const titleContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const titleContainer = titleContainerRef.current;
    if (!titleContainer) return;

    const titleElement = titleContainer.querySelector("h2, h3, h4, p");
    if (!(titleElement instanceof HTMLElement)) return;

    const updateTitleSizing = () => {
      const previousWhiteSpace = titleElement.style.whiteSpace;
      const previousFontSize = titleElement.style.fontSize;

      titleElement.style.whiteSpace = "nowrap";
      titleElement.style.fontSize = "var(--fs-h3)";

      const needsShrink = titleElement.scrollWidth > titleElement.clientWidth + 1;

      titleElement.style.whiteSpace = previousWhiteSpace;
      titleElement.style.fontSize = previousFontSize;

      titleElement.classList.toggle(
        styles.roleTitleCompact,
        !isFeatured && needsShrink,
      );
    };

    updateTitleSizing();

    const resizeObserver = new ResizeObserver(updateTitleSizing);
    resizeObserver.observe(titleContainer);
    resizeObserver.observe(titleElement);

    const fontsReady = document.fonts?.ready;
    if (fontsReady) {
      void fontsReady.then(updateTitleSizing);
    }

    return () => {
      titleElement.classList.remove(styles.roleTitleCompact);
      resizeObserver.disconnect();
    };
  }, [isFeatured, title]);

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
          <div className={styles.roleBadges}>
            <span className={styles.roleBadge}>{location}</span>
            {/* <span className={styles.roleBadge}>{tour}</span> */}
          </div>
        </div>
        <span className={styles.roleHeader}>
          <div ref={titleContainerRef} className={styles.roleTitleWrap}>
            <Title text={title} className={styles.roleTitle} alignment="left" />
          </div>
          <p className={styles.roleSummary}>{summary}</p>

        </span>

        <span className={styles.roleCardBottom}>

          <ul className={styles.skillList}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skillItem}>
                {skill}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles.roleApply}
            onClick={() => onViewPosition(role)}
            aria-haspopup="dialog"
            aria-controls={roleTitleIdFromTitle(title)}
          >
            {CAREERS_PAGE_UI_TEXT.viewPositionLabel}
            <ArrowUpRight size={16} />
          </button>
        </span>
      </div>
    </motion.article>
  );
}

export default function CareersPageClient() {
  const { hero, rolesSection, roles, processSection, process, cta } =
    CAREERS_PAGE_CONTENT;
  const [activeRole, setActiveRole] = useState<CareersRole | null>(null);
  const processCardGradients = [
    { x: "20%", y: "80%" },
    { x: "40%", y: "90%" },
    { x: "60%", y: "90%" },
    { x: "80%", y: "80%" },
  ] as const;
  const processCards = process.map((step, index) => ({
    id: `process-step-${index + 1}`,
    title: step.title,
    titleAnimation: "none" as const,
    titleMinLines: 2,
    alignTitleBottom: true,
    subtitle: step.timeline,
    body: step.body,
    gradientPosition:
      processCardGradients[index % processCardGradients.length],
  }));
  const openPositionModal = useCallback((role: CareersRole) => {
    setActiveRole(role);
  }, []);
  const closePositionModal = useCallback(() => {
    setActiveRole(null);
  }, []);

  useEffect(() => {
    if (!activeRole) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closePositionModal();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeRole, closePositionModal]);

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <HeroFrame
        className={styles.hero}
        headerClassName={`${styles.heroSectionHeader} ${styles.heroSectionHeaderCompact}`}
        statsClassName={styles.heroStatsGrid}
        variant="center"
        eyebrow={hero.eyebrow}
        title={hero.title}
        titleSize="heroChild"
        titleHighlightSlice={[12, 16]}
        titleLineBreakBefore="Felt"
        subtitle={hero.subTitle}
        centeredStatsLayout="long"
        stats={hero.facts.map((fact, index) => ({
          label: fact.label,
          value: fact.value,
          tone: HERO_STAT_TONES[index % HERO_STAT_TONES.length],
          animateValue: /\d/.test(fact.value),
        }))}
      />

      <DividerStars />

      <section className={`sectionFrameBase ${styles.positionsSection}`}>
        <SectionHeader
          eyebrow={rolesSection.eyebrow}
          title={rolesSection.title}
          titleAlignment="left"
          titleHighlightSlice={[0, 14]}
          subtitle={rolesSection.subTitle}
          subtitleAlignment="left"
        />

        <div className={styles.positionsLayout}>
          <div className={styles.roleGrid}>
            {roles.map((role, index) => (
              <RoleCard
                key={role.title}
                role={role}
                index={index}
                onViewPosition={openPositionModal}
              />
            ))}
          </div>

          <aside
            className={styles.positionsAside}
            aria-label={CAREERS_PAGE_UI_TEXT.applicationDetailsAriaLabel}
          >
            <div className={styles.positionsAsideInner}>
              <span className={styles.asideInnerHeader}>
                <Title
                  text={CAREERS_PAGE_UI_TEXT.focusedToursTitle}
                  size="small"
                  alignment="left"
                  className={styles.asideTitle}
                  lineBreakBefore="real"
                />
                <p className={styles.asideBody}>
                  {CAREERS_PAGE_UI_TEXT.focusedToursBody}
                </p>
              </span>

              <ul className={styles.asideFacts}>
                {hero.facts.map((fact) => (
                  <li key={fact.label} className={styles.asideFact}>
                    <span className={styles.asideFactLabel}>
                      {fact.label}
                    </span>
                    <span className={styles.asideFactValue}>
                      {fact.value}
                    </span>
                  </li>
                ))}
              </ul>

              <div className={styles.asideActions}>
                <Link
                  href={hero.secondaryCta.href}
                  className={styles.asideLink}
                >
                  {CAREERS_PAGE_UI_TEXT.readHiringFaqLabel}
                  <ArrowUpRight size={16} />
                </Link>
                <CTA
                  text={cta.primary.text}
                  href={cta.primary.href}
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

      <section className={`sectionFrameBase ${styles.processSection}`}>
        <SectionHeader
          eyebrow="Application"
          title="Before you apply"
          titleAlignment="left"
          subtitle="Prepare these three parts of your application before you begin."
          subtitleAlignment="left"
        />

        <WideHorizontalCards cards={BEFORE_APPLY_CARDS} />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.processSection}`}>
        <SectionHeader
          eyebrow="After you apply"
          title="What happens next"
          titleAlignment="left"
          subtitle="Review sequence, candidate conversations, and team matching follow a structured, human-led process."
          subtitleAlignment="left"
        />

        <WideHorizontalCards cards={AFTER_APPLY_CARDS} />
      </section>

      <DividerStars />

      <section className={`sectionFrameBase ${styles.processSection}`}>
        <SectionHeader
          eyebrow={processSection.eyebrow}
          title={processSection.title}
          titleAlignment="left"
          titleHighlightSlice={[14, 30]}
          subtitle={processSection.subTitle}
          subtitleAlignment="left"
        />

        <HorizontalCards
          className={styles.processGrid}
          cards={processCards}
        />
      </section>

      <DividerStars />

      <CTASection {...cta} />

      {activeRole ? (
        <div
          className={styles.roleModalOverlay}
          onClick={closePositionModal}
          role="presentation"
        >
          <motion.section
            className={styles.roleModal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={roleTitleIdFromTitle(activeRole.title)}
            onClick={(event) => event.stopPropagation()}
            initial={{
              opacity: 0,
              y: 32,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 0.28,
              ease: "easeOut",
            }}
          >
            <div className={styles.roleModalHeader}>
              <div className={styles.roleModalTags}>
                <span className={styles.roleModalTag}>{activeRole.location}</span>
                <span className={styles.roleModalTag}>{activeRole.tour}</span>
              </div>
              <button
                type="button"
                className={styles.roleModalClose}
                onClick={closePositionModal}
                aria-label={`Close ${activeRole.title} position details`}
              >
                Close
              </button>
            </div>

            <div className={styles.roleModalTitleBlock}>
              <p className={styles.roleModalEyebrow}>Position overview</p>
              <h2
                id={roleTitleIdFromTitle(activeRole.title)}
                className={styles.roleModalTitle}
              >
                {activeRole.title}
              </h2>
              <p className={styles.roleModalSummary}>{activeRole.summary}</p>
            </div>

            <div className={styles.roleModalHighlights}>
              <article className={styles.roleModalHighlightCard}>
                <h3>Mission</h3>
                <p>{activeRole.details.mission}</p>
              </article>
              <article className={styles.roleModalHighlightCard}>
                <h3>Impact</h3>
                <p>{activeRole.details.impact}</p>
              </article>
            </div>

            <div className={styles.roleModalColumns}>
              <section className={styles.roleModalColumn}>
                <h3>What you will lead</h3>
                <ul className={styles.roleModalList}>
                  {activeRole.details.responsibilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
              <section className={styles.roleModalColumn}>
                <h3>Strong candidate profile</h3>
                <ul className={styles.roleModalList}>
                  {activeRole.details.profile.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            </div>

            <section className={styles.roleModalSkillsSection}>
              <h3>Core skills</h3>
              <ul className={styles.roleModalSkills}>
                {activeRole.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>

            <div className={styles.roleModalActions}>
              <Link href={activeRole.applyHref} className={styles.roleModalApply}>
                Apply for this role
                <ArrowUpRight size={16} />
              </Link>
              <button
                type="button"
                className={styles.roleModalDismiss}
                onClick={closePositionModal}
              >
                Return to positions
              </button>
            </div>
          </motion.section>
        </div>
      ) : null}
    </div>
  );
}
