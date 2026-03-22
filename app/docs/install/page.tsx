import type { Metadata } from "next";
import { InstallTabs } from "@/components/docs/install-tabs";

export const metadata: Metadata = {
  title: "Installation",
  description: "Install Chaiwind CSS via npm or the jsDelivr CDN module.",
};

export default function InstallPage() {
  return (
    <article className="max-w-3xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Installation
        </h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Choose npm for bundled apps or the CDN script for quick static pages.
        </p>
      </div>
      <InstallTabs />
    </article>
  );
}
