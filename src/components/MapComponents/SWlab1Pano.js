import React, { Component } from 'react';
import { Pannellum } from "pannellum-react";
import { ProductContext } from '../../Context';
import "./Pano.css"
import ReactJsAlert from "reactjs-alert";

export default class SWlab1Pano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: '/images/l1/swlab1/swlab1_1.jpg',
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
    setPanoImage = () => {
        this.setState({
            pano_img: this.props.pano_img
        }
        );
    }
    handleHotSpotClick_next = () => {
        this.setState({
            pano_img: "/images/l1/swlab1/swlab1_2.jpg",
            page: 2
        });
    };
    handleDetailsClick = (e) => {
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
                Close={() => this.setState({ showModal: false })}
            />
        </div>
        let pano = null
        if (this.state.page == 1) {
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
                hotspotDebug={true}
            >
                <Pannellum.Hotspot
                    type="custom"
                    pitch={-24.058484542459418}
                    yaw={-167}
                    text="more details"
                    handleClick={(evt, args) => {
                        this.handleDetailsClick(args.id);
                    }}
                    handleClickArg={() => this.state.showDetails ? { "id": 1 } : { "id": 2 }}
                />
                {/* exit hotspot */}
                <Pannellum.Hotspot
                    type="custom"
                    pitch={0.21009648743278103}
                    yaw={-32.95586240234637}
                    handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                    tooltip={(hotSpotDiv, args) => {
                        const imageDiv = document.createElement('img');
                        imageDiv.setAttribute('width', '45');
                        imageDiv.setAttribute('height', '45');
                        imageDiv.setAttribute('src', '/images/up.png')
                        hotSpotDiv.appendChild(imageDiv);
                        console.log(hotSpotDiv)
                    }}
                />
                {/* next part of swlab */}
                <Pannellum.Hotspot
                    type="custom"
                    pitch={-5.234306929661486}
                    yaw={130.21318194228357}
                    handleClick={(evt, args) => this.handleHotSpotClick_next(evt, args)}
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
        }
        else {
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
            >
                {/* exit hotspot */}
                <Pannellum.Hotspot
                    type="custom"
                    pitch={0.21009648743278103}
                    yaw={-32.95586240234637}
                    handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
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
        }
        return (
            <div>
                {this.state.showModal ? alert : null}
                {pano}
            </div>
        )
    }
}
