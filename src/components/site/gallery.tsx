"use client";

import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { SectionHeading } from "@/components/site/section-heading";
import { galleryTiles } from "@/data/content";

export function Gallery() {
  const { tr, pick } = useLanguage();

  return (
    <section id="gallery" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          kicker={tr("gallery.kicker")}
          title={tr("gallery.title")}
          subtitle={tr("gallery.subtitle")}
        />

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-4">
          {/* Big feature: real welcome photo */}
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-2xl border border-border/60 shadow-sm">
            <Image
              src="/spa/welcome.webp"
              alt="Jembawan Spa welcome"
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/55 to-transparent" />
            <p className="absolute bottom-3 left-4 font-heading text-base font-semibold text-cream drop-shadow">
              {tr("about.welcome")}
            </p>
          </div>

          {/* Real photos where available, gradient placeholders otherwise */}
          {galleryTiles.map((tile) => (
            <div
              key={tile.label.en}
              className="group relative overflow-hidden rounded-2xl border border-border/60 shadow-sm"
            >
              {tile.src ? (
                <Image
                  src={tile.src}
                  alt={pick(tile.label)}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <>
                  <div
                    className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                    style={{
                      backgroundImage: `linear-gradient(135deg, hsl(${tile.from}), hsl(${tile.to}))`,
                    }}
                  />
                  <ImageIcon className="absolute right-3 top-3 size-4 text-cream/60" />
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-forest/45 to-transparent" />
              <p className="absolute bottom-3 left-4 font-heading text-sm font-semibold text-cream drop-shadow sm:text-base">
                {pick(tile.label)}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">{tr("gallery.note")}</p>
      </div>
    </section>
  );
}
