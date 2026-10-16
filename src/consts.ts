// Single source of truth for site identity, navigation and outbound links.
//
// Why href() exists: this is a GitHub Pages *project* site, so everything is
// served from a sub-path (base: '/blog'). Astro prepends the base to routes it
// generates itself, but NOT to hand-written strings — `href="/about"` stays
// `/about` and 404s in production. So every internal link goes through href().

const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

/** Resolve a site-absolute path against the configured base. */
export function href(path = '/'): string {
	const absolute = path.startsWith('/') ? path : `/${path}`;
	return `${BASE}${absolute}` || '/';
}

export const SITE = {
	title: 'migoric',
	tagline: 'Notes on small tools, desktop apps, and agent systems.',
	description:
		'Occasional notes on building small, sharp tools — native macOS apps, agent frameworks, and the unglamorous parts in between.',
	author: 'migoric',
	url: 'https://migoric.github.io',
} as const;

export const NAV = [
	{ href: '/', label: 'Home' },
	{ href: '/writing/', label: 'Writing' },
	{ href: '/about/', label: 'About' },
] as const;

export const LINKS = [
	{ href: 'https://github.com/migoric', label: 'GitHub' },
	{ href: 'https://github.com/migoric/Meditor', label: 'Meditor' },
	{ href: 'https://github.com/migoric/agentia', label: 'agentia' },
	{ href: 'https://github.com/migoric/jianxun', label: 'jianxun' },
] as const;

/**
 * Projects, shown on the home page and (from this list) in About's "What I'm building".
 *
 * One list, not two: About used to hard-code its own copy, so every change had to be made
 * twice — which is how two sections of the same site end up describing it differently.
 *
 * `href` is optional. A project whose repository is still private gets no link: a link to a
 * private repo 404s for everyone but the owner.
 */
export interface Project {
	name: string;
	href?: string;
	description: string;
	stack: string;
}

export const PROJECTS: readonly Project[] = [
	{
		name: 'Meditor',
		href: 'https://github.com/migoric/Meditor',
		description: 'A native macOS Markdown editor with a built-in AI agent.',
		stack: 'Swift · SwiftUI',
	},
	{
		name: 'agentia',
		href: 'https://github.com/migoric/agentia',
		description: 'A declarative framework for agent services, with tracing and cost observability.',
		stack: 'TypeScript',
	},
	{
		name: 'jianxun · 简讯',
		href: 'https://github.com/migoric/jianxun',
		description: 'An AI news digest across 48 Chinese and English sources, clustered into narrative threads.',
		stack: 'TypeScript · Cloudflare',
	},
	{
		// No href on purpose — the repository is private for now.
		name: 'aquarelle',
		description: 'An iOS watercolour studio driven by an on-device agent.',
		stack: 'Swift · SwiftUI',
	},
];
