<script>
	import {goto} from '$app/navigation';

</script>

<div class="container">
	<button class="button-card" type="button" onclick={() => goto('/preview-1')}>
		<p class="title">Preview 1</p>
		<p class="subtitle">Preview ini untuk memperlihatkan step-step download dokumen dengan cara mendownload melalui icon download/print pada pdf viewer di web browser</p>
	</button>
	<div style="margin-top: 1rem;"></div>
	<button class="button-card" type="button" onclick={() => goto('/preview-2')}>
		<p class="title">Preview 2</p>
		<p class="subtitle">Preview ini untuk memperlihatkan step-step download dokumen dengan cara meng-copy link dan langsung mendownload otomatis pdf file melalui browser</p>
	</button>
</div>

<style>
	p {
		margin: 0;
	}
	.title{
		font-size: 1.1rem;
		font-weight: bold;
	}
	.subtitle{
		font-size: 1rem;
		font-weight: 500;
	}
	.button-card{
		width: 90vw;
		border: 1px solid #000;
		border-radius: 10px;
		padding: 0.5rem 1rem;
		text-align: left;
	}

	.container {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	.button-card:hover{
		background-color: #f98d01;
		color: #fff;
		cursor: pointer;
	}
</style>
