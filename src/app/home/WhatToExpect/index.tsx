"use client";

import styles from "./WhatToExpect.module.css";
import SectionHeader from "@/components/general/SectionHeader";
import Accordion from "@/components/sections/Accordion";
import { HOME_WHAT_TO_EXPECT_CONTENT } from "@/content/home";

export default function WhatToExpect() {
  const { header, accordionItems } = HOME_WHAT_TO_EXPECT_CONTENT;

  return (
    <section
      className={`sectionFrameBase homeSection ${styles.wrapper}`}
      id="whatToExpect"
      aria-label="What to expect"
    >
      <div className={styles.inner}>
        <SectionHeader
          eyebrow={header.eyebrow}
          title={header.title}
          titleAs="h2"
          titleSize="large"
        titleAlignment="left"
        titleColor="primaryLight"
        titleHighlightColor="primaryColorLight"
        titleHighlightSlice={[10, 25]}
        subTitle={header.subTitle}
        subTitleAlignment="left"
          linkText={header.linkText}
          linkHref={header.linkHref}
        />

        <div className={styles.accordionWrap}>
          <Accordion items={accordionItems} defaultOpenId={accordionItems[0]?.id} />
        </div>
      </div>
    </section>
  );
}
