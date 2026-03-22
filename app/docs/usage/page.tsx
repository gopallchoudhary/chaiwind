import type { Metadata } from "next";
import { CodeBlock } from "@/components/docs/code-block";
import { Callout } from "@/components/docs/callout";

export const metadata: Metadata = {
  title: "Usage",
  description: "How to load Chaiwind CSS and apply utility classes in your markup.",
};

export default function UsagePage() {
  return (
    <article className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Usage
        </h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          After installation, import the runtime once, then use{" "}
          <code className="rounded bg-[var(--muted)] px-1 font-mono text-sm">
            chai-*
          </code>{" "}
          classes on your elements.
        </p>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">npm</h2>
        <CodeBlock language="bash">{`npm install chaiwind`}</CodeBlock>
        <CodeBlock language="javascript">{`import "chaiwind";`}</CodeBlock>
        <p className="text-[var(--muted-foreground)]">
          Place the import in your client or universal entry (for example{" "}
          <code className="font-mono text-sm">main.jsx</code> or{" "}
          <code className="font-mono text-sm">app/layout.tsx</code>) so styles are
          available before your components render.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">CDN</h2>
        <CodeBlock language="html">{`<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/chaiwind-css/src/index.js"
></script>`}</CodeBlock>
        <p className="text-[var(--muted-foreground)]">
          The module bootstraps the same utility registry in the browser. Add the
          script tag to your HTML before using utility classes.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">
          Applying classes
        </h2>
        <CodeBlock language="html">{`<div class="chai-flex chai-gap-4 chai-p-4 chai-rounded-lg chai-border chai-bg-white">
  <p class="chai-text-lg chai-font-medium chai-text-gray">Hello Chaiwind</p>
</div>`}</CodeBlock>
      </section>

      <Callout title="Available groups">
        <ul className="list-disc space-y-1 pl-5">
          <li>Spacing: chai-p-*, chai-m-*</li>
          <li>Typography: chai-text-*, chai-font-*</li>
          <li>Colors: chai-bg-*, chai-text-*</li>
          <li>Layout: chai-flex, chai-grid, chai-grid-cols-*</li>
          <li>Borders, shadows, animations, and more — see Reference</li>
        </ul>
      </Callout>
    </article>
  );
}
