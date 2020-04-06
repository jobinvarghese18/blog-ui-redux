import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import usersList from './components/usersList'
import postList from './components/postsList'

function App(props){
    return(
       <BrowserRouter>
       <div>
           <Route path='/users' component ={usersList}/>
           <Route path='/posts' component ={postList}/>
       </div>
       </BrowserRouter>
    )
}
export default App