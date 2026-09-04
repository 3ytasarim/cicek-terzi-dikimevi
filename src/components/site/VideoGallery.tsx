import { useState } from "react";
import { Play, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import egeV from "@/assets/media/ege-salvari.mp4";
import egeP from "@/assets/media/ege-salvari.jpg";
import abiyeV from "@/assets/media/ozel-dikim-abiye.mp4";
import abiyeP from "@/assets/media/ozel-dikim-abiye.jpg";
import yeniV from "@/assets/media/yeni-tasarim.mp4";
import yeniP from "@/assets/media/yeni-tasarim.jpg";
import dikisV from "@/assets/media/dikis-atolye.mp4";
import dikisP from "@/assets/media/dikis-atolye.jpg";
import tadilatV from "@/assets/media/tadilat-dikim.mp4";
import tadilatP from "@/assets/media/tadilat-dikim.jpg";
import finalV from "@/assets/media/final-prova.mp4";
import finalP from "@/assets/media/final-prova.jpg";
import modaeviV from "@/assets/media/modaevi-tasarim.mp4";
import modaeviP from "@/assets/media/modaevi-tasarim.jpg";

type Clip = { title: string; note: string; src: string; poster: string };

export const CLIPS: Clip[] = [
  {
    title: "Ege Şalvarı Dikimi",
    note: "Kumaş seçiminden dikime kadar özel dikim şalvar çalışması",
    src: egeV,
    poster: egeP,
  },
  {
    title: "Özel Dikim Abiye",
    note: "Ölçüye göre hazırlanan abiye kıyafet dikimi",
    src: abiyeV,
    poster: abiyeP,
  },
  {
    title: "Yeni Tasarım",
    note: "Çiçek Terzi atölyesinden yeni tasarım çalışması",
    src: yeniV,
    poster: yeniP,
  },
  {
    title: "Atölyede Dikiş",
    note: "Bay & bayan özel dikim sürecinden kareler",
    src: dikisV,
    poster: dikisP,
  },
  {
    title: "Tadilat & Dikim",
    note: "Kıyafet tadilatı ve ölçü uyarlama çalışması",
    src: tadilatV,
    poster: tadilatP,
  },
  {
    title: "Son Prova",
    note: "Tamamlanan çalışmanın son hâli",
    src: finalV,
    poster: finalP,
  },
  {
    title: "Moda Evi Tasarımı",
    note: "Baştan sona özel tasarım dikim süreci",
    src: modaeviV,
    poster: modaeviP,
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
        <SectionHeading
          eyebrow={eyebrow}
          title={title}
          description="Atölyemizde çekilen kısa videolarla dikim ve tadilat sürecimizi yakından izleyebilirsiniz."
        />

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
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 p-4"
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
