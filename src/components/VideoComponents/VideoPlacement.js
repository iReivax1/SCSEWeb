import React from 'react';
import '../../App.css';
import '../HeroSection.css';

function VideoPlacement() {

    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay loop muted/>
        </div>
    );
}

export default VideoPlacement;
