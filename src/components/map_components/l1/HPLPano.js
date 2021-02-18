import {Pannellum} from "pannellum-react";
import React, {Component} from "react";
import ReactJsAlert from "reactjs-alert";
import "../Pano.css";

export default class HPLPano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: "/images/l1/hpl/1.jpg",
            showModal: false,
            status: true,
            page: 1,
            title: "Psss. Did you know?",
            quote: "This is a oscilloscope!"
        };
    }

    handleHotSpotClick_exit = () => {
        window.location.reload();
    };
    handleHotSpotClick = (number) => {
        this.setState({
            pano_img: "/images/l1/hpl/" + number + ".jpg",
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
                    hotspotDebug={false}
                >
                    {/*Right Exit*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.1836312827950883}
                        yaw={62.554912374190465}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/exit.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Centre of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.1836312827950883}
                        yaw={173.89644667150836}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Front Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.1836312827950883}
                        yaw={-109.02151673795831}
                        handleClick={(evt, args) => this.handleHotSpotClick(3, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Right of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.1836312827950883}
                        yaw={152.61844566993867}
                        handleClick={(evt, args) => this.handleHotSpotClick(4, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.1836312827950883}
                        yaw={-161.72256121996318}
                        handleClick={(evt, args) => this.handleHotSpotClick(5, evt, args)}
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
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-13.890353842778167}
                        yaw={-159.62332046752454}
                        text="more details"
                        handleClick={(evt) => {
                            this.handleDetailsClick(evt);
                        }}
                        handleClickArg={{"id": 1}}
                    />
                    {/*Entrance*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.3694416059660777}
                        yaw={122.23488758171847}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Front Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.3694416059660777}
                        yaw={43.48010833814965}
                        handleClick={(evt, args) => this.handleHotSpotClick(3, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Right of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.3694416059660777}
                        yaw={-114.31832675285482}
                        handleClick={(evt, args) => this.handleHotSpotClick(4, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.3694416059660777}
                        yaw={-11.5780953234948}
                        handleClick={(evt, args) => this.handleHotSpotClick(5, evt, args)}
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
                    {/*Entrance*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={-81.56093366704262}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Centre of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={-8.642502433806248}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Right of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={-23.132073189788848}
                        handleClick={(evt, args) => this.handleHotSpotClick(4, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={30.36530645828686}
                        handleClick={(evt, args) => this.handleHotSpotClick(5, evt, args)}
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
            case 4:
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
                    {/*Entrance*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={-175.85509410656314}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Centre of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={104.30165132543982}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Front Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={130.68085835080927}
                        handleClick={(evt, args) => this.handleHotSpotClick(3, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.3635517379700426}
                        yaw={55.391053423356816}
                        handleClick={(evt, args) => this.handleHotSpotClick(5, evt, args)}
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
            case 5:
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
                    {/*Entrance*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.2512392411922422}
                        yaw={-132.44988575201359}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Centre of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.2512392411922422}
                        yaw={-101.56990949424913}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Front Left of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.2512392411922422}
                        yaw={178.13403228660997}
                        handleClick={(evt, args) => this.handleHotSpotClick(3, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back Right of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.2512392411922422}
                        yaw={-51.11615337941361}
                        handleClick={(evt, args) => this.handleHotSpotClick(4, evt, args)}
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
