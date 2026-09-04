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

      {/* Mobil menü paneli */}
      <div
        className={cn(
          "fixed inset-0 top-16 z-40 lg:hidden sm:top-20",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
        aria-hidden={!open}
      >
        {/* Karartma */}
        <button
          type="button"
          tabIndex={-1}
          aria-label="Menüyü kapat"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-foreground/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <nav
          aria-label="Mobil menü"
          className={cn(
            "absolute inset-x-0 top-0 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-b-2xl border-b border-border bg-background shadow-lift transition-all duration-300 ease-out sm:max-h-[calc(100vh-5rem)]",
            open ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0",
          )}
        >
          <div className="px-5 pb-6 pt-5">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Menü
            </p>

            <ul className="mt-4 space-y-1.5">
              {NAV_LINKS.map((link, i) => (
                <li
                  key={link.to}
                  style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                  className={cn(
                    "transition-all duration-300 ease-out",
                    open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
                  )}
                >
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "group flex items-center justify-between gap-3 rounded-xl border px-4 py-3.5 transition-colors",
                      isActive(link.to)
                        ? "border-primary/30 bg-accent text-primary"
                        : "border-border/60 bg-card text-foreground/85 hover:border-primary/25 hover:bg-linen",
                    )}
                  >
                    <span className="font-display text-lg leading-none">{link.label}</span>
                    <ChevronRight
                      className="h-4 w-4 shrink-0 text-primary/60 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </Link>

                  {link.children && (
                    <ul className="mt-1.5 space-y-1 pl-3">
                      {link.children.map((child) => (
                        <li key={child.to}>
                          <Link
                            to={child.to}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center gap-2.5 rounded-lg px-3.5 py-2.5 text-sm transition-colors",
                              isActive(child.to)
                                ? "bg-accent/70 text-primary"
                                : "text-muted-foreground hover:bg-linen hover:text-primary",
                            )}
                          >
                            <span className="h-px w-4 shrink-0 bg-primary/40" aria-hidden="true" />
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>

            <div className="mt-6 space-y-2.5 border-t border-border/70 pt-5">
              <WhatsAppLink className="w-full justify-center" />
              <a
                href={PHONE_HREF}
                className="flex w-full items-center justify-center gap-2 rounded-md border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition-colors hover:bg-accent"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <p className="pt-2 text-center text-xs leading-relaxed text-muted-foreground">
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </p>
            </div>
          </div>
        </nav>
      </div>

    </header>
  );
}
