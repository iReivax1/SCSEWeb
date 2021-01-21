import {Pannellum} from "pannellum-react";
import React, {Component} from "react";
import ReactJsAlert from "reactjs-alert";
import "../Pano.css";

export default class SPLPano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: "/images/b1/spl/1.jpg",
            showModal: false,
            status: true,
            page: 1,
            title: "Psss. Did you know?",
            quote: "This is a computer"
        };
    }

    handleHotSpotClick_exit = () => {
        window.location.reload();
    };
    handleHotSpotClick = (number) => {
        this.setState({
            pano_img: "/images/b1/spl/" + number + ".jpg",
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
                    {/*Right Exit*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.258896171998261}
                        yaw={95.82717472394408}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/exit.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Right Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-2.6040154425233992}
                        yaw={28.670975135767947}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Left Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-2.6040154425233992}
                        yaw={-16.421898628446435}
                        handleClick={(evt, args) => this.handleHotSpotClick(3, evt, args)}
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
                    hotspotDebug={true}
                >
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-14.572893804159708}
                        yaw={-173.035859230554}
                        text="more details"
                        handleClick={(evt) => {
                            this.handleDetailsClick(evt);
                        }}
                        handleClickArg={{"id": 1}}
                    />
                    {/*Right Exit*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.462771131136755}
                        yaw={-94.29863992443437}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/exit.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.4062149499185224}
                        yaw={6.40351096939313}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
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
                    hotspotDebug={true}
                >
                    {/*Left Exit*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-3.2587356977608053}
                        yaw={-88.91812676789654}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/exit.png");
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.926085382967737}
                        yaw={152.30921087634388}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
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
