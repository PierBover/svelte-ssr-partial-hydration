<script>
	import {onMount} from 'svelte';
	export let colors;
	let now = (new Date()).toString();

	onMount(() => {
		setInterval(() => {
			now = (new Date()).toString();
		}, 1000);
	});
</script>

<div class="Colors">
	<h2>Hydrated component</h2>

	<div>Some server data:</div>
	<ul>
		{#each colors as color}
			<li>{color}</li>
		{/each}
	</ul>

	<p>{now}</p>
</div>

<style>
	.Colors {
		padding: 1rem;
		border: 1px solid #aaa;
	}
</style>