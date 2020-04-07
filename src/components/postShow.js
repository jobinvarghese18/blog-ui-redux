import React from 'react'
import {connect} from 'react-redux'
import {startGetComments} from '../action/commentsAction'
import {Link} from 'react-router-dom'


class postShow extends React.Component{
   constructor(){
       super()
       this.state = {
           userId:'',
           name:''
       }
   }

   componentDidMount(){
    if(this.props.comments.length === 0){
        this.props.dispatch(startGetComments())
    }
    const {userId} = this.props.post
    this.setState({userId})
    const user = this.props.users.filter(ele=>ele.id==userId)
    const {name} = user[0]
    this.setState({name})
        
 }
    render(){
        console.log(this.props.comments)
        return(
            <div>
                {this.props.post?<div><h1>{this.state.name}</h1>
                <h3>Title :{this.props.post.title}</h3>
                <h3>body</h3>
                <p>{this.props.post.body}</p>
                <h3>Comments</h3>
                <ul>
                    {
                        this.props.comments.map((cmnt=>{
                            return(
                                <li key={cmnt.id}>{cmnt.body}</li>
                            )
                        }))
                    }
                </ul>
                <Link to={`/users/${this.state.userId}`}>{this.state.name}</Link>
                </div>:<p>Loading</p>}
                
            </div>
        )
    }
}
const mapStateToProps = (state,props)=>{
    return {
        post:state.posts.find(post=>post.id==props.match.params.id),
        users: state.users,
        comments:state.comments.filter(cmnt=>cmnt.postId==props.match.params.id)
    }
}
export default connect(mapStateToProps)(postShow)
