import React, { Component } from 'react';
import { RootContext } from '../../container/Home/Home';
// import { connect } from 'react-redux';
// import ActionType from '../../Redux/Reducer/globalActionType';

export class Counter extends Component {
    // state = {
    //     order: 0,
    //     name: "Fadil",
    // }

    // handleCounterChange = (value) => {
    //     this.props.onCounterChange(value);
    // }

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

    // handleInputChange = (e) => {
    //     let value = parseInt(e.target.value);
    //     if (isNaN(value)) {
    //         value = 0
    //     }
    //     this.setState({
    //         order: value
    //     }, this.handleCounterChange(this.state.order))
    // }

    render() {
        return (
            <RootContext.Consumer>
                {
                    value => {
                        console.log(value);
                        return (
                            <div className="row">
                                <button type="button" className="btn btn-primary button-minus col-2" onClick={() => { }}>-</button>
                                <input type="text" style={{ textAlign: 'center' }} className="col" value={value.totalOrder} onChange={() => {}} />
                                <button type="button" className="btn btn-primary button-plus col-2" onClick={() => { }}>+</button>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         order: state.totalOrder
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handlePlus: () => dispatch({ type: ActionType.PLUS_ORDER }),
//         handleMinus: () => dispatch({ type: ActionType.MINUS_ORDER }),
//         inputChanged: (evt) => {
//             let number = parseInt(evt.target.value);
//             if (isNaN(number)) {
//                 number = 0
//             }
//             const action = { type: ActionType.INPUT_CHANGE, value: number };
//             dispatch(action)
//         }
//     }
// }

export default Counter;