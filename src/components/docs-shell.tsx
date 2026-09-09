import { Link } from "@tanstack/react-router";
import { Wordmark } from "@/components/brand-mark";
import { IconMail, IconX } from "@/components/icons";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/docs", label: "Overview", exact: true },
  { to: "/docs/updates", label: "Updates", exact: true },
  { to: "/docs/legal", label: "Legal", exact: true },
] as const;

export function DocsShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate min-h-dvh bg-bg text-fg">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45vh] glow-bottom opacity-80" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-4 sm:px-6 sm:py-6 lg:flex-row lg:items-start lg:gap-5 lg:px-8 lg:py-8">
        <aside className="card-surface flex w-full shrink-0 flex-col gap-6 rounded-card p-5 sm:p-6 lg:sticky lg:top-8 lg:h-[calc(100dvh-4rem)] lg:w-64 lg:gap-8 lg:p-6">
          <Link to="/" className="self-start" aria-label="Arkeos Terminal home">
            <Wordmark markClassName="h-8 w-auto" />
          </Link>

          <nav aria-label="Docs" className="flex flex-row gap-1 lg:flex-col">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                className={cn(
                  "rounded-lg px-3 py-2.5 text-sm text-muted transition-colors duration-quick",
                  "hover:text-fg",
                )}
                activeProps={{
                  className: "text-fg",
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto hidden flex-col gap-3 border-t border-line pt-6 lg:flex">
            <p className="text-xs tracking-wide text-subtle">Follow for updates</p>
            <a
              href={site.xUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm text-muted transition-colors duration-quick hover:text-fg"
            >
              <IconX className="size-3.5" />
              {site.xHandle}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 text-sm text-muted transition-colors duration-quick hover:text-fg"
            >
              <IconMail className="size-3.5" />
              {site.email}
            </a>
          </div>
        </aside>

        <main className="card-surface min-w-0 flex-1 rounded-card px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {children}
          <footer className="mt-12 flex flex-col gap-3 border-t border-line pt-6 lg:hidden">
            <p className="text-xs tracking-wide text-subtle">Follow for updates</p>
            <a
              href={site.xUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm text-muted hover:text-fg"
            >
              <IconX className="size-3.5" />
              {site.xHandle}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2.5 text-sm text-muted hover:text-fg"
            >
              <IconMail className="size-3.5" />
              {site.email}
            </a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-subtle">
      {children}
    </p>
  );
}
