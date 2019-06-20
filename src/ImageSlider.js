import React from "react";

class ImageSlider extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentSlideIndex: 0;
    }
  }
render() {
    return (
      <div className="toggle-button">
        I am on slide this.state.currentSlideIndex
      </div>
    )
  }
}

export default ImageSlider;
