"use client";

import { useState } from "react";
import { CodeBlock } from "./code-block";
import { Callout } from "./callout";

const cdnSnippet = `<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/chaiwind-css/src/index.js"
></script>`;

const npmInstall = `npm install chaiwind-css`;

const npmImport = `import "chaiwind-css";`;

export function InstallTabs() {
	const [tab, setTab] = useState<"cdn" | "npm">("npm");

	return (
		<div className="space-y-6">
			{/* <Callout title="Package names">
        The npm package is published as{" "}
        <code className="rounded bg-[var(--muted)] px-1 font-mono text-sm">chaiwind</code>
        , while the jsDelivr URL uses the{" "}
        <code className="rounded bg-[var(--muted)] px-1 font-mono text-sm">
          chaiwind-css
        </code>{" "}
        scope. Use the snippet that matches how you install.
      </Callout> */}

			<div className="flex gap-2 rounded-xl border border-[var(--border)] bg-[var(--muted)]/50 p-1">
				<button
					type="button"
					onClick={() => setTab("npm")}
					className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition ${
						tab === "npm"
							? "bg-[var(--background)] text-[var(--foreground)] shadow-sm"
							: "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
					}`}
				>
					npm
				</button>
				<button
					type="button"
					onClick={() => setTab("cdn")}
					className={`flex-1 rounded-lg px-4 py-2 text-sm font-medium transition ${
						tab === "cdn"
							? "bg-[var(--background)] text-[var(--foreground)] shadow-sm"
							: "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
					}`}
				>
					CDN (module)
				</button>
			</div>

			{tab === "npm" ? (
				<div className="space-y-4">
					<p className="text-[var(--muted-foreground)]">
						Add the package, then import once in your entry file so utilities
						are registered.
					</p>
					<CodeBlock language="bash">{npmInstall}</CodeBlock>
					<CodeBlock language="javascript">{npmImport}</CodeBlock>
				</div>
			) : (
				<div className="space-y-4">
					<p className="text-[var(--muted-foreground)]">
						Load the library as an ES module (for example in static HTML or a
						simple Vite page without a bundler step).
					</p>
					<CodeBlock language="html">{cdnSnippet}</CodeBlock>
				</div>
			)}
		</div>
	);
}
