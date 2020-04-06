import React from 'react'
import postsReducers from '../reducers/postsReducers'
import {connect} from 'react-redux'
import {startGetPosts} from '../action/postsAction'

class PostsList extends React.Component{
    componentDidMount(){
        if(this.props.posts.length === 0){
            this.props.dispatch(startGetPosts())
        }
    }
    render(){
        console.log(this.props.posts)
        return(
            <div>hii</div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        posts : postsReducers
    }
}
export default connect(mapStateToProps)(PostsList)