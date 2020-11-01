import React, { Component, createContext } from 'react';

// Create Context
const RootContext = createContext();

// Provider
const Provider = RootContext.Provider;
const GlobalProvider = (Children) => {
    return (
        class ParentComp extends Component {
            // initial global state
            state = {
                totalOrder: 0
            }

            dispatch = (action) => {
                switch (action.type) {
                    case 'PLUS_ORDER':
                        return this.setState({
                            totalOrder: this.state.totalOrder + 1
                        })
                    case 'MINUS_ORDER':
                        if (this.state.totalOrder === 0) {
                            return this.state.totalOrder
                        }
                        return this.setState({
                            totalOrder: this.state.totalOrder - 1
                        })
                    case 'INPUT_CHANGE':
                        return this.setState({
                            totalOrder: action.value
                        })
                    default:
                        return this.state.totalOrder;
                }
            }

            render() {
                return (
                    <Provider value={
                        {
                            state: this.state,
                            dispatch: this.dispatch
                        }
                    }>
                        <Children {...this.props} />
                    </Provider>
                )
            }
        }
    )
}
export default GlobalProvider;

// Consumer
const Consumer = RootContext.Consumer;
export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                        {
                            value => {
                                return (
                                    <Children {...this.props} {...value} />
                                )
                            }
                        }
                    </Consumer>
                )
            }
        }
    )
}