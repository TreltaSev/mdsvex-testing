import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import path from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			layout: { _: path.resolve('src/routes/docs/_layouts/bare.svelte') },
			extensions: ['.svx']
		})
	],

	kit: {
		adapter: adapter(),
		alias: {
			'@config': 'src/lib/cfgs',
			'@doc': 'src/lib/docs'
		}
	}
};

export default config;
