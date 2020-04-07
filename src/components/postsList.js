import React from 'react'
import {connect} from 'react-redux'
import {startGetPosts} from '../action/postsAction'
import {Link} from 'react-router-dom'
import {startGetUsers} from '../action/usersAction'

class PostsList extends React.Component{
    componentDidMount(){
        if(this.props.posts.length === 0){
            this.props.dispatch(startGetPosts())
        }
        if(this.props.users.length ===0){
            this.props.dispatch(startGetUsers())
        }
    }
    render(){
        return(
            <div>
                <h2>Posts</h2>
                    <ul>
                        {this.props.posts.map((ele,i)=>{
                            return(
                                <li key={i}><Link to={`/posts/${ele.id}`}>{ele.title}</Link></li>
                            )
                        })}
                    </ul>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        posts : state.posts,
        users:state.users
    }
}
export default connect(mapStateToProps)(PostsList)