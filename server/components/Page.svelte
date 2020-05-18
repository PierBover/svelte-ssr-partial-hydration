<script>
	import Colors from './Colors.svelte';
	import Hydrate from './Hydrate.svelte';
	import Now from './Now.svelte';
	export let serverData;
	const hydrationData = serverData.hydration;
</script>

<h1>Home</h1>
<p>This is static content with server data that will not be duplicated in the page.</p>

<ul>
	{#each serverData.fruits as fruit}
		<li>{fruit}</li>
	{/each}
</ul>

<Hydrate component={Colors} name="Colors" instanceId="Colors_1" data={hydrationData}/>
<Hydrate component={Colors} name="Colors"  instanceId="Colors_2" data={hydrationData}/>

<h2>This below is a hydrated component without data:</h2>
<Hydrate component={Now} name="Now"/>

<style>
:global(body) {
	font-family: sans-serif;
}
</style>