"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { Icon } from "@/components/site/icon";
import { highlights } from "@/data/content";

export function Highlights() {
  const { tr, pick } = useLanguage();

  return (
    <section id="why" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("why.kicker")}
          title={tr("why.title")}
          subtitle={tr("why.subtitle")}
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.icon}
              className="group rounded-2xl border border-border/60 bg-card p-6 transition-shadow hover:shadow-lg"
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-sage/15 text-sage transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={h.icon} className="size-6" />
              </div>
              <h3 className="mt-4 font-heading text-lg font-semibold">{pick(h.title)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(h.desc)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
