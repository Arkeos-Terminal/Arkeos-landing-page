import { createFileRoute, Link } from "@tanstack/react-router";
import { HeroLockup } from "@/components/brand-mark";
import { IconArrowUpRight } from "@/components/icons";
import { WaitlistForm } from "@/components/waitlist-form";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <main className="relative isolate flex min-h-dvh flex-col overflow-hidden bg-bg text-fg">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[55vh] glow-top" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[42vh] glow-bottom" />

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
        <div className="hero-enter flex flex-col items-center">
          <HeroLockup />
        </div>

        <h1 className="hero-enter hero-enter-d1 mt-14 text-center text-[2.35rem] font-medium leading-tight tracking-tight text-fg sm:text-5xl">
          Coming soon
        </h1>
        <p className="hero-enter hero-enter-d2 mt-5 max-w-md text-center text-sm leading-relaxed text-muted sm:text-[15px]">
          Arkeos is the terminal for tokenized TCGs.
          <br className="hidden sm:block" /> You'll be invited for early access as soon as we
          launch.
        </p>

        <div className="relative mt-10 w-full max-w-md">
          <WaitlistForm className="mx-auto" />
        </div>
      </section>
    </main>
  );
}
