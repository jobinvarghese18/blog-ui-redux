import Axios from 'axios'


export const setComments = (comment)=>{
  return  {type:"SET_COMMENTS",payload:comment}
}

export const startGetComments =()=>{
    return (dispatch)=>{
        Axios.get('https://jsonplaceholder.typicode.com/comments')
        .then((response)=>{
            console.log(response.data)
            const comment = response.data
            dispatch(setComments(comment))
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}