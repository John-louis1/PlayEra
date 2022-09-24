import React from "react";
import "../global.css"
import logo from "../assets/logo/playera-light.png";

export default function NavigationBar() {
    return ( 
        <header className="header">
            <a> <img src={logo} alt="Logo" className="header__img" /> </a>
            <nav className="header__nav">
                <ul className="header__list">
                    <li> <a className="header__ul__a">Home</a> </li>
                    <li> <a className="header__ul__a header__dropdown">Games</a> </li>
                    <li> <a className="header__ul__a header__call-to-action">Contact</a> </li>
                </ul>
            </nav>
        </header>
    );
}