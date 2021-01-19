import React, {Component} from "react";
import "../../App.css";
import Footer from "../Footer";
import VideoPlacement from "./VideoPlacement";


export default class VideoPage extends Component {


    render() {
        return (
            <React.Fragment>
                {/* Lounge */}
                <VideoPlacement vid="https://www.youtube.com/embed/QtrtDtSqnBY"/>
                <br/>
                {/* HPL */}
                <VideoPlacement vid="https://www.youtube.com/embed/9r0pLGWzi48"/>
                <br/>
                {/* SPL */}
                <VideoPlacement vid="https://www.youtube.com/embed/27C5lG7pe1Q"/>
                <br/>
                {/* SW1 */}
                <VideoPlacement vid="https://www.youtube.com/embed/3U-Od0fG1ws"/>
                <br/>
                {/* SW2 */}
                <VideoPlacement vid="https://www.youtube.com/embed/mND1JrPSmmg"/>
                <br/>
                {/* SW3 */}
                <VideoPlacement vid="https://www.youtube.com/embed/mND1JrPSmmg"/>
                <br/>
                {/* HW1 */}
                <VideoPlacement vid="https://www.youtube.com/embed/OJVCoRBzXfU"/>
                <br/>
                {/* HW2 */}
                <VideoPlacement vid="https://www.youtube.com/embed/8CPQ5V4LBoA"/>
                <br/>
                {/* HW3 */}
                <VideoPlacement vid="https://www.youtube.com/embed/S7vt3j26Db0"/>
                <Footer/>
            </React.Fragment>
        );
    }
}
