import styles from "./FooterSocialLinks.module.css";
import type { FooterSocialItem } from "@/text/site";
import { FOOTER_SOCIAL_LINKS_TEXT } from "@/text/ui";
import { withBasePath } from "@/utils/basePath";

type Props = {
  socials: readonly FooterSocialItem[];
};

const iconKeyByLabel: Record<string, string> = {
  x: "x",
  linkedin: "linkedin",
  github: "github",
  youtube: "youtube",
};

export default function FooterSocialLinks({ socials }: Props) {
  return (
    <ul
      className={styles.socialList}
      aria-label={FOOTER_SOCIAL_LINKS_TEXT.listAriaLabel}
    >
      {socials.map(({ label, href }) => {
        const iconKey = iconKeyByLabel[label.toLowerCase()] ?? "x";

        return (
          <li key={href}>
            <a
              className={styles.socialLink}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className={styles.socialIcon}
                aria-hidden="true"
                focusable="false"
                role="img"
              >
                <use href={withBasePath(`/assets/img/sprite.svg#${iconKey}`)} />
              </svg>
            </a>
          </li>
        );
      })}
    </ul>
  );
}
