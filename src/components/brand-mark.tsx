import { cn } from "@/lib/utils";

/** New Arkeos mark, no wordmark. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png"
      alt=""
      className={cn("shrink-0 object-contain", className)}
      draggable={false}
    />
  );
}

export function HeroLockup() {
  return (
    <img
      src="/wordmark.png"
      alt="Arkeos"
      className="h-auto w-[min(100%,34rem)] object-contain"
      draggable={false}
    />
  );
}
