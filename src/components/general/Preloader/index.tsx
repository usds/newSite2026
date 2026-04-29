"use client";

import styles from "./Preloader.module.css";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { HOME_HERO_CONTENT } from "@/text/home";
import { PRELOADER_TEXT } from "@/text/ui";
import { withBasePath } from "@/utils/basePath";

type PreloaderProps = { onDone?: () => void };

const imageRevealDuration = 1.18;
const textEnterDuration = 0.64;
const endHoldDuration = 0.44;

export default function Preloader({ onDone }: PreloaderProps) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const mediaRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const doneRef = useRef(false);

  useEffect(() => {
    const root = rootRef.current;
    const media = mediaRef.current;
    const text = textRef.current;

    if (!root || !media || !text) return;

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const finish = () => {
      if (doneRef.current) return;
      doneRef.current = true;
      onDone?.();
    };

    if (prefersReducedMotion) {
      gsap.set(media, { clipPath: "inset(0% 0% 0% 0%)", scale: 1, yPercent: 0 });
      gsap.set(text, { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      const t = window.setTimeout(finish, 120);
      return () => window.clearTimeout(t);
    }

    const ctx = gsap.context(() => {
      gsap.set(media, {
        clipPath: "inset(100% 0% 0% 0%)",
        scale: 1.08,
        yPercent: 8,
        transformOrigin: "50% 100%",
        willChange: "clip-path, transform",
      });
      gsap.set(text, {
        autoAlpha: 0,
        y: 52,
        filter: "blur(10px)",
        willChange: "opacity, transform, filter",
      });

      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        onComplete: finish,
      });

      tl.to(media, {
        clipPath: "inset(0% 0% 0% 0%)",
        scale: 1,
        yPercent: 0,
        duration: imageRevealDuration,
      })
        .to(
          text,
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            duration: textEnterDuration,
            ease: "power3.out",
          },
          "-=0.1",
        )
        .to({}, { duration: endHoldDuration });
    }, root);

    return () => ctx.revert();
  }, [onDone]);

  return (
    <div className={`${styles.wrapper} ${styles.introduction}`} ref={rootRef}>
      <div className={styles.mediaStage} ref={mediaRef}>
        <Image
          src={withBasePath(HOME_HERO_CONTENT.imageSrc)}
          alt={HOME_HERO_CONTENT.imageAlt}
          fill
          priority
          className={styles.image}
        />
      </div>

      <div className={styles.content} ref={textRef}>
        <h2 className={styles.text} aria-label={PRELOADER_TEXT.words.join(" ")}>
          {PRELOADER_TEXT.words.map((line) => (
            <span key={line} className={styles.line}>
              {line}
            </span>
          ))}
        </h2>
      </div>
    </div>
  );
}
