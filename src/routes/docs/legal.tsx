import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/docs-shell";
import { privacyPolicy, riskDisclaimer, termsOfService, type LegalBlock } from "@/lib/content";

export const Route = createFileRoute("/docs/legal")({ component: DocsLegal });

function LegalBlockView({ block }: { block: LegalBlock }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="text-2xl font-medium tracking-tight text-fg sm:text-3xl">{block.heading}</h2>
      {block.updated ? (
        <p className="mt-3 text-xs text-subtle">Last updated: {block.updated}</p>
      ) : null}
      {block.intro ? (
        <p className="mt-6 text-sm leading-relaxed text-muted sm:text-[15px]">{block.intro}</p>
      ) : null}
      <div className="mt-8 space-y-8">
        {block.sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-medium text-fg sm:text-[15px]">{section.title}</h3>
            {section.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="mt-2 text-sm leading-relaxed text-muted sm:text-[15px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

function DocsLegal() {
  return (
    <article className="mx-auto max-w-2xl">
      <SectionLabel>Legal</SectionLabel>
      <LegalBlockView block={riskDisclaimer} />
      <LegalBlockView block={termsOfService} />
      <LegalBlockView block={privacyPolicy} />
    </article>
  );
}
