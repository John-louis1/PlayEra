import React from "react";
import "../global.css"
import githubLogo from "../assets/github-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import { ReactComponent as Sun } from "../assets/svg/sun.svg";
import { ReactComponent as Moon } from "../assets/svg/moon.svg";
import nightModeLogo from "../assets/logo/playera-light.png";
import logo          from "../assets/logo/playera-dark.png";

function Footer() {
    return ( 
        <footer className="footer">
            <p>john.flouis1@gmail.com</p>
            <ul className="footer-list">
                <li><a href="https://github.com/John-louis1" target="_blank"><img src={ githubLogo } alt="" /></a></li>
                <li><a href="https://www.linkedin.com/in/john-f-4519231a1/" target="_blank"><img src={ linkedinLogo } alt="" /></a></li>
            </ul>

            <div className="darkmode-toggle">
                <input type="checkbox" id="darkmode-input" onClick= { changeMode }/>
                <label htmlFor="darkmode-input">
                    <Sun className="sun svg"/>
                    <Moon className="moon svg"/>
                </label>
            </div>
            <small>© 2022 John Louis - All Rights Reserved.</small>
        </footer>
    );
}

function changeMode() {
    let root = document.querySelector(':root');
    let rs = getComputedStyle(root);
    let navLinks = document.querySelectorAll("header a");
    let games = document.querySelectorAll(".games-sec article");
    let gamesHovered = document.querySelectorAll(".games-sec article:hover");
    let names = document.querySelectorAll(".games article h3, .games article p");
    let links = document.querySelectorAll(".info-sec a");
    let footer = document.querySelector("footer");
    if (document.getElementById("darkmode-input").checked) { // Night mode

      document.getElementsByClassName("header__img")[0].src =  "/static/media/playera-dark.10d1bfef9a74f64ac1d6.png";

      document.body.style.backgroundColor = rs.getPropertyValue("--clr-night-dark");
      document.body.style.color = rs.getPropertyValue("--clr-night-light");
      document.getElementsByClassName("header")[0].style.backgroundColor = rs.getPropertyValue("--clr-night-pop");
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = rs.getPropertyValue("--clr-night-light");}
      for (let i = 0; i < games.length; i++) {
        games[i].style.backgroundColor = rs.getPropertyValue("--clr-night-shadow");
        games[i].style.color = rs.getPropertyValue("--clr-night-light");}
    //   for (let i = 0; i < gamesHovered.length; i++) {
    //     gamesHovered[i].style.backgroundColor = rs.getPropertyValue("--clr-night-dark");}
      for (let i = 0; i <names.length; i++) {
        names[i].style.color = rs.getPropertyValue("--clr-night-light");}
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = rs.getPropertyValue("--clr-night-light");}
      footer.style.backgroundImage = rs.getPropertyValue("--clr-night-gradient");
      document.getElementsByClassName("footer")[0].style.backgroundColor = rs.getPropertyValue("--clr-night-pop");
      document.querySelector(".footer p").style.color = rs.getPropertyValue("--clr-day-light");
      document.querySelector(".dropdown-content").style.backgroundColor = rs.getPropertyValue("--clr-night-pop");
      document.querySelector(".header__call-to-action").style.color = rs.getPropertyValue("--clr-night-light");
    //   document.querySelector(".games-sec article:hover").style.backgroundColor = rs.getPropertyValue("--clr-night-shadow");

    } else { // Day mode

      document.getElementsByClassName("header__img")[0].src =  "/static/media/playera-light.ae76f8c25057421307a2.png";

      document.body.style.backgroundColor = rs.getPropertyValue("--clr-day-light");
      document.body.style.color = rs.getPropertyValue("--clr-day-dark");
      document.getElementsByClassName("header")[0].style.backgroundColor = rs.getPropertyValue("--clr-day-pop");
      document.getElementsByTagName("header")[0].getElementsByTagName("a")[0].style.color = rs.getPropertyValue("--clr-day-dark");
      for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].style.color = rs.getPropertyValue("--clr-day-dark");}
      for (let i = 0; i < games.length; i++) {
        games[i].style.backgroundColor = rs.getPropertyValue("--clr-day-shadow");
        games[i].style.color = rs.getPropertyValue("--clr-day-dark");}
    //   for (let i = 0; i < gamesHovered.length; i++) {
    //     gamesHovered[i].style.backgroundColor = rs.getPropertyValue("--clr-day-light");}
      for (let i = 0; i < names.length; i++) {
        names[i].style.color = rs.getPropertyValue("--clr-day-dark");}
      for (let i = 0; i < links.length; i++) {
        links[i].style.color = rs.getPropertyValue("--clr-day-dark");}
      footer.style.backgroundImage = rs.getPropertyValue("--clr-day-gradient");
      document.getElementsByClassName("footer")[0].style.backgroundColor = rs.getPropertyValue("--clr-day-pop");
      document.querySelector(".footer p").style.color = rs.getPropertyValue("--clr-night-dark");
      document.querySelector(".dropdown-content").style.backgroundColor = rs.getPropertyValue("--clr-day-pop");
      document.querySelector(".header__call-to-action").style.color = rs.getPropertyValue("--clr-day-light");
    //   document.querySelector(".games-sec article:hover").style.backgroundColor = rs.getPropertyValue("--clr-day-dark");
    }
}

export default Footer;