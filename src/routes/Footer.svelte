<hr />
<aside>
	<p>Use Web Share Target Tester to simulate sharing data to your PWA from other apps.</p>
	<p>
		The <a href="https://developer.chrome.com/en/articles/web-share-target/">
			Web Share Target API
		</a> allows web developers to register their web apps as a location for native apps to share data
		to. This makes it easier for users to interact with your web app from their mobile device.
	</p>
	<p>
		Edit on <a href="https://github.com/NotWoods/share-target-launcher">GitHub</a>
	</p>
</aside>

<hr />
<footer>
	<div class="footer__col">
		Created by
		<a class="link" href="https://tigeroakes.com">
			<img
				loading="lazy"
				class="self-logo"
				src="/tigeroakes.svg"
				alt="Tiger Oakes"
				width="160"
				height="32"
			/>
		</a>
	</div>
	<a class="footer__col" href="https://ko-fi.com/O4O645BF3" target="_blank">
		<img
			loading="lazy"
			src="/kofi.svg"
			alt="Buy Me a Coffee at ko-fi.com"
			width="166"
			height="32"
		/>
	</a>
</footer>

<style>
	aside,
	footer {
		text-align: center;
		margin: auto;
		max-width: 42rem;
		padding: 0 0.5em;
	}

	footer {
		gap: 1em;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}

	.self-logo {
		display: block;
		margin: auto;
	}
	@media (prefers-color-scheme: dark) {
		.self-logo {
			filter: invert(1);
		}
	}
</style>
