import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Hakkımızda | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Tuzla Aydınlı'daki Çiçek Terzi atölyesi; özel dikim, tadilat ve onarım işlerinde özenli işçilik ve kişiye özel ölçü anlayışıyla çalışır.";
const KEYWORDS =
  "Çiçek Terzi hakkında, Tuzla terzi atölyesi, Aydınlı terzi, usta terzi Tuzla, özel dikim atölyesi";

export const Route = createFileRoute("/hakkimizda")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/hakkimizda" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/hakkimizda" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Hakkımızda"
        title="Ustalık Detaylarda Gizlidir."
        description="Kıyafetlerinizi kumaşına, kesimine ve kullanım şeklinize göre değerlendirerek size en uygun hale getiriyoruz."
      />
      <About />
      <WhyUs />
      <CtaBanner />
    </>
  ),
});
