import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Bölüm başlığı: hareketli çizgili küçük başlık, akan degrade ana başlık
 * ve kademeli açılan açıklama.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  as = "h2",
  align = "left",
  className,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  as?: "h1" | "h2";
  align?: "left" | "center";
  className?: string;
}) {
  const Title = as;
  const centered = align === "center";

  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      <Reveal>
        <p
          className={cn(
            "flex items-center gap-3",
            centered && "justify-center",
          )}
        >
          <span
            className="heading-bar h-px w-10 shrink-0 rounded-full bg-primary/70"
            aria-hidden="true"
          />
          <span className="eyebrow">{eyebrow}</span>
        </p>
      </Reveal>

      <Reveal delay={110}>
        <Title
          className={cn(
            "heading-shine mt-4 text-3xl leading-[1.08] sm:text-5xl",
            as === "h1" && "lg:text-6xl",
          )}
        >
          {title}
        </Title>
      </Reveal>

      {description && (
        <Reveal delay={220}>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
