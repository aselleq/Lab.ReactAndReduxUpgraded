import React from "react";
import ReactDOM from "react-dom";
import store from "./store"; // imported for you already

const increment_counter = "increment_counter";
export const incrementCounter = () => ({ type: "increment_counter" });
//to represent the state of app, use js object

const initialState = {
  count: 0
};

const store = createStore(reducer);

//reduers's job - to take in the previous state and the action, and calculate what the new state should look like.

function reducer(state = initialState, action) {
  switch (action.type) {
    case increment_counter:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
}

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div id="container">
        <div id="counter">
          <h1>{this.state.count}</h1>
          <button onClick={this.increment}>Increment</button>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById("app"));

//action type: to click
//export const incrementByClick = () => {type: 'increment counter'})
//action creators
//window._REDUX_DEVTOOLS_EXTENTION__ & window._REDUXDEVTOOL_EXTENTION_))
