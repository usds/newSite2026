"use client";

import styles from "./home/home.module.css";
import Hero from "./home/Hero";
import AgencyMarquee from "./home/AgencyMarquee";
import OurImpact from "./home/OurImpact";
import HowToJoin from "./home/HowToJoin";
import HowWeWork from "./home/HowWeWork";
import FeaturedProjects from "./home/FeaturedWork";
import WhatToExpect from "./home/WhatToExpect";
import DividerStars from "@/ui/DividerStars";
import Communities from "./home/Communities";
import WhyTheyServe from "./home/WhyTheyServe";
import CTASection from "@/components/sections/CTASection";
import { HOME_HOW_WE_WORK_CONTENT, HOME_PAGE_CTA_CONTENT } from "@/text/home";

export default function Home() {
  const { communities } = HOME_HOW_WE_WORK_CONTENT;

  return (
    <div className={styles.wrapper}>
      <Hero />

      <div className={styles.innerWrapper}>

        <OurImpact />
        <DividerStars />

        <HowWeWork />
        <DividerStars />

        <FeaturedProjects />
        <DividerStars />

        <Communities communities={communities} />
        <AgencyMarquee />

        <DividerStars />

        <WhyTheyServe />
        <DividerStars />

        <HowToJoin />
        <DividerStars />

        <WhatToExpect />
        <DividerStars />

        <CTASection {...HOME_PAGE_CTA_CONTENT} surface="plain" />
      </div>
    </div>
  );
}
