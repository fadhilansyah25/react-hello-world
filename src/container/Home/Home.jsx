// Libraries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import LifeCycleComp from '../../component/LifeCycleComp/LifeCycleComp';
import BlogPost from '../Pages/BlogPost/BlogPost';
import DetailPost from '../Pages/BlogPost/DetailPost';
import Product from '../Pages/Product/Product';
import YoutubePage from '../Pages/YoutubePage/YoutubePage';

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
            <Router>
                <Fragment>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
                            <Link className="navbar-brand" to="/">Navbar</Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item active">
                                        <Link className="nav-link" to="/">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/Product">Product</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/LifeCycle">Life Cycle</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/YoutubePage">Youtube Page</Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <Route path="/details-post/:postId" component={DetailPost}></Route>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/Product" component={Product} />
                    <Route path="/LifeCycle" component={LifeCycleComp} />
                    <Route path="/YoutubePage" component={YoutubePage} />
                </Fragment>
            </Router>
        )
    }
}

export default Home
