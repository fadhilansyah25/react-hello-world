import Axios from 'axios';
import React, { Component } from 'react'

export default class DetailPost extends Component {
    state = {
        details : {
            id : 1,
            title : "",
            userId: 1,
            body: ""
        }
    }

    componentDidMount(){
        // console.log(this.props.match.params.postId);
        Axios.get(`http://localhost:3004/posts/${this.props.match.params.postId}`)
        .then((res) =>{
            // console.log(res.data);
            this.setState({
                details: res.data
            })
        })
    }

    render() {
        return (
            <div className="container">
                <img src="https://placeimg.com/640/200/tech" className="img-fluid" alt="blog-img" />
                <div className="mt-3">
                <h1>{this.state.details.title}</h1>
                    <hr/>
                <p>{this.state.details.body}</p>
                </div>
            </div>
        )
    }
}
