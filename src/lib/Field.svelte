<script lang="ts">
	export let label: string;
</script>

<label class="field">
	<span class="field__label">{label}</span>
	<slot />
</label>

<style>
	.field {
		display: grid;
	}

	.field__label {
	}
</style>
