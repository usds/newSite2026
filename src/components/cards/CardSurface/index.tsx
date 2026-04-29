import type { ReactNode } from "react";
import styles from "./CardSurface.module.css";

type CardSurfaceTone = "background" | "plain";

type CardSurfaceProps = {
  as?: "article" | "section" | "div";
  tone?: CardSurfaceTone;
  className?: string;
  children: ReactNode;
};

export type { CardSurfaceTone };

export default function CardSurface({
  as = "div",
  tone = "background",
  className,
  children,
}: CardSurfaceProps) {
  const Tag = as;
  const toneClass = tone === "plain" ? styles.plain : styles.background;

  return (
    <Tag className={`${styles.wrapper} ${styles.surface} ${toneClass} ${className ?? ""}`}>
      {children}
    </Tag>
  );
}
