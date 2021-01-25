import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import {ButtonOverlay} from "../Button";
import "./Layout.css";


export default class B2Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["Computer network and comms lab", "Parallel and distributed systems lab"],
                image: "/images/b2/map/a.jpg"
            },
                {
                    btnNames: ["Hardware & Embedded Systems Lab"],
                    image: "/images/b2/map/b.jpg"
                },
                {
                    btnNames: ["Cyber Security Lab"],
                    image: "/images/b2/map/c.jpg"
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
                btnNames: ["Computer network and comms lab", "Parallel and distributed systems lab"],
                image: "/images/b2/map/a.jpg"
            },
                {
                    btnNames: ["Hardware & Embedded Systems Lab"],
                    image: "/images/b2/map/b.jpg"
                },
                {
                    btnNames: ["Cyber Security Lab"],
                    image: "/images/b2/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        });
    }

    handleToggleClick(event) {
        const childPanoMap = {};
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
                        {(btnName === "Computer network and comms lab" || btnName === "HPL") ?
                            <ButtonOverlay className="first" id={btnName}
                            > {btnName}</ButtonOverlay>
                            : (btnName === "Parallel and distributed systems lab") ?
                                <ButtonOverlay className="third" id={btnName}
                                > {btnName}</ButtonOverlay>
                                : <ButtonOverlay className="second" id={btnName}
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
                {
                    (this.state.showPano) ? loadPano : loadLayout
                }
            </div>
        );
    }
}
