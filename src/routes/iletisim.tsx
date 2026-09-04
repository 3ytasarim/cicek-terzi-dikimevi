import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact } from "@/components/site/Contact";

const TITLE = "İletişim | Çiçek Terzi Tuzla Aydınlı";
const DESCRIPTION =
  "Çiçek Terzi iletişim: Aydınlı, Nuray Sokağı No:4 D:1, Tuzla / İstanbul. Telefon ve WhatsApp ile bilgi alabilirsiniz.";

export const Route = createFileRoute("/iletisim")({
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
        eyebrow="İletişim"
        title="Bize Ulaşın"
        description="Dükkânımıza uğrayabilir, telefonla arayabilir veya WhatsApp'tan yazabilirsiniz."
      />
      <Contact />
    </>
  ),
});
