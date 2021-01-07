import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these EPIC Courses!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-9.jpg"
                            text="Deep learning and neural networks"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-2.jpg"
                            text="Cryptography"
                            label="Luxury"
                            path="/services"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="images/img-3.jpg"
                            text="Discrete mathematics"
                            label="Mystery"
                            path="/services"
                        />
                        <CardItem
                            src="images/img-4.jpg"
                            text="Artificial intelligence"
                            label="Adventure"
                            path="/AI"
                        />
                        <CardItem
                            src="images/img-8.jpg"
                            text="Embedded Systems"
                            label="Adrenaline"
                            path="/sign-up"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
