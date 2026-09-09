import { cn } from "@/lib/utils";

/**
 * Official Arkeos A: two parallelograms traced from the source PNG
 * (IoU 0.998). The inner vertex of the right stroke is the A-notch,
 * not the left bar — that false corner was filling the hole.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 865 748"
      className={cn("shrink-0 fill-current", className)}
      aria-hidden="true"
      focusable="false"
    >
      <polygon points="143,500 431,500 288,748 0,748" />
      <polygon points="433,0 289,249 577,748 865,748" />
    </svg>
  );
}

export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <BrandMark className={cn("text-fg", markClassName ?? "h-9 w-auto")} />
      <div className="flex flex-col justify-center leading-none">
        <span className="text-[13px] font-semibold tracking-brand text-fg">ARKEOS</span>
        <span className="mt-1 text-[13px] font-medium tracking-brand text-fg">TERMINAL</span>
      </div>
    </div>
  );
}

export function HeroLockup() {
  return (
    <div className="flex items-center gap-4 sm:gap-5">
      <BrandMark className="h-14 w-auto text-fg sm:h-16" />
      <div className="flex flex-col justify-center leading-none">
        <span className="text-[1.2rem] font-semibold tracking-brand text-fg sm:text-[1.45rem]">
          ARKEOS
        </span>
        <span className="mt-1.5 text-[1.2rem] font-medium tracking-brand text-fg sm:text-[1.45rem]">
          TERMINAL
        </span>
      </div>
    </div>
  );
}
