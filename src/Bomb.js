import React from "react";

class Bomb extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      secondsLeft: this.initialCount,
    }
  }
  render(){
    return(

        ({this.state.secondsLeft} === 0) ? Boom! : {this.state.secondsLeft} seconds left before I go boom!

    )
  }
}

export default Bomb;
