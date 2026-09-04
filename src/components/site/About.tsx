import { Handshake, Ruler, ScanSearch, Store } from "lucide-react";
import dukkan from "@/assets/dukkan.png.asset.json";
import { Reveal } from "./Reveal";

const FEATURES = [
  { icon: Handshake, label: "Özenli İşçilik" },
  { icon: Ruler, label: "Kişiye Özel Ölçü" },
  { icon: ScanSearch, label: "Detaylı Uygulama" },
  { icon: Store, label: "Yerel Usta Hizmeti" },
];

export function About() {
  return (
    <section id="hakkimizda" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <img
            src={dukkan.url}
            alt="Çiçek Terzi'nin Tuzla Aydınlı'daki dükkânı"
            width={1200}
            height={1130}
            loading="lazy"
            className="h-[320px] w-full rounded-md object-cover shadow-soft sm:h-[440px] lg:h-[520px]"
          />
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">Hakkımızda</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Ustalık Detaylarda Gizlidir.</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              Çiçek Terzi olarak kıyafetlerin yalnızca ölçüsünü değiştirmekle kalmıyor, formunu ve
              kullanım rahatlığını korumaya özen gösteriyoruz.
            </p>
            <p>
              Özel dikim, günlük tadilat ve hassas onarım işlemlerinde her parçayı kumaşına,
              kesimine ve müşterimizin beklentisine göre değerlendiriyoruz.
            </p>
            <p>
              Amacımız kıyafetlerinizi size en iyi şekilde uyarlamak ve uzun süre keyifle
              kullanabileceğiniz hale getirmek.
            </p>
          </div>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f.label} className="flex min-w-0 items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent">
                  <f.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                </span>
                <span className="truncate text-sm font-semibold">{f.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
