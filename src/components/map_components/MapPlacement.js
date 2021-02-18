import React, { Component } from "react";
import ReactJsAlert from "reactjs-alert";
import "../../App.css";
import { ButtonContainer,ButtonContainerHighlight } from "../Button";
import B1Layout from "./B1Layout";
import B2Layout from "./B2Layout";
import B3Layout from "./B3Layout";
import B4Layout from "./B4Layout";
import L1Layout from "./L1Layout";
import L2Layout from "./L2Layout";
import Overview from "./Overview";
import "./MapPlacement.css";

export default class MapPlacement extends Component {
    childPanoMap = {
        "L2": <L2Layout />,
        "L1": <L1Layout />,
        "B1": <B1Layout />,
        "B2": <B2Layout />,
        "B3": <B3Layout />,
        "B4": <B4Layout />
    };

    constructor(props) {
        super(props);
        this.state = {
            layout: <Overview setAlertL1={this.setAlertL1} />,
            showAlert: false,
            selected: null
        };
    }

    setAlertL1 = () => {
        this.setState({

            showAlert: true,
            quote: "This level has all labs for undergraduate classes",
            title: "Check out the labs and student lounge"

        })
    }
    handleClick = (level) => {

        if (level === "B3") {
            this.setState({
                layout: this.childPanoMap[level],
                showAlert: true,
                quote: "This level has all the confidential lab. DSAI peeps will go to AMD Lab once a week ",
                title: "Check out the AMD labs",
                selected: "B3"
            });
        }
        else if (level === "L1") {
            this.setState({
                layout: this.childPanoMap[level],
                showAlert: true,
                quote: "This level has all labs for undergraduate classes",
                title: "Check out the labs and student lounge",
                selected: "L1"
            });
        }
        else if (level === "B1") {
            this.setState({
                layout: this.childPanoMap[level],
                showAlert: true,
                quote: "This level has a mix of labs for undergraduate classes and research labs",
                title: "Check out the labs",
                selected: "B1"
            });
        }
        else if (level === "B2") {
            this.setState({
                layout: this.childPanoMap[level],
                showAlert: true,
                quote: "This level has research labs, which you might visit for final year project",
                title: "Just scroll through. Restricted entry!!!",
                selected: "B2"
            });
        }
        else if (level === "B4") {
            this.setState({
                layout: this.childPanoMap[level],
                showAlert: true,
                quote: "This level consists of more research labs",
                title: "Just scroll through",
                selected: "B4"
            });
        }
        else if (level === "L2") {
            this.setState({
                layout: this.childPanoMap[level],
                showAlert: true,
                quote: "This level consists of the professors' offices! ",
                title: "Find your favourite profs here.",
                selected: "L2"
            });
        }
        else {
            this.setState({
                layout: this.childPanoMap[level],
                showAlert: false,
                selected: null,
            });
        }
    };

    render() {

        return (
            <React.Fragment>
                {this.state.showAlert ? <ReactJsAlert
                    type="info"
                    title={this.state.title}
                    status={this.state.showAlert}
                    quote={this.state.quote}
                    Close={() => this.setState({ showAlert: false })}
                /> : null}
                {Object.keys(this.childPanoMap).map((item) => (item === this.state.selected ? 
                <ButtonContainerHighlight onClick={() => this.handleClick(item)}>{item}</ButtonContainerHighlight> : 
                <ButtonContainer onClick={() => this.handleClick(item)}>{item}</ButtonContainer>)
                )}
                <div className="layout-container">
                    {this.state.layout}
                </div>

            </React.Fragment>
        );
    }
}
