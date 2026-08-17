"use client";

import { Star, ArrowRight, MessageCircle, Leaf } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";
import { treatments } from "@/data/treatments";

export function Hero() {
  const { tr } = useLanguage();

  return (
    <section id="top" className="relative isolate overflow-hidden">
      {/* Calming botanical backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#eef2e6] via-[#f4f0e4] to-background" />
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 760"
          preserveAspectRatio="xMidYMax slice"
        >
          {/* soft sun / stone circle */}
          <circle cx="1140" cy="210" r="150" fill="#dfe7cf" opacity="0.6" />
          <circle cx="1140" cy="210" r="96" fill="#cdd9b6" opacity="0.55" />
          {/* frangipani-ish blossoms */}
          <g opacity="0.5">
            {[[170, 250, 34], [250, 360, 22], [110, 400, 18]].map(([cx, cy, r], i) => (
              <g key={i} transform={`translate(${cx} ${cy})`}>
                {Array.from({ length: 5 }).map((_, p) => (
                  <ellipse
                    key={p}
                    cx="0"
                    cy={-r * 0.7}
                    rx={r * 0.5}
                    ry={r}
                    fill="#e7d9be"
                    transform={`rotate(${p * 72})`}
                  />
                ))}
                <circle cx="0" cy="0" r={r * 0.4} fill="#d8b76a" />
              </g>
            ))}
          </g>
          {/* leaf sprigs */}
          <g fill="#b9c99f" opacity="0.45">
            <path d="M1280 560 q -40 -70 10 -150 q 30 70 -10 150 Z" />
            <path d="M1330 560 q 30 -60 90 -70 q -20 60 -90 70 Z" />
            <path d="M1230 560 q -30 -60 -90 -70 q 20 60 90 70 Z" />
          </g>
          {/* ground line */}
          <path d="M0 660 Q 360 630 720 655 T 1440 650 V760 H0 Z" fill="#dfe6d1" opacity="0.5" />
        </svg>
      </div>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-32 sm:px-6 sm:pb-28 sm:pt-40 lg:pt-44">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-card/70 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
            <Leaf className="size-3.5 text-sage" />
            {tr("hero.badge")}
          </span>

          <h1 className="mt-5 font-heading text-5xl font-bold leading-[1.02] text-primary text-balance sm:text-6xl lg:text-7xl">
            {tr("hero.title")}
          </h1>

          <p className="mt-5 max-w-xl text-base text-foreground/75 sm:text-lg">
            {tr("hero.subtitle")}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <LinkButton
              href="#book"
              variant="whatsapp"
              className="h-12 gap-2 px-7 text-base"
            >
              <MessageCircle className="size-5" />
              {tr("hero.cta.book")}
            </LinkButton>
            <LinkButton
              href="#treatments"
              variant="outline"
              className="h-12 gap-2 bg-card/60 px-6 text-base backdrop-blur"
            >
              {tr("hero.cta.treatments")}
              <ArrowRight className="size-4" />
            </LinkButton>
          </div>

          <dl className="mt-12 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat
              value={site.ratings.google.toFixed(1).replace(".", ",")}
              label={tr("hero.stat.rating")}
              icon={<Star className="size-4 fill-gold text-gold" />}
            />
            <Stat value={`${site.ratings.googleReviews}+`} label={tr("hero.stat.reviews")} />
            <Stat value={`${treatments.length}+`} label={tr("hero.stat.treatments")} />
            <Stat value="Ubud" label={tr("hero.stat.ubud")} />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({
  value,
  label,
  icon,
}: {
  value: string;
  label: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card/70 p-4 backdrop-blur">
      <dt className="flex items-center gap-1.5 font-heading text-2xl font-bold text-primary">
        {icon}
        {value}
      </dt>
      <dd className="mt-1 text-xs font-medium text-muted-foreground">{label}</dd>
    </div>
  );
}
