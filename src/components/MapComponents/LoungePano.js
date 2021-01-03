import React, {Component} from 'react'
import {Pannellum} from "pannellum-react";
import "./Pano.css"
import ReactJsAlert from "reactjs-alert";

export default class LoungePano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: "/images/l1/lounge.jpg",
            showModal: false,
            status: true,
            title: "Psss. Did you know?",
            quote: "This is the lounge",
        };
    }

    handleHotSpotClick = () => {
        // this.setState({
        //     pano_img: "/images/l1/swlab1/swlab1_1.jpg",
        // });
        window.location.reload();
    };

    render() {
        let alert = <div className="App">
            <ReactJsAlert
                type="info"
                title={this.state.title}
                status={this.state.status}
                quote={this.state.quote}
                Close={() => this.setState({showModal: false})}
            />
        </div>
        return (
            <div>
                {this.state.showModal ? alert : null}
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
                    // onLoad={() => {
                    //     console.log("panorama loaded");
                    // }}
                    // onScenechange={(id) => {
                    //     console.log("Scene has change on " + id);
                    // }}
                    // onScenechangefadedone={() => {
                    //     console.log("panorama loaded");
                    // }}
                    // onError={(err) => {
                    //     console.log("Error", err);
                    // }}
                    // onErrorcleared={() => {
                    //     console.log("Error Cleared");
                    // }}
                    // onMousedown={(evt) => {
                    //     console.log("Mouse Down", evt);
                    // }}
                    // onMouseup={(evt) => {
                    //     console.log("Mouse Up", evt);
                    // }}
                    // onTouchstart={(evt) => {
                    //     console.log("Touch Start", evt);
                    // }}
                    // onTouchend={(evt) => {
                    //     console.log("Touch End", evt);
                    // }}
                    hotspotDebug={false}
                >
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-4.603722991783871}
                        yaw={-171.247823510957}
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