import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE, href } from '../consts';

export async function GET(context) {
	const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort(
		(a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
	);

	return rss({
		title: SITE.title,
		description: SITE.description,
		// `context.site` is the origin only — it does not carry the /blog base,
		// so the channel link has to be resolved through href() too.
		site: new URL(href('/'), context.site),
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.pubDate,
			// href() applies the '/blog' base, which `site` alone does not carry.
			link: href(`/writing/${post.id}/`),
		})),
		customData: '<language>en</language>',
	});
}
