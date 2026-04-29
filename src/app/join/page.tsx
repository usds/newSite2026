import LegacyPage, {
  generateMetadata as generateLegacyMetadata,
} from "@/features/legacy-pages/LegacyPage";
import styles from "./page.module.css";

function getLegacyParams() {
  return Promise.resolve({ legacy: ["join"] });
}

export async function generateMetadata() {
  return generateLegacyMetadata({ params: getLegacyParams() });
}

export default function Page() {
  return (
    <div className={styles.route}>
      <LegacyPage params={getLegacyParams()} />
    </div>
  );
}
