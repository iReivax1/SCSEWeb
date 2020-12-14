import React, { Component } from 'react'
import '../../App.css'
import { ButtonContainer } from '../Button';
import './MapPlacement.css';
import Pano from './Pano'


export default class MapPlacement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutImage: "/images/pano.jpg",
      mediaPhoto: "/images/pano.jpg",
      yaww: 180,
      test: false,
      updateText: "initial",
      author: "SCSE"
    };
    this.ref = React.createRef();
  }

  handleClick_l1 = () => {
    this.setState({
      layoutImage: '/images/pano.jpg'
    }
    )
  }
  handleClick_l2 = () => {
    this.setState({
      layoutImage: '/images/pano.jpg'
    }
    )
  }
  handleClick_b1 = () => {
    this.setState({
      layoutImage: '/images/pano.jpg'
    }
    )
  }
  handleClick_b2 = () => {
    this.setState({
      layoutImage: '/images/pano.jpg'
    }
    )
  }
  handleClick_b3 = () => {
    this.setState({
      layoutImage: '/images/pano.jpg'
    }
    )
  }
  handleClick_b4 = () => {
    this.setState({
      layoutImage: '/images/pano.jpg'
    }
    )
  }
  handleClick_sw1 = () => {
    this.setState({
      mediaPhoto: "/images/pano.jpg",
    });
  }
  handleClick_sw2 = () => {
    this.setState({
      mediaPhoto: "/images/test.jpg",
    })
  }
  handleClick_sw3 = () => {
    this.setState({
      mediaPhoto: "/images/alma.jpg",
    });
  };
  handleClick_hw1 = () => {
    this.setState({
      mediaPhoto: "/images/test_2.jpg",
    });
  };
  

  render() {
    return (
      <React.Fragment onMouseDown={this.handleMouseDown} >
        <div className='hero-container'>
          <Pano pano_img = {this.state.layoutImage}>This is hidden</Pano>
        </div>
        <ButtonContainer onClick={() => this.handleClick_l1()}>
          Level 2
        </ButtonContainer>
        <ButtonContainer onClick = {() => this.handleClick_l2()}>
          Level 1
        </ButtonContainer>
        <ButtonContainer onClick={() => this.handleClick_b1()}>
          Level B1
        </ButtonContainer>
        <ButtonContainer onClick={() => this.handleClick_b2()}>
          Level B2
        </ButtonContainer>
        <ButtonContainer onClick={() => this.handleClick_b3()}>
          Level B3
        </ButtonContainer>
        <ButtonContainer onClick={() => this.handleClick_b4()}>
          Level B4
        </ButtonContainer>
      </React.Fragment>
    )
  }
}
