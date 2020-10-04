import React, { Component } from 'react';
import '../BlogPost/BlogPost.css';
import Post from '../Post/Post';

export default class BlogPost extends Component {
    render() {
        return (
            <div>
                <Post title="title" desc="desc" />
            </div>
        )
    }
}
