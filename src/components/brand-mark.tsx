import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 868 751"
      className={cn("shrink-0 fill-current", className)}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="143,502 432,502 289,750 0,750" />
      <polygon points="434,0 867,750 579,750 144,501" />
    </svg>
  );
}

export function Wordmark({
  className,
  markClassName,
  stacked = true,
}: {
  className?: string;
  markClassName?: string;
  stacked?: boolean;
}) {
  return (
    <div className={cn("flex items-center", stacked ? "gap-3" : "gap-2.5", className)}>
      <BrandMark className={cn("text-fg", markClassName ?? "h-9 w-auto")} />
      <div className="flex flex-col justify-center leading-none">
        <span className="text-[13px] font-semibold tracking-brand text-fg">ARKEOS</span>
        <span className="mt-1 text-[13px] font-normal tracking-brand text-muted">
          TERMINAL
        </span>
      </div>
    </div>
  );
}

export function HeroLockup() {
  return (
    <div className="flex flex-col items-center gap-5">
      <BrandMark className="h-16 w-auto text-fg sm:h-[4.5rem]" />
      <p className="text-center text-sm font-medium tracking-brand text-fg sm:text-[15px]">
        ARKEOS TERMINAL
      </p>
    </div>
  );
}
