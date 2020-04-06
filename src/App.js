import React from 'react'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import usersList from './components/usersList'

function App(props){
    return(
       <BrowserRouter>
       <div>
           <Route path='/users' component ={usersList}/>
       </div>
       </BrowserRouter>
    )
}
export default App