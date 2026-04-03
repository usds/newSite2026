"use client";

import styles from "./HowWeWork.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import HorizontalCards from "@/components/sections/HorizontalCards";
import { HOME_HOW_WE_WORK_CONTENT, HOME_SECTION_ARIA_TEXT } from "@/text/home";

export default function HowWeWork() {
  const { header, practices } = HOME_HOW_WE_WORK_CONTENT;

  return (
    <section
      className={`sectionFrameBase homeSection ${styles.wrapper}`}
      id="work"
      aria-label={HOME_SECTION_ARIA_TEXT.howWeWork}
    >
      <SectionHeader
        eyebrow={header.eyebrow}
        title={header.title}
        titleAlignment="left"
        titleHighlightSlice={[31, 51]}
        subtitle={header.subTitle}
        subtitleAlignment="left"
        linkText={header.linkText}
        linkHref={header.linkHref}
      />

      <div className={styles.content}>
        <HorizontalCards className={styles.practiceGrid} cards={practices} />

        {/* <aside className={styles.communitiesPanel} aria-label="Communities we hire from">
          <div className={styles.communitiesPanelInner}>
            <p className={styles.communitiesTitle}>{sidePanelTitle}</p>

            <ul className={styles.communityList}>
              {communities.map((item) => (
                <li key={item} className={styles.communityItem}>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className={styles.communitiesCta}>
              <CTA
                text={sidePanelCta.text}
                href={sidePanelCta.href}
                icon="arrowRight"
                backgroundColor="var(--primary-color)"
                textColor="var(--primary-light)"
              />
            </div>
          </div>
        </aside> */}
      </div>
    </section>
  );
}
