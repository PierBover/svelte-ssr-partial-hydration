<script>
	export let colors;
	let selectedColor;
</script>

<div class="Colors">
	<h2>Hydrated component</h2>

	<div>This data below will be duplicated in the page:</div>
	<ul>
		{#each colors as color}
			<li class:selected={color === selectedColor} on:click={() => selectedColor = color}>{color}</li>
		{/each}
	</ul>
	<small>You can click on the colors to check hydration</small>
</div>

<style>
	.Colors {
		padding: 1rem;
		border: 1px solid #aaa;
		margin-bottom: 2rem;
	}

	.Colors li {
		cursor: pointer;
	}

	.selected {
		font-weight: bold;
	}
</style>