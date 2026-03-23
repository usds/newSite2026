"use client";

import { RefObject } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type TiltElement = HTMLElement | SVGElement;

type UsePerspectiveTiltOpts = {
  containerRef: RefObject<TiltElement | null>;
  tiltRef?: RefObject<TiltElement | null>;
  parallaxRefs?: Array<RefObject<TiltElement | null>>;
  perspective?: number;
  rotateMax?: number;
  parallaxMax?: number;
  duration?: number;
  disabled?: boolean;
};

export default function usePerspectiveTilt({
  containerRef,
  tiltRef,
  parallaxRefs = [],
  perspective = 650,
  rotateMax = 6,
  parallaxMax = 10,
  duration = 0.35,
  disabled = false,
}: UsePerspectiveTiltOpts) {
  useGSAP(
    () => {
      const container = containerRef.current;
      const tiltTarget = tiltRef?.current ?? container;

      if (!container || !tiltTarget || disabled) return;

      const parallaxTargets = parallaxRefs
        .map((ref) => ref.current)
        .filter(Boolean) as TiltElement[];

      gsap.set(container, { perspective });
      gsap.set(tiltTarget, {
        transformStyle: "preserve-3d",
        willChange: "transform",
      });

      parallaxTargets.forEach((target) => {
        gsap.set(target, { willChange: "transform" });
      });

      const tiltXTo = gsap.quickTo(tiltTarget, "rotationX", {
        duration,
        ease: "power3.out",
      });
      const tiltYTo = gsap.quickTo(tiltTarget, "rotationY", {
        duration,
        ease: "power3.out",
      });

      const parallaxXTo = parallaxTargets.map((target) =>
        gsap.quickTo(target, "x", { duration, ease: "power3.out" })
      );
      const parallaxYTo = parallaxTargets.map((target) =>
        gsap.quickTo(target, "y", { duration, ease: "power3.out" })
      );

      const onMove = (e: Event) => {
        const pointerEvent = e as PointerEvent;
        const rect = container.getBoundingClientRect();
        const px = (pointerEvent.clientX - rect.left) / rect.width;
        const py = (pointerEvent.clientY - rect.top) / rect.height;

        tiltXTo(gsap.utils.interpolate(rotateMax, -rotateMax, py));
        tiltYTo(gsap.utils.interpolate(-rotateMax, rotateMax, px));

        parallaxXTo.forEach((xTo, i) => {
          const factor = 1 - i * 0.2;
          xTo(gsap.utils.interpolate(-parallaxMax * factor, parallaxMax * factor, px));
        });
        parallaxYTo.forEach((yTo, i) => {
          const factor = 1 - i * 0.2;
          yTo(gsap.utils.interpolate(-parallaxMax * factor, parallaxMax * factor, py));
        });
      };

      const onLeave = () => {
        tiltXTo(0);
        tiltYTo(0);
        parallaxXTo.forEach((xTo) => xTo(0));
        parallaxYTo.forEach((yTo) => yTo(0));
      };

      container.addEventListener("pointermove", onMove);
      container.addEventListener("pointerleave", onLeave);

      return () => {
        container.removeEventListener("pointermove", onMove);
        container.removeEventListener("pointerleave", onLeave);
      };
    },
    {
      scope: containerRef,
      dependencies: [
        perspective,
        rotateMax,
        parallaxMax,
        duration,
        disabled,
        tiltRef,
        parallaxRefs,
      ],
    }
  );
}
