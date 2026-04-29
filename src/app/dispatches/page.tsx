import DispatchesPageClient from "./DispatchesPageClient";
import {
  generateMetadata as generateLegacyMetadata,
} from "@/features/legacy-pages/LegacyPage";

function getLegacyParams() {
  return Promise.resolve({ legacy: ["dispatches"] });
}

export async function generateMetadata() {
  return generateLegacyMetadata({ params: getLegacyParams() });
}

export default function DispatchesPage() {
  return <DispatchesPageClient />;
}
