import { useState } from "react";
import { ImageIcon, MoveHorizontal } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const CASES = ["Pantolon düzenleme", "Elbise daraltma", "Ceket uyarlama"];

function Placeholder({ label, tone }: { label: string; tone: "before" | "after" }) {
  return (
    <div
      className={cn(
        "flex h-full w-full flex-col items-center justify-center gap-2 text-center",
        tone === "before" ? "bg-secondary" : "fabric-surface",
      )}
    >
      <ImageIcon className="h-6 w-6 text-primary/60" aria-hidden="true" />
      <span className="px-4 text-xs font-semibold tracking-[0.18em] text-muted-foreground uppercase">
        {label}
      </span>
    </div>
  );
}

export function BeforeAfter() {
  const [value, setValue] = useState(50);
  const [active, setActive] = useState(0);

  return (
    <section className="border-y border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Öncesi & Sonrası</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Doğru Dokunuş Fark Yaratır.</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Atölyemizde tamamlanan çalışmaların öncesi ve sonrası bu alanda yayınlanacak. Alan şimdilik
            gerçek fotoğraflar için hazır bekliyor.
          </p>
        </Reveal>

        <Reveal delay={100} className="mt-10">
          <div className="flex flex-wrap gap-2">
            {CASES.map((c, i) => (
              <button
                key={c}
                type="button"
                onClick={() => setActive(i)}
                className={cn(
                  "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                  active === i
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-foreground/80 hover:border-primary/40 hover:text-primary",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative mt-6 overflow-hidden rounded-md border border-border">
            <div className="relative h-[300px] sm:h-[440px]">
              <div className="absolute inset-0">
                <Placeholder label={`${CASES[active]} · Sonrası`} tone="after" />
              </div>
              <div
                className="absolute inset-y-0 left-0 overflow-hidden"
                style={{ width: `${value}%` }}
              >
                <div className="h-full" style={{ width: "100vw", maxWidth: "none" }}>
                  <Placeholder label={`${CASES[active]} · Öncesi`} tone="before" />
                </div>
              </div>
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
