const initialState = []


const postsReducers = (state = initialState,action)=>{
    switch(action.type){
        case 'SET_POSTS':{
            return [].concat(action.payload)
        }
        default : {
            return [].concat(state)
        }
    }
}
export default postsReducers