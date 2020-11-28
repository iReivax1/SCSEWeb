import React, { Component } from 'react';
import { render } from 'react-dom';
import { Pannellum, PannellumVideo } from "pannellum-react";


const MapContainer = () => (
    <div>
      <h1>Pannellum React Component</h1>
      <Pannellum
          width="100%"
          height="100vh"
          image="/images/bookcube1.jpg"
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          onLoad={() => {
              console.log("panorama loaded");
          }}
      >
        <Pannellum.Hotspot
          type="info"
          pitch={11}
          yaw={-167}
          text="Info Hotspot Text 3"
          URL="https://github.com/farminf/pannellum-react"
        />
   
        <Pannellum.Hotspot
          type="info"
          pitch={31}
          yaw={-107}
          text="Info Hotspot Text 4"
          URL="https://github.com/farminf/pannellum-react"
        />
      </Pannellum>
   
   
      </div>
  );
   
  export default MapContainer;