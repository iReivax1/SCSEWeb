import React, {Component} from 'react';
import {Pannellum} from "pannellum-react";
import "./Pano.css"
import ReactJsAlert from "reactjs-alert";

export default class SWlab1Pano extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pano_img: '/images/l1/swlab1/1.jpg',
            showModal: false,
            status: true,
            page: 1,
            title: "Psss. Did you know?",
            quote: "This is someone's leg!",
        };
    }

    setPanoImage = () => {
        this.setState({
                pano_img: this.props.pano_img
            }
        );
    }

    handleHotSpotClick_exit = () => {
        window.location.reload();
    };
    handleHotSpotClick = (number) => {
        this.setState({
            pano_img: "/images/l1/swlab1/" + number + ".jpg",
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
        let pano = null
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
                        pitch={-0.3241583554547378}
                        yaw={154.8956198483586}
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
                    {/*Back of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-0.3241583554547378}
                        yaw={-150.48858429984412}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
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
                    {/*Right Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.6530135741783307}
                        yaw={40.62023844524556}
                        handleClick={(evt, args) => this.handleHotSpotClick(1, evt, args)}
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
                        pitch={-1.6530135741783307}
                        yaw={-32.95586240234637}
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
                        pitch={-39.20509767578132}
                        yaw={-138.75883211675185}
                        text="more details"
                        handleClick={(evt, args) => {
                            this.handleDetailsClick(args.id);
                        }}
                        handleClickArg={() => this.state.showDetails ? {"id": 1} : {"id": 2}}
                    />
                    {/*Left Exit*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={0.21009648743278103}
                        yaw={-32.95586240234637}
                        handleClick={(evt, args) => this.handleHotSpotClick_exit(evt, args)}
                        tooltip={(hotSpotDiv) => {
                            const imageDiv = document.createElement('img');
                            imageDiv.setAttribute('width', '45');
                            imageDiv.setAttribute('height', '45');
                            imageDiv.setAttribute('src', '/images/up.png')
                            hotSpotDiv.appendChild(imageDiv);
                        }}
                    />
                    {/*Back of Room*/}
                    <Pannellum.Hotspot
                        type="custom"
                        pitch={-1.3742567001186587}
                        yaw={155.0526910462787}
                        handleClick={(evt, args) => this.handleHotSpotClick(2, evt, args)}
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
