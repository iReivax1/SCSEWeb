import React, { Component } from 'react';
import '../../App.css'
import { ButtonContainer } from '../Button';
import './MapPlacement.css';
import { Pannellum, PannellumVideo } from "pannellum-react";
function MapPlacement() {

  return (
    <>
      {/*to lazy load this using react-async-script-loader*/}
      <div className='hero-container'>
        <Pannellum
          width="100%"
          height="100vh"
          image="/images/bookcube1.jpg"
          pitch={10}
          yaw={180}
          hfov={110}
          autoLoad
          showZoomCtrl={false}
        >
          <Pannellum.Hotspot
            type="custom"
            pitch={12.41}
            yaw={117.76}
            handleClick={(evt, name) => console.log(name)}
            name="image info"
          />
        </Pannellum>
      </div>
      <ButtonContainer>
        SWLAB
    </ButtonContainer>
      <ButtonContainer>
        HWnLAB
    </ButtonContainer>
    </>
  );
}

export default MapPlacement;
