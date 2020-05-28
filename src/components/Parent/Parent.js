import React, { Component } from 'react';
import TimeComponent from '../TimeComponent/TimeComponent';

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
    }

    componentDidMount() {
        setInterval(() =>
            this.setState({
                time: new Date()
            })
            , 1000
        )
    }

    render() {
        console.log("Parent Render");
        return (
            <TimeComponent time={this.state.time}/>
        );
    }
}

export default Parent;