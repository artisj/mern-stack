// set localstorage on login
//import {browser} from '$app/env'
import { writable } from 'svelte/store';
//import authService from './authService'

// get user from localStorage

    
// if(browser)   {
//     export const user = JSON.parse(window.localStorage.getItem('user'))
//     console.log('User data from localStorage')
//     console.log(user)
   
// } 



 export const initialState = writable({
    user: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
 })
 export const isLoading = writable(false)



