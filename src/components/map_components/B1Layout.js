import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import ReactJsAlert from "reactjs-alert";
import {ButtonOverlay} from "../Button";
import SPLPano from "./b1/SPLPano";
import SWlab3Pano from "./b1/SWLab3Pano";
import HWLab3 from "./b1/HWLab3Pano";
import "./Layout.css";


export default class B1Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["Comp Intel Lab", "HWLab3"],
                image: "/images/b1/map/a.jpg"
            },
                {
                    btnNames: ["SPL", "Innovation Lab"],
                    image: "/images/b1/map/b.jpg"
                },
                {
                    btnNames: ["SWLab3", "Multimedia Lab"],
                    image: "/images/b1/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.setData = this.setData.bind(this);

    }

    componentDidMount() {
        this.setData();
    }

    componentWillUnmount() {

    }

    setData() {
        this.setState({
            levelData: [{
                btnNames: ["Comp Intel Lab", "HWLab3"],
                image: "/images/b1/map/a.jpg"
            },
                {
                    btnNames: ["SPL", "Innovation Lab"],
                    image: "/images/b1/map/b.jpg"
                },
                {
                    btnNames: ["SWLab3", "Multimedia Lab"],
                    image: "/images/b1/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        });
    }


    handleToggleClick(event) {
        switch(event.target.id) {
            case "Comp Intel Lab":
                this.setState({
                    showAlert: true,
                    quote: "Natural & Artificial Systems are investigated here!",
                    title: "Comp Intel Lab"
                });
                break;
            case "Innovation Lab":
                this.setState({
                    showAlert: true,
                    quote: "Vision: To grow into an open innovation platform with global reputation.",
                    title: "Innovation Lab",
                });
                break;
            case "Multimedia Lab":
                this.setState({
                    showAlert: true,
                    quote: "Multimedia and Interactive Computing Lab (MICL)",
                    title: "Multimedia Lab",
                });
                break;
            default:
                const childPanoMap = {
                    "SWLab3": <SWlab3Pano/>,
                    "SPL": <SPLPano/>,
                    "HWLab3" : <HWLab3/>
                };
                this.setState({
                    showPano: true
                });
                this.childPano = childPanoMap[event.target.id];
                break;
        }
    }

    render() {


        this.items = this.state.levelData.map((item, i) =>
            <div className="container" key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {(btnName === "SPL" || btnName === "SWLab3") ?
                            <ButtonOverlay className="first" id={btnName}
                                           onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                            : (btnName === "HWLab3" || btnName === "Innovation Lab") ?
                                <ButtonOverlay className="third" id={btnName} onClick={this.handleToggleClick}
                                > {btnName}</ButtonOverlay>
                                : <ButtonOverlay className="second" id={btnName} onClick={this.handleToggleClick}
                                > {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={""}/>
            </div>
        );
        let loadLayout = <ImageScroller hideScrollbar={false}>{this.items}</ImageScroller>;
        let loadPano = <div className="layout-container">{this.childPano}</div>;

        return (
            <div>
                <p>B1</p>
                {this.state.showAlert ? <ReactJsAlert
                    type="info"
                    title={this.state.title}
                    status={this.state.showAlert}
                    quote={this.state.quote}
                    Close={() => this.setState({showAlert: false})}
                /> : null}
                {
                    (this.state.showPano) ? loadPano : loadLayout
                }
            </div>
        );
    }
}
