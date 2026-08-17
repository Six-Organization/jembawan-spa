"use client";

import { Phone, Clock, MessageCircle } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { LinkButton } from "@/components/site/link-button";
import { BookingForm } from "@/components/site/booking-form";
import { InstagramGlyph } from "@/components/site/social-icons";
import { site } from "@/data/site";

export function Booking() {
  const { tr } = useLanguage();

  return (
    <section id="book" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("book.kicker")}
          title={tr("book.title")}
          subtitle={tr("book.subtitle")}
        />

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-2">
          <BookingForm />

          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <p className="text-sm text-muted-foreground">{tr("book.or")}</p>
              <div className="mt-3 flex flex-wrap gap-3">
                <LinkButton
                  href={site.links.booking}
                  target="_blank"
                  rel="noreferrer"
                  variant="whatsapp"
                  className="h-11 gap-2 px-5"
                >
                  <MessageCircle className="size-4" />
                  WhatsApp
                </LinkButton>
                <LinkButton href={`tel:${site.phone.tel}`} variant="outline" className="h-11 gap-2 px-5">
                  <Phone className="size-4" />
                  {site.phone.display}
                </LinkButton>
              </div>
            </div>

            <div className="rounded-2xl border border-border/60 bg-card p-6">
              <div className="flex items-center gap-2 text-sage">
                <Clock className="size-4" />
                <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
                  {tr("location.hours")}
                </h3>
              </div>
              <p className="mt-2 font-heading text-2xl font-bold text-primary">
                {site.hours.open} – {site.hours.close}
              </p>
              <p className="text-sm text-muted-foreground">{tr("location.everyday")}</p>
              <p className="mt-3 text-xs text-muted-foreground">{tr("book.walkin")}</p>
            </div>

            <div className="rounded-2xl border border-border/60 bg-primary p-6 text-primary-foreground">
              <p className="font-heading text-lg font-semibold text-cream">
                {site.ratings.google.toFixed(1)}★ · {site.ratings.googleReviews}+ Google reviews
              </p>
              <a
                href={site.links.instagram}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm text-primary-foreground/80 transition-colors hover:text-cream"
              >
                <InstagramGlyph className="size-4" />
                @jembawanspa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
