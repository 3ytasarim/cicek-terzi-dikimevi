import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContentSection, type ContentBlock } from "@/components/site/ContentSection";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { OPENING_HOURS_TEXT } from "@/lib/site";

const TITLE = "Özel Dikim | Kişiye Özel Terzi Dikimi - Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Kişiye özel dikim: ölçü alma, kumaş seçimi, prova ve teslim. Çiçek Terzi Tuzla Aydınlı'da elbise, abiye, gömlek, pantolon ve ceket özel dikimi yapar.";
const KEYWORDS =
  "özel dikim, kişiye özel terzi, özel dikim Tuzla, ölçüye göre dikim, özel dikim elbise, özel dikim abiye, özel dikim pantolon, terzi dikimi İstanbul";

const blocks: ContentBlock[] = [
  {
    eyebrow: "Özel Dikim",
    heading: "Ölçünüze Göre, Sıfırdan Dikim",
    paragraphs: [
      "Özel dikim, hazır beden yerine kıyafetin sizin ölçülerinize göre sıfırdan hazırlanmasıdır. Omuz, göğüs, bel, basen ve boy ölçülerini tek tek alıyor, duruşunuza göre kalıbı düzenliyoruz.",
      "Elbise, abiye, gömlek, pantolon, etek, ceket ve takım dikimi yapıyoruz. Kumaşı siz getirebilir ya da modelinize uygun kumaş seçimi için birlikte karar verebiliriz.",
      `Prova aşamasında kıyafeti üzerinizde görüyor, gerekli düzeltmeleri yaptıktan sonra teslim ediyoruz. Atölyemiz ${OPENING_HOURS_TEXT} açıktır.`,
    ],
    bullets: [
      "Ölçü alma ve kalıp hazırlığı atölyede yapılır",
      "Elbise, abiye, gömlek, pantolon, etek, ceket ve takım",
      "Kumaş seçiminde yönlendirme",
      "Prova ile son düzeltmeler",
      "Bay ve bayan özel dikim",
    ],
  },
  {
    eyebrow: "Neden Özel Dikim?",
    heading: "Hazır Bedende Bulamadığınız Duruş",
    paragraphs: [
      "Hazır kıyafetler ortalama ölçülere göre üretilir; bu yüzden bel oturur kol uzun kalır, ya da omuz uyar basen sıkar. Özel dikimde bu sorunlar kalıp aşamasında çözülür.",
      "Özellikle abiye, nişan, düğün ve özel gün kıyafetlerinde model ve ölçü birlikte çalışıldığında sonuç çok daha temiz oluyor. Model fikrinizi görsel olarak getirmeniz süreci hızlandırır.",
    ],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Özel dikim",
  name: "Kişiye özel dikim",
  description: DESCRIPTION,
  areaServed: ["Tuzla", "Aydınlı", "İstanbul"],
  provider: {
    "@type": "ClothingStore",
    name: "Çiçek Terzi",
    telephone: "+90 534 952 17 59",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Aydınlı, Nuray Sokağı No:4 D:1",
      addressLocality: "Tuzla",
      addressRegion: "İstanbul",
      postalCode: "34953",
      addressCountry: "TR",
    },
  },
};

export const Route = createFileRoute("/ozel-dikim")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/ozel-dikim" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/ozel-dikim" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Özel Dikim"
        title="Kişiye Özel Dikim"
        description="Ölçü, kalıp, prova ve teslim: kıyafetiniz baştan sizin bedeninize göre hazırlanır."
      />
      <ContentSection block={blocks[0]!} />
      <Process />
      <ContentSection block={blocks[1]!} tone="surface" />
      <Testimonials />
      <CtaBanner />
    </>
  ),
});
