// Libraries
import React, { Component, Fragment, createContext } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Pages
import LifeCycleComp from '../../component/LifeCycleComp/LifeCycleComp';
import BlogPost from '../Pages/BlogPost/BlogPost';
import DetailPost from '../Pages/BlogPost/DetailPost';
import Product from '../Pages/Product/Product';
import YoutubePage from '../Pages/YoutubePage/YoutubePage';

// context
export const RootContext = createContext();
const Provider = RootContext.Provider;


export class Home extends Component {
    // initial global state
    state = {
        totalOrder: 0
    }

    dispatch = (action) => {
        switch (action.type) {
            case 'PLUS_ORDER':
                return this.setState({
                    totalOrder: this.state.totalOrder + 1
                })
            case 'MINUS_ORDER':
                if (this.state.totalOrder === 0) {
                    return this.state.totalOrder
                }
                return this.setState({
                    totalOrder: this.state.totalOrder - 1
                })
            case 'INPUT_CHANGE':
                return this.setState({
                    totalOrder: action.value
                })
            default:
                return this.state.totalOrder;
        }
    }

    render() {
        return (
            <Router>
                <Provider value={
                    {
                        state: this.state,
                        dispatch: this.dispatch
                    }
                }>
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
                </Provider>
            </Router>
        )
    }
}

export default Home
