import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ContentSection, type ContentBlock } from "@/components/site/ContentSection";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";
import { OPENING_HOURS_TEXT } from "@/lib/site";

const TITLE = "Aydınlı Terzi | Tuzla Aydınlı Terzi & Tadilat - Çiçek Terzi";
const DESCRIPTION =
  "Aydınlı'da terzi arıyorsanız Çiçek Terzi; Nuray Sokağı'ndaki atölyesinde bay & bayan kıyafet tadilatı, pantolon paçası, daraltma ve özel dikim yapar.";
const KEYWORDS =
  "aydınlı terzi, tuzla terzi, aydınlı bayan terzi, tuzla aydınlı terzi, aydınlı kıyafet tadilatı, tuzla pantolon paça kısaltma, aydınlı terzi telefon";

const blocks: ContentBlock[] = [
  {
    eyebrow: "Aydınlı Terzi",
    heading: "Aydınlı'da Yürüme Mesafesinde Terzi",
    paragraphs: [
      "Çiçek Terzi, Tuzla Aydınlı'da Nuray Sokağı No:4 D:1 adresinde hizmet verir. Aydınlı, Şifa, Postane ve çevre mahallelerden gelen müşterilerimize bay ve bayan kıyafetlerinde tadilat, onarım ve özel dikim yapıyoruz.",
      "Kıyafetinizi getirdiğinizde önce kumaşına ve kesimine bakıyor, yapılabilecek en doğru işlemi birlikte konuşuyoruz. Ölçüyü yerinde alıyor, gerektiğinde prova ile ilerliyoruz.",
      `Çalışma saatlerimiz: ${OPENING_HOURS_TEXT}. Gelmeden önce telefonla veya WhatsApp'tan yazarak işinizin uygunluğunu sorabilirsiniz.`,
    ],
    bullets: [
      "Adres: Aydınlı, Nuray Sokağı No:4 D:1, Tuzla / İstanbul",
      "Bay ve bayan kıyafetlerinde tadilat ve onarım",
      "Pantolon paçası, daraltma, genişletme, fermuar değişimi",
      "Abiye, elbise, ceket ve takım tadilatı",
      "Kişiye özel ölçü ile özel dikim",
      "Ölçü ve prova atölyede yapılır",
    ],
  },
  {
    eyebrow: "Çevre Mahalleler",
    heading: "Tuzla'nın Her Mahallesine Yakınız",
    paragraphs: [
      "Aydınlı dışında Şifa, Postane, Cami, İstasyon ve Anadolu mahallelerinden de müşterilerimiz geliyor. Tuzla içinden ulaşım kolay; atölyemiz sokak seviyesinde, tabelamız caddeden görünüyor.",
      "İşinizin türüne göre aynı gün teslim edebildiğimiz işler de var; kesin süreyi kıyafeti gördükten sonra söylüyoruz.",
    ],
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  name: "Çiçek Terzi",
  description: DESCRIPTION,
  telephone: "+90 534 952 17 59",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Aydınlı, Nuray Sokağı No:4 D:1",
    addressLocality: "Tuzla",
    addressRegion: "İstanbul",
    postalCode: "34953",
    addressCountry: "TR",
  },
  areaServed: ["Aydınlı", "Tuzla", "Şifa", "Postane", "İstanbul"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
};

export const Route = createFileRoute("/aydinli-terzi")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/aydinli-terzi" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/aydinli-terzi" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Aydınlı Terzi"
        title="Tuzla Aydınlı'da Terzi: Çiçek Terzi"
        description="Aydınlı, Nuray Sokağı'ndaki atölyemizde bay & bayan tadilat, onarım ve özel dikim yapıyoruz."
      />
      <ContentSection block={blocks[0]!} />
      <Services />
      <ContentSection block={blocks[1]!} tone="surface" />
      <Testimonials />
      <CtaBanner />
    </>
  ),
});
