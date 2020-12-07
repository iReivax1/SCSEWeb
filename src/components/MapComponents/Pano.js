import React, { Component } from 'react'
import { Pannellum, PannellumVideo } from "pannellum-react";
import "./Pano.css"


export default class pano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: this.props.pano_img,
    };
  }
  handleHotSpotClick = () => {
    this.setState({
      mediaPhoto: "/images/pano.jpg",
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
      <Pannellum onMousedown={this.handleMouseDown}
      width="100%"
      height="100vh"
      image= {this.props.pano_img}
      pitch={10}
      yaw={180}
      hfov={500}
      autoLoad
      author=""
      title=""
      orientationOnByDefault={false}
      draggable
      keyboardZoom
      mouseZoom = {false}
      preview=""
      previewAuthor=""
      previewTitle=""
      showControls
      showFullscreenCtrl
      showZoomCtrl
      onLoad={() => { console.log("panorama loaded"); }}
      onScenechange={(id) => { console.log("Scene has change on " + id); }}
      onScenechangefadedone={() => { console.log("panorama loaded"); }}
      onError={(err) => { console.log("Error", err); }}
      onErrorcleared={() => { console.log("Error Cleared"); }}
      onMousedown={(evt) => { console.log("Mouse Down", evt); }}
      onMouseup={(evt) => { console.log("Mouse Up", evt); }}
      onTouchstart={(evt) => { console.log("Touch Start", evt); }}
      onTouchend={(evt) => { console.log("Touch End", evt); }}
      hotspotDebug={false}
    >
      <Pannellum.Hotspot
        type="info"
        pitch={11}
        yaw={-167}
        text="See courses"
        URL="/all_courses"
      />
    <Pannellum.Hotspot 
    type="custom"
    pitch={31}
    yaw={150}
    handleClick={(evt , args) => this.handleHotSpotClick(evt , args)}
    
    />

    </Pannellum>
    )
  }
}



