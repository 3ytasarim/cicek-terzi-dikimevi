import { useState } from "react";
import { Play, X } from "lucide-react";
import { Reveal } from "./Reveal";
import egeV from "@/assets/media/ege-salvari.mp4.asset.json";
import egeP from "@/assets/media/ege-salvari.jpg.asset.json";
import abiyeV from "@/assets/media/ozel-dikim-abiye.mp4.asset.json";
import abiyeP from "@/assets/media/ozel-dikim-abiye.jpg.asset.json";
import yeniV from "@/assets/media/yeni-tasarim.mp4.asset.json";
import yeniP from "@/assets/media/yeni-tasarim.jpg.asset.json";
import dikisV from "@/assets/media/dikis-atolye.mp4.asset.json";
import dikisP from "@/assets/media/dikis-atolye.jpg.asset.json";
import tadilatV from "@/assets/media/tadilat-dikim.mp4.asset.json";
import tadilatP from "@/assets/media/tadilat-dikim.jpg.asset.json";
import finalV from "@/assets/media/final-prova.mp4.asset.json";
import finalP from "@/assets/media/final-prova.jpg.asset.json";
import modaeviV from "@/assets/media/modaevi-tasarim.mp4.asset.json";
import modaeviP from "@/assets/media/modaevi-tasarim.jpg.asset.json";

type Clip = { title: string; note: string; src: string; poster: string };

export const CLIPS: Clip[] = [
  {
    title: "Ege Şalvarı Dikimi",
    note: "Kumaş seçiminden dikime kadar özel dikim şalvar çalışması",
    src: egeV.url,
    poster: egeP.url,
  },
  {
    title: "Özel Dikim Abiye",
    note: "Ölçüye göre hazırlanan abiye kıyafet dikimi",
    src: abiyeV.url,
    poster: abiyeP.url,
  },
  {
    title: "Yeni Tasarım",
    note: "Çiçek Terzi atölyesinden yeni tasarım çalışması",
    src: yeniV.url,
    poster: yeniP.url,
  },
  {
    title: "Atölyede Dikiş",
    note: "Bay & bayan özel dikim sürecinden kareler",
    src: dikisV.url,
    poster: dikisP.url,
  },
  {
    title: "Tadilat & Dikim",
    note: "Kıyafet tadilatı ve ölçü uyarlama çalışması",
    src: tadilatV.url,
    poster: tadilatP.url,
  },
  {
    title: "Son Prova",
    note: "Tamamlanan çalışmanın son hâli",
    src: finalV.url,
    poster: finalP.url,
  },
  {
    title: "Moda Evi Tasarımı",
    note: "Baştan sona özel tasarım dikim süreci",
    src: modaeviV.url,
    poster: modaeviP.url,
  },
];

export function VideoGallery({
  limit,
  title = "Atölyeden Videolar",
  eyebrow = "Videolar",
}: {
  limit?: number;
  title?: string;
  eyebrow?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const clips = limit ? CLIPS.slice(0, limit) : CLIPS;

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl sm:text-5xl">{title}</h2>
          <p className="mt-4 text-foreground/70">
            Atölyemizde çekilen kısa videolarla dikim ve tadilat sürecimizi
            yakından izleyebilirsiniz.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip, i) => (
            <Reveal key={clip.src} delay={i * 60}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`${clip.title} videosunu oynat`}
                className="group relative block w-full overflow-hidden rounded-md border border-border"
              >
                <img
                  src={clip.poster}
                  alt={clip.title}
                  loading="lazy"
                  className="aspect-[9/16] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-left">
                  <span className="flex items-center gap-2">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Play className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-background">
                        {clip.title}
                      </span>
                      <span className="block text-xs text-background/70">
                        {clip.note}
                      </span>
                    </span>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active !== null && clips[active] && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video oynatıcı"
          className="fixed inset-0 z-60 flex items-center justify-center bg-ink/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Kapat"
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-md bg-background text-primary"
            onClick={() => setActive(null)}
          >
            <X className="h-5 w-5" />
          </button>
          <video
            key={clips[active].src}
            src={clips[active].src}
            poster={clips[active].poster}
            controls
            autoPlay
            playsInline
            className="max-h-[85vh] w-auto max-w-full rounded-md"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
