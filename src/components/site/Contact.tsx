import { Clock, MapPin, Navigation, Phone } from "lucide-react";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  MAPS_DIRECTIONS,
  MAPS_EMBED,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppButton";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Contact() {
  return (
    <section id="iletisim" className="fabric-surface py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="İletişim" title="Çiçek Terzi'ye Ulaşın" />

        <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal className="rounded-md border border-border bg-card p-6 sm:p-8">
            <ul className="space-y-6">
              <li className="flex min-w-0 gap-4">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Adres</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {ADDRESS_LINE_1}
                    <br />
                    {ADDRESS_LINE_2}
                  </p>
                </div>
              </li>
              <li className="flex min-w-0 gap-4">
                <Phone className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Telefon</p>
                  <a
                    href={PHONE_HREF}
                    className="mt-1 block truncate text-sm text-muted-foreground hover:text-primary"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
              </li>
              <li className="flex min-w-0 gap-4">
                <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold">Ziyaret</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    Atölyemize gelmeden önce WhatsApp'tan yazarak uygun zamanı öğrenebilirsiniz.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={MAPS_DIRECTIONS}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/25 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Yol Tarifi Al
              </a>
              <WhatsAppLink />
            </div>
          </Reveal>

          <Reveal delay={120} className="overflow-hidden rounded-md border border-border">
            <iframe
              title="Çiçek Terzi konum haritası"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[320px] w-full border-0 sm:h-[440px]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
