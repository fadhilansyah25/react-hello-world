import React, { Component, Fragment } from 'react';

export class Product extends Component {
    state = {
        order: 0
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }

    handleInputChange = (e) => {
        let value = parseInt(e.target.value);
        if (isNaN(value)) {
            value = 0
        }
        this.setState({
            order: value
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }

    render() {
        return (
            <Fragment>
                <div className="container">
                    <div className="card" style={{ width: "18rem" }}>
                        <div className="img-thumb-prod">
                            <img src="https://img-global.cpcdn.com/recipes/43d48b1f68f8a009/751x532cq70/pempek-palembang-foto-resep-utama.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Pempek Palembang</h5>
                            <p className="card-text">Rp. 34.000</p>
                            <p className="count">{this.state.order}</p>
                            <div className="row">
                                <button type="button" className="btn btn-primary button-minus col-2" onClick={this.handleMinus}>-</button>
                                <input type="text" name="" id="" className="col" value={this.state.order} style={{ textAlign: 'center' }} onChange={this.handleInputChange} />
                                <button type="button" className="btn btn-primary button-plus col-2" onClick={this.handlePlus}>+</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Product
