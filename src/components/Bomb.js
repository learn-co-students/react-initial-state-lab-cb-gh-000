// Bomb Component Code Goes Here
import React from 'react';

export default class Bomb extends React.Component {
  constructor(props) {
    super();
    this.state = {secondsLeft: props.initialCount}
  }

     componentDidMount() {
      this.timer = setInterval(() => this.tick(), 1000);
    }

     componentWillUnmount() {
      clearInterval(this.timer)
    }

    tick() {
      this.setState({
        secondsLeft : this.state.secondsLeft - 1
      })
    }

  render(){
    return(
      <div>
        {this.state.secondsLeft <= 0 ? 'Boom!' : this.state.secondsLeft + ' seconds left before I go boom!'}
      </div>
    )
  }
}
