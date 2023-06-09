<script lang="ts">
	import Field from '$lib/Field.svelte';

	function toArray<T>(maybeArray: T | readonly T[] | undefined): readonly T[] {
		if (maybeArray == undefined) {
			return [];
		} else if (Array.isArray(maybeArray)) {
			return maybeArray;
		} else {
			return [maybeArray as T];
		}
	}

	export let data: import('./$types').PageData;
	$: ({ shareTarget } = data);
	$: ({ title, text, url } = shareTarget.params);

	$: fileBuckets = toArray(shareTarget.params.files);
</script>

<h1>Web Share Target Tester</h1>

<form action={shareTarget.action} method={shareTarget.method} enctype={shareTarget.enctype}>
	{#if title}
		<Field label="Title">
			<input name={title} type="text" />
		</Field>
	{/if}
	{#if text}
		<Field label="Text">
			<input name={text} type="text" />
		</Field>
	{/if}
	{#if url}
		<Field label="URL">
			<input name={url} type="url" />
		</Field>
	{/if}
	{#if fileBuckets.length > 0}
		{#each fileBuckets as bucket}
			<Field label="Files ({bucket.name})">
				<input name={bucket.name} type="file" accept={toArray(bucket.name).join(', ')} />
			</Field>
		{/each}
	{/if}
</form>
