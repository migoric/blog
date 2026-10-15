# migoric / blog

Source for <https://migoric.github.io/blog> — a small static blog about building desktop tools and
agent systems.

Built with [Astro](https://astro.build) (static output) and deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `master`.

## Writing a post

Add a Markdown file to `src/content/blog/`. The filename becomes the slug, so
`src/content/blog/some-thought.md` is published at `/writing/some-thought/`.

```md
---
title: 'Some thought'
description: 'One sentence, shown in listings, the post header and the RSS feed.'
pubDate: 2026-10-15
---

Body goes here.
```

`description` and `pubDate` are required; `updatedDate` and `draft` are optional. Setting
`draft: true` keeps a post out of listings, the feed and the sitemap while you work on it.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321/blog/
npm run build    # → ./dist
npm run preview  # serve the built output
```

## Notes on structure

- Everything is served from a sub-path (`base: '/blog'`), so internal links must go through
  `href()` in `src/consts.ts` — hand-written paths are not rewritten by Astro and will 404.
- Site identity, navigation and outbound links live in `src/consts.ts`.
- Design tokens live at the top of `src/styles/global.css`; light and dark are two sets of the same
  token names. Prose styles for rendered Markdown also belong there, since that markup comes from
  the renderer rather than from a component.
