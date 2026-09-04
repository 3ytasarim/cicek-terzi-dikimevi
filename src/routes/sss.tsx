import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Faq, FAQ_ITEMS } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Sık Sorulan Sorular | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Çiçek Terzi'ye en çok sorulan sorular: randevu, ölçü alma, tadilat kapsamı, kumaş seçimi ve teslim süreci hakkında bilgiler.";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

export const Route = createFileRoute("/sss")({
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
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema) }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Sık Sorulan Sorular"
        title="Merak Edilenler"
        description="Aradığınız cevabı bulamazsanız WhatsApp'tan yazabilirsiniz."
      />
      <Faq />
      <CtaBanner />
    </>
  ),
});
