import { cn } from "@/lib/utils";

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = "center",
  onDark = false,
  className,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {kicker && (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
          <span className="h-px w-6 bg-gold/60" aria-hidden />
          {kicker}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 font-heading text-3xl font-bold text-balance sm:text-[2.6rem] sm:leading-tight",
          onDark ? "text-cream" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-base text-balance",
            onDark ? "text-cream/70" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
