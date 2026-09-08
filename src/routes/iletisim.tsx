import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";

const TITLE = "İletişim | Çiçek Terzi Tuzla Aydınlı";
const DESCRIPTION =
  "Çiçek Terzi iletişim: Aydınlı, Nuray Sokağı No:4 D:1, Tuzla / İstanbul. Telefon ve WhatsApp ile bilgi alabilirsiniz.";
const KEYWORDS =
  "Çiçek Terzi iletişim, Tuzla terzi telefon, Aydınlı terzi adres, terzi WhatsApp, Nuray Sokağı Tuzla";

export const Route = createFileRoute("/iletisim")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/iletisim" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/iletisim" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="İletişim"
        title="Bize Ulaşın"
        description="Dükkânımıza uğrayabilir, telefonla arayabilir veya WhatsApp'tan yazabilirsiniz."
      />
      <Contact />
    </>
  ),
});
