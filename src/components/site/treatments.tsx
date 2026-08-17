"use client";

import * as React from "react";
import { Clock, ArrowRight, Star, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import {
  treatments,
  treatmentCategories,
  formatPrice,
  type Treatment,
} from "@/data/treatments";
import { cn } from "@/lib/utils";

/** Fire a global event the booking form listens for, then scroll to it. */
function selectTreatment(name: string) {
  window.dispatchEvent(new CustomEvent("select-treatment", { detail: name }));
  document.getElementById("book")?.scrollIntoView({ behavior: "smooth" });
}

export function Treatments() {
  const { tr, pick } = useLanguage();
  const [active, setActive] = React.useState("all");

  const cats = treatmentCategories;
  const filtered =
    active === "all" ? treatments : treatments.filter((t) => t.category === active);

  return (
    <section id="treatments" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("treat.kicker")}
          title={tr("treat.title")}
          subtitle={tr("treat.subtitle")}
        />

        {/* Category pills */}
        <div className="mt-10 -mx-4 flex snap-x gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          <Pill active={active === "all"} onClick={() => setActive("all")}>
            {tr("treat.all")}
          </Pill>
          {cats.map((c) => (
            <Pill key={c.id} active={active === c.id} onClick={() => setActive(c.id)}>
              {pick(c.label)}
            </Pill>
          ))}
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {filtered.map((t) => (
            <TreatmentCard key={t.id} t={t} pick={pick} tr={tr} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">{tr("treat.note")}</p>
      </div>
    </section>
  );
}

function Pill({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-primary bg-primary text-primary-foreground shadow-sm"
          : "border-border bg-card text-foreground/75 hover:border-sage/50 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

function TreatmentCard({
  t,
  pick,
  tr,
}: {
  t: Treatment;
  pick: (v: { id: string; en: string }) => string;
  tr: (k: string) => string;
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-border/60 bg-card p-5 transition-shadow hover:shadow-md">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-heading text-lg font-semibold leading-snug">{t.name}</h3>
        <div className="flex shrink-0 gap-1.5">
          {t.tags?.includes("popular") && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold/15 px-2 py-0.5 text-[0.65rem] font-semibold text-[hsl(36_60%_38%)]">
              <Star className="size-3 fill-current" />
              {tr("tag.popular")}
            </span>
          )}
          {t.tags?.includes("signature") && (
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary">
              <Sparkles className="size-3" />
              {tr("tag.signature")}
            </span>
          )}
        </div>
      </div>

      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{pick(t.desc)}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {t.durations.map((d) => (
          <span
            key={d.minutes}
            className="inline-flex items-center gap-1.5 rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium"
          >
            <Clock className="size-3.5 text-sage" />
            {d.minutes} {tr("unit.min")}
            <span className="font-bold text-primary">{formatPrice(d.price)}</span>
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => selectTreatment(t.name)}
        className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-sage"
      >
        {tr("treat.book")}
        <ArrowRight className="size-4" />
      </button>
    </div>
  );
}
