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
	title: 'retrychx',
	tagline: 'Notes on small tools, desktop apps, and agent systems.',
	description:
		'Occasional notes on building small, sharp tools — native macOS apps, agent frameworks, and the unglamorous parts in between.',
	author: 'retrychx',
	url: 'https://retrychx.github.io',
} as const;

export const NAV = [
	{ href: '/', label: 'Home' },
	{ href: '/writing/', label: 'Writing' },
	{ href: '/about/', label: 'About' },
] as const;

export const LINKS = [
	{ href: 'https://github.com/retrychx', label: 'GitHub' },
	{ href: 'https://github.com/retrychx/Meditor', label: 'Meditor' },
	{ href: 'https://github.com/retrychx/agentia', label: 'agentia' },
] as const;

export const PROJECTS = [
	{
		name: 'Meditor',
		href: 'https://github.com/retrychx/Meditor',
		description: 'A native macOS Markdown editor with a built-in AI agent.',
		stack: 'Swift · SwiftUI',
	},
	{
		name: 'agentia',
		href: 'https://github.com/retrychx/agentia',
		description: 'A declarative framework for agent services, with tracing and cost observability.',
		stack: 'TypeScript',
	},
] as const;
