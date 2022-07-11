<script>
	// your script goes here
	import { initialState } from '$lib/features/authStore';
	import authService from '$lib/features/authService';
	import { goto } from '$app/navigation';

	const onLogout = () => {
		authService.logout();

		//reset state
		$initialState.user = '';

		//navigate to home
		goto('/');
	};
</script>

<!-- markup (zero or more items) goes here -->

<header class="header">
	<div class="logo"><a href="/">GoalSetter</a></div>

	<ul>
		{#if $initialState.user !== ''}
			<!-- content here -->
			<li>
				<button class="btn" on:click={onLogout}><i class="bi bi-box-arrow-in-left" />Logout</button>
			</li>
		{:else}
			<!-- else content here -->
			<li><a href="/login"><i class="bi bi-box-arrow-in-right" />Login</a></li>
		{/if}

		<li><a href="/register"><i class="bi bi-person-fill" />Register</a></li>
	</ul>
</header>

<style>
	/* your styles go here */

	@import url('https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css');

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20px 0;
		border-bottom: 1px solid #e6e6e6;
		margin-bottom: 60px;
	}

	.header ul {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.header ul li {
		margin-left: 20px;
	}

	.header ul li a {
		display: flex;
		align-items: center;
	}

	.header ul li a:hover {
		color: #777;
	}

	.header ul li a svg {
		margin-right: 5px;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	ul {
		list-style: none;
	}

	li {
		line-height: 2.2;
	}

	.i {
		margin-left: 10px;
	}

	.btn {
		border: none;
	}
</style>
