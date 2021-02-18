import React, {Component} from "react";
import ImageScroller from "react-image-scroller";
import ReactJsAlert from "reactjs-alert";
import {ButtonOverlay} from "../Button";
import "./Layout.css";


export default class B2Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            levelData: [{
                btnNames: ["Computer Network & Comms Lab", "Parallel & Distributed Systems Lab"],
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
                btnNames: ["Computer Network & Comms Lab", "Parallel & Distributed Systems Lab"],
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
        switch (event.target.id) {
            case "Computer Network & Comms Lab":
                this.setState({
                    showAlert: true,
                    quote: "CNCL conducts research in data communications and networking that addresses information transfer among humans, computers, and devices using wired and wireless connections.",
                    title: "Computer Network & Comms Lab"
                });
                break;
            case "Parallel & Distributed Systems Lab":
                this.setState({
                    showAlert: true,
                    quote: "PDCL (formerly Parallel and Distributed Computing Lab) was established in 1994. Since then, there have been numerous successful research projects and activities carried out.",
                    title: "Parallel and Distributed Computing Lab"
                });
                break;
            case "Hardware & Embedded Systems Lab":
                this.setState({
                    showAlert: true,
                    quote: "HESL, originally known as Centre for High Performance Embedded Systems (CHiPES), was founded in April 1998 to promote research and development in embedded systems engineering using state-of-the-art VLSI CAD tools and technology.",
                    title: "Hardware & Embedded Systems Lab"
                });
                break;
            case "Cyber Security Lab":
                this.setState({
                    showAlert: true,
                    quote: "Cyber Security Lab (CSL)",
                    title: "Cyber Security Lab (CSL)"
                });
                break;
            default:
                break;
        }
    }

    render() {


        this.items = this.state.levelData.map((item, i) =>
            <div className="container" key={i}>
                {item.btnNames.map(
                    (btnName, j) => <span key={j}>
                        {(btnName === "Computer Network & Comms Lab" || btnName === "HPL") ?
                            <ButtonOverlay className="first" id={btnName} onClick={this.handleToggleClick}
                            > {btnName}</ButtonOverlay>
                            : (btnName === "Parallel & Distributed Systems Lab") ?
                                <ButtonOverlay className="third" id={btnName} onClick={this.handleToggleClick}
                                > {btnName}</ButtonOverlay>
                                : <ButtonOverlay className="second" id={btnName} onClick={this.handleToggleClick}
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
