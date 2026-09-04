import { Phone } from "lucide-react";
import { PHONE_HREF } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

export function CtaBanner() {
  return (
    <section className="bg-primary py-16 text-primary-foreground sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl leading-tight sm:text-5xl">
            Kıyafetiniz İçin Ne Yapabileceğimizi Konuşalım.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Tadilat, özel dikim veya onarım ihtiyacınız için WhatsApp üzerinden bize
            ulaşabilirsiniz.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <WhatsAppLink variant="light" className="px-6 py-3.5" />
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary-foreground/35 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-primary-deep"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Hemen Ara
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
