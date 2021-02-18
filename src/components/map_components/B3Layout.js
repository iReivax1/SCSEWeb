import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import ReactJsAlert from "reactjs-alert";
import {ButtonOverlay} from "../Button";
import AMDPano from "./b3/AMDPano";
import "./Layout.css";

export default class B3Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["AMD Lab"],
                image: "/images/b3/map/a.jpg"
            },
                {
                    btnNames: ["LILY center", "SCALE@NTU"],
                    image: "/images/b3/map/b.jpg"
                },
                {
                    btnNames: ["DMAL"],
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
                btnNames: ["AMD Lab"],
                image: "/images/b3/map/a.jpg"
            },
                {
                    btnNames: ["LILY center", "SCALE@NTU"],
                    image: "/images/b3/map/b.jpg"
                },
                {
                    btnNames: ["DMAL"],
                    image: "/images/b3/map/c.jpg"
                }],
            yaww: 180,
            updateText: "initial",
            author: "SCSE",
            showPano: false
        });
    }

    handleToggleClick(event) {
        switch(event.target.id) {
            case "LILY center":
                this.setState({
                    showAlert: true,
                    quote: "Research Centre of Excellence in Active Living for the Elderly (LILY)",
                    title: "LILY center"
                });
                break;
            case "SCALE@NTU":
                this.setState({
                    showAlert: true,
                    quote: "Singtel Cognitive and Artificial Intelligence Lab for Enterprise @ NTU (SCALE@NTU)",
                    title: "SCALE@NTU",
                });
                break;
            case "DMAL":
                this.setState({
                    showAlert: true,
                    quote: "For DSAI",
                    title: "Data Management and Analytics Labs",
                });
                break;
            default:
                const childPanoMap = {
                    "AMD Lab": <AMDPano/>
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
                        {(btnName === "LILY center" || btnName === "Research Lab") ?
                            <ButtonOverlay className="first" id={btnName} onClick={this.handleToggleClick}
                            > {btnName}</ButtonOverlay>
                            : (btnName === "Emerging technology lab") ?
                                <ButtonOverlay className="third" id={btnName} onClick={this.handleToggleClick}
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
                <br/>
                <p>B3</p>
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
