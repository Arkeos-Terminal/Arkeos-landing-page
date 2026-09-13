import { cn } from "@/lib/utils";

/** Official A-mark. */
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

function LockupType({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={cn("lockup-type", className)}>{children}</span>;
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
      <BrandMark className={cn(markClassName ?? "h-9 w-auto")} />
      <div className="flex flex-col justify-center leading-none">
        <LockupType className="text-[11px] sm:text-xs">ARKEOS</LockupType>
        <LockupType className="mt-[0.7em] text-[11px] sm:text-xs">TERMINAL</LockupType>
      </div>
    </div>
  );
}

export function HeroLockup() {
  return (
    <div className="flex items-center gap-4 sm:gap-5">
      <BrandMark className="h-[4.5rem] w-auto sm:h-[5.25rem]" />
      <div className="flex flex-col justify-center leading-none">
        <LockupType className="text-[1.05rem] sm:text-[1.35rem]">ARKEOS</LockupType>
        <LockupType className="mt-[0.7em] text-[1.05rem] sm:text-[1.35rem]">
          TERMINAL
        </LockupType>
      </div>
    </div>
  );
}
