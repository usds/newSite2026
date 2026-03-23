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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

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

        <HowToJoin />
        <DividerStars />

        <WhatToExpect />


      </div>
    </div>
  );
}
