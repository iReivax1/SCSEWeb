import React, { Component } from 'react'
import { Pannellum, PannellumVideo } from "pannellum-react";
import {ProductConsumer,ProductContext} from '../../Context';
import "./Pano.css"


export default class pano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaPhoto: this.props.pano_img,
      showTextOverlay: false
    };
  }

  handleHotSpotClick = () => {
    this.setState({
      mediaPhoto: "/images/pano.jpg",
    });
  };

  render() {
    let value = this.context;
    return (
      <Pannellum
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
      mouseZoom
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
      text="more details"
      handleClick={(evt , args) => {value.openModal(args.id); console.log('testing click');}}
      handleClickArg={{ "id":1 }}
    />
    {/* args is id? */}
    <Pannellum.Hotspot 
    type="custom"
    pitch={31}
    yaw={150}
    handleClick={(evt , args) => this.handleHotSpotClick(evt , args)}
    tooltip = {(hotSpotDiv, args) => {
      const imageDiv = document.createElement('img');
      imageDiv.setAttribute('width', '45');
      imageDiv.setAttribute('height', '45');
      imageDiv.setAttribute('src', '/images/up.png')
      hotSpotDiv.appendChild(imageDiv);
      console.log(hotSpotDiv)
    }}
    />

    </Pannellum>
    )
  }
}



