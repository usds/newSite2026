"use client";

import styles from "./Eyebrow.module.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { useTitleReveal, useBodyReveal } from "@/hooks/useSplitReveal/presets";


type Props = {
  text: string;
  alignment?: string;
};

export default function Eyebrow({ text, alignment }: Props) {
  if (alignment === undefined) {
    alignment = "left";
  }

  const sectionRef = useRef<HTMLElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(
    () => {
      if (!textRef.current) return;

    //   const fromX =
    //     alignment === "left" ? -200 : alignment === "right" ? 200 : 0;

    let fromX = 0;

    switch (alignment) {
        case "left":
            fromX = 200;
            break;
        case "center":
            fromX = 0;
            break;
        case "right":
            fromX = -200;
            break;
        default:
            fromX = 200;
    }

      gsap.from(textRef.current, {
        x: fromX,
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "expo.out",
      });
    },
    { scope: sectionRef, dependencies: [alignment] },
  );

  useBodyReveal(sectionRef, textRef, [])

  return (
    <section
      className={`${styles.wrapper} ${styles[alignment]}`}
      ref={sectionRef}
    >
      <span ref={textRef} className={styles.text}>
        {text}
      </span>
    </section>
  );
}
