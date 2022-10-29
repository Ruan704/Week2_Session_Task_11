import React, { Component } from 'react';

class UpdateScores extends Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }
  
  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      return true;
    }
    else {
      return false;
    }
  }
  
  render() {
    console.log("Inside render");
    return (
  
      <div className="App">
        <h1>Component : {this.state.value}</h1>
        <button onClick={() => {
          this.setState({ value: this.state.value + 1 })
        }}>Update</button>
      </div>
    );
  }
}
  
export default UpdateScores;