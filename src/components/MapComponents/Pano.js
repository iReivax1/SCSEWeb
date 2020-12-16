import React, { Component } from 'react'
import { Pannellum } from "pannellum-react";
import { ProductConsumer, ProductContext } from '../../Context';
import "./Pano.css"

export default class Pano extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pano_img: this.props.pano_img,
      showModal: false
    };
  }
  componentDidMount() {
    this.setPanoImage();
  }
  setPanoImage = () => {
    this.setState({
      pano_img: this.props.pano_img
    }
    );
  }
  handleHotSpotClick = () => {
    this.setState({
      pano_img: "/images/sw1_1.jpg",
    });
  };
  handleDetailsClick = () => {
    this.setState({
      showModal: true
    })
  }

  render() {

    return (
      <div>
      {this.state.showModal ? <alert>test</alert> : null}
      <Pannellum
        width="100%"
        height="100vh"
        image={this.state.pano_img}
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
          type="custom"
          pitch={11}
          yaw={-167}
          text="more details"
          handleClick={(evt, args) => {this.handleDetailsClick();}}
          handleClickArg={{ "id": 1 }}
        />
        <Pannellum.Hotspot
          type="custom"
          pitch={-10}
          yaw={180}
          handleClick={(evt, args) => this.handleHotSpotClick(evt, args)}
          tooltip={(hotSpotDiv, args) => {
            const imageDiv = document.createElement('img');
            imageDiv.setAttribute('width', '45');
            imageDiv.setAttribute('height', '45');
            imageDiv.setAttribute('src', '/images/up.png')
            hotSpotDiv.appendChild(imageDiv);
            console.log(hotSpotDiv)
          }}
        />

      </Pannellum>
      </div>

    )
  }
}
Pano.contextType = ProductContext;


