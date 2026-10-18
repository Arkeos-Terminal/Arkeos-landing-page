import { cn } from "@/lib/utils";

/** New Arkeos mark, no wordmark. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <img
      src="/logo.svg?v=4"
      alt=""
      className={cn("shrink-0 object-contain", className)}
      draggable={false}
    />
  );
}

export function HeroLockup() {
  return (
    <img
      src="/wordmark.svg?v=4"
      alt="Arkeos"
      className="mx-auto block h-auto w-[min(58vw,18rem)] object-contain"
      draggable={false}
    />
  );
}
