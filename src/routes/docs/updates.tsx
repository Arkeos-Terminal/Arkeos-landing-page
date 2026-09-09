import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/docs-shell";

export const Route = createFileRoute("/docs/updates")({ component: DocsUpdates });

function DocsUpdates() {
  return (
    <article className="mx-auto max-w-2xl">
      <SectionLabel>Updates</SectionLabel>
      <h1 className="text-3xl font-medium tracking-tight text-fg sm:text-4xl">Launch log</h1>
      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">
        No public updates yet. Waitlist members hear first — join from the home page and
        we'll email you when the Terminal opens.
      </p>
    </article>
  );
}
