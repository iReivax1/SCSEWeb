import React, {Component} from "react";
import Footer from "../Footer";
import '../../App.css'
import VideoPlacement from "./VideoPlacement";


export default class VideoPage extends Component {
    
    
    render() {
        return (
            <React.Fragment>
                <VideoPlacement vid="https://www.youtube.com/embed/9r0pLGWzi48"/>
                <br></br>
                <VideoPlacement vid="https://www.youtube.com/embed/QtrtDtSqnBY"/>
                <br></br>
                <VideoPlacement vid="https://www.youtube.com/embed/27C5lG7pe1Q"/>
                <br></br>
                <VideoPlacement vid="https://www.youtube.com/embed/3U-Od0fG1ws"/>
                <Footer/>
            </React.Fragment>
        );
    }
}
