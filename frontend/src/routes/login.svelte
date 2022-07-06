<script>
	// your script goes here
	let formData = {
		email: '',
		password: ''
	};

	//const { name, email, password, password2 } = formData;

	const onSubmit = () => {
		console.log('submit event fired');

		console.log(formData);
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
				bind:value={formData.email}
				placeholder="Enter your email"
			/>
		</div>
		<div class="form-group">
			<input
				type="password"
				class="form-control"
				id="password"
				name="password"
				bind:value={formData.password}
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
