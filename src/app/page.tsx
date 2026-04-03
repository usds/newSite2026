"use client";

import styles from "./home/home.module.css";
import "./home/homeGlobal.css";
import Hero from "./home/Hero";
import OurImpact from "./home/OurImpact";
import HowToJoin from "./home/HowToJoin";
import HowWeWork from "./home/HowWeWork";
import WhatToExpect from "./home/WhatToExpect";
import Preloader from "@/components/general/Preloader";
import { AnimatePresence } from "motion/react";
import { useState } from "react";
import DividerStars from "@/ui/DividerStars";
import Communities from "./home/Communities";
import CTASection from "@/components/sections/CTASection";
import { HOME_HOW_WE_WORK_CONTENT, HOME_PAGE_CTA_CONTENT } from "@/text/home";


export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

    const { communities } = HOME_HOW_WE_WORK_CONTENT;

  return (
    <div className={`pageWrapper ${styles.wrapper}`}>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            onDone={() => {
              setIsLoading(false);
              document.body.style.cursor = "default";
              window.scrollTo(0, 0);
            }}
          />
        )}
      </AnimatePresence>
      
      <Hero ready={!isLoading}/>

      <div className="pageInnerWrapper">
        <OurImpact />
        <DividerStars />

        <HowWeWork />
        <DividerStars />

        <Communities communities={communities} />
        <DividerStars />


        <HowToJoin />
        <DividerStars />

        <WhatToExpect />
        <DividerStars />

        <CTASection {...HOME_PAGE_CTA_CONTENT} />
      </div>
    </div>
  );
}
