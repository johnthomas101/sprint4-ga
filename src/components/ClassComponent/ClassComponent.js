import React, { Component } from 'react';

export default class ClassComponent extends Component {

    constructor(props){
        super(props);
        console.log("Constructor");
    }

    static getDerivedStateFromProps(props, state){
        console.log("getDerivedStateFromProps");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate");
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapshotBeforeUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }

    render() {
        console.log("render");
        return (
            <div></div>
        );
    }
}