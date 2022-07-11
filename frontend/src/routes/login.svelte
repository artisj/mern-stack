<script>
	import { toasts } from 'svelte-toasts';
	import authService from '$lib/features/authService';
	import { initialState } from '$lib/features/authStore';
	import { goto } from '$app/navigation';

	toasts.setDefaults({
		theme: 'dark',
		placement: 'top-center',
		duration: 5000
	});

	// your script goes here
	let formData = {
		email: '',
		password: ''
	};

	let { email, password } = formData;

	const onSubmit = () => {
		console.log(`User state  ${$initialState.user}`);

		//$initialState.user = '';

		if (!email || !password) {
			toasts.error('Please enter email and password');
		} else {
			try {
				formData = { email, password };
				authService.login(formData).then((a) => {
					console.log(a);
					if (a !== 'error') {
						$initialState.user = JSON.parse(localStorage.getItem('user'));
					}
				});
				//console.log(response);

				//console.log($initialState.user);
				//goto('/');
			} catch (err) {
				$initialState.isLoading = false;
			}
		}

		//console.log($initialState);
		//console.log(formData);
	};
</script>

<!-- markup (zero or more items) goes here -->
<section class="heading">
	<h1>Login</h1>
	<p>Login and enter your goals</p>
</section>

<section class="form">
	<form on:submit|preventDefault={onSubmit}>
		<div class="form-group">
			<input
				type="email"
				class="form-control"
				id="email"
				name="email"
				bind:value={email}
				placeholder="Enter your email"
			/>
		</div>
		<div class="form-group">
			<input
				type="password"
				class="form-control"
				id="password"
				name="password"
				bind:value={password}
				placeholder="Enter your password"
			/>
		</div>

		<div class="form-group">
			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</form>
</section>

<style>
	/* your styles go here */

	.heading {
		font-size: 2rem;
		font-weight: 700;
		margin-bottom: 50px;
		padding: 0 20px;
	}

	.heading p {
		color: #828282;
	}

	.form,
	.content {
		width: 70%;
		margin: 0 auto;
	}

	.form-group {
		margin-bottom: 10px;
	}

	.form-group input,
	.form-group textarea,
	.form-group select {
		width: 100%;
		padding: 10px;
		border: 1px solid #e6e6e6;
		border-radius: 5px;
		margin-bottom: 10px;
		font-family: inherit;
	}

	.form-group label {
		text-align: left;
		display: block;
		margin: 0 0 5px 3px;
	}
</style>
