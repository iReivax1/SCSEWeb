import React, {Component} from "react";
import "../../App.css";
import {ButtonContainer} from "../Button";
import B1Layout from "./B1Layout";
import B2Layout from "./B2Layout";
import B3Layout from "./B3Layout";
import B4Layout from "./B4Layout";
import L1Layout from "./L1Layout";
import L2Layout from "./L2Layout";
import "./MapPlacement.css";


export default class MapPlacement extends Component {
    childPanoMap = {
        "Level 2": <L2Layout/>,
        "Level 1": <L1Layout/>,
        "Basement 1": <B1Layout/>,
        "Basement 2": <B2Layout/>,
        "Basement 3": <B3Layout/>,
        "Basement 4": <B4Layout/>
    };

    constructor(props) {
        super(props);
        this.state = {
            layout: <L1Layout/>
        };
    }

    handleClick = (level) => {
        this.setState({
            layout: this.childPanoMap[level]
        });
    };

    render() {
        return (
            <React.Fragment>
                <div className="layout-container">
                    {this.state.layout}
                </div>
                {Object.keys(this.childPanoMap).map((item) => <ButtonContainer onClick={() => this.handleClick(item)}>
                    {item}
                </ButtonContainer>)}
            </React.Fragment>
        );
    }
}
