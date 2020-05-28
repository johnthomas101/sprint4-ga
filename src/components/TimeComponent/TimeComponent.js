import React, { Component } from 'react';

// function TestComp(props){
//     return (
//         <div>
//             {props.testData}
//         </div>
//     )
// }

class TimeComponent extends Component {
    constructor(props) {
        console.log("constructor")
        super(props);
        this.state = {
            time: props.time,
            counter: 0
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        console.log(props);
        console.log(state);
        if (props.time !== state.time) {
            return {
                time: props.time
            };
            // return null;
        }
        return null;
    }


    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    componentDidMount() {
        console.log("First mount completed");
        // setInterval(() =>
        //     this.setState({
        //         time: new Date()
        //     })
        //     , 1000
        // )
    }

    increment() {
        this.setState({
            counter: ++this.state.counter
        })
    }

    decrement() {
        this.setState({
            counter: --this.state.counter
        })
    }


    render() {
        console.log("Render");
        let newDate = new Date();
        return (
            <div>
                <div>
                    {this.state.counter}
                </div>
                <div>
                    {/* {this.state.time.toString()} */}
                    {
                        this.props.time.toString()
                    }
                </div>

                <div
                    onClick={() => this.increment()}
                    style={{ display: 'inline-block', padding: '20px', backgroundColor: 'black', color: 'white' }}>
                    Increment
                </div>

                <div
                    onClick={() => this.decrement()}
                    style={{ display: 'inline-block', padding: '20px', backgroundColor: 'black', color: 'white' }}>
                    Decrement
                </div>
            </div>
        );

    }
}

export default TimeComponent;
