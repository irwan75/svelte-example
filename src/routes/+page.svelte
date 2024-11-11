<script>
	function copyText() {
		navigator.clipboard.writeText("Hello, world!");
		alert("Copied to clipboard");
	}

	function navigateToExternalApp() {
		window.location.href = "https://www.google.com";
	}

	function downloadPDF() {
		fetch("https://assets.website-files.com/603d0d2db8ec32ba7d44fffe/603d0e327eb2748c8ab1053f_loremipsum.pdf")
			.then(response => response.blob())
			.then(blob => {
				const link = document.createElement('a');
				link.href = URL.createObjectURL(blob);
				link.download = 'file.pdf';
				link.click();
				URL.revokeObjectURL(link.href);
			})
			.catch(error => console.error('Error downloading the PDF:', error));
	}
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div style="height: 50px;">
	<button on:click={copyText}>Copy Text</button>
</div>

<div style="height: 50px;">
	<button on:click={navigateToExternalApp}>Navigate to open external app</button>
</div>
<div style="height: 50px;">
	<button on:click={downloadPDF}>Download PDF</button>
</div>
