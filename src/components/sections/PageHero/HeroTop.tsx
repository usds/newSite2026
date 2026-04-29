"use client";

import type { ReactNode } from "react";
import styles from "./HeroStructure.module.css";

type HeroTopProps = {
  className?: string;
  children: ReactNode;
};

export default function HeroTop({ className, children }: HeroTopProps) {
  return <div className={`${styles.top} ${className ?? ""}`}>{children}</div>;
}
