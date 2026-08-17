"use client";

import { MapPin, Phone, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { Logo } from "@/components/site/logo";
import { InstagramGlyph } from "@/components/site/social-icons";
import { site } from "@/data/site";

export function Footer() {
  const { tr } = useLanguage();
  const year = 2026;

  return (
    <footer className="border-t border-border/60 bg-secondary/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-3 text-sm text-muted-foreground">{tr("footer.tagline")}</p>
          </div>

          <div className="grid gap-3 text-sm">
            <a
              href={site.links.directions}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-start gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MapPin className="mt-0.5 size-4 shrink-0 text-sage" />
              <span className="max-w-xs">{site.address.line}</span>
            </a>
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-4 text-sage" />
              {site.phone.display}
            </a>
            <a
              href={site.links.booking}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <MessageCircle className="size-4 text-sage" />
              WhatsApp
            </a>
            <a
              href={site.links.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
            >
              <InstagramGlyph className="size-4 text-sage" />
              @jembawanspa
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <p>
            © {year} {site.fullName}. {tr("footer.rights")}
          </p>
          <p>Ubud · Gianyar · Bali</p>
        </div>
      </div>
    </footer>
  );
}
