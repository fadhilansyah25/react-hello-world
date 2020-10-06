import React, { Component } from 'react'
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
// import Navbar from '../../component/Navbar';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../../component/BlogPost/BlogPost';

export class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 6000)
    }

    render() {
        return (
            <div>
                {/* <Navbar/> */}
                {/* <h1>Youtube Component</h1>
                <hr />
                <YoutubeComp
                    time="7.12"
                    title="Lorem Ipsum1"
                    desc="200x ditonton. 1 hari yang lalu"
                    image="https://images.unsplash.com/photo-1564817177974-9b947bb4b463?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <YoutubeComp
                    time="13.78"
                    title="Lorem Ipsum2"
                    desc="500x ditonton. 2 hari yang lalu"
                    image="https://images.unsplash.com/photo-1519073147904-23e655032ea3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <YoutubeComp
                    time="20.89"
                    title="Lorem Ipsum3"
                    desc="400x ditonton. 3 hari yang lalu"
                    image="https://images.unsplash.com/photo-1528008906971-5a6c444a9a4d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <YoutubeComp
                    time="45.32"
                    title="Lorem Ipsum4"
                    desc="700x ditonton. 4 hari yang lalu"
                    image="https://images.unsplash.com/photo-1508530786855-dfea35260b8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <YoutubeComp
                    time="56.89"
                    title="Lorem Ipsum5"
                    desc="900x ditonton. 5 hari yang lalu"
                    image="https://images.unsplash.com/photo-1551669850-26e6f40757e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
                <YoutubeComp /> */}
                {/* <p>Life Cycle Component</p>
                {
                    this.state.showComponent ? <LifeCycleComp /> : null
                } */}
                <p>Blog Post</p> 
                <hr/>
                <div className="container">
                <BlogPost></BlogPost>
                </div>
            </div>
        )
    }
}

export default Home
