import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export const FAQ_ITEMS = [
  {
    q: "Tadilat işlemleri ne kadar sürüyor?",
    a: "İşlemin detayına göre değişmektedir. WhatsApp üzerinden fotoğraf göndererek veya atölyemizi ziyaret ederek bilgi alabilirsiniz.",
  },
  {
    q: "Kıyafeti getirmeden fiyat alabilir miyim?",
    a: "Kıyafetin kumaşı ve yapılacak işlem belirleyici oluyor. WhatsApp üzerinden fotoğraf gönderdiğinizde size yol gösterebiliriz; kesin değerlendirme kıyafeti gördüğümüzde yapılır.",
  },
  {
    q: "Özel dikim yapıyor musunuz?",
    a: "Evet. Bedeninize, tarzınıza ve kullanım amacınıza uygun kişiye özel dikim çalışmaları yapıyoruz.",
  },
  {
    q: "Pantolon ve ceket tadilatı yapıyor musunuz?",
    a: "Evet. Pantolon paçası, kısaltma, daraltma, genişletme ile ceket ve takım elbiselerde kol, boy ve beden düzenlemeleri yapıyoruz.",
  },
  {
    q: "Abiye tadilatı yapıyor musunuz?",
    a: "Evet. Elbise ve özel gün kıyafetlerinde hassas ölçü, düzenleme ve tadilat işlemlerini gerçekleştiriyoruz.",
  },
  {
    q: "Randevu almam gerekiyor mu?",
    a: "Atölyemize doğrudan gelebilirsiniz. Yoğunluğa göre planlama için önceden WhatsApp'tan yazmanız işinizi kolaylaştırır.",
  },
  {
    q: "WhatsApp üzerinden fotoğraf gönderebilir miyim?",
    a: "Evet. Kıyafetin fotoğrafını gönderdiğinizde yapılabilecek işlem hakkında ön bilgi verebiliriz.",
  },
];

export function Faq() {
  return (
    <section id="sss" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="Sık Sorulan Sorular"
          title="Merak Edilenler"
          description="Aradığınız cevabı bulamazsanız WhatsApp üzerinden bize yazabilirsiniz."
        />

        <Reveal delay={100}>
          <Accordion type="single" collapsible className="w-full">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-display text-lg hover:text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
