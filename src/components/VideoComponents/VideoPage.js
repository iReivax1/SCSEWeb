import React, { Component } from 'react'
import Footer from '../Footer';
import VideoPlacement from './VideoPlacement';


export default class VideoPage extends Component {
    render() {
        return (
            <React.Fragment>
                <VideoPlacement></VideoPlacement>
                <Footer></Footer>
            </React.Fragment>
        )
    }
}
