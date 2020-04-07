const initialState = []

const commentsReducer  = (state = initialState,action)=>{
    switch(action.type){
        case 'SET_COMMENTS':{
            return [].concat(action.payload)
        }
        default:{
            return [].concat(state)
        }
    }
}
export default commentsReducer