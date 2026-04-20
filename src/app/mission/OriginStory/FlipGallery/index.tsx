"use client";

import gsap from "gsap";
import Flip from "gsap/dist/Flip";
import { useGSAP } from "@gsap/react";
import styles from "./FlipGallery.module.css";
import { useRef } from "react";
import Image from "next/image";
import { type Items } from "@/text/mission";

type Props = {
  items: Items;
};

export default function FlipGallery({ items }: Props) {
  const scope = useRef<HTMLElement | null>(null);

  return (
    <section className={styles.wrapper}>
      {items.map((item, itemIdx) => {
        let iColor = null;

        return (
          <div className={styles.itemWrapper} key={itemIdx}>
            <Image alt={item.className ? item.className : ""}  src={item.src} fill className={`${styles.itemImage} ${item.src ?? item.src}`}/> 
          </div>
        );
      })}
    </section>
  );
}
