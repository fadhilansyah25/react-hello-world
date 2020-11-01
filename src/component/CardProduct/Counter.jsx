import React, { Component } from 'react';
// import { GlobalConsumer } from '../../context/context';
import { connect } from 'react-redux';

export class Counter extends Component {
    handleInputChange = (e) => {
        let value = e.target.value;
        const pattern = /[0-9]*/;

        if (pattern.test(value) && +value <= 50) {
            this.props.dispatch({type: 'INPUT_CHANGE', value: +value})
        }
    }

    render() {
        console.log(this.props);
        return (
            <div className="row">
                <button type="button" className="btn btn-primary button-minus col-2" onClick={() => this.props.dispatch({ type: 'MINUS_ORDER' })}>-</button>
                <input type="text" style={{ textAlign: 'center' }} className="col" value={this.props.totalOrder} onChange={this.handleInputChange} />
                <button type="button" className="btn btn-primary button-plus col-2" onClick={() => this.props.dispatch({ type: 'PLUS_ORDER' })}>+</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        totalOrder: state.totalOrder
    }
}

// export default GlobalConsumer(Counter);
export default connect(mapStateToProps) (Counter);