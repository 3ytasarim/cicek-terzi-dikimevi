import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { VideoGallery } from "@/components/site/VideoGallery";
import { WhyUs } from "@/components/site/WhyUs";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Çiçek Terzi | Tuzla Özel Dikim & Tadilat";
const DESCRIPTION =
  "Çiçek Terzi; Tuzla Aydınlı'da özel dikim, kıyafet tadilatı, pantolon paçası, daraltma, fermuar değişimi ve elbise tadilatı hizmetleri sunar.";

const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ClothingStore",
  additionalType: "https://schema.org/ProfessionalService",
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
  areaServed: "Tuzla, İstanbul",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "tr_TR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(localBusiness) }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <VideoGallery limit={3} title="Çalışmalarımızdan Videolar" />
      <WhyUs />
      <CtaBanner />
    </>
  );
}
