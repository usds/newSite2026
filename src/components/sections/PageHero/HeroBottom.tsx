"use client";

import type { ReactNode } from "react";
import styles from "./HeroStructure.module.css";

type HeroBottomProps = {
  className?: string;
  children: ReactNode;
};

export default function HeroBottom({ className, children }: HeroBottomProps) {
  return <div className={`${styles.bottom} ${className ?? ""}`}>{children}</div>;
}
