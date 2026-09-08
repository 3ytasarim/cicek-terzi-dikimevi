import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Services } from "@/components/site/Services";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Hizmetlerimiz | Çiçek Terzi Tuzla";
const DESCRIPTION =
  "Özel dikim, pantolon paçası, daraltma ve genişletme, fermuar değişimi, elbise ve abiye tadilatı, onarım hizmetleri Tuzla Aydınlı'da.";
const KEYWORDS =
  "terzi hizmetleri Tuzla, özel dikim, pantolon paçası kısaltma, daraltma genişletme, fermuar değişimi, ceket tadilatı, abiye tadilatı, ölçü alma";

export const Route = createFileRoute("/hizmetler")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/hizmetler" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/hizmetler" }],
  }),
  component: () => (
    <>
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Kıyafetiniz İçin Doğru Çözüm."
        description="Günlük tadilattan özel dikime kadar tüm işlerde kumaşa ve kesime uygun yöntemle çalışıyoruz."
      />
      <Services />
      <BeforeAfter />
      <CtaBanner />
    </>
  ),
});
