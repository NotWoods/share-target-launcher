<script lang="ts">
	import Field from '$lib/Field.svelte';

	const samples = [
		{
			name: 'Maskable.app',
			manifest: 'https://maskable.app/manifest.json'
		},
		{
			name: 'Web Share Target Demo',
			manifest: 'https://web-share-tar.glitch.me/manifest.json'
		},
		{
			name: 'Squoosh',
			manifest: 'https://squoosh.app/manifest.json'
		}
	];
</script>

<form action="/test" method="get">
	<Field label="Target Web App Manifest URL">
		<input name="manifest" type="url" required placeholder="https://maskable.app/manifest.json" />
	</Field>
</form>

<ul>
	{#each samples as sample}
		<li>
			<a href="/test?manifest={sample.manifest}">
				{sample.name}
			</a>
		</li>
	{/each}
</ul>
