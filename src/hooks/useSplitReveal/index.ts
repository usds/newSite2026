"use client";

import { RefObject, useLayoutEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

type SplitType =
  | "lines"
  | "words"
  | "chars"
  | "lines,words"
  | "words,chars"
  | "lines,words,chars";

type UseSplitRevealOpts = {
  enabled?: boolean;
  type?: SplitType;
  mask?: "lines" | "words" | "chars" | "none";
  autoSplit?: boolean;
  lineHeight?: number | string;

  linesClass?: string;
  wordsClass?: string;
  charsClass?: string;

  from?: gsap.TweenVars;
  deps?: unknown[];

  revealVisibility?: boolean;

  start?: string;
  once?: boolean;
  triggerDelayMs?: number;
};

export function useSplitReveal<TScope extends Element, TText extends Element>(
  scopeRef: RefObject<TScope | null>,
  textRef: RefObject<TText | null>,
  options: UseSplitRevealOpts = {}
) {
  const {
    enabled = true,
    type = "lines",
    mask = "lines",
    autoSplit = true,
    lineHeight,
    linesClass = "line",
    wordsClass = "word",
    charsClass = "char",
    from,
    deps = [],
    revealVisibility = true,

    start = "top 80%",
    once = true,
    triggerDelayMs = 0,
  } = options;

  useLayoutEffect(() => {
    if (!enabled) return;

    let cancelled = false;
    let ctx: gsap.Context | null = null;
    const scopeEl = scopeRef.current;
    const textEl = textRef.current;
    if (!scopeEl || !textEl) return;

    let delayed: gsap.core.Tween | null = null;
    let st: ScrollTrigger | null = null;

    const init = () => {
      if (cancelled) return;

      ctx = gsap.context(() => {
        const split = new SplitText(textEl, {
          type,
          autoSplit,
          mask: mask === "none" ? undefined : mask,
          linesClass,
          wordsClass,
          charsClass,
        });

        const splitUnits = [...split.lines, ...split.words, ...split.chars];
        if (lineHeight !== undefined) {
          gsap.set(textEl, { lineHeight });
          if (splitUnits.length) {
            gsap.set(splitUnits, { lineHeight });
          }
        }

        const targets = type.includes("chars")
          ? split.chars
          : type.includes("words")
          ? split.words
          : split.lines;

        const run = () => {
          if (revealVisibility) {
            gsap.set(textEl, { visibility: "visible" });
          }

          gsap.from(targets, {
            yPercent: 105,
            stagger: 0.1,
            ease: "expo.out",
            delay: 0.1,
            ...from,
          });
        };

        st = ScrollTrigger.create({
          trigger: scopeEl,
          start,
          once,
          onEnter: () => {
            if (triggerDelayMs > 0) {
              delayed = gsap.delayedCall(triggerDelayMs / 1000, run);
            } else {
              run();
            }
          },
        });
      }, scopeEl);
    };

    const waitForFontsAndInit = async () => {
      if (type.includes("lines") && "fonts" in document) {
        try {
          await document.fonts.ready;
        } catch {
          // Fallback: proceed even if font readiness fails.
        }
      }
      init();
    };

    void waitForFontsAndInit();

    return () => {
      cancelled = true;
      delayed?.kill();
      st?.kill();
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, ...deps]);
}
