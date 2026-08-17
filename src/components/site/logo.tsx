import { cn } from "@/lib/utils";

const GREEN = "#2b4d3e";
const GOLD = "#c99a4e";
const CREAM = "#f2ecdd";

/** Lotus monogram + wordmark for Jembawan Spa. SVG uses hex (never oklch). */
export function Logo({
  className,
  onDark = false,
}: {
  className?: string;
  onDark?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5 select-none", className)}>
      <LogoMark size={38} />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-lg font-bold tracking-[0.14em]",
            onDark ? "text-cream" : "text-primary",
          )}
        >
          JEMBAWAN
        </span>
        <span className="text-[0.6rem] font-semibold tracking-[0.44em] text-gold">
          SPA · UBUD
        </span>
      </span>
    </span>
  );
}

export function LogoMark({ size = 40, className }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      role="img"
      aria-label="Jembawan Spa"
    >
      <circle cx="24" cy="24" r="23" fill={GREEN} />
      <circle cx="24" cy="24" r="19.5" fill="none" stroke={GOLD} strokeWidth="1" />
      {/* lotus petals */}
      <g fill="none" stroke={CREAM} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 33 C 20 28 20 20 24 15 C 28 20 28 28 24 33 Z" />
        <path d="M24 33 C 18 30 14 24 14 19 C 19 21 23 26 24 33 Z" />
        <path d="M24 33 C 30 30 34 24 34 19 C 29 21 25 26 24 33 Z" />
      </g>
      <path d="M24 15 C 24 20 24 27 24 33" stroke={GOLD} strokeWidth="1.4" fill="none" strokeLinecap="round" />
      <path d="M16 34 q 8 -3 16 0" stroke={GOLD} strokeWidth="1.3" fill="none" strokeLinecap="round" />
    </svg>
  );
}
