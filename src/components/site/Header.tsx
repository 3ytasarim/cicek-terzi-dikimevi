import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import logo from "@/assets/logo.png.asset.json";
import { NAV_LINKS, PHONE_DISPLAY, PHONE_HREF } from "@/lib/site";
import { WhatsAppLink } from "./WhatsAppButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors",
        scrolled || open
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Çiçek Terzi logosu"
            width={112}
            height={75}
            className="h-9 w-auto shrink-0 sm:h-12"
          />
          <span className="sr-only">Çiçek Terzi</span>
        </Link>

        <nav className="ml-auto hidden items-center gap-5 lg:flex" aria-label="Ana menü">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === link.to ? "text-primary" : "text-foreground/80",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-semibold text-foreground xl:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <WhatsAppLink className="hidden sm:inline-flex">WhatsApp'tan Yaz</WhatsAppLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6" aria-label="Mobil menü">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium last:border-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 py-4">
              <WhatsAppLink />
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/30 px-5 py-3 text-sm font-semibold text-primary"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
