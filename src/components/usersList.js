import React from 'react'
import {connect} from 'react-redux'
import {startGetUsers} from '../action/usersAction'
import {Link} from 'react-router-dom'


class UsersList extends  React.Component{
    componentDidMount(){
        if(this.props.users.length ===0){
            this.props.dispatch(startGetUsers())
        }
    }
    render(){

        return(
            <div>
                <h2>UsersList</h2>
            <ul>
                {
                    this.props.users.map((user,i)=>{
                        return(
                            <li key={i}><Link to={`/users/${user.id}`}>{user.name}</Link></li>
                        )
                    })
                }
            </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        users:state.users
    }
}
export default connect(mapStateToProps)(UsersList)
