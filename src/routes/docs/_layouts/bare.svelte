<!-- For some reason, mdscex only uses svelte 4 and not svelte5. Which I guess is fine?-->
<script>
    export let title = "Given Title";
</script>

<h1>{title}</h1>
<slot>

</slot>

