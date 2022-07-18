import { writable } from 'svelte/store';


 export const goalInitialState = writable({
    goal: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
 })




