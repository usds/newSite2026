import CardSurface from "@/components/cards/CardSurface";
import styles from "./QuoteSection.module.css";

type QuoteDetail = {
  label?: string;
  value: string;
};

type QuoteSectionItem = {
  id?: string;
  quote: string;
  name: string;
  role?: string;
  detail?: QuoteDetail;
};

type QuoteSectionProps = {
  items: QuoteSectionItem[];
  className?: string;
};

export type { QuoteDetail, QuoteSectionItem };

export default function QuoteSection({ items, className }: QuoteSectionProps) {
  return (
    <div className={`${styles.grid} ${className ?? ""}`}>
      {items.map((item, index) => (
        <CardSurface
          as="article"
          tone="plain"
          className={styles.card}
          key={item.id ?? `${item.name}-${index}`}
        >
          <span className={styles.quoteIcon} aria-hidden="true">
            &ldquo;
          </span>
          <p className={styles.quoteBody}>{item.quote}</p>

          <div className={styles.identity}>
            <p className={styles.name}>{item.name}</p>
            {item.role ? <p className={styles.role}>{item.role}</p> : null}
          </div>

          {item.detail ? (
            <p className={styles.detail}>
              {item.detail.label ? (
                <span className={styles.detailLabel}>{item.detail.label} </span>
              ) : null}
              {item.detail.value}
            </p>
          ) : null}
        </CardSurface>
      ))}
    </div>
  );
}
