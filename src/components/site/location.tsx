"use client";

import { MapPin, Clock, ExternalLink, Navigation } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { LinkButton } from "@/components/site/link-button";
import { site } from "@/data/site";
import { nearby } from "@/data/content";

export function Location() {
  const { tr, pick } = useLanguage();
  const mapSrc = `https://www.google.com/maps?q=${site.address.lat},${site.address.lng}&z=16&output=embed`;

  return (
    <section id="location" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("location.kicker")}
          title={tr("location.title")}
          subtitle={tr("location.subtitle")}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 shadow-md">
            <iframe
              title="Jembawan Spa — Google Maps"
              src={mapSrc}
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard icon={MapPin} title={tr("location.address")} className="sm:col-span-2">
              <p className="text-sm text-muted-foreground">{site.address.line}</p>
              <p className="mt-1 text-xs text-muted-foreground/80">Plus Code: {site.address.plusCode}</p>
              <LinkButton
                href={site.links.directions}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                size="sm"
                className="mt-3 gap-1.5"
              >
                {tr("location.directions")}
                <ExternalLink className="size-3.5" />
              </LinkButton>
            </InfoCard>

            <InfoCard icon={Clock} title={tr("location.hours")}>
              <p className="text-sm font-medium">{tr("location.everyday")}</p>
              <p className="text-sm text-muted-foreground">
                {site.hours.open} – {site.hours.close}
              </p>
            </InfoCard>

            <InfoCard icon={Navigation} title={tr("location.nearby")}>
              <ul className="mt-1 space-y-1.5">
                {nearby.map((n) => (
                  <li key={n.name.en} className="flex items-center justify-between text-sm">
                    <span className="text-foreground/85">{pick(n.name)}</span>
                    <span className="font-medium text-primary">{n.distance}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
  className,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`rounded-2xl border border-border/60 bg-card p-5 ${className ?? ""}`}>
      <div className="flex items-center gap-2 text-sage">
        <Icon className="size-4" />
        <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-foreground">
          {title}
        </h3>
      </div>
      <div className="mt-2">{children}</div>
    </div>
  );
}
