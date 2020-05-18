<script>
	import Colors from './Colors.svelte';
	export let serverData;
</script>

<h1>Home</h1>
<p>This is static content with server data.</p>

<ul>
	{#each serverData.fruits as fruit}
		<li>{fruit}</li>
	{/each}
</ul>

<div id="Colors">
	<Colors colors={serverData.Colors.colors}/>
</div>

<style>
:global(body) {
	font-family: sans-serif;
}
</style>