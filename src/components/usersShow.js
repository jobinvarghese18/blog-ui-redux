import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class userShow extends React.Component{
    render(){
        console.log(this.props.posts)
        return(
            
            <div>{this.props.posts?<div><h1>{this.props.user.name}</h1><h3>Posts written</h3>
            <ul>
                {this.props.posts.map((post,i)=>{
                    return(
                        <li key={i}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
                    )
                })}
            </ul>
            </div>:<p>Loading...</p>}</div>
        )
    }
}
const mapStateToProps = (state,props)=>{
return{
    user:state.users.find(user=>user.id == props.match.params.id),
    posts:state.posts.filter(post=>post.userId == props.match.params.id)
    
  }
}
export  default connect(mapStateToProps)(userShow)