<script>
	function copyText() {
		navigator.clipboard.writeText("Hello, world!");
		alert("Copied to clipboard");
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div style="height: 50px;">
	<button on:click={copyText}>Copy Text</button>
</div>
