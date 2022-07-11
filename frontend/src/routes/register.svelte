<script>
	import authService from '$lib/features/authService';
	import { initialState } from '$lib/features/authStore';
	import { toasts } from 'svelte-toasts';
	import { current_component } from 'svelte/internal';

	toasts.setDefaults({
		theme: 'dark',
		placement: 'top-center',
		duration: 5000
	});

	// your script goes here
	let Regform = {
		name: '',
		email: '',
		password: '',
		password2: ''
	};

	let error = '';
	let { name, email, password, password2 } = Regform;

	const onSubmit = () => {
		$initialState.isLoading = true;

		console.log($initialState);
		console.log('submit event fired');
		Regform = { name, email, password, password2 };
		//console.log(Regform);

		if (password !== password2) {
			toasts.error('Passwords do not match');
		} else {
			try {
				authService.register(Regform);
			} catch (err) {
				console.log(err);
				$initialState.isLoading = false;
			}
		}

		$initialState.isLoading = false;
		console.log($initialState);
		//toasts.success('You have successfully registered');
		// clear form
		name = '';
		email = '';
		password = '';
		password2 = '';
		//console.log(formData);
	};
</script>

<!-- markup (zero or more items) goes here -->
<section class="heading">
	<h1>Register</h1>
	<p>Please create an account</p>
</section>
{#if $initialState.isLoading === true}
	<!-- content here -->
	<h1>loading</h1>
{/if}

<section class="form">
	<form on:submit|preventDefault={onSubmit}>
		<div class="form-group">
			<input
				type="text"
				class="form-control"
				id="name"
				name="name"
				bind:value={name}
				placeholder="Enter your name"
			/>
		</div>
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
			<input
				type="password"
				class="form-control"
				id="password2"
				name="password2"
				bind:value={password2}
				placeholder="Confirm your password"
			/>
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
	</form>
</section>
<div class="row">
	<div class="col">
		<p>
			Already registered?
			<a href="/login">Login</a>
		</p>
	</div>
</div>

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
