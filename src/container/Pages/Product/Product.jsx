import React, { Component } from 'react';
import CardProduct from '../../../component/CardProduct/CardProduct';
import { BrowserRouter as Link } from 'react-router-dom';
import { RootContext } from '../../Home/Home';
// import { connect } from 'react-redux';

export class Navbar extends Component {
    // state = {
    //     order: 0,
    //     name: "Fadil",
    // }

    // handleCounterChange = (value) => {
    //     this.setState({
    //         order: value
    //     })
    // }

    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        return (
                            <div className="container">
                                <div style={{ width: "350px" }}>
                                    <nav className="navbar navbar-light bg-light">
                                        <div className="container-fluid">
                                            <Link className="navbar-brand" to="#">
                                                Bootstrap
                                        </Link>
                                            <p>{value.state.totalOrder}</p>
                                        </div>
                                    </nav>
                                    <CardProduct />
                                </div>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

// const mapStoreToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

export default Navbar;
