"use client";

import * as React from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Logo } from "@/components/site/logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/site/link-button";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", key: "nav.about" },
  { href: "#why", key: "nav.why" },
  { href: "#treatments", key: "nav.treatments" },
  { href: "#experience", key: "nav.experience" },
  { href: "#gallery", key: "nav.gallery" },
  { href: "#location", key: "nav.location" },
  { href: "#reviews", key: "nav.reviews" },
] as const;

export function Navbar() {
  const { tr } = useLanguage();
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-border/70 bg-background/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="shrink-0" aria-label="Jembawan Spa — home">
          <Logo />
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-foreground"
            >
              {tr(l.key)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <LinkButton
            href="#book"
            variant="whatsapp"
            className="hidden h-10 gap-1.5 rounded-full px-4 lg:inline-flex"
          >
            <MessageCircle className="size-4" />
            {tr("nav.bookShort")}
          </LinkButton>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-sm transition-colors hover:bg-accent lg:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden
        className={cn(
          "fixed inset-0 top-16 z-40 bg-forest/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 origin-top border-b border-border/70 bg-background shadow-xl transition-all duration-300 lg:hidden",
          open
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0",
        )}
      >
        <div className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-accent"
            >
              {tr(l.key)}
            </a>
          ))}
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-border/60 pt-4">
            <LanguageSwitcher />
            <LinkButton
              href="#book"
              onClick={() => setOpen(false)}
              variant="whatsapp"
              className="h-11 flex-1 gap-1.5 rounded-full"
            >
              <MessageCircle className="size-4" />
              {tr("nav.book")}
            </LinkButton>
          </div>
        </div>
      </div>
    </header>
  );
}
