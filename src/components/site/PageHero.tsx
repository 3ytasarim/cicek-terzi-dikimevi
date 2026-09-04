import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

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
        </Reveal>

        <SectionHeading
          as="h1"
          eyebrow={eyebrow}
          title={title}
          description={description}
          className="mt-6"
        />
      </div>
    </section>
  );
}
