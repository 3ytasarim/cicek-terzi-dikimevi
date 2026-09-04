import { Quote, Star } from "lucide-react";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section className="border-y border-border py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Yorumlar</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Müşterilerimizin Deneyimleri</h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            Google üzerinden gelen gerçek müşteri yorumları bu bölümde yayınlanacak.
          </p>
        </Reveal>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <Reveal as="li" key={i} delay={i * 80}>
              <div className="h-full rounded-md border border-dashed border-border bg-card p-6">
                <Quote className="h-5 w-5 text-primary/50" aria-hidden="true" />
                <div className="mt-4 flex gap-1" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Star key={s} className="h-4 w-4 text-border" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Yorum alanı — gerçek Google değerlendirmesi eklendiğinde burada görünecek.
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
