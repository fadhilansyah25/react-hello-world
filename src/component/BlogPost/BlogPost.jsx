import React, { Component } from 'react';
import axios from 'axios';
import '../BlogPost/BlogPost.css';
import Post from '../Post/Post';

export default class BlogPost extends Component {
    state = {
        post: []
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json,
        //         });
        //         console.log(this.state.post.slice(0, 10));
        //     })
        this.getPostAPI();
    }

    handleRemove = (data) => {
        axios.delete(`http://localhost:3004/posts/${data}`).then(res => {
            this.getPostAPI()
        })
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
            .then(response => {
                this.setState({
                    post: response.data,
                });
            });
    }

    render() {
        return (
            <div className="container d-flex flex-wrap">
                {
                    this.state.post.slice(0, 8).map(post => {
                        return <Post key={post.id} data={post} remove={this.handleRemove} />
                    })
                }
            </div>
        )
    }
}
