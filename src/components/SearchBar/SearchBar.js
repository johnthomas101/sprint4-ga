import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    console.log("constructor");
    super(props);
    this.state = {
      text: props.myProp,
      text1: "Thomas"
    }
  }

  static getDerivedStateFromProps(props, state) {

    console.log("getDerivedStateFromProps");
    console.log(props);
    console.log(state);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  handleChange = (evt) => {
    console.log(this);
    this.setState({
      text: evt.target.value
    })
  }

  render() {
    console.log("Render");
    return (
      <div>
        <input
          className="input-box"
          onChange={this.handleChange}
          type="text"
          value={this.state.text} />
        {/* <div> state: {this.state.text}</div>
          <div> props: {this.props.myProp}</div> */}
      </div>
    );
  }
}

export default SearchBar;

// function SearchBar() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

// export default SearchBar;