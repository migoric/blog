import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Project site: served from https://migoric.github.io/blog
	site: 'https://migoric.github.io',
	base: '/blog',

	integrations: [mdx(), sitemap()],

	// Prefetch on viewport so navigating between posts feels instant.
	prefetch: { prefetchAll: true, defaultStrategy: 'viewport' },

	markdown: {
		// Dual themes: the <pre> carries both palettes as CSS variables and
		// global.css picks one via prefers-color-scheme.
		shikiConfig: {
			themes: { light: 'github-light', dark: 'github-dark' },
			wrap: true,
		},
	},
});
