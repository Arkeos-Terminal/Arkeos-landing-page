import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/docs-shell";
import { aboutLead } from "@/lib/content";

export const Route = createFileRoute("/docs/")({ component: DocsOverview });

function DocsOverview() {
  return (
    <article className="mx-auto max-w-2xl">
      <SectionLabel>About</SectionLabel>
      <h1 className="text-3xl font-medium tracking-tight text-fg sm:text-4xl">Arkeos</h1>
      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">{aboutLead}</p>
    </article>
  );
}
