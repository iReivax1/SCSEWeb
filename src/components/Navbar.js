import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button} from "./Button.js";
import "./Navbar.css";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("reize", showButton);

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SCSE
                    {/* SCSE <i className='fab fa-typo3' /> */}
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}/>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/videos" className="nav-links" onClick={closeMobileMenu}>
                            Videos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/all_courses" className="nav-links" onClick={closeMobileMenu}>
                            Courses
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle="btn--outline">360 Map</Button>}
            </div>
        </nav>

    );
}

export default Navbar;
