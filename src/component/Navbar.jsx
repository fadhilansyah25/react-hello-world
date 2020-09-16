import React, { Component } from 'react';
import CardProduct from '../container/Product/Product';

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
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="https://v5.getbootstrap.com/docs/5.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" loading="lazy" style={{ width: `20%` }} />
                        Bootstrap
                        </a>
                        <p>{this.state.order}</p>
                    </div>
                </nav>
                <CardProduct onCounterChange={(value) => this.handleCounterChange(value)} />
            </div>
        )
    }
}

export default Navbar
