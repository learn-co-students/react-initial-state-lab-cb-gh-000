// your Bomb code here!
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      secondsLeft: this.props.initialCount
    }
  }

  render(){

    //const {secondsLeft} = this.state;
    const SECONDS_LEFT = this.state.secondsLeft;

    return(
      <div>
      {SECONDS_LEFT ? `${SECONDS_LEFT} seconds left before I go boom!`  : `Boom!`}
      </div>
    )
  }
}
