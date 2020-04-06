import React from 'react'
import {connect} from 'react-redux'
import {startGetUsers} from '../action/usersAction'


class UsersList extends  React.Component{
    componentDidMount(){
        if(this.props.users.length ===0){
            this.props.dispatch(startGetUsers())
        }
    }
    render(){
        console.log(this.props.users)
        return(
            <div>UsersList
            <ul>
                {
                    this.props.users.map((user,i)=>{
                        return(
                            <li key={i}>{user.name}</li>
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
