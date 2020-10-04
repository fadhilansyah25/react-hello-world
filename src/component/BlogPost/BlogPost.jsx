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

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState({
                post: response.data,
            });
            console.log(response);
        });
    }

    render() {
        return (
            <div className="container d-flex flex-wrap">
                {
                    this.state.post.slice(0, 8).map(post => {
                        return <Post key={post.id} title={post.title} desc={post.body} />
                    })
                }
            </div>
        )
    }
}
