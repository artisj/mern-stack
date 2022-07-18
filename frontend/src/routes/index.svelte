<script>
	import {initialState} from '$lib/features/authStore.js'
	import {goalInitialState} from '$lib/features/goalStore'
	import goalManager from '$lib/features/goalHandler'
	import { onMount } from 'svelte';
	import { toasts } from 'svelte-toasts';

	console.log($initialState.user)
	console.log('in the index')

	const token = $initialState.user.token
	let goals = []
	const config = {
    headers: { Authorization: `Bearer ${token}` }
};
	// toast setup
	toasts.setDefaults({
		theme: 'dark',
		placement: 'top-center',
		duration: 5000
	});


	onMount(() => {

		// add user from local storage if not present in store
		if(!$initialState.user && localStorage.getItem('user')){
			$initialState.user = localStorage.getItem('user')
			
		}

		const user = $initialState.user
		// get user goals
		goalManager.getGoals(config).then( (a) => {
			$goalInitialState.goal = a
			console.log('this is fullfilled')
			console.log(a)
		})
		
		console.log('goals')
		console.log(goals)
	});

	let goal = {
		text: '',
		user: '',
		
	}

	let {text} = goal

	const onSubmit = () => {
		if(!text){
			toasts.error('Enter a goal')
			return
		}

		goal.text = text
		goal.user = $initialState.user._id
		goalManager.setGoal(goal, config)
	}

</script>

{#if $initialState.user && $initialState.user.name}
<h1>Dashboard</h1>

<h3>Current goals</h3>

{#each $goalInitialState.goal as item}
	 <!-- content here -->
	 <h4>{item.text}</h4>
{/each}

<section class="form">
	<form on:submit|preventDefault={onSubmit}>
		<div class="form-group">
			<input
				type="text"
				class="form-control"
				id="text"
				name="text"
				bind:value={text}
				placeholder="Enter your goal"
			/>
		</div>
		<div class="form-group">
			<button type="submit" class="btn btn-primary">Submit</button>
		</div>
		</form>
</section>

{:else}
	<h3>Please login</h3>
{/if}

