import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Galeri | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Çiçek Terzi atölyesinden çalışma ve detay fotoğrafları: özel dikim, tadilat, işçilik detayları ve atölye görselleri.";

export const Route = createFileRoute("/galeri")({
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
        eyebrow="Galeri"
        title="Atölyemizden Kareler"
        description="Çalışmalarımızdan ve atölyemizden seçilmiş görseller."
      />
      <Gallery />
      <Testimonials />
      <CtaBanner />
    </>
  ),
});
