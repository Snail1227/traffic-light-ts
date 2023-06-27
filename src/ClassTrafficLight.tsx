import React, { Component } from 'react';

// Define a new type for the state of the light
interface LightState {
  firstLight: string;
  secondLight: string;
  thirdLight: string;
}

// Define a new type for the component's state
interface ComponentState {
  currentIndex: number;
}

export class ClassTrafficLight extends Component<{}, ComponentState> {
  // Define states property and its type
  states: LightState[] = [
    {
      firstLight: "red",
      secondLight: "black",
      thirdLight: "black",
    },
    {
      firstLight: "black",
      secondLight: "black",
      thirdLight: "green",
    },
    {
      firstLight: "black",
      secondLight: "yellow",
      thirdLight: "black",
    },
  ];

  constructor(props: {}) {
    super(props);

    // Initialize the state
    this.state = {
      currentIndex: 0,
    };

    // Bind the 'this' context to the method
    this.nextState = this.nextState.bind(this);
  }

  nextState() {
    this.setState((prevState) => ({
      currentIndex: (prevState.currentIndex + 1) % this.states.length,
    }));
  }

  render() {
    const currentState = this.states[this.state.currentIndex];
    return (
      <div className="traffic-light-box">
        <h2>Class Traffic Light</h2>
        <div className="traffic-light">
          <div className={`circle ${currentState.firstLight}`}></div>
          <div className={`circle ${currentState.secondLight}`}></div>
          <div className={`circle ${currentState.thirdLight}`}></div>
        </div>
        <button onClick={this.nextState} className="next-state-button">
          Next State
        </button>
      </div>
    );
  }
}
