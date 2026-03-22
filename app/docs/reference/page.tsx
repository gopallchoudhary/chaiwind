import type { Metadata } from "next";
import { ClassTable } from "@/components/docs/class-table";

export const metadata: Metadata = {
  title: "Reference",
  description: "Searchable list of all Chaiwind CSS utility classes and declarations.",
};

export default function ReferencePage() {
  return (
    <article className="max-w-5xl space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[var(--foreground)]">
          Reference
        </h1>
        <p className="mt-2 text-[var(--muted-foreground)]">
          Every utility shipped with Chaiwind, grouped by category. Search by class
          name or CSS text.
        </p>
      </div>
      <ClassTable />
    </article>
  );
}
