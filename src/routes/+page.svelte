<script lang="ts">
	import { compile } from 'mdsvex';

	import { mdsvex_config } from '@config';
	import { onMount, type Snippet } from 'svelte';

    let html = $state(``)

	let child: any | undefined = $state(undefined)
	

	onMount(async () => {

		console.log(import.meta.glob('./lib/docs/**/*.{txt}', {eager: true}))
		

		// let x = await import('@doc/+page.svx')
		// child = x


		// setTimeout(() => {
		// 	console.log(child)
		// }, 100)
	});
</script>

<span>Testing direct compilation</span>
<!-- {@render child?.default?.()} -->
