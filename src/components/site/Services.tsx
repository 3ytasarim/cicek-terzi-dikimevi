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

const SERVICES = [
  {
    no: "01",
    icon: Scissors,
    title: "Özel Dikim",
    text: "Bedeninize, tarzınıza ve kullanım amacınıza uygun kişiye özel dikim.",
  },
  {
    no: "02",
    icon: Ruler,
    title: "Pantolon Paçası & Kısaltma",
    text: "Pantolon ve diğer kıyafetlerde ölçünüze uygun profesyonel kısaltma işlemleri.",
  },
  {
    no: "03",
    icon: Shapes,
    title: "Daraltma & Genişletme",
    text: "Kıyafetlerin formunu koruyarak bedeninize daha iyi oturmasını sağlıyoruz.",
  },
  {
    no: "04",
    icon: Wrench,
    title: "Tadilat & Onarım",
    text: "Sökük, yırtık veya kullanıma bağlı hasarları özenli işçilikle yeniliyoruz.",
  },
  {
    no: "05",
    icon: Layers,
    title: "Fermuar Değişimi",
    text: "Pantolon, etek, elbise, mont ve benzeri ürünlerde fermuar değişimi ve onarımı.",
  },
  {
    no: "06",
    icon: Sparkles,
    title: "Elbise & Abiye Tadilatı",
    text: "Elbise ve özel gün kıyafetlerinde hassas ölçü, düzenleme ve tadilat.",
  },
  {
    no: "07",
    icon: Shirt,
    title: "Ceket & Takım Elbise Tadilatı",
    text: "Ceket ve takım elbiselerde beden uyumu, kol ve boy düzenlemeleri.",
  },
  {
    no: "08",
    icon: PencilRuler,
    title: "Ölçüye Göre Düzenleme",
    text: "Kıyafetlerinizi vücut ölçülerinize uygun hale getiriyoruz.",
  },
];

export function Services() {
  return (
    <section id="hizmetler" className="fabric-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Hizmetlerimiz</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Her Kıyafete Usta Dokunuş</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Günlük tadilatlardan özel dikime kadar kıyafetlerinizi kullanım amacına ve bedeninize
            uygun şekilde özenle düzenliyoruz.
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.no} delay={i * 60} className="bg-card">
              <article className="group h-full p-6 transition-colors hover:bg-primary sm:p-7">
                <div className="flex items-center justify-between">
                  <service.icon
                    className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground"
                    aria-hidden="true"
                  />
                  <span className="font-display text-lg text-muted-foreground transition-colors group-hover:text-primary-foreground/70">
                    {service.no}
                  </span>
                </div>
                <h3 className="mt-6 text-xl leading-snug transition-colors group-hover:text-primary-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-primary-foreground/85">
                  {service.text}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
