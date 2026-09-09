import { createFileRoute, Outlet } from "@tanstack/react-router";
import { DocsShell } from "@/components/docs-shell";
import { site } from "@/lib/site";

export const Route = createFileRoute("/docs")({
  component: DocsLayout,
  head: () => ({
    meta: [
      { title: `Docs — ${site.name}` },
      {
        name: "description",
        content: "About Arkeos Terminal, product updates, and legal.",
      },
    ],
  }),
});

function DocsLayout() {
  return (
    <DocsShell>
      <Outlet />
    </DocsShell>
  );
}
