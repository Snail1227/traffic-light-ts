import React, { useState } from 'react';

interface TrafficLightState {
  firstLight: string;
  secondLight: string;
  thirdLight: string;
}

const states: TrafficLightState[] = [
  {
    firstLight: "red",
    secondLight: "black",
    thirdLight: "black"
  },
  {
    firstLight: "black",
    secondLight: "black",
    thirdLight: "green"
  },
  {
    firstLight: "black",
    secondLight: "yellow",
    thirdLight: "black"
  }
]

export const FunctionalTrafficLight: React.FC = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const currentState = states[currentIndex];

  const nextState = () => {
    setCurrentIndex((currentIndex + 1) % states.length);
  }


  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div className={`circle ${currentState.firstLight}`}></div>
        <div className={`circle ${currentState.secondLight}`}></div>
        <div className={`circle ${currentState.thirdLight}`}></div>
      </div>
      <button onClick={() => {
        nextState()
      }} className="next-state-button">Next State</button>
    </div>
  );
};



