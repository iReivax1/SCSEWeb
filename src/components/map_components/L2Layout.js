import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import ReactJsAlert from "reactjs-alert";
import {ButtonOverlay} from "../Button";
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
            author: "SCSE"
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
            author: "SCSE"
        });
    }

    handleToggleClick() {
        this.setState({
            showAlert: true,
            quote: "Professors' offices are located here.",
            title: "Office"
        });
    }

    render() {


        this.items = this.state.levelData.map((item, i) =>
            <div className="container" key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {<ButtonOverlay className="first" id={btnName} onClick={this.handleToggleClick}
                        > {btnName}</ButtonOverlay>
                        }

                    </span>)}
                <img src={item.image} alt={""}/>
            </div>
        );

        return (

            <div>

                {this.state.showAlert ? <ReactJsAlert
                    type="info"
                    title={this.state.title}
                    status={this.state.showAlert}
                    quote={this.state.quote}
                    Close={() => this.setState({showAlert: false})}
                /> : null}
                <ImageScroller hideScrollbar={false}>{this.items}</ImageScroller>
            </div>
        );
    }
}
