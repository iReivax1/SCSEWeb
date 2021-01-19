import React from "react";
import "../../App.css";
import "./VideoPlacement.css";

function VideoPlacement(props) {

    return (
        <div className="video-container">
            <iframe title="video" width="100%" height="100%" src={props.vid} frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen/>
        </div>
    );
}

export default VideoPlacement;
