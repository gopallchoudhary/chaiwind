"use client";

import { useMemo, useState } from "react";
import {
  CATEGORY_ORDER,
  filterClassRows,
  getAllClassRows,
  type CategoryLabel,
} from "@/lib/chaiwind-reference";

export function ClassTable() {
  const rows = useMemo(() => getAllClassRows(), []);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryLabel | "Other" | "all">(
    "all"
  );

  const filtered = useMemo(
    () => filterClassRows(rows, query, category),
    [rows, query, category]
  );

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor="class-search">
          Search classes
        </label>
        <input
          id="class-search"
          type="search"
          placeholder="Search by class name or CSS…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] placeholder:text-[var(--muted-foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        />
        <label className="sr-only" htmlFor="class-category">
          Filter by category
        </label>
        <select
          id="class-category"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value as CategoryLabel | "Other" | "all")
          }
          className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-3 py-2 text-sm text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
        >
          <option value="all">All categories</option>
          {[...CATEGORY_ORDER, "Other" as const].map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <p className="text-sm text-[var(--muted-foreground)]">
        Showing {filtered.length} of {rows.length} utilities
      </p>
      <div className="overflow-x-auto rounded-xl border border-[var(--border)]">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead className="bg-[var(--muted)]/80">
            <tr>
              <th className="px-4 py-3 font-semibold text-[var(--foreground)]">
                Class
              </th>
              <th className="px-4 py-3 font-semibold text-[var(--foreground)]">
                Category
              </th>
              <th className="px-4 py-3 font-semibold text-[var(--foreground)]">
                CSS
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((row) => (
              <tr
                key={row.name}
                className="border-t border-[var(--border)] hover:bg-[var(--accent)]/40"
              >
                <td className="whitespace-nowrap px-4 py-2 font-mono text-[var(--foreground)]">
                  {row.name}
                </td>
                <td className="px-4 py-2 text-[var(--muted-foreground)]">
                  {row.category}
                </td>
                <td className="px-4 py-2 font-mono text-xs text-[var(--muted-foreground)]">
                  {row.css}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
