import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/docs-shell";
import { aboutBody, features } from "@/lib/content";

export const Route = createFileRoute("/docs/")({ component: DocsOverview });

function DocsOverview() {
  return (
    <article className="mx-auto max-w-2xl">
      <SectionLabel>About</SectionLabel>
      <h1 className="text-3xl font-medium tracking-tight text-fg sm:text-4xl">
        Arkeos Terminal
      </h1>
      <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">{aboutBody}</p>

      <div className="mt-14">
        <SectionLabel>Features</SectionLabel>
        <ul className="mt-4 space-y-5">
          {features.map((feature) => (
            <li key={feature.title} className="text-sm leading-relaxed text-muted sm:text-[15px]">
              <span className="font-medium text-fg">{feature.title}</span> {feature.body}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
