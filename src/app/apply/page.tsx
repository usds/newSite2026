import { generateMetadata as generateLegacyMetadata } from "@/features/legacy-pages/LegacyPage";
import ApplyPage from "@/features/apply/ApplyPage";

function getLegacyParams() {
  return Promise.resolve({ legacy: ["apply"] });
}

export async function generateMetadata() {
  return generateLegacyMetadata({ params: getLegacyParams() });
}

export default function Page() {
  return <ApplyPage />;
}
