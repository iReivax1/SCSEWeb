import React, {Component} from 'react'
import {Pannellum} from "pannellum-react";
import "./Pano.css"
import ReactJsAlert from "reactjs-alert";

export default class LoungePano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: "/images/l1/lounge/1.jpg",
            showModal: false,
            status: true,
            title: "SCSE Lounge",
            quote: "The birthplace of this map.",
        };
    }

    handleDetailsClick = () => {
        this.setState({
            showModal: true
        })
    }
    handleHotSpotClick_exit = () => {
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
                    hotspotDebug={false}
                >
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.2563407235867086}
                        yaw={-61.335068056254386}
                        text="more details"
                        handleClick={(evt) => {
                            this.handleDetailsClick(evt);
                        }}
                        handleClickArg={{"id": 1}}
                    />
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-2.5}
                        yaw={-168.3412799816285}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                            //console.log(hotSpotDiv)
                        }}
                    />
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-2.5}
                        yaw={-18.332900974592143}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                            //console.log(hotSpotDiv)
                        }}
                    />
                </Pannellum>
            </div>
        )
    }
}
