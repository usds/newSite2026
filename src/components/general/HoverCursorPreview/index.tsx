"use client";

import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { motion, type Variants } from "motion/react";
import styles from "./HoverCursorPreview.module.css";
import { HOVER_CURSOR_PREVIEW_TEXT } from "@/text/ui";

type HoverCursorPreviewItem = {
  id: string;
  preview: string;
  previewColor?: string;
};

type TriggerHandlers = {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
};

type HoverCursorPreviewProps = {
  items: HoverCursorPreviewItem[];
  cursorLabel?: string;
  renderTriggers: (args: {
    getTriggerProps: (index: number) => TriggerHandlers;
    isActive: (index: number) => boolean;
  }) => ReactNode;
};

type ModalState = {
  active: boolean;
  index: number;
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
      ease: [0.76, 0, 0.24, 1],
    },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: {
      duration: 0.25,
      ease: [0.32, 0, 0.67, 0],
    },
  },
};

const DEFAULT_PREVIEW_COLORS = [
  "var(--primary-color-transparent)",
  "var(--primary-light-transparent)",
  "var(--primary-dark-transparent)",
  "var(--primary-color-light-transparent)",
  "var(--primary-dark-panel-transparent)",
];

export default function HoverCursorPreview({
  items,
  cursorLabel = HOVER_CURSOR_PREVIEW_TEXT.defaultCursorLabel,
  renderTriggers,
}: HoverCursorPreviewProps) {
  const [modal, setModal] = useState<ModalState>({
    active: false,
    index: 0,
  });

  const modalContainerRef = useRef<HTMLDivElement | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const cursorLabelRef = useRef<HTMLDivElement | null>(null);

  const resolvedModal: ModalState =
    modal.index < items.length ? modal : { active: false, index: 0 };

  useEffect(() => {
    if (!modalContainerRef.current || !cursorRef.current || !cursorLabelRef.current) {
      return;
    }

    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
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

  const getTriggerProps = useMemo(
    () => (index: number): TriggerHandlers => ({
      onMouseEnter: () => {
        setModal({ active: true, index });
      },
      onMouseLeave: () => {
        setModal((previous) => ({ ...previous, active: false }));
      },
      onFocus: () => {
        setModal({ active: true, index });
      },
      onBlur: () => {
        setModal((previous) => ({ ...previous, active: false }));
      },
    }),
    [],
  );

  const isActive = useMemo(
    () => (index: number) => resolvedModal.active && resolvedModal.index === index,
    [resolvedModal.active, resolvedModal.index],
  );

  return (
    <>
      {renderTriggers({ getTriggerProps, isActive })}

      <motion.div
        ref={modalContainerRef}
        className={styles.modalContainer}
        variants={SCALE_ANIMATION}
        initial="initial"
        animate={resolvedModal.active ? "enter" : "closed"}
      >
        <div
          className={styles.modalSlider}
          style={{
            top: `${resolvedModal.index * -100}%`,
          }}
        >
          {items.map((item, itemIndex) => (
            <div
              key={item.id}
              className={styles.modal}
              style={{
                backgroundColor:
                  item.previewColor ??
                  DEFAULT_PREVIEW_COLORS[itemIndex % DEFAULT_PREVIEW_COLORS.length],
              }}
            >
              <span>{item.preview}</span>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        ref={cursorRef}
        className={styles.cursor}
        variants={SCALE_ANIMATION}
        initial="initial"
        animate={resolvedModal.active ? "enter" : "closed"}
      />

      <motion.div
        ref={cursorLabelRef}
        className={styles.cursorLabel}
        variants={SCALE_ANIMATION}
        initial="initial"
        animate={resolvedModal.active ? "enter" : "closed"}
      >
        {cursorLabel}
      </motion.div>
    </>
  );
}
