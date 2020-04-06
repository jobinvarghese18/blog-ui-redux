import React from 'react'
import thunk from 'redux-thunk'
import {createStore,combineReducers,applyMiddleware} from 'redux'
import usersReducer from '../reducers/usersReducers'


const configureStore = ()=>{
    const store = createStore(combineReducers({
        users:usersReducer
    }),applyMiddleware(thunk))
    return store
}
export default configureStore