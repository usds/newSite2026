import styles from "./ColorImageBlock.module.css";

type Tone = "ocean" | "teal" | "amber";

type Props = {
  className?: string;
  tone?: Tone;
  compact?: boolean;
  micro?: boolean;
  solid?: boolean;
};

export default function ColorImageBlock({
  className,
  tone = "ocean",
  compact = false,
  micro = false,
  solid = true,
}: Props) {
  return (
    <div
      aria-hidden="true"
      className={`${styles.block} ${styles[tone]} ${solid ? styles.solid : ""} ${compact ? styles.compact : ""} ${micro ? styles.micro : ""} ${className ?? ""}`}
    >
      <span className={`${styles.blob} ${styles.blobA}`} />
      <span className={`${styles.blob} ${styles.blobB}`} />
      <span className={`${styles.blob} ${styles.blobC}`} />
    </div>
  );
}
