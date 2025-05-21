<script>
	let { children, title = $bindable('Given TItle') } = $props();
</script>

<h1>{title}</h1>

{@render children?.()}
