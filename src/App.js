import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import usersList from './components/usersList'
import postList from './components/postsList'
import Home from './components/Home'
import usersShow from './components/usersShow'
import postShow from './components/postShow'

function App(props){
    return(
       <BrowserRouter>
       <div>
           <Link to='/'>Home</Link>
           <Link to='/users'>Users</Link>
           <Link to='/posts'>Posts</Link>
           


           <Route path='/' component={Home} exact={true}/>
           <Route path='/users' component ={usersList} exact={true}/>
           <Route path='/users/:id' component ={usersShow}/>
           <Route path='/posts' component ={postList} exact={true}/>
           <Route path='/posts/:id' component ={postShow}/>
       </div>
       </BrowserRouter>
    )
}
export default App