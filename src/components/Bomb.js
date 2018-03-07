
import React, { Component } from 'react';

class Bomb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount,
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
