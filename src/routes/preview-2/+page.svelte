<script>
	import Modal from '$lib/Modal.svelte';

	let showModal = $state(false);

	// function copyText() {
	// 	navigator.clipboard.writeText('Hello, world!');
	// 	alert('Copied to clipboard');
	// }

	// function navigateToExternalApp() {
	// 	window.location.href = 'https://www.google.com';
	// }

	// function downloadPDF() {
	// 	fetch(
	// 		'https://assets.website-files.com/603d0d2db8ec32ba7d44fffe/603d0e327eb2748c8ab1053f_loremipsum.pdf'
	// 	)
	// 		.then((response) => response.blob())
	// 		.then((blob) => {
	// 			const link = document.createElement('a');
	// 			link.href = URL.createObjectURL(blob);
	// 			link.download = 'file.pdf';
	// 			link.click();
	// 			URL.revokeObjectURL(link.href);
	// 		})
	// 		.catch((error) => console.error('Error downloading the PDF:', error));
	// }
</script>

<div class="container">
	<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

	<p class="description">Preview 2<br/>The place to show PDF Viewer</p>
	<!-- <div style="height: 50px;">
		<button on:click={copyText}>Copy Text</button>
	</div>

	<div style="height: 50px;">
		<button on:click={navigateToExternalApp}>Navigate to open external app</button>
	</div> -->

	<!-- <div style="height: 50px;">
		<button onclick={downloadPDF}>Step untuk Download Dokumen</button>
	</div> -->

	<button onclick={() => (showModal = true)} class="button-download">
		Cara Download Dokumen
	</button>

	<Modal bind:showModal link="https://svelte-example-dun.vercel.app/download?link=https://assets.website-files.com/603d0d2db8ec32ba7d44fffe/603d0e327eb2748c8ab1053f_loremipsum.pdf">
		{#snippet header()}
			<h1 class="title">Step-step untuk Download Dokumen</h1>
		{/snippet}

		<ol>
			<li>Click tombol "Copy Link" dibawah ini, untuk meng-copy link download</li>
			<li>Setelah itu, buka browser yang sering kamu gunakan (Google Chrome/Firefox/Safari/dll)</li>
			<li>Paste link yang sudah ter-copy pada address bar browser kamu dan tekan "Enter"</li>
			<li>Proses download akan dimulai otomatis dan tunggu hingga selesai</li>
		</ol>
	</Modal>
</div>

<style>
	li {
		margin-bottom: 0.4rem;
	}
	.button-download {
		padding: 0.8rem 2rem;
		border-radius: 10px;
		background-color: #f98d01;
		color: #fff;
		border: none;
        cursor: pointer;
	}
	.title {
		font-size: 1.5rem;
		font-weight: bold;
		text-align: center;
	}
	.description {
        text-align: center;
		font-size: 1.2rem;
		color: #666;
		margin: 10rem 1rem;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
</style>
