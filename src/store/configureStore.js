import React from 'react'
import thunk from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducers'
import postsReducers from '../reducers/postsReducers'
import commentsReducer from '../reducers/commentsReducers'


const configureStore = ()=>{
    const store = createStore(combineReducers({
        users:usersReducer,
        posts:postsReducers,
        comments:commentsReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore