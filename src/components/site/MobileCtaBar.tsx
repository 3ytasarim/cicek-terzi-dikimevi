import { MessageCircle, Phone } from "lucide-react";
import { PHONE_HREF, WHATSAPP_URL } from "@/lib/site";

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-border bg-background/95 backdrop-blur md:hidden">
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-2 py-3.5 text-sm font-semibold text-primary"
      >
        <Phone className="h-4 w-4" aria-hidden="true" />
        Ara
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-primary py-3.5 text-sm font-semibold text-primary-foreground"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        WhatsApp
      </a>
    </div>
  );
}
