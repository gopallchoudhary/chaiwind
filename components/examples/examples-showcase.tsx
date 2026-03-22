"use client";

function SectionHeader({
	title,
	description,
}: {
	title: string;
	description?: string;
}) {
	return (
		<div className="space-y-1">
			<h2 className="text-xl font-semibold text-[var(--foreground)]">{title}</h2>
			{description && (
				<p className="text-sm text-[var(--muted-foreground)]">{description}</p>
			)}
		</div>
	);
}

function CodeLabel({ code }: { code: string }) {
	return (
		<p className="text-sm text-[var(--muted-foreground)]">
			<code className="font-mono">{code}</code>
		</p>
	);
}

function Preview({ children }: { children: React.ReactNode }) {
	return (
		<div className="rounded-xl border border-[var(--border)] bg-[var(--muted)]/40 p-6">
			{children}
		</div>
	);
}

// ─────────────────────────────────────────────
// LAYOUT
// ─────────────────────────────────────────────

function FlexRowExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Flex Row" />
			<CodeLabel code="chai-flex chai-items-center chai-gap-4 chai-p-4 chai-rounded-lg chai-border chai-bg-white chai-shadow-sm" />
			<Preview>
				<div className="chai-flex chai-items-center chai-gap-4 chai-p-4 chai-rounded-lg chai-border chai-bg-white chai-shadow-sm">
					<span className="chai-h-10 chai-w-10 chai-rounded-full chai-bg-blue" />
					<div className="chai-flex chai-flex-col chai-gap-1">
						<span className="chai-text-base chai-font-semibold chai-text-black">Card title</span>
						<span className="chai-text-sm chai-text-gray">Supporting text</span>
					</div>
				</div>
			</Preview>
		</section>
	);
}

function FlexColExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Flex Column" />
			<CodeLabel code="chai-flex chai-flex-col chai-gap-3 chai-items-start" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-3 chai-items-start">
					<div className="chai-flex chai-items-center chai-gap-2">
						<span className="chai-h-3 chai-w-3 chai-rounded-full chai-bg-green" />
						<span className="chai-text-sm chai-text-black">Item one</span>
					</div>
					<div className="chai-flex chai-items-center chai-gap-2">
						<span className="chai-h-3 chai-w-3 chai-rounded-full chai-bg-orange" />
						<span className="chai-text-sm chai-text-black">Item two</span>
					</div>
					<div className="chai-flex chai-items-center chai-gap-2">
						<span className="chai-h-3 chai-w-3 chai-rounded-full chai-bg-purple" />
						<span className="chai-text-sm chai-text-black">Item three</span>
					</div>
				</div>
			</Preview>
		</section>
	);
}

function FlexWrapExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Flex Wrap" />
			<CodeLabel code="chai-flex chai-flex-wrap chai-gap-2" />
			<Preview>
				<div className="chai-flex chai-flex-wrap chai-gap-2">
					{["React", "Next.js", "TypeScript", "Tailwind", "Chaiwind", "Node.js", "Framer"].map((tag) => (
						<span
							key={tag}
							className="chai-px-3 chai-py-1 chai-rounded-full chai-bg-blue chai-text-white chai-text-sm chai-font-medium"
						>
							{tag}
						</span>
					))}
				</div>
			</Preview>
		</section>
	);
}

function JustifyBetweenExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Justify Between" />
			<CodeLabel code="chai-flex chai-justify-between chai-items-center" />
			<Preview>
				<div className="chai-flex chai-justify-between chai-items-center chai-p-4 chai-rounded-lg chai-bg-white chai-border chai-shadow-sm">
					<span className="chai-font-semibold chai-text-black">Balance</span>
					<span className="chai-text-green chai-font-bold chai-text-lg">$4,200.00</span>
				</div>
			</Preview>
		</section>
	);
}

function GridExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Grid 3 Columns" />
			<CodeLabel code="chai-grid chai-grid-cols-3 chai-gap-4" />
			<Preview>
				<div className="chai-grid chai-grid-cols-3 chai-gap-4">
					<div className="chai-h-16 chai-rounded-md chai-bg-red" />
					<div className="chai-h-16 chai-rounded-md chai-bg-green" />
					<div className="chai-h-16 chai-rounded-md chai-bg-blue" />
				</div>
			</Preview>
		</section>
	);
}

function GridCardsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Grid Cards" />
			<CodeLabel code="chai-grid chai-grid-cols-2 chai-gap-4" />
			<Preview>
				<div className="chai-grid chai-grid-cols-2 chai-gap-4">
					{[
						{ label: "Users", value: "12,400", color: "chai-bg-blue" },
						{ label: "Revenue", value: "$8,200", color: "chai-bg-green" },
						{ label: "Orders", value: "3,100", color: "chai-bg-orange" },
						{ label: "Returns", value: "240", color: "chai-bg-red" },
					].map((stat) => (
						<div
							key={stat.label}
							className="chai-p-4 chai-rounded-xl chai-bg-white chai-border chai-shadow-sm chai-flex chai-flex-col chai-gap-1"
						>
							<div className={`chai-h-2 chai-w-8 chai-rounded-full ${stat.color}`} />
							<p className="chai-text-2xl chai-font-bold chai-text-black">{stat.value}</p>
							<p className="chai-text-sm chai-text-gray">{stat.label}</p>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// TYPOGRAPHY
// ─────────────────────────────────────────────

function TypographyScaleExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Type Scale" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-3">
					<p className="chai-text-4xl chai-font-bold chai-text-black chai-tracking-tight">Display — 4xl bold</p>
					<p className="chai-text-3xl chai-font-semibold chai-text-black">Heading — 3xl semibold</p>
					<p className="chai-text-2xl chai-font-medium chai-text-black">Title — 2xl medium</p>
					<p className="chai-text-xl chai-text-black">Subtitle — xl normal</p>
					<p className="chai-text-base chai-text-gray chai-leading-normal">Body — base with comfortable line height and gray color for readability.</p>
					<p className="chai-text-sm chai-text-gray">Small — sm for captions and supporting text</p>
					<p className="chai-text-xs chai-uppercase chai-tracking-wider chai-text-purple">Eyebrow — xs uppercase tracked</p>
				</div>
			</Preview>
		</section>
	);
}

function FontWeightsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Font Weights" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-2">
					{[
						{ cls: "chai-font-thin", label: "Thin — 100" },
						{ cls: "chai-font-light", label: "Light — 300" },
						{ cls: "chai-font-normal", label: "Normal — 400" },
						{ cls: "chai-font-medium", label: "Medium — 500" },
						{ cls: "chai-font-semibold", label: "Semibold — 600" },
						{ cls: "chai-font-bold", label: "Bold — 700" },
						{ cls: "chai-font-black", label: "Black — 900" },
					].map(({ cls, label }) => (
						<p key={cls} className={`chai-text-lg chai-text-black ${cls}`}>
							{label}
						</p>
					))}
				</div>
			</Preview>
		</section>
	);
}

function TextColorsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Text Colors" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-2">
					{[
						{ cls: "chai-text-red", label: "chai-text-red" },
						{ cls: "chai-text-orange", label: "chai-text-orange" },
						{ cls: "chai-text-yellow", label: "chai-text-yellow" },
						{ cls: "chai-text-green", label: "chai-text-green" },
						{ cls: "chai-text-blue", label: "chai-text-blue" },
						{ cls: "chai-text-purple", label: "chai-text-purple" },
						{ cls: "chai-text-pink", label: "chai-text-pink" },
						{ cls: "chai-text-teal", label: "chai-text-teal" },
						{ cls: "chai-text-indigo", label: "chai-text-indigo" },
					].map(({ cls, label }) => (
						<p key={cls} className={`chai-text-lg chai-font-medium ${cls}`}>
							{label}
						</p>
					))}
				</div>
			</Preview>
		</section>
	);
}

function TextDecorationExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Text Decoration & Transform" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-3">
					<p className="chai-text-base chai-underline chai-text-black">chai-underline — underlined text</p>
					<p className="chai-text-base chai-line-through chai-text-gray">chai-line-through — strikethrough</p>
					<p className="chai-text-base chai-uppercase chai-tracking-wider chai-text-black">chai-uppercase tracking-wider</p>
					<p className="chai-text-base chai-capitalize chai-text-black">chai-capitalize — first letter only</p>
					<p className="chai-text-base chai-italic chai-text-gray">chai-italic — italic style</p>
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// SPACING
// ─────────────────────────────────────────────

function PaddingExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Padding Scale" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-3">
					{[2, 4, 6, 8].map((n) => (
						<div key={n} className="chai-flex chai-items-center chai-gap-4">
							<code className="chai-text-xs chai-text-purple w-20 shrink-0">chai-p-{n}</code>
							<div className={`chai-bg-orange chai-rounded chai-p-${n} chai-text-white chai-text-xs`}>
								p-{n}
							</div>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

function MarginExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Margin & Auto Center" />
			<CodeLabel code="chai-mx-auto chai-max-w-xs" />
			<Preview>
				<div className="chai-bg-white chai-border chai-rounded-xl chai-p-4 chai-shadow-sm chai-mx-auto" style={{ maxWidth: "280px" }}>
					<p className="chai-text-sm chai-text-center chai-text-gray">This box is centered with <code>chai-mx-auto</code></p>
				</div>
			</Preview>
		</section>
	);
}

function GapExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Gap Scale" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-4">
					{[1, 2, 4, 6, 8].map((n) => (
						<div key={n} className="chai-flex chai-items-center chai-gap-3">
							<code className="chai-text-xs chai-text-purple w-16 shrink-0">gap-{n}</code>
							<div className={`chai-flex chai-gap-${n}`}>
								<div className="chai-h-6 chai-w-6 chai-rounded chai-bg-blue" />
								<div className="chai-h-6 chai-w-6 chai-rounded chai-bg-teal" />
								<div className="chai-h-6 chai-w-6 chai-rounded chai-bg-orange" />
							</div>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// COLORS
// ─────────────────────────────────────────────

function BackgroundColorsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Background Colors" />
			<Preview>
				<div className="chai-grid chai-grid-cols-4 chai-gap-3">
					{[
						{ cls: "chai-bg-red", label: "red" },
						{ cls: "chai-bg-orange", label: "orange" },
						{ cls: "chai-bg-yellow", label: "yellow" },
						{ cls: "chai-bg-green", label: "green" },
						{ cls: "chai-bg-teal", label: "teal" },
						{ cls: "chai-bg-blue", label: "blue" },
						{ cls: "chai-bg-indigo", label: "indigo" },
						{ cls: "chai-bg-purple", label: "purple" },
						{ cls: "chai-bg-pink", label: "pink" },
						{ cls: "chai-bg-gray", label: "gray" },
						{ cls: "chai-bg-black", label: "black" },
						{ cls: "chai-bg-white chai-border", label: "white" },
					].map(({ cls, label }) => (
						<div key={label} className="chai-flex chai-flex-col chai-items-center chai-gap-2">
							<div className={`chai-h-12 chai-w-full chai-rounded-lg ${cls}`} />
							<code className="chai-text-xs chai-text-gray">{label}</code>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// BORDERS & RADIUS
// ─────────────────────────────────────────────

function BorderRadiusExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Border Radius" />
			<Preview>
				<div className="chai-flex chai-flex-wrap chai-gap-6 chai-items-end">
					{[
						{ cls: "chai-rounded-sm", label: "sm" },
						{ cls: "chai-rounded", label: "default" },
						{ cls: "chai-rounded-md", label: "md" },
						{ cls: "chai-rounded-lg", label: "lg" },
						{ cls: "chai-rounded-xl", label: "xl" },
						{ cls: "chai-rounded-2xl", label: "2xl" },
						{ cls: "chai-rounded-full", label: "full" },
					].map(({ cls, label }) => (
						<div key={label} className="chai-flex chai-flex-col chai-items-center chai-gap-2">
							<div className={`chai-h-12 chai-w-12 chai-bg-blue ${cls}`} />
							<code className="chai-text-xs chai-text-gray">{label}</code>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

function BorderWidthExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Border Width & Color" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-4">
					<div className="chai-border chai-border-gray chai-rounded-lg chai-p-4 chai-text-sm chai-text-black">
						<code>chai-border chai-border-gray</code> — 1px gray border
					</div>
					<div className="chai-border-2 chai-border-blue chai-rounded-lg chai-p-4 chai-text-sm chai-text-black">
						<code>chai-border-2 chai-border-blue</code> — 2px blue border
					</div>
					<div className="chai-border-4 chai-border-orange chai-rounded-lg chai-p-4 chai-text-sm chai-text-black">
						<code>chai-border-4 chai-border-orange</code> — 4px orange border
					</div>
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// SHADOWS
// ─────────────────────────────────────────────

function ShadowsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Box Shadows" />
			<Preview>
				<div className="chai-grid chai-grid-cols-3 chai-gap-6">
					{[
						{ cls: "chai-shadow-sm", label: "shadow-sm" },
						{ cls: "chai-shadow", label: "shadow" },
						{ cls: "chai-shadow-md", label: "shadow-md" },
						{ cls: "chai-shadow-lg", label: "shadow-lg" },
						{ cls: "chai-shadow-xl", label: "shadow-xl" },
						{ cls: "chai-shadow-2xl", label: "shadow-2xl" },
					].map(({ cls, label }) => (
						<div key={label} className="chai-flex chai-flex-col chai-items-center chai-gap-3">
							<div className={`chai-h-16 chai-w-full chai-bg-white chai-rounded-xl ${cls}`} />
							<code className="chai-text-xs chai-text-gray">{label}</code>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// SIZING
// ─────────────────────────────────────────────

function SizingExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Width Scale" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-2">
					{[
						{ cls: "chai-w-16", label: "w-16 — 4rem" },
						{ cls: "chai-w-32", label: "w-32 — 8rem" },
						{ cls: "chai-w-48", label: "w-48 — 12rem" },
						{ cls: "chai-w-64", label: "w-64 — 16rem" },
					].map(({ cls, label }) => (
						<div key={cls} className="chai-flex chai-items-center chai-gap-4">
							<code className="chai-text-xs chai-text-purple w-32 shrink-0">{label}</code>
							<div className={`chai-h-6 chai-rounded chai-bg-teal ${cls}`} />
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

function HeightExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Height Scale" />
			<Preview>
				<div className="chai-flex chai-items-end chai-gap-4">
					{[
						{ cls: "chai-h-8", label: "h-8" },
						{ cls: "chai-h-12", label: "h-12" },
						{ cls: "chai-h-16", label: "h-16" },
						{ cls: "chai-h-24", label: "h-24" },
						{ cls: "chai-h-32", label: "h-32" },
					].map(({ cls, label }) => (
						<div key={cls} className="chai-flex chai-flex-col chai-items-center chai-gap-2">
							<div className={`chai-w-10 chai-rounded-md chai-bg-indigo ${cls}`} />
							<code className="chai-text-xs chai-text-gray">{label}</code>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// POSITION
// ─────────────────────────────────────────────

function PositionExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Position — Relative + Absolute" />
			<CodeLabel code="chai-relative / chai-absolute chai-top-0 chai-right-0" />
			<Preview>
				<div className="chai-relative chai-inline-block">
					<div className="chai-h-16 chai-w-16 chai-rounded-xl chai-bg-blue" />
					<span className="chai-absolute chai-top-0 chai-right-0 chai-h-4 chai-w-4 chai-rounded-full chai-bg-red chai-border-2 chai-border-white" />
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// OPACITY & CURSOR
// ─────────────────────────────────────────────

function OpacityExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Opacity" />
			<Preview>
				<div className="chai-flex chai-gap-4 chai-items-center">
					{[
						{ cls: "chai-opacity-25", label: "25" },
						{ cls: "chai-opacity-50", label: "50" },
						{ cls: "chai-opacity-75", label: "75" },
						{ cls: "chai-opacity-100", label: "100" },
					].map(({ cls, label }) => (
						<div key={cls} className="chai-flex chai-flex-col chai-items-center chai-gap-2">
							<div className={`chai-h-12 chai-w-12 chai-rounded-lg chai-bg-orange ${cls}`} />
							<code className="chai-text-xs chai-text-gray">{label}%</code>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// COMPONENTS (composed)
// ─────────────────────────────────────────────

function ButtonsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Buttons" description="Composed button styles using chai- utilities." />
			<Preview>
				<div className="chai-flex chai-flex-wrap chai-gap-3 chai-items-center">
					<button className="chai-bg-orange chai-text-white chai-font-semibold chai-px-6 chai-py-3 chai-rounded-lg chai-cursor-pointer chai-shadow-sm">
						Primary
					</button>
					<button className="chai-bg-blue chai-text-white chai-font-semibold chai-px-6 chai-py-3 chai-rounded-lg chai-cursor-pointer">
						Secondary
					</button>
					<button className="chai-bg-white chai-text-black chai-font-semibold chai-px-6 chai-py-3 chai-rounded-lg chai-border chai-border-gray chai-cursor-pointer">
						Outline
					</button>
					<button className="chai-bg-red chai-text-white chai-font-semibold chai-px-6 chai-py-3 chai-rounded-full chai-cursor-pointer">
						Danger
					</button>
					<button className="chai-bg-green chai-text-white chai-font-semibold chai-px-4 chai-py-2 chai-rounded-lg chai-text-sm chai-cursor-pointer">
						Small
					</button>
				</div>
			</Preview>
		</section>
	);
}

function BadgesExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Badges" />
			<Preview>
				<div className="chai-flex chai-flex-wrap chai-gap-2">
					{[
						{ cls: "chai-bg-blue chai-text-white", label: "Default" },
						{ cls: "chai-bg-green chai-text-white", label: "Success" },
						{ cls: "chai-bg-red chai-text-white", label: "Error" },
						{ cls: "chai-bg-yellow chai-text-black", label: "Warning" },
						{ cls: "chai-bg-purple chai-text-white", label: "Premium" },
						{ cls: "chai-bg-orange chai-text-white", label: "Beta" },
						{ cls: "chai-bg-gray chai-text-white", label: "Muted" },
					].map(({ cls, label }) => (
						<span
							key={label}
							className={`chai-px-3 chai-py-1 chai-rounded-full chai-text-xs chai-font-semibold ${cls}`}
						>
							{label}
						</span>
					))}
				</div>
			</Preview>
		</section>
	);
}

function AlertsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Alerts" />
			<Preview>
				<div className="chai-flex chai-flex-col chai-gap-3">
					{[
						{ icon: "ℹ️", text: "Your account has been updated.", border: "chai-border-blue", text2: "chai-text-blue" },
						{ icon: "✅", text: "Changes saved successfully.", border: "chai-border-green", text2: "chai-text-green" },
						{ icon: "⚠️", text: "Please review before submitting.", border: "chai-border-yellow", text2: "chai-text-yellow" },
						{ icon: "❌", text: "Something went wrong. Try again.", border: "chai-border-red", text2: "chai-text-red" },
					].map(({ icon, text, border, text2 }) => (
						<div
							key={text}
							className={`chai-flex chai-items-center chai-gap-3 chai-p-4 chai-rounded-xl chai-border-2 chai-bg-white ${border}`}
						>
							<span>{icon}</span>
							<span className={`chai-text-sm chai-font-medium ${text2}`}>{text}</span>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

function CardExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Profile Card" />
			<Preview>
				<div className="chai-bg-white chai-rounded-2xl chai-shadow-lg chai-p-6 chai-flex chai-flex-col chai-items-center chai-gap-4" style={{ maxWidth: "240px" }}>
					<div className="chai-h-16 chai-w-16 chai-rounded-full chai-bg-indigo" />
					<div className="chai-text-center">
						<p className="chai-font-bold chai-text-lg chai-text-black">Gopal Choudhary</p>
						<p className="chai-text-sm chai-text-gray">Software Developer</p>
					</div>
					<div className="chai-flex chai-gap-2">
						<span className="chai-px-3 chai-py-1 chai-rounded-full chai-bg-blue chai-text-white chai-text-xs">React</span>
						<span className="chai-px-3 chai-py-1 chai-rounded-full chai-bg-orange chai-text-white chai-text-xs">Node</span>
					</div>
					<button className="chai-w-full chai-bg-indigo chai-text-white chai-py-2 chai-rounded-lg chai-font-semibold chai-text-sm chai-cursor-pointer">
						Follow
					</button>
				</div>
			</Preview>
		</section>
	);
}

function NavbarExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Navbar" />
			<Preview>
				<div className="chai-flex chai-items-center chai-justify-between chai-px-6 chai-py-4 chai-bg-black chai-rounded-xl">
					<span className="chai-text-white chai-font-bold chai-text-lg">☕ chaiwind</span>
					<div className="chai-flex chai-gap-6">
						{["Docs", "Examples", "GitHub"].map((item) => (
							<span key={item} className="chai-text-gray chai-text-sm chai-cursor-pointer">
								{item}
							</span>
						))}
					</div>
					<span className="chai-bg-orange chai-text-white chai-text-sm chai-font-semibold chai-px-4 chai-py-2 chai-rounded-lg chai-cursor-pointer">
						npm →
					</span>
				</div>
			</Preview>
		</section>
	);
}

function PricingCardExample() {
	return (
		<section className="space-y-4">
			<SectionHeader title="Pricing Card" />
			<Preview>
				<div className="chai-grid chai-grid-cols-2 chai-gap-4">
					{/* Free */}
					<div className="chai-border chai-border-gray chai-rounded-2xl chai-p-6 chai-flex chai-flex-col chai-gap-4 chai-bg-white">
						<p className="chai-text-sm chai-font-semibold chai-text-gray chai-uppercase chai-tracking-wider">Free</p>
						<p className="chai-text-4xl chai-font-bold chai-text-black">$0<span className="chai-text-base chai-font-normal chai-text-gray">/mo</span></p>
						<div className="chai-flex chai-flex-col chai-gap-2">
							{["100+ classes", "CDN access", "Community support"].map((f) => (
								<p key={f} className="chai-text-sm chai-text-gray">✓ {f}</p>
							))}
						</div>
						<button className="chai-border chai-border-gray chai-text-black chai-text-sm chai-font-semibold chai-py-2 chai-rounded-lg chai-cursor-pointer">
							Get started
						</button>
					</div>
					{/* Pro */}
					<div className="chai-bg-orange chai-rounded-2xl chai-p-6 chai-flex chai-flex-col chai-gap-4">
						<p className="chai-text-sm chai-font-semibold chai-text-white chai-uppercase chai-tracking-wider">Pro</p>
						<p className="chai-text-4xl chai-font-bold chai-text-white">$9<span className="chai-text-base chai-font-normal">/mo</span></p>
						<div className="chai-flex chai-flex-col chai-gap-2">
							{["Everything in Free", "Custom classes", "Priority support"].map((f) => (
								<p key={f} className="chai-text-sm chai-text-white">✓ {f}</p>
							))}
						</div>
						<button className="chai-bg-white chai-text-orange chai-text-sm chai-font-semibold chai-py-2 chai-rounded-lg chai-cursor-pointer">
							Upgrade
						</button>
					</div>
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// ANIMATIONS
// ─────────────────────────────────────────────

function AnimationsExample() {
	return (
		<section className="space-y-4">
			<SectionHeader
				title="Animations"
				description="Keyframes are injected automatically when chai-animate-* classes are found."
			/>
			<Preview>
				<div className="chai-flex chai-items-center chai-gap-8 chai-flex-wrap">
					{[
						{ cls: "chai-animate-pulse chai-bg-teal", label: "pulse" },
						{ cls: "chai-animate-spin chai-bg-orange", label: "spin" },
						{ cls: "chai-animate-bounce chai-bg-blue", label: "bounce" },
						{ cls: "chai-animate-ping chai-bg-red", label: "ping" },
					].map(({ cls, label }) => (
						<div key={label} className="chai-flex chai-flex-col chai-items-center chai-gap-3">
							<div className={`chai-h-10 chai-w-10 chai-rounded-full ${cls}`} />
							<code className="chai-text-xs chai-text-gray">{label}</code>
						</div>
					))}
				</div>
			</Preview>
		</section>
	);
}

// ─────────────────────────────────────────────
// CATEGORY DIVIDER
// ─────────────────────────────────────────────

function CategoryDivider({ title }: { title: string }) {
	return (
		<div className="flex items-center gap-4 py-2">
			<div className="flex-1 border-t border-[var(--border)]" />
			<span className="text-xs font-mono font-semibold text-[var(--accent)] uppercase tracking-widest px-2">
				{title}
			</span>
			<div className="flex-1 border-t border-[var(--border)]" />
		</div>
	);
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────

export function ExamplesShowcase() {
	return (
		<div className="space-y-12">

			<CategoryDivider title="Layout" />
			<FlexRowExample />
			<FlexColExample />
			<FlexWrapExample />
			<JustifyBetweenExample />
			<GridExample />
			<GridCardsExample />

			<CategoryDivider title="Typography" />
			<TypographyScaleExample />
			<FontWeightsExample />
			<TextColorsExample />
			<TextDecorationExample />

			<CategoryDivider title="Spacing" />
			<PaddingExample />
			<MarginExample />
			<GapExample />

			<CategoryDivider title="Colors" />
			<BackgroundColorsExample />

			<CategoryDivider title="Borders & Radius" />
			<BorderRadiusExample />
			<BorderWidthExample />

			<CategoryDivider title="Shadows" />
			<ShadowsExample />

			<CategoryDivider title="Sizing" />
			<SizingExample />
			<HeightExample />

			<CategoryDivider title="Position" />
			<PositionExample />

			<CategoryDivider title="Opacity" />
			<OpacityExample />

			<CategoryDivider title="Components" />
			<ButtonsExample />
			<BadgesExample />
			<AlertsExample />
			{/* <CardExample /> */}
			{/* <NavbarExample />
			<PricingCardExample /> */}

			<CategoryDivider title="Animations" />
			<AnimationsExample />

		</div>
	);
}