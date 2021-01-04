import React, {Component} from 'react';
import {Pannellum} from "pannellum-react";
import "./Pano.css"
import ReactJsAlert from "reactjs-alert";

export default class HWlab1Pano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: "/images/l1/hwlab1/1.jpg",
            showModal: false,
            status: true,
            page: 1,
            title: "Psss. Did you know?",
            quote: "This is a computer",
        };
    }

    handleHotSpotClick_exit = () => {
        window.location.reload();
    };
    handleHotSpotClick = (number) => {
        this.setState({
            pano_img: "/images/l1/hwlab1/" + number + ".jpg",
            page: number
        });
    };
    handleDetailsClick = () => {
        this.setState({
            showModal: true
        })
    }

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
                    hotspotDebug={false}
                >
                    {/*Exit*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-13.051216999974054}
                        yaw={-167.22810241218977}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Left Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-2.737590632818387}
                        yaw={-29.664663846303437}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Right Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-2.737590632818387}
                        yaw={23.311356774011294}
                        handleClick={(evt, args) => this.handleHotSpotClick(3, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                </Pannellum>
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
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-4.178066947800381}
                        yaw={152.85723111074137}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                            console.log(hotSpotDiv)
                        }}
                    />
                </Pannellum>
                break;
            case 3:
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
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-29.95374827688484}
                        yaw={-160.85}
                        text="more details"
                        handleClick={(evt) => {
                            this.handleDetailsClick(evt);
                        }}
                        handleClickArg={{"id": 1}}
                    />
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-5}
                        yaw={20}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                            console.log(hotSpotDiv)
                        }}
                    />

                </Pannellum>
                break;
            default:
                break;
        }
        return (
            <div>
                {this.state.showModal ? alert : null}
                {pano}
            </div>
        )
    }
}
