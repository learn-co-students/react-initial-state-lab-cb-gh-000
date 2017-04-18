var React = require('react');

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
    secondsLeft : props.initialCount

    }

  }
  render(){
    let rende = this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`
     return (
       <div>
          {rende}
        </div>
     )
  }
}
module.exports = Bomb ;
