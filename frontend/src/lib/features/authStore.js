// set localstorage on login
import { writable } from 'svelte/store';
import authService from './authService'
//
// get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))

export const initialState = writable({
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
})



