<script>
	let { showModal = $bindable(), header, children, link } = $props();

	let dialog = $state(); // HTMLDialogElement

	$effect(() => {
		if (showModal) dialog.showModal();
	});

	function copyText() {
		navigator.clipboard.writeText(link);
		alert('Link download berhasil di copy');
	}

	function onClickCopyAndClose(){
		dialog.close();
		copyText();
	}
	
</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	onclose={() => (showModal = false)}
	onclick={(e) => { if (e.target === dialog) dialog.close(); }}
>
	<div class="modal-content">
		
		{@render header?.()}
		<hr />
		{@render children?.()}
		<hr />
		<!-- svelte-ignore a11y_autofocus -->
		<button autofocus class="button-center" onclick={onClickCopyAndClose}>Copy Link</button>
	</div>
</dialog>

<style>
	hr {
		margin: 0.1rem 0;
	}
	.modal-content {
		display: flex;
		flex-direction: column;
	}

	.button-center {
		width: 50%;
		margin-top: 1rem;
		margin-bottom: 0.6rem;
		align-self: center;
		padding: 0.7rem 2rem;
		border-radius: 10px;
		background-color: #08adf9;
		color: #fff;
		border: none;
		font-size: 0.9rem;
		cursor: pointer;
	}
	dialog {
		max-width: 32em;
		border-radius: 0.2em;
		border: none;
		padding: 0;
	}
	dialog::backdrop {
		background: rgba(0, 0, 0, 0.3);
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
	button {
		display: block;
	}
</style>
