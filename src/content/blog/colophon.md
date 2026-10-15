---
title: 'Colophon'
description: 'How this site is put together — the stack, the design system, and the small details that are easy to get wrong.'
pubDate: 2026-10-15
---

This site is a static blog. There is no database, no server, and no build step you have to
remember to run by hand — pushing to `master` is the whole deploy.

## The stack

[Astro](https://astro.build) in static output mode, deployed to GitHub Pages. Posts are Markdown
files in `src/content/blog/`; their frontmatter is validated against a schema at build time, so a
missing `title` or a malformed date fails the build instead of shipping a broken page.

- **Routing** — file-based, with posts under `/writing/<slug>/`.
- **Feed** — an RSS endpoint generated from the same content collection as the pages.
- **Sitemap** — emitted by `@astrojs/sitemap`.
- **Zero client-side JavaScript** beyond Astro's optional prefetch on link hover.

## The design system

The palette is warm paper (`#f6f4f0`) with warm charcoal (`#151412`) for dark mode, and exactly
one accent — the same brand red used elsewhere, kept for hairlines, underlines and small marks. No
gradients, no glows, no coloured headings. Type is set in system font stacks, which means no
webfont requests and no flash of unstyled text. Serif italics appear only as decks and pull quotes,
as a counterweight to the sans headings.

## One detail worth explaining

Because this is a GitHub Pages *project* site, everything is served from `/blog/`. Astro applies
that base to routes it generates itself, but **not** to strings you write by hand — so a plain
`href="/about"` silently points at the wrong place in production. Every internal link therefore
goes through a single helper:

```ts
const BASE = import.meta.env.BASE_URL.replace(/\/+$/, '');

export function href(path = '/'): string {
	const absolute = path.startsWith('/') ? path : `/${path}`;
	return `${BASE}${absolute}` || '/';
}
```

That is a small function, but it is the difference between a site where the navigation works and
one where it quietly 404s.

## What is deliberately missing

No analytics, no tracking scripts, no cookie banner, no comment system, no newsletter modal. If you
want to follow along, the [RSS feed](/blog/rss.xml) is there.
