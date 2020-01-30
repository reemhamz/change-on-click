import React, { Component } from 'react';
import './App.css';

class FlipImage extends Component {

  constructor() {
    super();

    //setting state to a variable holding a boolean. 
    //This boolean will change to false and back to true whenever the image is clicked.
    this.state = {
      flipTheImage: true,
    }
  }

//when image is clicked, the boolean above changes to either true or false
  clicked = () => {
    this.setState({
      flipTheImage: !this.state.flipTheImage
    })
  }
  
  //made a function holding an if-else statement that would return a string similar
  //to the image paths in the imagesToFlip variable below in the render method
  changeImagePath = () => {
    if (this.state.flipTheImage === true) {
      return 'a'
    } else {
      return 'b'
    }
  }
  
  render() {
    
    const imagesToFlip = {
      a: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg",
      b: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg"
    }

    const imagePath = this.changeImagePath();

        return (
            <div className="FlipImage">
            <img className="image" src={imagesToFlip[imagePath]} alt="Collage of animals" onClick={this.clicked}/>
            </div>
        );
    }
}

export default FlipImage;