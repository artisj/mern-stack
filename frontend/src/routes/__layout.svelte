<script>
	// @ts-ignore
	import Header from '$lib/components/header.svelte';

	import { toasts, ToastContainer, FlatToast } from 'svelte-toasts';

	toasts.setDefaults({
		theme: 'dark',
		placement: 'top-center',
		duration: 5000
	});
</script>

<div class="container">
	<Header />
	<slot />
	<ToastContainer let:data>
		<FlatToast {data} />
		<!-- default slot as toast component -->
	</ToastContainer>
	<!-- Provider template for your toasts -->
</div>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
	.container {
		width: 100%;
		max-width: 960px;
		margin: 0 auto;
		padding: 0 20px;
		text-align: center;
	}
</style>
