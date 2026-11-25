import { Link } from "@tanstack/react-router";
import { HeroLockup } from "@/components/brand-mark";
import { IconArrowUpRight } from "@/components/icons";
import { WaitlistForm } from "@/components/waitlist-form";

export function Landing() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-bg text-fg">
      <div className="pointer-events-none absolute inset-0 glow-field" />

      <header className="relative z-10 flex justify-end px-5 pt-5 sm:px-8 sm:pt-7">
        <Link
          to="/docs"
          className="docs-chip inline-flex h-11 min-h-11 items-center gap-2 rounded-pill px-4 text-sm text-fg transition-transform duration-150 ease-out active:scale-press"
        >
          Docs
          <IconArrowUpRight />
        </Link>
      </header>

      <section className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-24 pt-8">
        <div className="hero-enter flex w-full justify-center">
          <HeroLockup />
        </div>

        <h1 className="headline-pop hero-enter hero-enter-d1 mt-8 text-center text-[2.6rem] leading-none sm:mt-10 sm:text-6xl">
          Coming soon
        </h1>
        <p className="subtext-outline hero-enter hero-enter-d2 mt-6 max-w-xl text-center text-base font-extrabold leading-snug sm:text-lg">
          <span className="block">Arkeos is the world's first Collectibles Casino.</span>
          <span className="mt-1 block font-bold">
            You'll be invited for early access as soon as we launch.
          </span>
        </p>

        <div className="relative mt-10 w-full max-w-lg">
          <WaitlistForm className="mx-auto" />
        </div>
      </section>
    </main>
  );
}
