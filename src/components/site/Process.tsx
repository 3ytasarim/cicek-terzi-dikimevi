import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  {
    no: "01",
    title: "Kıyafetinizi Getirin",
    text: "Atölyemizde kıyafetinizi birlikte inceleyelim.",
  },
  {
    no: "02",
    title: "Ölçü & Değerlendirme",
    text: "Üzerinizde gerekli ölçü ve düzenlemeleri belirleyelim.",
  },
  {
    no: "03",
    title: "Uygulama & Teslim",
    text: "Terzilik işlemlerini tamamlayıp kıyafetinizi kullanıma hazır teslim edelim.",
  },
];

export function Process() {
  return (
    <section id="nasil-calisiyoruz" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Nasıl Çalışıyoruz?" title="3 Adımda Size Özel" />

        <ol className="relative mt-12 grid gap-8 lg:grid-cols-3 lg:gap-10">
          <div
            className="absolute top-7 right-0 left-0 hidden h-px bg-border lg:block"
            aria-hidden="true"
          />
          {STEPS.map((step, i) => (
            <Reveal as="li" key={step.no} delay={i * 120} className="relative">
              <div className="flex items-start gap-5 lg:block">
                <span className="font-display relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-full border border-primary/20 bg-background text-xl text-primary">
                  {step.no}
                </span>
                <div className="min-w-0 lg:mt-6">
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
