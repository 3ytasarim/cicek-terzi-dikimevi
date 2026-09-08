import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export type ContentBlock = {
  heading: string;
  eyebrow: string;
  paragraphs: string[];
  bullets?: string[];
};

/**
 * Yerel arama sayfalarında kullanılan metin bölümü: modern başlık,
 * paragraflar ve isteğe bağlı madde listesi.
 */
export function ContentSection({ block, tone = "plain" }: { block: ContentBlock; tone?: "plain" | "surface" }) {
  return (
    <section className={tone === "surface" ? "fabric-surface py-16 sm:py-20" : "py-16 sm:py-20"}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={block.eyebrow} title={block.heading} />

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {block.paragraphs.map((text) => (
              <Reveal key={text.slice(0, 24)}>
                <p className="text-base leading-relaxed text-muted-foreground">{text}</p>
              </Reveal>
            ))}
          </div>

          {block.bullets && (
            <Reveal delay={120}>
              <ul className="grid gap-3 rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur">
                {block.bullets.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-relaxed">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
