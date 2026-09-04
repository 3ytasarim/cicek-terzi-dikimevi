import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
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

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(to + "/");

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full border-b transition-colors",
        scrolled || open
          ? "border-border bg-background/95 backdrop-blur"
          : "border-transparent bg-background/70 backdrop-blur-sm",
      )}
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 sm:h-20 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Çiçek Terzi logosu"
            width={112}
            height={75}
            className="h-14 w-auto shrink-0 sm:h-[4.5rem] lg:h-20"
          />
          <span className="sr-only">Çiçek Terzi</span>
        </Link>

        <nav className="hidden items-center justify-center gap-4 lg:flex xl:gap-6" aria-label="Ana menü">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div key={link.to} className="group relative">
                <Link
                  to={link.to}
                  className={cn(
                    "inline-flex items-center gap-1 text-[0.82rem] font-medium whitespace-nowrap transition-colors hover:text-primary xl:text-sm",
                    isActive(link.to) ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden="true" />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-52 overflow-hidden rounded-lg border border-border bg-background/95 shadow-lift backdrop-blur">
                    {link.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className={cn(
                          "block px-4 py-2.5 text-sm font-medium transition-colors hover:bg-linen hover:text-primary",
                          isActive(child.to) ? "text-primary" : "text-foreground/80",
                        )}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "text-[0.82rem] font-medium whitespace-nowrap transition-colors hover:text-primary xl:text-sm",
                  isActive(link.to) ? "text-primary" : "text-foreground/80",
                )}
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href={PHONE_HREF}
            className="hidden items-center gap-2 text-sm font-semibold whitespace-nowrap text-foreground 2xl:flex"
          >
            <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            {PHONE_DISPLAY}
          </a>
          <WhatsAppLink className="hidden whitespace-nowrap sm:inline-flex">WhatsApp'tan Yaz</WhatsAppLink>
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
              <div key={link.to} className="border-b border-border/60 last:border-0">
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "py-3 text-sm font-medium",
                    isActive(link.to) ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {link.label}
                </Link>
                {link.children?.map((child) => (
                  <Link
                    key={child.to}
                    to={child.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 pl-4 text-sm text-foreground/70 hover:text-primary"
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
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
