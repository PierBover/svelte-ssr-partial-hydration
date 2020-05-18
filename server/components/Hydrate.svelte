<script>
 export let component;
 export let data;
 export let name;
 export let instanceId;

 const instanceData = data && instanceId && data[instanceId] ? data[instanceId] : {};

</script>

<div class="Hydrate-me" data-component={name} data-instance-id={instanceId}>
	<svelte:component this={component} {...instanceData}/>
</div>