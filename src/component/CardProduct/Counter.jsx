import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Counter extends Component {
    // state = {
    //     order: 0,
    //     name: "Fadil",
    // }

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
        console.log(this.props)
        return (
            <div className="row">
                <button type="button" className="btn btn-primary button-minus col-2" onClick={this.handleMinus}>-</button>
                <input type="text" style={{ textAlign: 'center' }} className="col" value={this.props.order} onChange={this.handleInputChange} />
                <button type="button" className="btn btn-primary button-plus col-2" onClick={this.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order : state.totalOrder
    }
}

export default connect(mapStateToProps) (Counter);