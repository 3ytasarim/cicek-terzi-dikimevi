import { Award, MessageCircle, Ruler, Search } from "lucide-react";
import { Reveal } from "./Reveal";

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
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Neden Çiçek Terzi?</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Kıyafetinizi Güvenle Teslim Edin.</h2>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 80}>
              <div className="h-full rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-lift">
                <span className="grid h-11 w-11 place-items-center rounded-md bg-accent">
                  <item.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
