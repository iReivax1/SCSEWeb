import React, { Component } from "react";
import "../../App.css";
import Footer from "../Footer";
import VideoPlacement from "./VideoPlacement";
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'

export default class VideoPage extends Component {


    render() {
        return (

            <React.Fragment>
                <Container className="col-xs-12 col-sm-6 col-md-8">
                    <Button
                        icon="fas fa-level-up-alt"
                        styles={{ backgroundColor: darkColors.lightBlue, color: lightColors.white, fontFamily: "Arial" }}
                        onClick={() => window.scrollTo(0, 0)}
                    />
                </Container>
                {/* Lounge */}
                <VideoPlacement vid="https://www.youtube.com/embed/QtrtDtSqnBY" />
                <br />
                {/* HPL */}
                <VideoPlacement vid="https://www.youtube.com/embed/9r0pLGWzi48" />
                <br />
                {/* SPL */}
                <VideoPlacement vid="https://www.youtube.com/embed/27C5lG7pe1Q" />
                <br />
                {/* SW1 */}
                <VideoPlacement vid="https://www.youtube.com/embed/3U-Od0fG1ws" />
                <br />
                {/* SW2 */}
                <VideoPlacement vid="https://www.youtube.com/embed/mND1JrPSmmg" />
                <br />
                {/* SW3 */}
                <VideoPlacement vid="https://www.youtube.com/embed/OJVCoRBzXfU" />
                <br />
                {/*HW1 */}
                <VideoPlacement vid="https://www.youtube.com/embed/qZ9TQMQrViE" />
                <br />
                {/* HW2 */}
                <VideoPlacement vid="https://www.youtube.com/embed/8CPQ5V4LBoA" />
                <br />
                {/* HW3 */}
                <VideoPlacement vid="https://www.youtube.com/embed/S7vt3j26Db0" />
                <Footer />
            </React.Fragment>
        );
    }
}
