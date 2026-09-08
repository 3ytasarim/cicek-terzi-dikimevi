import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Process } from "@/components/site/Process";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Nasıl Çalışıyoruz? | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Çiçek Terzi'de süreç: iletişim ve bilgi alma, ölçü ve prova, dikim veya tadilat aşaması ve teslim.";
const KEYWORDS =
  "terzi süreci, ölçü alma, prova, tadilat teslim süresi, Tuzla terzi randevu";

export const Route = createFileRoute("/nasil-calisiyoruz")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/nasil-calisiyoruz" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/nasil-calisiyoruz" }],
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
