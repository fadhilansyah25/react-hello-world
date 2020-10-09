import React, { Component } from 'react';
import axios from 'axios';
import '../BlogPost/BlogPost.css';
import Post from '../../../component/Post/Post';

export default class BlogPost extends Component {
    state = {
        post: [],
        formBlogPost: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        },
        update: false
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
        let formBlogPostNew = { ...this.state.formBlogPost };
        let timestamp = new Date().getTime();

        if (!this.state.update) {
            formBlogPostNew['id'] = timestamp;
        }

        formBlogPostNew[event.target.name] = event.target.value;

        this.setState({
            formBlogPost: formBlogPostNew
        });
    }

    handleClickSubmit = () => {
        // console.log(this.state.formBlogPost);
        if (this.state.update) {
            this.putDataToAPI();
        } else {
            this.postDataToAPI();
        }
    }

    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                console.log(res);
                this.getPostAPI();
                this.setState({
                    formBlogPost: {
                        userId: 1,
                        id: 1,
                        title: "",
                        body: ""
                    }
                })
            }, (err) => {
                console.log('error : ', err);
            })
    }

    putDataToAPI = () => {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost)
            .then((res) => {
                console.log(res);
                this.getPostAPI();
                this.setState({
                    formBlogPost: {
                        userId: 1,
                        id: 1,
                        title: "",
                        body: ""
                    },
                    update: false
                })
            })
    }

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            update: true
        })
    }



    render() {
        return (
            <div className="container">
                <h3>Blog Post</h3>
                <div className="form-section mb-5">
                    <form>
                        <div className="form-group mb-3">
                            <label htmlFor="title" className="mb-1">Title</label>
                            <input type="text" value={this.state.formBlogPost.title} className="form-control" name="title" placeholder="Add Title" onChange={this.handleFormChange} />
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="body" className="mb-1">Blog Content</label>
                            <textarea className="form-control" value={this.state.formBlogPost.body} name="body" rows="10" placeholder="Add Blog Content" onChange={this.handleFormChange}></textarea>
                        </div>
                        <button type="button" className="btn btn-outline-primary" onClick={this.handleClickSubmit}>Submit</button>
                    </form>
                </div>
                <div className="d-flex flex-wrap">
                    {
                        this.state.post.slice(90).reverse().map(post => {
                            return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                        })
                    }
                </div>
            </div>
        )
    }
}
