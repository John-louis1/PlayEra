import React from "react";
import "../global.css"
import logo from "../assets/logo/playera-light.png";
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import { ReactComponent as Sun } from "../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../assets/svg/moon.svg";

export default function Footer() {
    return ( 
        <footer class="footer">
            <p>john.flouis1@gmail.com</p>
            <ul class="footer-list">
                <li><a href="https://github.com/John-louis1" target="_blank"><img src={ githubLogo } alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/john-f-4519231a1/" target="_blank"><img src={ linkedinLogo } alt="" /></a></li>
            </ul>

            <div class="darkmode-toggle">
                <input type="checkbox" id="darkmode-input" onclick="changeMode()"/>
                <label for="darkmode-input">
                    <Sun className="sun svg"/>
                    <Moon className="moon svg"/>
                </label>
            </div>
            <small>© 2022 John Louis - All Rights Reserved.</small>
        </footer>
    );
}