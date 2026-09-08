import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContentSection, type ContentBlock } from "@/components/site/ContentSection";
import { VideoGallery } from "@/components/site/VideoGallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { OPENING_HOURS_TEXT } from "@/lib/site";

const TITLE = "Bayan Terzi & Abiye Terzisi | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Bayan terzi ve abiye terzisi arayanlar için Çiçek Terzi: elbise, abiye, etek ve bluz tadilatı, daraltma, boy kısaltma ve özel dikim. Tuzla Aydınlı.";
const KEYWORDS =
  "bayan terzi, abiye terzisi, bayan terzi Tuzla, abiye tadilatı, elbise daraltma, elbise boy kısaltma, gelinlik tadilatı Tuzla, kadın terzi Aydınlı";

const blocks: ContentBlock[] = [
  {
    eyebrow: "Bayan Terzi",
    heading: "Elbise, Abiye ve Günlük Kıyafet Tadilatı",
    paragraphs: [
      "Bayan kıyafetlerinde en sık yapılan işler daraltma, boy kısaltma, omuz ve kol ayarı, fermuar değişimi ve astar onarımıdır. Her kıyafette kumaşa uygun dikiş ve iğne kullanıyoruz, böylece işlem sonradan belli olmuyor.",
      "Abiye ve özel gün kıyafetlerinde daha hassas çalışıyoruz: tül, saten, dantel ve payetli kumaşlarda dikiş izleri görünmesin diye el işçiliği gerektiren yerleri elde tamamlıyoruz.",
      `Prova için atölyeye gelmeniz gerekiyor; ${OPENING_HOURS_TEXT} açıkız.`,
    ],
    bullets: [
      "Elbise ve abiye daraltma, genişletme",
      "Boy kısaltma, omuz ve kol ayarı",
      "Etek, bluz, ceket ve pantolon tadilatı",
      "Fermuar ve astar değişimi",
      "Tül, saten, dantel ve payetli kumaşlarda özenli işçilik",
      "Bayan kıyafetlerinde özel dikim",
    ],
  },
  {
    eyebrow: "Abiye Terzisi",
    heading: "Özel Gün Kıyafetinizi Zamanında Hazırlıyoruz",
    paragraphs: [
      "Nişan, düğün, mezuniyet gibi özel günlerde kıyafetin tam oturması gerekir. Kıyafeti günü yaklaşmadan getirmeniz, gerekirse iki prova yapmamıza imkân verir.",
      "İşin kapsamını ve süresini kıyafeti gördükten sonra net söylüyoruz. Önceden bilgi almak için WhatsApp'tan fotoğraf gönderebilirsiniz.",
    ],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bayan kıyafet tadilatı ve abiye tadilatı",
  name: "Bayan terzi hizmetleri",
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

export const Route = createFileRoute("/bayan-terzi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/bayan-terzi" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/bayan-terzi" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Bayan Terzi"
        title="Bayan Terzi & Abiye Terzisi"
        description="Elbise, abiye ve günlük kıyafetlerinizde özenli tadilat ve özel dikim."
      />
      <ContentSection block={blocks[0]!} />
      <VideoGallery limit={3} title="Atölyemizden Videolar" />
      <ContentSection block={blocks[1]!} tone="surface" />
      <Testimonials />
      <CtaBanner />
    </>
  ),
});
