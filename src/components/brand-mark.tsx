import { cn } from "@/lib/utils";

/** New Arkeos mark, no wordmark. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png?v=3"
      alt=""
      className={cn("shrink-0 object-contain", className)}
      draggable={false}
    />
  );
}

export function HeroLockup() {
  return (
    <img
      src="/wordmark.png?v=3"
      alt="Arkeos"
      className="mx-auto block h-auto w-[min(88vw,26rem)] object-contain"
      draggable={false}
    />
  );
}
