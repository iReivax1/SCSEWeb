import React, { Component } from 'react'
import '../../App.css'
import { ButtonContainer } from '../Button';
import './MapPlacement.css';
import Pano from './Pano'


export default class MapPlacement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: "/images/pano.jpg",
      yaww: 180,
      test: false,
      updateText: "initial",
      author: "SCSE"
    };
    this.ref = React.createRef();
  }


  
  testaction = () => {
      console.log("s")
  }

  handleClick_sw1 = () => {
    this.setState({
      mediaPhoto: "/images/pano.jpg",
      test: false
    });
  }
  handleClick_sw3 = () => {
    this.setState({
      mediaPhoto: "/images/alma.jpg",
      test: false
    });
  };
  handleMouseDown = e => {
    if (e.button === 0)
    {
      e.preventDefault();
    }
  }
  

  render() {
    return (
      <React.Fragment onMouseDown={this.handleMouseDown} >
        <div className='hero-container'>
          <Pano pano_img = {this.state.mediaPhoto}></Pano>
        </div>
        <ButtonContainer onClick={() => this.handleClick_sw1()}>
          Software Lab 1
        </ButtonContainer>
        <ButtonContainer onClick={() => this.handleClick_sw3()}>
          Software Lab 3
        </ButtonContainer>
        <ButtonContainer>
          Hardware lab 1
        </ButtonContainer>
      </React.Fragment>
    )
  }
}
