import {
  Scissors,
  Ruler,
  Shirt,
  Wrench,
  Layers,
  Sparkles,
  Shapes,
  PencilRuler,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import imgOzelDikim from "@/assets/hizmet-ozel-dikim.jpg";
import imgPaca from "@/assets/hizmet-paca.jpg";
import imgDaraltma from "@/assets/hizmet-daraltma.jpg";
import imgTadilat from "@/assets/hizmet-tadilat.jpg";
import imgFermuar from "@/assets/hizmet-fermuar.jpg";
import imgAbiye from "@/assets/hizmet-abiye.jpg";
import imgCeket from "@/assets/hizmet-ceket.jpg";
import imgOlcu from "@/assets/hizmet-olcu.jpg";

const SERVICES = [
  {
    no: "01",
    icon: Scissors,
    title: "Özel Dikim",
    text: "Bedeninize, tarzınıza ve kullanım amacınıza uygun kişiye özel dikim.",
    image: imgOzelDikim,
  },
  {
    no: "02",
    icon: Ruler,
    title: "Pantolon Paçası & Kısaltma",
    text: "Pantolon ve diğer kıyafetlerde ölçünüze uygun profesyonel kısaltma işlemleri.",
    image: imgPaca,
  },
  {
    no: "03",
    icon: Shapes,
    title: "Daraltma & Genişletme",
    text: "Kıyafetlerin formunu koruyarak bedeninize daha iyi oturmasını sağlıyoruz.",
    image: imgDaraltma,
  },
  {
    no: "04",
    icon: Wrench,
    title: "Tadilat & Onarım",
    text: "Sökük, yırtık veya kullanıma bağlı hasarları özenli işçilikle yeniliyoruz.",
    image: imgTadilat,
  },
  {
    no: "05",
    icon: Layers,
    title: "Fermuar Değişimi",
    text: "Pantolon, etek, elbise, mont ve benzeri ürünlerde fermuar değişimi ve onarımı.",
    image: imgFermuar,
  },
  {
    no: "06",
    icon: Sparkles,
    title: "Elbise & Abiye Tadilatı",
    text: "Elbise ve özel gün kıyafetlerinde hassas ölçü, düzenleme ve tadilat.",
    image: imgAbiye,
  },
  {
    no: "07",
    icon: Shirt,
    title: "Ceket & Takım Elbise Tadilatı",
    text: "Ceket ve takım elbiselerde beden uyumu, kol ve boy düzenlemeleri.",
    image: imgCeket,
  },
  {
    no: "08",
    icon: PencilRuler,
    title: "Ölçüye Göre Düzenleme",
    text: "Kıyafetlerinizi vücut ölçülerinize uygun hale getiriyoruz.",
    image: imgOlcu,
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="fabric-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Her Kıyafete Usta Dokunuş"
          description="Günlük tadilatlardan özel dikime kadar kıyafetlerinizi kullanım amacına ve bedeninize uygun şekilde özenle düzenliyoruz."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.no} delay={i * 60}>
              <article className="group relative h-full overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <span className="absolute right-3 top-3 rounded-full bg-background/85 px-2.5 py-1 font-display text-xs tracking-wide text-primary backdrop-blur">
                    {service.no}
                  </span>
                  <span className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform duration-500 group-hover:scale-110">
                    <service.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-lg leading-snug transition-colors group-hover:text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                  <span className="mt-4 block h-px w-10 bg-primary/50 transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
