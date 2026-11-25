import { cn } from "@/lib/utils";

/** New Arkeos mark, no wordmark. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.png?v=7"
      alt=""
      className={cn("shrink-0 object-contain", className)}
      draggable={false}
    />
  );
}

export function HeroLockup() {
  return (
    <img
      src="/wordmark.png?v=8"
      alt="Arkeos"
      className="mx-auto block h-auto w-[min(90vw,32rem)] object-contain"
      draggable={false}
    />
  );
}
