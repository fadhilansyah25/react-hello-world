import React, { Component } from 'react';

export default class LifeCycleComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    componentDidMount() {
        console.log('componentDidMount');
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     });
        // }, 3000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        console.log('next State', nextState);
        console.log('this State', this.state);
        if (nextState.count > 5) {
            return false;
        }else {
            return true;
        }
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate(prevProps, nextProps, snapshot) {
        console.log('componentDidUpdate');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    changeCount = () => {
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        console.log('render');
        return (
            <button className="btn btn-primary" onClick={this.changeCount}>Component Button {this.state.count}</button>
        )
    }
}
