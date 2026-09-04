import { Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

import heroAsset from "@/assets/hero-terzi.webp.asset.json";
const heroImg = heroAsset.url;
import { WhatsAppLink } from "./WhatsAppButton";
import { Reveal } from "./Reveal";

const TRUST = ["Özel Dikim", "Tadilat & Onarım", "Kadın & Erkek", "Tuzla / İstanbul"];

export function Hero() {
  return (
    <section id="ana-sayfa" className="relative overflow-hidden pt-24 sm:pt-28 lg:pt-32">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-14 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
        <div>
          <Reveal>
            <p className="eyebrow">Aydınlı · Tuzla</p>
            <h1 className="mt-4 text-[2.35rem] leading-[1.06] sm:text-6xl lg:text-[4.25rem]">
              Kıyafetiniz <span className="text-primary italic">Size Özel</span> Olsun.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Özel dikimden hassas tadilata kadar kıyafetlerinizi bedeninize, tarzınıza ve
              kullanımınıza uygun şekilde özenle hazırlıyor ve yeniliyoruz.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppLink className="px-6 py-3.5">WhatsApp'tan Bilgi Al</WhatsAppLink>
            <Link
              to="/hizmetler"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/25 px-6 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-accent"
            >
              Hizmetleri İncele
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

          </Reveal>

          <Reveal delay={200}>
            <ul className="mt-10 grid grid-cols-2 gap-x-6 gap-y-3 border-t border-border pt-6 sm:max-w-lg">
              {TRUST.map((item) => (
                <li key={item} className="flex min-w-0 items-center gap-2 text-sm text-foreground/85">
                  <Check className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                  <span className="truncate">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={150} className="relative">
          <div className="fabric-surface absolute -inset-3 -z-10 rounded-lg sm:-inset-5" aria-hidden="true" />
          <img
            src={heroImg}
            alt="Çiçek Terzi atölyesinde kumaş kesen kadın terzi"
            width={1080}
            height={1350}
            className="h-[380px] w-full rounded-md object-cover object-top shadow-lift sm:h-[500px] lg:h-[620px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
