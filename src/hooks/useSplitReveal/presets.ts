"use client";

import { RefObject } from "react";
import { useSplitReveal } from "./index";

type PresetOpts = {
  enabled?: boolean;
  start?: string;
  once?: boolean;
  triggerDelayMs?: number;
};

export function useTitleReveal<TScope extends Element, TText extends Element>(
  scopeRef: RefObject<TScope | null>,
  textRef: RefObject<TText | null>,
  deps: unknown[] = [],
  opts: PresetOpts = {}
) {
  useSplitReveal(scopeRef, textRef, {
    type: "words,chars",
    mask: "chars",
    charsClass: "char",
    deps,
    from: {
      duration: 1,
      yPercent: -120,
      stagger: 0.01,
      ease: "expo.out",
    },
    ...opts,
  });
}

export function useBodyReveal<TScope extends Element, TText extends Element>(
  scopeRef: RefObject<TScope | null>,
  textRef: RefObject<TText | null>,
  deps: unknown[] = [],
  opts: PresetOpts = {}
) {
  useSplitReveal(scopeRef, textRef, {
    type: "lines",
    mask: "lines",
    linesClass: "line",
    deps,
    from: {
      duration: (i: number) => 0.5 + i * 0.15,
      yPercent: 120,
      stagger: 0.01,
      ease: "expo.out",
      delay: 0.1,
    },
    ...opts,
  });
}