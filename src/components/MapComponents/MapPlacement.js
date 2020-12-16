import React, { Component } from 'react'
import '../../App.css'
import { ButtonContainer } from '../Button';
import Layout from './Layout';
import './MapPlacement.css';
import Pano from './Pano'


export default class MapPlacement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layoutImage: ["/images/mapLV1_a.jpg", "/images/mapLV1_b.jpg", "/images/mapLV1_c.jpg"],
      yaww: 180,
      updateText: "initial",
      author: "SCSE",
      level: 1
    };
    this.ref = React.createRef();
    this.handleClick_l1 = this.handleClick_l1.bind(this);
    this.handleClick_l2 = this.handleClick_l2.bind(this);
  }

  handleClick_l1 = () => {
    this.setState({
      layoutImage: ["/images/mapLV1_a.jpg", "/images/mapLV1_b.jpg", "/images/mapLV1_c.jpg"],
      level: "1"
    }
    )
  }
  handleClick_l2 = () => {
    this.setState({
      layoutImage: ["/images/mapLV2.jpg", '/images/img-home.jpg'],
      level: "2"
    }
    )
    
  }
  handleClick_b1 = () => {
    this.setState({
      layoutImage: ['/images/img-home.jpg'],
      level: 'b1'
    }
    )
  }
  handleClick_b2 = () => {
    this.setState({
      layoutImage: ['/images/mapLV2.jpg'],
      level: 'b2'
    }
    )
  }
  handleClick_b3 = () => {
    this.setState({
      layoutImage: ['/images/mapLV2.jpg'],
      level: 'b3'
    }
    )
  }
  handleClick_b4 = () => {
    this.setState({
      layoutImage: ['/images/mapLV2.jpg'],
      level: 'b4'
    }
    )
  }


  render() {
    return (
      <React.Fragment >
        <div className='layout-container'>
          <Layout layout_img = {this.state.layoutImage} level = {this.state.level}></Layout>
        </div>
        <ButtonContainer onClick={() => {this.handleClick_l2(); console.log(this.state.layoutImage)}}>
          Level 2
        </ButtonContainer>
        <ButtonContainer onClick = {() => this.handleClick_l1()}>
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
