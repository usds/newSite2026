"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { motion, type Variants } from "motion/react";
import styles from "./modal.module.css";
import type { ModalState } from "..";

type Props = {
  modal: ModalState;
  communities: string[];
};

const SCALE_ANIMATION: Variants = {
  initial: {
    scale: 0,
    x: "-50%",
    y: "-50%",
  },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.35,
      ease: [0.76, 0, 0.24, 1] as const,
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.25,
      ease: [0.32, 0, 0.67, 0] as const,
    },
  },
};

const COMMUNITY_COLORS = [
  "var(--primary-color-transparent)",
  "var(--primary-light-transparent)",
  "var(--primary-dark-transparent)",
  "var(--primary-color-light-transparent)",
  "var(--primary-dark-panel-transparent)",
];

export default function Modal({ modal, communities }: Props) {
  const { active, index } = modal;

  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorLabelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!modalContainerRef.current || !cursorRef.current || !cursorLabelRef.current) {
      return;
    }

    const xMoveContainer = gsap.quickTo(modalContainerRef.current, "left", {
      duration: 0.8,
      ease: "power3",
    });
    const yMoveContainer = gsap.quickTo(modalContainerRef.current, "top", {
      duration: 0.8,
      ease: "power3",
    });

    const xMoveCursor = gsap.quickTo(cursorRef.current, "left", {
      duration: 0.5,
      ease: "power3",
    });
    const yMoveCursor = gsap.quickTo(cursorRef.current, "top", {
      duration: 0.5,
      ease: "power3",
    });

    const xMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "left", {
      duration: 0.45,
      ease: "power3",
    });
    const yMoveCursorLabel = gsap.quickTo(cursorLabelRef.current, "top", {
      duration: 0.45,
      ease: "power3",
    });

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      xMoveContainer(clientX);
      yMoveContainer(clientY);
      xMoveCursor(clientX);
      yMoveCursor(clientY);
      xMoveCursorLabel(clientX);
      yMoveCursorLabel(clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <motion.div
        ref={modalContainerRef}
        className={styles.modalContainer}
        variants={SCALE_ANIMATION}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        <div
          className={styles.modalSlider}
          style={{
            top: `${index * -100}%`,
          }}
        >
          {communities.map((community, communityIndex) => (
            <div
              key={`${community}-${communityIndex}`}
              className={styles.modal}
              style={{
                backgroundColor:
                  COMMUNITY_COLORS[communityIndex % COMMUNITY_COLORS.length],
              }}
            >
              <span>{community}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursorRef}
        className={styles.cursor}
        variants={SCALE_ANIMATION}
        initial="initial"
        animate={active ? "enter" : "closed"}
      />

      <motion.div
        ref={cursorLabelRef}
        className={styles.cursorLabel}
        variants={SCALE_ANIMATION}
        initial="initial"
        animate={active ? "enter" : "closed"}
      >
        View
      </motion.div>
    </>
  );
}
