import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Faq, FAQ_ITEMS } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Sık Sorulan Sorular | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Çiçek Terzi'ye en çok sorulan sorular: randevu, ölçü alma, tadilat kapsamı, kumaş seçimi ve teslim süreci hakkında bilgiler.";
const KEYWORDS =
  "terzi sık sorulan sorular, tadilat süresi, ölçü alma, kumaş seçimi, Tuzla terzi randevu";

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
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/sss" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/sss" }],
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
