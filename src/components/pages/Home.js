import React from "react";
import {Button, Container, darkColors, lightColors} from "react-floating-action-button";
import "../../App.css";
// import Cards from "../Cards";
import Footer from "../Footer";
import HeroSection from "../HeroSection";

function Home() {
    const mystyle = {

        fontFamily: "Arial"
    };
    return (
        <>
            <Container styles={mystyle} className="col-xs-12 col-sm-6 col-md-8">
                <Button
                    icon="fas fa-level-up-alt"
                    tooltip="Scroll down for more!!!"
                    styles={{backgroundColor: darkColors.lightBlue, color: lightColors.white, fontFamily: "Arial"}}
                    onClick={() => window.scrollTo(0, 0)}
                />
            </Container>
            <HeroSection/>
            {/* <Cards/> */}
            <Footer/>
        </>
    );
}

export default Home;
