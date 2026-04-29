import { generateMetadata as generateLegacyMetadata } from "@/features/legacy-pages/LegacyPage";
import ContactPage from "@/features/contact/ContactPage";

function getLegacyParams() {
  return Promise.resolve({ legacy: ["contact"] });
}

export async function generateMetadata() {
  return generateLegacyMetadata({ params: getLegacyParams() });
}

export default function Page() {
  return <ContactPage />;
}
