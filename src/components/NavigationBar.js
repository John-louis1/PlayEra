import React from "react";
import "../global.css"
import logo from "../assets/logo/playera-light.png";

export default function NavigationBar() {
    return ( 
        <header className="header">
            <a> <img src={logo} alt="Logo" className="header__img" /> </a>
            <nav className="header__nav">
                <a className="header__ul__a">Home</a>
                <div className="dropdown">
                <a className="header__ul__a">Games <i class="fa fa-caret-down"></i> </a>
                <div class="dropdown-content">
                    <a href="#">Angry Birds</a>
                    <a href="#">Click and Destroy</a>
                    <a href="#">Rock Scissors Paper</a>
                    <a href="#">Catch the Doggo</a>
                    <a href="#">Guess the Color</a>
                </div>
                </div>
                <a className="header__ul__a header__call-to-action">Contact</a>
            </nav>
        </header>
    );
}