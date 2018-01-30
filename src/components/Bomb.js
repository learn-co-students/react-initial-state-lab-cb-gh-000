// Bomb Component Code Goes Here
import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondsLeft: props.initialCount,
    }
  }

  render() {
    return (
      <div>
        <p>{(this.state.secondsLeft === 0) ? `Boom!` : `${this.props.initialCount} seconds left before I go boom!`}</p>
      </div>
    );
  }
}

export default Bomb;