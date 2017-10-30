import React from 'react'

export default class Bomb extends React.Component {
  constructor(props) {
    super();
 
    this.state = {
      secondsLeft: props.initialCount
    }
  }
  render() {
    return (
      <h1> 
        { this.state.secondsLeft  ? this.state.secondsLeft + ' seconds left before I go boom!' : 'Boom!' }
      </h1>
    )
  }
}