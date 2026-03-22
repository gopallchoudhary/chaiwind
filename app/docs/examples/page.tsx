import type { Metadata } from "next";
import { ExamplesShowcase } from "@/components/examples/examples-showcase";

export const metadata: Metadata = {
  title: "Examples",
  description: "Live previews of Chaiwind CSS utilities for layout, typography, and motion.",
};

export default function ExamplesPage() {
  return (
    <article className="max-w-4xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Examples
        </h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          These previews use the same injected stylesheet as the reference data. Animation
          utilities rely on keyframes included on documentation routes.
        </p>
      </div>
      <ExamplesShowcase />
    </article>
  );
}
