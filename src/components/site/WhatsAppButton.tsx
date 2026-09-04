import { MessageCircle, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/lib/site";

export function WhatsAppLink({
  children = "WhatsApp'tan Yaz",
  className,
  variant = "solid",
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: "solid" | "outline" | "light";
}) {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-sm font-semibold tracking-wide transition-colors",
        variant === "solid" &&
          "bg-primary text-primary-foreground hover:bg-primary-deep",
        variant === "outline" &&
          "border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground",
        variant === "light" &&
          "bg-background text-primary hover:bg-linen",
        className,
      )}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </a>
  );
}

export function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  // Close the menu on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3 md:right-6">
      {/* Expanded action buttons */}
      <div
        className={cn(
          "flex flex-col items-end gap-3 transition-all duration-300",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none translate-y-3 opacity-0",
        )}
      >
        {/* Phone call CTA */}
        <a
          href={PHONE_HREF}
          aria-label="Hemen arayın"
          className="group flex items-center gap-3 rounded-full bg-foreground py-2 pl-4 pr-2 text-background shadow-lift transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <span className="text-sm font-semibold tracking-wide">
            Hemen Ara
          </span>
          <span className="hidden text-xs text-background/70 group-hover:text-primary-foreground/70 sm:inline">
            {PHONE_DISPLAY}
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-background text-foreground transition-colors group-hover:bg-primary-foreground group-hover:text-primary">
            <Phone className="h-5 w-5" aria-hidden="true" />
          </span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp üzerinden yazın"
          className="group flex items-center gap-3 rounded-full bg-[#25D366] py-2 pl-4 pr-2 text-white shadow-lift transition-colors hover:bg-[#1ebe5b]"
        >
          <span className="text-sm font-semibold tracking-wide">
            WhatsApp'tan Yaz
          </span>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#25D366] transition-colors group-hover:bg-white/90">
            <MessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
        </a>
      </div>

      {/* Toggle FAB */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Menüyü kapat" : "İletişim seçeneklerini aç"}
        aria-expanded={open}
        className={cn(
          "flex h-14 w-14 items-center justify-center rounded-full shadow-lift transition-all duration-300 md:h-16 md:w-16",
          open
            ? "bg-foreground text-background rotate-90"
            : "bg-primary text-primary-foreground hover:scale-105",
        )}
      >
        {open ? (
          <X className="h-6 w-6" aria-hidden="true" />
        ) : (
          <MessageCircle className="h-7 w-7" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
