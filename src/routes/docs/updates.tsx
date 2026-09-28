import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/docs-shell";

export const Route = createFileRoute("/docs/updates")({ component: DocsUpdates });

function DocsUpdates() {
  return (
    <article className="mx-auto max-w-2xl">
      <SectionLabel>Updates</SectionLabel>
      <h1 className="text-3xl font-medium tracking-tight text-fg sm:text-4xl">Rebranded to Arkeos</h1>
    </article>
  );
}
