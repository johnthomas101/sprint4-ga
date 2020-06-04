import React, { Component } from 'react';

import { connect } from 'react-redux';

class OtherReduxComp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div style={{ backgroundColor: this.props.color }}>Other Div</div> );
    }
}
 
const mapDispatchToProps = dispatch => ({
    // changeColor: (obj) => dispatch(changeColor(obj)),
})

const mapStateToProps = state => ({
    color: state.color,
})

export default connect(mapStateToProps, mapDispatchToProps)(OtherReduxComp)