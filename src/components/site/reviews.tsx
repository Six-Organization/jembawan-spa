"use client";

import { Star, Quote } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { reviews } from "@/data/content";
import { site } from "@/data/site";

export function Reviews() {
  const { tr, pick } = useLanguage();

  return (
    <section id="reviews" className="scroll-mt-20 bg-primary py-20 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          onDark
          kicker={tr("reviews.kicker")}
          title={tr("reviews.title")}
          subtitle={tr("reviews.subtitle")}
        />

        <div className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-3">
          <span className="font-heading text-4xl font-bold text-gold">
            {site.ratings.google.toFixed(1)}
          </span>
          <div>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-gold text-gold" />
              ))}
            </div>
            <p className="text-xs text-primary-foreground/70">
              Google · {site.ratings.googleReviews} reviews
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="flex flex-col rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6 backdrop-blur-sm"
            >
              <Quote className="size-6 text-gold" />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-primary-foreground/85">
                “{pick(r.text)}”
              </p>
              <div className="mt-4 flex items-center gap-0.5">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="size-3.5 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-2 font-heading text-base font-semibold text-cream">{r.name}</p>
              <p className="text-xs text-primary-foreground/60">{pick(r.meta)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
