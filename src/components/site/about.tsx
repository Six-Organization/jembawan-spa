"use client";

import Image from "next/image";
import { Venus, Star, MapPin } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";

export function About() {
  const { tr } = useLanguage();

  const features = [
    { icon: Venus, key: "about.feature.women" },
    { icon: Star, key: "about.feature.rating" },
    { icon: MapPin, key: "about.feature.ubud" },
  ] as const;

  return (
    <section id="about" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Photo */}
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
              <Image
                src="/spa/welcome.webp"
                alt="A warm welcome at Jembawan Spa"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent" />
              <p className="absolute bottom-5 left-6 font-heading text-lg font-semibold text-cream drop-shadow">
                {tr("about.welcome")}
              </p>
            </div>
            <div className="absolute -right-3 -top-3 rounded-2xl border border-border/60 bg-card px-4 py-3 shadow-lg">
              <p className="font-heading text-2xl font-bold text-primary">4,8★</p>
              <p className="text-xs text-muted-foreground">885+ reviews</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <SectionHeading align="left" kicker={tr("about.kicker")} title={tr("about.title")} />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80">
              <p>{tr("about.p1")}</p>
              <p>{tr("about.p2")}</p>
            </div>
            <ul className="mt-8 flex flex-wrap gap-3">
              {features.map((f) => (
                <li
                  key={f.key}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium"
                >
                  <f.icon className="size-4 text-sage" />
                  {tr(f.key)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
