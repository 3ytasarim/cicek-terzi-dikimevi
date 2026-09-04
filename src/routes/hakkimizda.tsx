import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { About } from "@/components/site/About";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Hakkımızda | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Tuzla Aydınlı'daki Çiçek Terzi atölyesi; özel dikim, tadilat ve onarım işlerinde özenli işçilik ve kişiye özel ölçü anlayışıyla çalışır.";

export const Route = createFileRoute("/hakkimizda")({
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
