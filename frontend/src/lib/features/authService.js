import axios from 'axios'
import { toasts } from 'svelte-toasts'
import { initialState } from '$lib/features/authStore';


const API_URL = `http://localhost:5000/api/users/`

const register = async (userData) => {
    try {
    const response = await axios.post(API_URL,userData)
    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    } 

    return response.data
    }catch (e) {
        
        toasts.error(e.response.data.message)
    }
    
}

const login = async (userData) => {
    try {
    const response = await axios.post(`${API_URL}login`,userData)
    
    //console.log(response.data)
    if(response.data) {
        
        localStorage.setItem('user',JSON.stringify(response.data))
        //initialState.update(current => [...current, current.user = response.data])
    } else {
        //initialState.update(current => [...current, current.user = ''])
        toasts.error('Error occured while logging in')
        return 'error'
    }

    return response.data
    }catch (e) {
        toasts.error(e.response.data.message)
        return 'error'
    }
   
}

const logout = async () => {
    localStorage.removeItem('user')
    
}

const authService = {
    register,login, logout
}

export default authService