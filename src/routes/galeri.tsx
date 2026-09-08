import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { VideoGallery } from "@/components/site/VideoGallery";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Galeri | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Çiçek Terzi atölyesinden gerçek çalışma videoları: özel dikim, tadilat ve prova anları.";
const KEYWORDS =
  "terzi galeri, Tuzla terzi çalışmaları, özel dikim videoları, tadilat örnekleri";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/galeri" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/galeri" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Galeri"
        title="Atölyemizden Videolar"
        description="Atölyemizde çektiğimiz gerçek çalışma videoları."
      />
      <VideoGallery />
      <Testimonials />
      <CtaBanner />
    </>
  ),
});
