import {Pannellum} from "pannellum-react";
import React, {Component} from "react";
import ReactJsAlert from "reactjs-alert";
import "../Pano.css";

export default class AMDPano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: "/images/b3/amd/1.jpg",
            showModal: false,
            status: true,
            page: 1,
            title: "Psss. Did you know?",
            quote: "This lab is a collaboration lab with AMD!!!"
        };
    }

    handleHotSpotClick_exit = () => {
        window.location.reload();
    };
    setPanoImage = () => {
        this.setState({
                pano_img: this.props.pano_img
            }
        );
    };
    handleHotSpotClick = (number) => {
        this.setState({
            pano_img: "/images/b3/amd/" + number + ".jpg",
            page: number
        });
    };
    handleDetailsClick = () => {
        this.setState({
            showModal: true
        });
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
        </div>;
        let pano = null;
        switch (this.state.page) {
            case 1:
                pano = <Pannellum
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
                    hotspotDebug={true}
                >
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-17.812201907635136}
                        yaw={67.920010903511699}
                        text="more details"
                        handleClick={(evt, args) => {
                            this.handleDetailsClick(args.id);
                        }}
                        handleClickArg={() => this.state.showDetails ? {"id": 1} : {"id": 2}}
                    />
                    {/*Exit*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-4.022015907635136}
                        yaw={172.87896444170997}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Enter*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-9.232015907635136}
                        yaw={36.695870234930946}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                </Pannellum>;
                break;
            case 2:
                pano = <Pannellum
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
                    {/*Back of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-6.7230135741783307}
                        yaw={-95.71804501653122}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                </Pannellum>;
                break;
            default:
                break;
        }
        return (
            <div>
                {this.state.showModal ? alert : null}
                {pano}
            </div>
        );
    }
}
