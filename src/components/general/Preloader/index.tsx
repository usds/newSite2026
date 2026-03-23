"use client";

import styles from "./Preloader.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { Variants } from "motion/react";
import Image from "next/image";

const words = ["We're Building", "Tech & Efficiency", "Americans Deserve"];
const easeCurve: [number, number, number, number] = [0.76, 0, 0.24, 1];

const wordTotalMs = 1250;
const wordEnterMs = 300;
const wordExitMs = 300;
const wordHoldMs = Math.max(0, wordTotalMs - wordEnterMs - wordExitMs);

const logoOutMs = 700;

type PreloaderProps = { onDone?: () => void };

const lettersContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.02, delayChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.015, staggerDirection: -1 } },
};

const letter: Variants = {
  hidden: { y: "100%", opacity: 0, filter: "blur(10px)" },
  show: {
    y: "0%",
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    filter: "blur(20px)",
    transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Preloader({ onDone }: PreloaderProps) {
  const [index, setIndex] = useState(0);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const [showWord, setShowWord] = useState(true);
  const [logoOut, setLogoOut] = useState(false);

  const timeoutRef = useRef<number | null>(null);
  const doneRef = useRef(false);

  const isLastWord = index === words.length - 1;

  useEffect(() => {
    const update = () =>
      setDimension({ width: window.innerWidth, height: window.innerHeight });

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    if (!showWord) return;

    timeoutRef.current = window.setTimeout(() => {
      if (isLastWord) setLogoOut(true);
      setShowWord(false);
    }, wordEnterMs + wordHoldMs);

    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, [showWord, index, isLastWord]);

  useEffect(() => {
    if (showWord) return;
    if (isLastWord) return;

    const t = window.setTimeout(() => {
      setIndex((p) => p + 1);
      setShowWord(true);
    }, wordExitMs);

    return () => window.clearTimeout(t);
  }, [showWord, isLastWord]);

  useEffect(() => {
    if (!logoOut) return;
    if (!isLastWord) return;
    if (doneRef.current) return;

    const t = window.setTimeout(() => {
      doneRef.current = true;
      onDone?.();
    }, Math.max(wordExitMs, logoOutMs));

    return () => window.clearTimeout(t);
  }, [logoOut, isLastWord, onDone]);

  const initialPath = useMemo(() => {
    const w = dimension.width;
    const h = dimension.height;
    return `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h + 300} 0 ${h}  L0 0`;
  }, [dimension.width, dimension.height]);

  const targetPath = useMemo(() => {
    const w = dimension.width;
    const h = dimension.height;
    return `M0 0 L${w} 0 L${w} ${h} Q${w / 2} ${h} 0 ${h}  L0 0`;
  }, [dimension.width, dimension.height]);

  const curve: Variants = {
    initial: {
      d: initialPath,
      transition: { duration: 1, ease: easeCurve },
    },
    exit: {
      d: targetPath,
      transition: { duration: 1, ease: easeCurve },
    },
  };

  const slideUp: Variants = {
    initial: { top: 0 },
    exit: {
      top: "-100vh",
      transition: { duration: 0.7, ease: easeCurve },
    },
  };

  return (
    <motion.div
      className={styles.introduction}
      variants={slideUp}
      initial="initial"
      exit="exit"
    >
      {dimension.width > 0 && (
        <>
          <motion.div
            className={styles.imageWrapper}
            initial={{ opacity: 0, y: "100%", filter: "blur(10px)" }}
            animate={{
              opacity: logoOut ? 0 : 1,
              y: 0,
              filter: logoOut ? "blur(10px)" : "blur(0px)",
              scale: logoOut ? 0.98 : 1,
            }}
            transition={{
              duration: logoOut ? logoOutMs / 1500 : 0.4,
              ease: easeCurve,
            }}
          >
            <Image
              src="/usds-logo-cropped.svg"
              alt="USDS logo"
              height={50}
              width={200}
              priority
              className={styles.logoImg}
            />
            <span className={styles.logoText}>U.S. DOGE Service</span>
          </motion.div>

          <AnimatePresence mode="wait">
            {showWord && (
              <motion.div className={styles.inner} style={{ overflow: "hidden" }}>
                <motion.p
                  key={words[index]}
                  className={styles.text}
                  initial={{ opacity: 0, y: "100%" }}
                  animate={{ opacity: 1, y: "0%" }}
                  exit={{ opacity: 0, /* y: "-10%" */ }}
                  transition={{ duration: wordEnterMs / 700, ease: easeCurve }}
                >
                  <motion.span
                    variants={lettersContainer}
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    style={{ display: "inline-block", whiteSpace: "pre" }}
                  >
                    {Array.from(words[index]).map((ch, i) => (
                      <motion.span
                        key={`${words[index]}-${i}`}
                        variants={letter}
                        style={{ display: "inline-block", willChange: "transform, opacity, filter" }}
                        className={styles.letter}
                      >
                        {ch === " " ? "\u00A0" : ch}
                      </motion.span>
                    ))}
                  </motion.span>
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>

          <svg className={styles.svg} aria-hidden="true">
            <motion.path
              variants={curve}
              initial="initial"
              exit="exit"
            />
          </svg>
        </>
      )}
    </motion.div>
  );
}
