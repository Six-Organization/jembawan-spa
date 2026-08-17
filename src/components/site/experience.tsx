"use client";

import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { Icon } from "@/components/site/icon";
import { experience } from "@/data/content";

export function Experience() {
  const { tr, pick } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-20 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("exp.kicker")}
          title={tr("exp.title")}
          subtitle={tr("exp.subtitle")}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {experience.map((e) => (
            <div
              key={e.icon + e.label.en}
              className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card p-4 transition-shadow hover:shadow-md"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-sage/15 text-sage">
                <Icon name={e.icon} className="size-5" />
              </span>
              <span className="text-sm font-medium leading-tight">{pick(e.label)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
