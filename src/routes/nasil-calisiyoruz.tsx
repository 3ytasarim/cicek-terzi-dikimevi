import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Nasıl Çalışıyoruz? | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Çiçek Terzi'de süreç: iletişim ve bilgi alma, ölçü ve prova, dikim veya tadilat aşaması ve teslim.";

export const Route = createFileRoute("/nasil-calisiyoruz")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Nasıl Çalışıyoruz?"
        title="Adım Adım Süreç"
        description="İlk iletişimden teslime kadar izlediğimiz yol."
      />
      <Process />
      <BeforeAfter />
      <CtaBanner />
    </>
  ),
});
