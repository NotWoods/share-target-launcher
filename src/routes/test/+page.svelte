<script lang="ts">
	import Field from '$lib/Field.svelte';
	import Button from '$lib/Button.svelte';

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
	$: ({ shareTarget, action } = data);
	$: ({ title, text, url } = shareTarget.params);

	$: fileBuckets = toArray(shareTarget.params.files);
</script>

<form {action} method={shareTarget.method} enctype={shareTarget.enctype}>
	{#if title}
		<Field label="Title ({title})">
			<input name={title} type="text" />
		</Field>
	{/if}
	{#if text}
		<Field label="Text ({text})">
			<input name={text} type="text" />
		</Field>
	{/if}
	{#if url}
		<Field label="URL ({url})">
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

	<Button type="submit" appearance="elevated">Share!</Button>
</form>

<pre><code>"share_target": {JSON.stringify(shareTarget, undefined, 2)}</code></pre>

<style>
	form > :global(button) {
		margin-top: 1rem;
	}
</style>
