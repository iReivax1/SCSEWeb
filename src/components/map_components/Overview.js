import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import { ButtonOverlaySCSE} from "../Button";
import L1Layout from "./L1Layout";
import "./Layout.css";

export default class Overview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["SCSE"],
                image: "/images/overview.jpg"
            }],
            layout: <L1Layout/>, 
            showLayout: false
        };
        this.handleToggleClick = this.handleToggleClick.bind(this);
        this.setData = this.setData.bind(this);
    }
    handleAlertOnClick (){
        this.props.setAlertL1();
    }

    componentDidMount() {
        this.setData();
    }

    componentWillUnmount() {

    }

    setData() {
        this.setState({
            levelData: [{
                btnNames: ["SCSE"],
                image: "/images/overview.jpg"
            }],
            layout: <L1Layout/>, 
            showLayout: false
        });
    }

    handleToggleClick(event) {
        const childLayoutMap = {
            "L1": <L1Layout/>
        };
        this.setState({
            showLayout: true
        });
        this.childLayoutMap = childLayoutMap[event.target.id];
        this.handleAlertOnClick();
    }

    render() {
       

        this.items = this.state.levelData.map((item, i) =>
            <div className="container" key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {<ButtonOverlaySCSE className="zero" id={btnName} onClick={this.handleToggleClick}> 
                        {btnName}</ButtonOverlaySCSE>
                        }

                    </span>)}
                <img src={item.image} alt={""}/>
            </div>
        );
        let loadOverview = <ImageScroller hideScrollbar={false}>{this.items}</ImageScroller>;
        let layout = <div className="layout-container">
            {this.state.layout}
        </div>

        return (
            
            <div>
                {this.state.showLayout ? layout : loadOverview}                
                
                
            </div>
        );
    }
}
