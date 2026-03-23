import styles from "./projects.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import DividerStars from "@/ui/DividerStars";
import CTA from "@/components/buttons/CTA";
import ColorImageBlock from "@/components/general/ColorImageBlock";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_PAGE_CONTENT } from "@/content/projects";

export default function ProjectsPage() {
  const { hero, section, projects, cta } = PROJECTS_PAGE_CONTENT;
  const projectTones = ["ocean", "teal", "amber"] as const;

  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <div className="pageInnerWrapper">
        <section className={`sectionFrameBase ${styles.hero}`}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <SectionHeader
                eyebrow={hero.eyebrow}
                title={hero.title}
                titleAs="h1"
                titleSize="large"
                titleAlignment="left"
                titleColor="primaryLight"
                titleHighlightColor="primaryColorLight"
                titleHighlightSlice={[30, 47]}
              />

              <p className={styles.heroBody}>
                {hero.body}
              </p>

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

            <aside className={styles.heroAside} aria-label="Portfolio highlights">
              <ColorImageBlock tone="ocean" solid className={styles.heroVisual} />
              <ul className={styles.statGrid}>
                {hero.stats.map((stat) => (
                  <li key={stat.label} className={styles.statCard}>
                    <div className={styles.statCardInner}>
                      <p className={styles.statValue}>{stat.value}</p>
                      <p className={styles.statLabel}>{stat.label}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </section>

        <DividerStars />

        <section className={`sectionFrameBase ${styles.projectsSection}`}>
          <SectionHeader
            eyebrow={section.eyebrow}
            title={section.title}
            titleAs="h2"
            titleSize="large"
            titleAlignment="left"
            titleColor="primaryLight"
            titleHighlightColor="primaryColorLight"
            titleHighlightSlice={[17, 23]}
            subTitle={section.subTitle}
            subTitleAlignment="left"
          />

          <div className={styles.projectGrid}>
            {projects.map((project, index) => (
              <article key={project.title} className={styles.projectCard}>
                <div className={styles.projectCardInner}>
                  <div className={styles.projectMeta}>
                    <p className={styles.projectArea}>{project.area}</p>
                    {/* <p className={styles.projectStatus}>{project.status}</p> */}
                  </div>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectSummary}>{project.summary}</p>
                  {/* <ColorImageBlock
                    tone={projectTones[index % projectTones.length]}
                    solid
                    compact
                    className={styles.cardVisual}
                  /> */}
                  <p className={styles.projectImpact}>{project.impact}</p>
                  <div className={styles.projectLinkRow}>
                    <span className={styles.projectLink}>
                      Learn more
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className={`sectionFrameBase ${styles.ctaSection}`}>
          <h2 className={styles.ctaTitle}>{cta.title}</h2>
          {/* <p className={styles.ctaBody}>{cta.body}</p> */}
          <div className={styles.ctaActions}>
            <CTA
              text={cta.primary.text}
              href={cta.primary.href}
              icon="arrowRight"
              backgroundColor="var(--primary-color-light)"
              textColor="var(--primary-dark)"
            />
            <CTA
              text={cta.secondary.text}
              href={cta.secondary.href}
              icon="arrowRight"
              backgroundColor="var(--primary-dark-panel-muted)"
              textColor="var(--primary-light)"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
