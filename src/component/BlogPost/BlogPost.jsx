import React, { Component } from 'react';
import axios from 'axios';
import '../BlogPost/BlogPost.css';
import Post from '../Post/Post';
import { Fragment } from 'react';

export default class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId : 1,
            id : 1,
            title : "",
            body : ""
        }
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

    handleFormChange = (event) => {
        let formBlogPostNew = {...this.state.formBlogPost};
        console.log(event.target.name);
        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        },() => {
            console.log(this.state.formBlogPost)
        });
    }

    render() {
        return (
            <Fragment>
                <div className="form-section mb-5">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="title" className="mb-1">Title</label>
                            <input type="text" className="form-control" name="title" placeholder="Add Title" onChange={this.handleFormChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="body" className="mb-1">Blog Content</label>
                            <textarea className="form-control" name="body" rows="10" placeholder="Add Blog Content" onChange={this.handleFormChange}></textarea>
                        </div>
                        <button type="submit" className="btn btn-outline-primary">Submit</button>
                    </form>
                </div>
                <div className="container d-flex flex-wrap">
                    {
                        this.state.post.slice(0, 8).map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} />
                        })
                    }
                </div>
            </Fragment>
        )
    }
}
