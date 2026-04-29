import type { ReactNode } from "react";
import Link from "next/link";
import styles from "./SelectorRow.module.css";

type BaseSelectorRowItem = {
  key: string;
  label: ReactNode;
  isAll?: boolean;
  isActive?: boolean;
};

type SelectorRowLinkItem = BaseSelectorRowItem & {
  href: string;
  onSelect?: never;
};

type SelectorRowButtonItem = BaseSelectorRowItem & {
  onSelect: () => void;
  href?: never;
};

export type SelectorRowItem = SelectorRowLinkItem | SelectorRowButtonItem;

type SelectorRowProps = {
  ariaLabel: string;
  items: readonly SelectorRowItem[];
  addBottomSpacing?: boolean;
  className?: string;
};

function isLinkItem(item: SelectorRowItem): item is SelectorRowLinkItem {
  return "href" in item;
}

export default function SelectorRow({
  ariaLabel,
  items,
  addBottomSpacing = false,
  className,
}: SelectorRowProps) {
  const rowClassName = [styles.row, className].filter(Boolean).join(" ");

  return (
    <div className={rowClassName} aria-label={ariaLabel}>
      {items.map((item) => {
        const itemClassName = [
          styles.item,
          addBottomSpacing ? styles.itemBottomSpacing : "",
          item.isAll ? styles.itemAll : "",
          item.isActive ? styles.itemActive : "",
        ]
          .filter(Boolean)
          .join(" ");

        if (isLinkItem(item)) {
          return (
            <Link key={item.key} href={item.href} className={itemClassName}>
              {item.label}
            </Link>
          );
        }

        return (
          <button
            key={item.key}
            type="button"
            className={itemClassName}
            onClick={item.onSelect}
            aria-pressed={item.isActive ?? false}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
