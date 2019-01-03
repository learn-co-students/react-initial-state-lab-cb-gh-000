// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: props.initialCount
    }
  }

  render() {

    {/* maybe could be cleaner */}
    let message;
    if (this.state.secondsLeft === 0) {
      message = 'Boom!'
    } else {
      message = `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return <div>{message}</div>
  }
}
