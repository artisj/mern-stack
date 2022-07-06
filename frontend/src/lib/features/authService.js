import axios from 'axios'

const API_URL = 'https://5000-artisj-mernstack-cho9gpxa070.ws-us51.gitpod.io/api/users/'

const register = async (userData) => {
    const response = await axios.post(API_URL,userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService