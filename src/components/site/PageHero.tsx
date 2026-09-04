import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="fabric-surface border-b border-border pt-28 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <nav
            aria-label="Sayfa yolu"
            className="flex items-center gap-1 text-xs text-muted-foreground"
          >
            <Link to="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <ChevronRight className="h-3.5 w-3.5" aria-hidden="true" />
            <span className="text-foreground/70">{eyebrow}</span>
          </nav>
          <p className="eyebrow mt-6">{eyebrow}</p>
          <h1 className="mt-3 text-3xl sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
