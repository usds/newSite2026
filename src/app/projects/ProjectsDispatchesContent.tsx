import styles from "./projects.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import DividerStars from "@/ui/DividerStars";
import CTASection from "@/components/sections/CTASection";
import HeroFrame from "@/components/sections/PageHero";
import LongFeatureCard, { type SideTone } from "@/components/cards/LongFeatureCard";
import { PROJECTS_PAGE_CONTENT, PROJECTS_PAGE_UI_TEXT } from "@/text/projects";
import { getImageBreakScene } from "@/text/imageBreaks";

const HERO_STAT_TONES = ["blue", "teal", "gold", "sky"] as const;
const CURRENT_WORK_CARD_TONES: SideTone[] = ["blue", "teal", "gold", "sky"];

export default function ProjectsDispatchesContent() {
  const { hero, section, projects, cta } = PROJECTS_PAGE_CONTENT;

  return (
    <div className={`pageWrap ${styles.wrapper}`}>
      <HeroFrame
        className={styles.hero}
        headerClassName={styles.heroSectionHeader}
        variant="left"
        splitContentLayout="stacked"
        statsPlacement="content"
        eyebrow={hero.eyebrow}
        title={hero.title}
        subtitle={hero.body}
        titleHighlightSlice={[0, 8]}
        imageSrc={getImageBreakScene(2).src}
        imageAlt={PROJECTS_PAGE_UI_TEXT.heroAsideAriaLabel}
        cta={[
          {
            text: hero.primaryCta.text,
            href: hero.primaryCta.href,
            backgroundColor: "var(--primary-color)",
            textColor: "var(--primary-light)",
          },
          {
            text: hero.secondaryCta.text,
            href: hero.secondaryCta.href,
            backgroundColor: "var(--primary-dark-panel-muted)",
            textColor: "var(--primary-light)",
          },
        ]}
        stats={hero.stats.map((stat, index) => ({
          label: stat.label,
          value: stat.value,
          tone: HERO_STAT_TONES[index % HERO_STAT_TONES.length],
        }))}
      />
      <DividerStars />

      <section className={`sectionFrameBase ${styles.projectsSection}`}>
        <SectionHeader
          className={styles.headerSec}
          eyebrow={section.eyebrow}
          title={section.title}
          titleAlignment="left"
          titleHighlightSlice={[17, 23]}
          subtitle={section.subTitle}
          subtitleAlignment="left"
        />

        <div className={styles.projectGrid}>
          {projects.map((project, index) => (
            <LongFeatureCard
              key={project.title}
              eyebrow={project.area}
              title={project.title}
              description={project.summary}
              sideText={project.status}
              sideLabel={PROJECTS_PAGE_UI_TEXT.statusSideLabel}
              sideTone={CURRENT_WORK_CARD_TONES[index % CURRENT_WORK_CARD_TONES.length]}
              footer={<p className={styles.projectImpactFooter}>{project.impact}</p>}
            />
          ))}
        </div>
      </section>

      <DividerStars />

      <CTASection {...cta} />
    </div>
  );
}
