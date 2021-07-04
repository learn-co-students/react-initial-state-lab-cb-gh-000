// your Bomb code here!
import React from 'react';

function asdasf(asd){
  if (asd==0) {
    return "Boom!"
  }
  return asd+" seconds left before I go boom!"
}

class Bomb extends React.Component{
  constructor(props) {
        super();

        this.state = {
          secondsLeft: props.initialCount
        }
    }
  render(){
    return(
      <div>{asdasf(this.state.secondsLeft)}
      </div>
    )
  }
}

export default Bomb;
