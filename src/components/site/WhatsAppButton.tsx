import { Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { WHATSAPP_URL, PHONE_HREF, PHONE_DISPLAY } from "@/lib/site";

const WA_GREEN = "#25D366";
const WA_GREEN_DEEP = "#1ebe5b";

/** Resmi WhatsApp logosu (simple-icons). */
export function WhatsAppIcon({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      style={style}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.692.248-1.281.173-1.403-.074-.122-.271-.198-.569-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.89-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

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
          "bg-[#25D366] text-white hover:bg-[#1ebe5b]",
        variant === "outline" &&
          "border border-[#25D366]/40 text-[#1ebe5b] hover:bg-[#25D366] hover:text-white",
        variant === "light" &&
          "bg-background text-[#1ebe5b] hover:bg-linen",
        className,
      )}
    >
      <WhatsAppIcon className="h-4 w-4 shrink-0" />
      <span>{children}</span>
    </a>
  );
}

export function FloatingWhatsApp() {
  return (
    <div className="fixed right-4 bottom-6 z-50 flex flex-col items-end gap-3 md:right-6">
      {/* Arama butonu (üstte) */}
      <a
        href={PHONE_HREF}
        aria-label={`Hemen arayın ${PHONE_DISPLAY}`}
        className="group cta-pop relative flex items-center"
        style={{ animationDelay: "0.15s" }}
      >
        <span className="pointer-events-none mr-0 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-foreground/95 text-sm font-semibold text-background opacity-0 shadow-lift transition-all duration-300 group-hover:mr-2 group-hover:max-w-[220px] group-hover:px-4 group-hover:py-2 group-hover:opacity-100">
          Hemen Ara · {PHONE_DISPLAY}
        </span>
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lift transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
          <span
            className="cta-ring absolute inset-0 rounded-full bg-primary"
            aria-hidden="true"
          />
          <Phone className="cta-wiggle relative h-6 w-6 md:h-7 md:w-7" aria-hidden="true" />
        </span>
      </a>

      {/* WhatsApp butonu (altta) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp üzerinden yazın"
        className="group cta-pop relative flex items-center"
        style={{ animationDelay: "0.3s" }}
      >
        <span className="pointer-events-none mr-0 max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-foreground/95 text-sm font-semibold text-background opacity-0 shadow-lift transition-all duration-300 group-hover:mr-2 group-hover:max-w-[220px] group-hover:px-4 group-hover:py-2 group-hover:opacity-100">
          WhatsApp'tan Yaz
        </span>
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-lift transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16"
          style={{ backgroundColor: WA_GREEN }}
        >
          <span
            className="cta-ring absolute inset-0 rounded-full"
            style={{ backgroundColor: WA_GREEN_DEEP }}
            aria-hidden="true"
          />
          <WhatsAppIcon className="cta-wiggle relative h-7 w-7 md:h-8 md:w-8" />
        </span>
      </a>
    </div>
  );
}
