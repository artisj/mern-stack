import axios from 'axios'

const API_URL = `http://localhost:5000/api/goals/`

const setGoal = async (goal, token) => {

    try {
        console.log(token)
        const response = await axios.post(API_URL,goal,token)
        if(response.data){
           console.log(`Added: ${goal.text}`)
        } 
    
        return response.data
        }catch (e) {
            
            console.log(e.response)
        }
}

const getGoals = async (token) => {
    try {
        console.log(token)
        const response = await axios.get(API_URL,token)
        
        if(response.data){
           console.log(response.data)
           return response.data
        } 
    
        
        }catch (e) {
            
            console.log(e.response.data.message)
        }
}

const goalManager = {
    setGoal,getGoals
}
export default goalManager