import React, { Component } from "react";

export default class Counter extends Component {
  state = {
    counter: 0,
    error: false,
  };

  setDecrement = () => {
    let { counter } = this.state;
    if (counter === 0) {
      this.setState({ error: true });
    } else {
      this.setState({ counter: this.state.counter - 1 });
    }
  };

  render() {
    const errorClass = this.state.error ? "" : "hidden";
    return (
      <div data-test="component-counter">
        <h1 data-test="display-counter">
          The counter value is :{this.state.counter}
        </h1>
        <div data-test="error-message" className={`error ${errorClass}`}>
          The counter cannot go below 0
        </div>
        <button
          data-test="increment-counter"
          onClick={() =>
            this.setState({ counter: this.state.counter + 1, error: false })
          }
        >
          Increment Counter
        </button>
        <button data-test="decrement-button" onClick={this.setDecrement}>
          Decrement Counter
        </button>
        <style jsx>
          {`
            .error {
              color: red;
            }
            .hidden {
              display:none
            }
          `}
        </style>
      </div>
    );
  }
}
