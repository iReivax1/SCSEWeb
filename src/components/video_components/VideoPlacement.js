import React from "react";
import "../../App.css";
import "./VideoPlacement.css";

function VideoPlacement(props) { 
  
    return (
        <div className="hero-container">
            <iframe width="100%" height="100%" src={props.vid} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    );
}

export default VideoPlacement;
