<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';
	import './styles.css';
</script>

<Header />

<main>
	<slot />
</main>

<Footer />

<style>
	main {
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
