import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.incrementCounterBound = this.incrementCounterBound.bind(this);
  }

  incrementCounterBound() {
    debugger;
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  incrementCounterProperty = () => {
    debugger;
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {this.state.counter} <button onClick={this.incrementCounter}>+</button>
        {this.state.counter}{" "}
        <button onClick={this.incrementCounterProperty}>+</button>
      </div>
    );
  }
}

export default App;
