<script>
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	const queryParams = $page.url.searchParams;
	const link = queryParams.get('link');

	onMount(() => {
		downloadPDF(link);
	});

	function downloadPDF(link) {
		fetch(link)
			.then((response) => response.blob())
			.then((blob) => {
				const link = document.createElement('a');
				link.href = URL.createObjectURL(blob);
				link.download = 'file.pdf';
				link.click();
				URL.revokeObjectURL(link.href);
			})
			.catch((error) => console.error('Error downloading the PDF:', error));
	}
</script>

<div class="container">
	{#if link}
		<h1>Waiting for download...</h1>
		<p>Link: {link}</p>
	{:else}
		<h1>Link not found</h1>
	{/if}
</div>

<style>
    p{
        text-align: center;
    }
    .container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
        margin: 2rem;
	}
</style>
