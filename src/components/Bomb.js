// Bomb Component Code Goes Here
import React from 'react';
export default class Bomb extends React.Component{
  constructor(props){
  //  var initialCount;
    super(props);
    this.state = {
      secondsLeft: props.initialCount
    };
  }

  render(){
    if (this.state.secondsLeft == 0){
      return (
        <div>
          <p>Boom!</p>
        </div>
      )
    } else {
      return(
        <div>
      <p>{this.state.secondsLeft} seconds left before I go boom!</p>
        </div>
      )
    }
  }



}
