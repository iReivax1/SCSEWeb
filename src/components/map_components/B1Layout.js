import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import {ButtonOverlay} from "../Button";
import SWlab3Pano from "./B1/SWLab3Pano";
import "./Layout.css";


export default class B1Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["SPL"],
                image: "/images/b1/map/a.jpg"
            },
                {
                    btnNames: [],
                    image: "/images/b1/map/b.jpg"
                },
                {
                    btnNames: ["SWLab3"],
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
                btnNames: ["Computational intelligience lab", "Digital System lab"],
                image: "/images/b1/map/a.jpg"
            },
                {
                    btnNames: ["SPL", "Visual and interactive Computing lab"],
                    image: "/images/b1/map/b.jpg"
                },
                {
                    btnNames: ["SWLab3", "Multimedia lab"],
                    image: "/images/b1/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        });
    }


    handleToggleClick(event) {
        const childPanoMap = {
            "SWLab3": <SWlab3Pano/>,
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
                        {(btnName === "Computational intelligience lab" || btnName === "SPL" ||btnName === "SWLab3" ) ?
                            <ButtonOverlay className="first" id={btnName}
                                           onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                            : (btnName === "Digital System lab" || btnName === "Visual and interactive Computing lab") ?
                                <ButtonOverlay className="third" id={btnName}
                                               onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                                : <ButtonOverlay className="second" id={btnName}
                                                 onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={""}/>
            </div>
        );
        let loadLayout = <ImageScroller>{this.items}</ImageScroller>;
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
