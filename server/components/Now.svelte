<script>
	import {onMount} from 'svelte';

	let now = (new Date()).toString();

	onMount(() => {
		setInterval(() => {
			now = (new Date()).toString();
		}, 1000);
	});
</script>

<div>{now}</div>