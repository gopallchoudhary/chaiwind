"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Copy, Check } from "lucide-react";

const cycleWords = ["rapidly.", "cleanly.", "smartly.", "easily."];

const floatingBadges = [
	"chai-flex",
	"chai-p-4",
	"chai-text-xl",
	"chai-bg-orange",
	"chai-rounded-lg",
	"chai-font-bold",
	"chai-shadow-md",
	"chai-gap-2",
];

export function Hero() {
	const reduce = useReducedMotion();
	const [wordIndex, setWordIndex] = useState(0);
	const [copied, setCopied] = useState(false);

	useEffect(() => {
		const interval = setInterval(() => {
			setWordIndex((i) => (i + 1) % cycleWords.length);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	const handleCopy = () => {
		navigator.clipboard.writeText("npm install chaiwind-css");
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<section className="relative overflow-hidden px-4 pb-24 pt-20 sm:px-6 sm:pt-28">
			{/* Background glow */}
			<div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/5 blur-3xl" />

			{/* Floating badges — hidden on small screens */}
			{!reduce &&
				floatingBadges.map((badge, i) => (
					<motion.div
						key={badge}
						className="absolute hidden font-mono text-xs px-3 py-1.5 rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--muted-foreground)] lg:block"
						style={{
							top: `${18 + (i % 4) * 18}%`,
							left: i < 4 ? `${2 + i * 5}%` : undefined,
							right: i >= 4 ? `${2 + (i - 4) * 5}%` : undefined,
						}}
						animate={{
							y: [0, -10, 0],
							opacity: [0.35, 0.75, 0.35],
						}}
						transition={{
							duration: 3 + i * 0.4,
							repeat: Infinity,
							ease: "easeInOut",
							delay: i * 0.25,
						}}
					>
						{badge}
					</motion.div>
				))}

			<div className="mx-auto max-w-3xl text-center">
				{/* npm badge */}

				{/* Headline with cycling word */}
				<motion.h1
					className="text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-6xl"
					style={{ lineHeight: 1.08 }}
					initial={reduce ? false : { opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.05 }}
				>
					Build your UI <br className="hidden sm:block" />
					{reduce ? (
						<span className="text-[var(--primary)]">rapidly.</span>
					) : (
						<AnimatePresence mode="wait">
							<motion.span
								key={wordIndex}
								className="text-orange-500 inline-block"
								initial={{ opacity: 0, filter: "blur(8px)", y: 8 }}
								animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
								exit={{ opacity: 0, filter: "blur(8px)", y: -8 }}
								transition={{ duration: 0.35 }}
							>
								{cycleWords[wordIndex]}
							</motion.span>
						</AnimatePresence>
					)}
				</motion.h1>

				{/* Subtitle */}
				<motion.p
					className="mt-5 text-lg text-[var(--muted-foreground)] leading-relaxed"
					initial={reduce ? false : { opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.1 }}
				>
					A utility-first CSS-in-JS toolkit inspired by Tailwind — small API,
					familiar class names, zero config, and fast iteration.
				</motion.p>

				{/* CTAs */}
				<motion.div
					className="mt-8 flex flex-wrap items-center justify-center gap-3"
					initial={reduce ? false : { opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.15 }}
				>
					<Link
						href="/docs/install"
						className="inline-flex items-center justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-sm transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
					>
						Get started →
					</Link>
					<Link
						href="/docs"
						className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-[var(--muted)] px-6 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:bg-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
					>
						Documentation
					</Link>
				</motion.div>

				{/* Install command */}
				<motion.div
					className="mt-8 inline-flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] px-5 py-3"
					initial={reduce ? false : { opacity: 0, y: 12 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.35, delay: 0.2 }}
				>
					<span className="select-none font-mono text-sm text-[var(--muted-foreground)]">
						$
					</span>
					<code className="font-mono text-sm text-[var(--foreground)]">
						npm install chaiwind-css
					</code>
					<button
						onClick={handleCopy}
						className="ml-1 rounded-md p-1.5 text-[var(--muted-foreground)] transition hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
						aria-label="Copy install command"
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={copied ? "check" : "copy"}
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.8, opacity: 0 }}
								transition={{ duration: 0.15 }}
							>
								{copied ? (
									<Check size={14} className="text-green-500" />
								) : (
									<Copy size={14} />
								)}
							</motion.div>
						</AnimatePresence>
					</button>
				</motion.div>
			</div>
		</section>
	);
}
