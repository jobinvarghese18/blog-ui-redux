import axios from 'axios'
//sync
export const setPosts = (post)=>{
    return {type:'SET_POSTS',payload:post}
}

export const startGetPosts = ()=>{
    return (dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response.data)
            const post = response.data
            dispatch(setPosts(post))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}