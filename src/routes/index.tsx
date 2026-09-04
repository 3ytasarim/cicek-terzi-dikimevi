import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Process } from "@/components/site/Process";
import { WhyUs } from "@/components/site/WhyUs";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq, FAQ_ITEMS } from "@/components/site/Faq";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/WhatsAppButton";
import { MobileCtaBar } from "@/components/site/MobileCtaBar";

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
  knowsAbout: [
    "Özel dikim",
    "Kıyafet tadilatı",
    "Pantolon paçası",
    "Elbise ve abiye tadilatı",
    "Fermuar değişimi",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
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
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusiness) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pb-14 md:pb-0">
        <Hero />
        <Services />
        <About />
        <BeforeAfter />
        <Process />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <Faq />
        <CtaBanner />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileCtaBar />
    </div>
  );
}
