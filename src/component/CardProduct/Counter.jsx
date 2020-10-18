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
                        const inputChange = (event) => {
                            let order = parseInt(event.target.value);
                            if (isNaN(order)) {
                                order = 0
                            }
                            value.dispatch({type: 'INPUT_CHANGE', value: order})
                        }

                        return (
                            <div className="row">
                                <button type="button" className="btn btn-primary button-minus col-2" onClick={() => value.dispatch({type: 'MINUS_ORDER'})}>-</button>
                                <input type="text" style={{ textAlign: 'center' }} className="col" value={value.state.totalOrder} onChange={inputChange} />
                                <button type="button" className="btn btn-primary button-plus col-2" onClick={() => value.dispatch({type: 'PLUS_ORDER'})}>+</button>
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