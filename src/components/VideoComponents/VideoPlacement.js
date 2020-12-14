import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import { Button } from '../Button';
import '../HeroSection.css';

function VideoPlacement() {
  
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
    </div>
  );
}

export default VideoPlacement;
