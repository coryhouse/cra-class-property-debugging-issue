import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };

    this.incrementBound = this.incrementBound.bind(this);
  }

  incrementBound() {
    debugger;
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  }

  incrementProperty = () => {
    debugger;
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>Open dev tools</li>
          <li>Click the bound increment button</li>
          <li>
            Note that{" "}
            <a href="https://www.dropbox.com/s/cjvxiyjagnzm9cz/Screenshot%202018-09-02%2013.17.36.png?dl=0">
              you can hover over this.state in the click handler to inspect it
            </a>
          </li>
          <li>Click the class property increment</li>
          <li>
            Hover over this.state in the click handler, and{" "}
            <a href="https://www.dropbox.com/s/6zfiqfzl1ezgqgg/Screenshot%202018-09-02%2013.18.01.png?dl=0">
              note that it displays as undefined, even though it actually is
              defined
            </a>{" "}
            :(
          </li>
        </ol>
        {this.state.counter}{" "}
        <button onClick={this.incrementBound}>+ Bound</button>
        <br />
        {this.state.counter}{" "}
        <button onClick={this.incrementProperty}>+ Class property</button>
        <p>
          This actually works fine in Sandbox because it must be using a
          different source-map setting (even though it claims to be using cra).
          But cheap-module-source-map (the create-react-app default) apparently
          doesn't support debugging inside class fields. :( One solution: Use
          eval-source-map (eject required) and it works fine.
        </p>
      </div>
    );
  }
}

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
