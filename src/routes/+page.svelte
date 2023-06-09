<script lang="ts">
	import Field from "$lib/Field.svelte";
</script>

<h1>Web Share Target Tester</h1>

<form action="/test" method="get">
    <Field label="Target Web App Manifest URL">
        <input name="manifest" type="url" required placeholder="https://maskable.app/manifest.json" />
    </Field>

    <button name="manifest" value="https://maskable.app/manifest.json">
        Maskable.app
    </button>
</form>
