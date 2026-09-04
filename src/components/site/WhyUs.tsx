import { Award, MessageCircle, Ruler, Search } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ITEMS = [
  {
    icon: Award,
    title: "Özenli İşçilik",
    text: "Her parça kumaşına ve yapısına göre değerlendirilir.",
  },
  {
    icon: Ruler,
    title: "Kişiye Özel Ölçü",
    text: "Standart değil, sizin ölçünüze göre çalışılır.",
  },
  {
    icon: Search,
    title: "Detaylara Önem",
    text: "Küçük dokunuşların kıyafetin duruşunu değiştirdiğini biliyoruz.",
  },
  {
    icon: MessageCircle,
    title: "Kolay İletişim",
    text: "WhatsApp üzerinden hızlıca bilgi alabilirsiniz.",
  },
];

export function WhyUs() {
  return (
    <section className="fabric-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Neden Çiçek Terzi?"
          title="Kıyafetinizi Güvenle Teslim Edin."
        />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90}>
              <div className="group relative h-full overflow-hidden rounded-xl border border-border/70 bg-card/80 p-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-lift">
                {/* Üst aksan çizgisi */}
                <span
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-primary to-primary/30 transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                {/* Yumuşak ışık */}
                <span
                  className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <span className="absolute right-5 top-5 font-display text-2xl leading-none text-primary/15 transition-colors duration-300 group-hover:text-primary/30">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span className="relative grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-accent to-background ring-1 ring-primary/15 transition-all duration-300 group-hover:ring-primary/40">
                  <item.icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110" strokeWidth={1.7} aria-hidden="true" />
                </span>

                <h3 className="relative mt-6 text-xl">{item.title}</h3>
                <p className="relative mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.text}</p>

                <span
                  className="relative mt-6 block h-px w-10 bg-primary/30 transition-all duration-500 group-hover:w-20 group-hover:bg-primary/60"
                  aria-hidden="true"
                />
              </div>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
