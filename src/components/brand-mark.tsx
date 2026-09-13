import { cn } from "@/lib/utils";

const LOCKUP_SRC = "/linkpreview.png";

export function Wordmark({ className }: { className?: string }) {
  return (
    <img
      src={LOCKUP_SRC}
      alt="Arkeos Terminal"
      className={cn("h-9 w-[11.75rem] object-cover object-center", className)}
      draggable={false}
    />
  );
}

export function HeroLockup() {
  return (
    <img
      src={LOCKUP_SRC}
      alt="Arkeos Terminal"
      className="h-auto w-[min(100%,36rem)] object-contain"
      draggable={false}
    />
  );
}
