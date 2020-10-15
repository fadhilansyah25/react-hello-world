import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Counter extends Component {
    state = {
        order: 0,
        name: "Fadil",
    }

    handleCounterChange = (value) => {
        this.props.onCounterChange(value);
    }

    // handlePlus = () => {
    //     this.setState({
    //         order: this.state.order + 1
    //     }, () => {
    //         this.handleCounterChange(this.state.order)
    //     })
    // }

    // handleMinus = () => {
    //     if (this.state.order > 0) {
    //         this.setState({
    //             order: this.state.order - 1
    //         }, () => {
    //             this.handleCounterChange(this.state.order)
    //         })
    //     }
    // }

    handleInputChange = (e) => {
        let value = parseInt(e.target.value);
        if (isNaN(value)) {
            value = 0
        }
        this.setState({
            order: value
        }, this.handleCounterChange(this.state.order))
    }

    render() {
        return (
            <div className="row">
                <button type="button" className="btn btn-primary button-minus col-2" onClick={this.props.handleMinus}>-</button>
                <input type="text" style={{ textAlign: 'center' }} className="col" value={this.props.order} onChange={this.props.inputChanged} />
                <button type="button" className="btn btn-primary button-plus col-2" onClick={this.props.handlePlus}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePlus: () => dispatch({ type: 'PLUS_ORDER' }),
        handleMinus: () => dispatch({ type: 'MINUS_ORDER' }),
        inputChanged: (evt) => {
            let number = parseInt(evt.target.value);
            if (isNaN(number)) {
                number = 0
            }
            const action = { type: 'INPUT_CHANGE', value: number };
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);