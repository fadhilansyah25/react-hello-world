import React, { Component } from 'react';
import CardProduct from '../../../component/CardProduct/CardProduct';
import { BrowserRouter as Link } from 'react-router-dom';


export class Navbar extends Component {
    state = {
        order: 0,
        name: "Fadil",
    }

    handleCounterChange = (value) => {
        this.setState({
            order: value
        })
    }

    render() {
        return (
            <div className="container">
                <div style={{ width: "350px" }}>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <Link className="navbar-brand" to="#">
                                Bootstrap
                            </Link>
                            <p>{this.state.order}</p>
                        </div>
                    </nav>
                    <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
                </div>
            </div>
        )
    }
}

export default Navbar
