import axios from 'axios'
//sync
export const setUsers = (user)=>{
    return {type:'SET_USERS',payload:user}
}
//async
export const startGetUsers = ()=>{
    return(dispacth)=>{
        axios.get('http://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data)
            const user = response.data
            dispacth(setUsers(user))
        })
    }
}
