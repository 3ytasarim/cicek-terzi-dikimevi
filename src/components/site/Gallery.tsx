import { useState } from "react";
import { X } from "lucide-react";
import abiye from "@/assets/galeri-abiye.jpg";
import atolye from "@/assets/galeri-atolye.jpg";
import detay from "@/assets/galeri-detay.jpg";
import dikis from "@/assets/galeri-dikis.jpg";
import paca from "@/assets/galeri-paca.jpg";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

type Category = "Tümü" | "Özel Dikim" | "Tadilat" | "Detaylar" | "Atölye";

const FILTERS: Category[] = ["Tümü", "Özel Dikim", "Tadilat", "Detaylar", "Atölye"];

const PHOTOS: {
  src: string;
  alt: string;
  cat: Exclude<Category, "Tümü">;
  span: string;
  w: number;
  h: number;
}[] = [
  {
    src: abiye,
    alt: "Manken üzerinde bordo abiye elbise provası",
    cat: "Özel Dikim",
    span: "sm:col-span-1 sm:row-span-2",
    w: 1008,
    h: 1408,
  },
  {
    src: atolye,
    alt: "Çiçek Terzi atölyesinin içi, dikiş makineleri ve kumaşlar",
    cat: "Atölye",
    span: "sm:col-span-2",
    w: 1600,
    h: 1072,
  },
  {
    src: paca,
    alt: "Pantolon paçasının tebeşir ve mezura ile ölçülmesi",
    cat: "Tadilat",
    span: "",
    w: 1200,
    h: 912,
  },
  {
    src: dikis,
    alt: "Dikiş makinesinde bordo kumaşın dikilmesi",
    cat: "Atölye",
    span: "",
    w: 1200,
    h: 1200,
  },
  {
    src: detay,
    alt: "Ceket yakasında düğme ve ilik detayı",
    cat: "Detaylar",
    span: "sm:col-span-2",
    w: 1200,
    h: 912,
  },
];

export function Gallery() {
  const [filter, setFilter] = useState<Category>("Tümü");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = PHOTOS.filter((p) => filter === "Tümü" || p.cat === filter);

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Galeri</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">Atölyemizden</h2>
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={cn(
                "rounded-md border px-4 py-2 text-sm font-medium transition-colors",
                filter === f
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-foreground/80 hover:border-primary/40 hover:text-primary",
              )}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-8 grid auto-rows-[200px] gap-4 sm:grid-cols-3 sm:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setLightbox(i)}
              className={cn(
                "group relative overflow-hidden rounded-md border border-border",
                photo.span,
              )}
              aria-label={`${photo.alt} — büyüt`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                width={photo.w}
                height={photo.h}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && photos[lightbox] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Fotoğraf görüntüleyici"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            aria-label="Kapat"
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-md bg-background text-primary"
            onClick={() => setLightbox(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={photos[lightbox].src}
            alt={photos[lightbox].alt}
            className="max-h-[85vh] w-auto max-w-full rounded-md object-contain"
          />
        </div>
      )}
    </section>
  );
}
