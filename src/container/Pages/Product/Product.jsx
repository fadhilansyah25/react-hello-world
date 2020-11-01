import React, { Component } from 'react';
import CardProduct from '../../../component/CardProduct/CardProduct';
import { BrowserRouter as Link } from 'react-router-dom';
// import { GlobalConsumer } from '../../../context/context';
import {connect} from 'react-redux'

export class Navbar extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div style={{ width: "350px" }}>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="#">
                                Bootstrap
                        </Link>
                            <p>{this.props.totalOrder}</p>
                        </div>
                    </nav>
                    <CardProduct />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({totalOrder: state.totalOrder});

// export default GlobalConsumer(Navbar);
export default connect(mapStateToProps) (Navbar);
