<script lang="ts">
	import classes from './button.module.css';

	const APPEARANCES = {
		elevated: classes['elevated-button'],
		filled: classes['filled-button'],
		'filled-tonal': classes['filled-tonal-button'],
		outlined: classes['outlined-button']
	};

	export let type: 'button' | 'submit' | 'reset' = 'button';
	export let appearance: keyof typeof APPEARANCES;
</script>

<button {type} class={APPEARANCES[appearance]}><slot /></button>
