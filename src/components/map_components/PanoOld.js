import {Pannellum} from "pannellum-react";
import React, {Component} from "react";
import ReactJsAlert from "reactjs-alert";
import {ProductContext} from "src/Context";
import "./Pano.css";

export default class PanoOld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: this.props.pano_img,
            showModal: false,
            status: true,
            title: "Psss. Did you know?",
            quote: "This is a computer"
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
    };
    handleHotSpotClick = () => {
        this.setState({
            pano_img: "/images/l1/swlab1/1.jpg"
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
                    onLoad={() => {
                        console.log("panorama loaded");
                    }}
                    onScenechange={(id) => {
                        console.log("Scene has change on " + id);
                    }}
                    onScenechangefadedone={() => {
                        console.log("panorama loaded");
                    }}
                    onError={(err) => {
                        console.log("Error", err);
                    }}
                    onErrorcleared={() => {
                        console.log("Error Cleared");
                    }}
                    onMousedown={(evt) => {
                        console.log("Mouse Down", evt);
                    }}
                    onMouseup={(evt) => {
                        console.log("Mouse Up", evt);
                    }}
                    onTouchstart={(evt) => {
                        console.log("Touch Start", evt);
                    }}
                    onTouchend={(evt) => {
                        console.log("Touch End", evt);
                    }}
                    hotspotDebug={false}
                >
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={11}
                        yaw={-167}
                        text="more details"
                        handleClick={(evt) => {
                            this.handleDetailsClick(evt);
                        }}
                        handleClickArg={{"id": 1}}
                    />
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-10}
                        yaw={180}
                        handleClick={(evt, args) => this.handleHotSpotClick(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement("img");
                            imageDiv.setAttribute("width", "45");
                            imageDiv.setAttribute("height", "45");
                            imageDiv.setAttribute("src", "/images/up.png");
                            hotSpotDiv.appendChild(imageDiv);
                            console.log(hotSpotDiv);
                        }}
                    />

                </Pannellum>
            </div>

        );
    }
}
PanoOld.contextType = ProductContext;
