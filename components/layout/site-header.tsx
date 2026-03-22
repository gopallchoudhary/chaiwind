"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const nav = [
	{ href: "/docs", label: "Docs" },
	{ href: "/docs/install", label: "Installation" },
	{ href: "/docs/usage", label: "Usage" },
	{ href: "/docs/examples", label: "Examples" },
	{ href: "/docs/reference", label: "Reference" },
];

export function SiteHeader() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);
	const reduceMotion = useReducedMotion();

	return (
		<header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
			<div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
				<div className="flex items-center gap-6">
					<Link
						href="/"
						className="font-semibold tracking-tight text-[var(--foreground)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)]"
					>
						Chaiwind
					</Link>
					<nav className="hidden items-center gap-1 md:flex" aria-label="Main">
						{nav.map((item) => {
							const active =
								item.href === "/docs"
									? pathname === "/docs"
									: pathname.startsWith(item.href);
							return (
								<Link
									key={item.href}
									href={item.href}
									className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--ring)] ${
										active
											? "text-[var(--foreground)]"
											: "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
									}`}
								>
									{item.label}
									{active && !reduceMotion ? (
										<motion.span
											layoutId="nav-pill"
											className="absolute inset-0 -z-10 rounded-md bg-[var(--accent)]"
											transition={{
												type: "spring",
												stiffness: 380,
												damping: 30,
											}}
										/>
									) : active ? (
										<span className="absolute inset-0 -z-10 rounded-md bg-[var(--accent)]" />
									) : null}
								</Link>
							);
						})}
					</nav>
				</div>
				<div className="flex items-center gap-2">
					<ThemeToggle />
					<a
						href="https://github.com/gopallchoudhary/cohort-26/tree/main/Projects/chaiwind-css"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] p-2 text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
						aria-label="GitHub"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="currentColor"
						>
							<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.185 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
						</svg>
					</a>

					<button
						type="button"
						className="inline-flex items-center justify-center rounded-lg border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] md:hidden"
						aria-expanded={open}
						aria-controls="mobile-nav"
						onClick={() => setOpen((o) => !o)}
					>
						Menu
					</button>
				</div>
			</div>
			<AnimatePresence>
				{open && (
					<motion.nav
						id="mobile-nav"
						initial={reduceMotion ? false : { height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
						className="border-t border-[var(--border)] bg-[var(--background)] md:hidden"
					>
						<div className="flex flex-col gap-1 px-4 py-3">
							{nav.map((item) => (
								<Link
									key={item.href}
									href={item.href}
									className="rounded-md px-3 py-2 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--accent)]"
									onClick={() => setOpen(false)}
								>
									{item.label}
								</Link>
							))}
						</div>
					</motion.nav>
				)}
			</AnimatePresence>
		</header>
	);
}
