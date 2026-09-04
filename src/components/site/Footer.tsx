import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import logo from "@/assets/logo.png.asset.json";
import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  NAV_LINKS,
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_URL,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-3">
        <div>
          <img
            src={logo.url}
            alt="Çiçek Terzi logosu"
            width={140}
            height={94}
            loading="lazy"
            className="h-12 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Tuzla'da özel dikim, tadilat ve onarım hizmetleri.
          </p>
        </div>

        <nav aria-label="Alt menü">
          <h2 className="font-display text-lg">Menü</h2>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>
        </nav>

        <div>
          <h2 className="font-display text-lg">İletişim</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex min-w-0 items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <a href={PHONE_HREF} className="truncate hover:text-primary">
                {PHONE_DISPLAY}
              </a>
            </li>
            <li className="flex min-w-0 gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="leading-relaxed">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </span>
            </li>
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-semibold text-primary"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-xs text-muted-foreground sm:px-6">
          © 2026 Çiçek Terzi. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
