import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import {ButtonOverlay} from "../Button";
import LoungePano from "./l1/LoungePano";
import "./Layout.css";

export default class L2Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["Office"],
                image: "/images/l2/map/a.jpg"
            },
                {
                    btnNames: [],
                    image: "/images/l2/map/b.jpg"
                },
                {
                    btnNames: [],
                    image: "/images/l2/map/c.jpg"
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
                btnNames: ["Office"],
                image: "/images/l2/map/a.jpg"
            },
                {
                    btnNames: [],
                    image: "/images/l2/map/b.jpg"
                },
                {
                    btnNames: [],
                    image: "/images/l2/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        });
    }

    handleToggleClick(event) {
        const childPanoMap = {
            "Lounge": <LoungePano/>
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
                        {<ButtonOverlay className="first" id={btnName}
                                        > {btnName}</ButtonOverlay>
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
