import { useState } from "react";
import { MoveHorizontal } from "lucide-react";
import oncesi from "@/assets/ba-pantolon-oncesi.jpg";
import sonrasi from "@/assets/ba-pantolon-sonrasi.jpg";
import { Reveal } from "./Reveal";

export function BeforeAfter() {
  const [value, setValue] = useState(50);

  return (
    <section className="border-y border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Öncesi & Sonrası</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Doğru Dokunuş Fark Yaratır.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Pantolon paçası çalışmasında ölçü alınmış, iğnelenmiş halden ütülenmiş ve tamamlanmış
            hale geçiş. Çubuğu sürükleyerek karşılaştırabilirsiniz.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="relative overflow-hidden rounded-md border border-border">
            <div className="relative aspect-[4/3] w-full">
              <img
                src={sonrasi}
                alt="Paçası tamamlanmış ve ütülenmiş pantolon, beyaz terzi masası üzerinde"
                width={1408}
                height={1056}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${value}%` }}>
                <img
                  src={oncesi}
                  alt="Paçası iğnelenmiş ve tebeşirle işaretlenmiş pantolon, beyaz terzi masası üzerinde"
                  width={1408}
                  height={1056}
                  loading="lazy"
                  className="h-full w-full object-cover"
                  style={{ width: "100%", minWidth: "100%" }}
                />
              </div>
              <span className="absolute top-3 left-3 rounded bg-background/85 px-2 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-primary uppercase">
                Öncesi
              </span>
              <span className="absolute top-3 right-3 rounded bg-background/85 px-2 py-1 text-[0.68rem] font-semibold tracking-[0.16em] text-primary uppercase">
                Sonrası
              </span>
              <div
                className="pointer-events-none absolute inset-y-0 w-px bg-primary"
                style={{ left: `${value}%` }}
              >
                <span className="absolute top-1/2 left-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-primary-foreground shadow-lift">
                  <MoveHorizontal className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={100}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                aria-label="Öncesi ve sonrası karşılaştırma çubuğu"
                className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
