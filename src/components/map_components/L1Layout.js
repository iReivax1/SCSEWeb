import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import {ButtonOverlay} from "../Button";
import HPLPano from "./l1/HPLPano";
import HWLab1Pano from "./l1/HWLab1Pano";
import HWLab2Pano from "./l1/HWLab2Pano";
import LoungePano from "./l1/LoungePano";
import SWLab1Pano from "./l1/SWLab1Pano";
import SWLab2Pano from "./l1/SWLab2Pano";
import "./Layout.css";

export default class L1Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["Lounge", "SWLab1", "HWLab1"],
                image: "/images/l1/map/a.jpg"
            },
                {
                    btnNames: ["HWLab2"],
                    image: "/images/l1/map/b.jpg"
                },
                {
                    btnNames: ["SWLab2", "HPL"],
                    image: "/images/l1/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.setData = this.setData.bind(this);
        this.childPano = <LoungePano/>;
    }

    componentDidMount() {
        this.setData();
    }

    componentWillUnmount() {

    }

    setData() {
        this.setState({
            levelData: [{
                btnNames: ["Lounge", "SWLab1", "HWLab1"],
                image: "/images/l1/map/a.jpg"
            },
                {
                    btnNames: ["HWLab2"],
                    image: "/images/l1/map/b.jpg"
                },
                {
                    btnNames: ["SWLab2", "HPL"],
                    image: "/images/l1/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        });
    }

    /*stopPano() {
        this.setState({showPano: false});
    }*/

    handleToggleClick(event) {
        const childPanoMap = {
            "HWLab1": <HWLab1Pano/>,
            "SWLab1": <SWLab1Pano/>,
            "Lounge": <LoungePano/>,
            "SWLab2": <SWLab2Pano/>,
            "HWLab2": <HWLab2Pano/>,
            "HPL": <HPLPano/>
        };
        this.setState({
            showPano: true
        });
        this.childPano = childPanoMap[event.target.id];
    }

    render() {


        this.items = this.state.levelData.map((item, i) =>
            <div className="container" key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {(btnName === "Lounge" || btnName === "HPL") ?
                            <ButtonOverlay className="first" id={btnName}
                                           onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                            : (btnName === "HWLab1") ?
                                <ButtonOverlay className="third" id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                                : <ButtonOverlay className="second" id={btnName}
                                                 onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={""}/>
            </div>
        );
        let loadLayout = <ImageScroller hideScrollbar={false} >{this.items}</ImageScroller>;
        let loadPano = <div className="layout-container">{this.childPano}</div>;

        return (
            <div>
                {
                    (this.state.showPano) ? loadPano : loadLayout
                }
            </div>
        );
    }
}
