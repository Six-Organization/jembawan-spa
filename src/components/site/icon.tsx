import {
  HandHeart,
  Venus,
  Star,
  Leaf,
  CupSoda,
  Cookie,
  Flower2,
  Wind,
  ShowerHead,
  Sparkles,
  MapPin,
  Footprints,
  type LucideIcon,
} from "lucide-react";

const MAP: Record<string, LucideIcon> = {
  HandHeart,
  Venus,
  Star,
  Leaf,
  CupSoda,
  Cookie,
  Flower2,
  Wind,
  ShowerHead,
  Sparkles,
  MapPin,
  Footprints,
};

export function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? Sparkles;
  return <Cmp className={className} />;
}
