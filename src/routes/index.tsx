import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { VideoGallery } from "@/components/site/VideoGallery";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { CtaBanner } from "@/components/site/CtaBanner";

const TITLE = "Çiçek Terzi | Tuzla Özel Dikim & Tadilat";
const DESCRIPTION =
  "Çiçek Terzi; Tuzla Aydınlı'da özel dikim, kıyafet tadilatı, pantolon paçası, daraltma, fermuar değişimi ve elbise tadilatı hizmetleri sunar.";
const KEYWORDS =
  "terzi Tuzla, Tuzla terzi, Aydınlı terzi, özel dikim Tuzla, kıyafet tadilatı Tuzla, pantolon paça kısaltma, elbise daraltma, fermuar değişimi, abiye tadilatı, bay bayan terzi";

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
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
  ],
  areaServed: ["Tuzla", "Aydınlı", "Şifa", "Postane", "İstanbul"],
  makesOffer: [
    "Özel dikim",
    "Kıyafet tadilatı",
    "Pantolon paçası kısaltma",
    "Daraltma ve genişletme",
    "Fermuar değişimi",
    "Abiye ve elbise tadilatı",
    "Ceket ve takım tadilatı",
    "Ölçü alma ve prova",
  ].map((name) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name, serviceType: name },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "tr_TR" },
      { property: "og:site_name", content: "Çiçek Terzi" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
      <Testimonials />
      <CtaBanner />
    </>
  );
}
