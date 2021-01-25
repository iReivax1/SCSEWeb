import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import {ButtonOverlay} from "../Button";
import AMDPano from "./b3/AMDPano";
import "./Layout.css";

export default class B3Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["Research Lab"],
                image: "/images/b3/map/a.jpg"
            },
                {
                    btnNames: ["LILY center", "Emerging technology lab"],
                    image: "/images/b3/map/b.jpg"
                },
                {
                    btnNames: ["AMD Lab"],
                    image: "/images/b3/map/c.jpg"
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
                btnNames: ["Research Lab"],
                image: "/images/b3/map/a.jpg"
            },
                {
                    btnNames: ["LILY center", "Emerging technology lab"],
                    image: "/images/b3/map/b.jpg"
                },
                {
                    btnNames: ["AMD Lab"],
                    image: "/images/b3/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        });
    }

    handleToggleClick(event) {
        const childPanoMap = {
            "AMD Lab": <AMDPano/>
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
                        {(btnName === "LILY center" || btnName === "Research Lab") ?
                            <ButtonOverlay className="first" id={btnName}
                            > {btnName}</ButtonOverlay>
                            : (btnName === "Emerging technology lab") ?
                                <ButtonOverlay className="third" id={btnName}
                                > {btnName}</ButtonOverlay>
                                : <ButtonOverlay className="second" id={btnName}
                                                 onClick={this.handleToggleClick}> {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={""}/>
            </div>
        );
        let loadLayout = <ImageScroller hideScrollbar={false}>{this.items}</ImageScroller>;
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
