import React from "react";
import "../../../global.css"
import "../homepage.css"

export default function Information() {
    return (
        <section className="info-sec section"> 
            <h2>Information</h2>
            <p>This is a side project that I am doing to practise and improve my <strong>web development</strong> skills, and also have fun from time to other!
            <br /> All the code behind this website has been written by me.</p>
            <p>These are a few resources that I used to improve the functionality and appearance of the website: </p>
            <ul>
                <li><a href="https://www.canva.com/" target="_blank">Canva</a></li>
                <li><a href="https://stackoverflow.com/" target="_blank">StackOverFlow</a></li>
                <li><a href="https://youtube.com/" target="_bank">YouTube</a></li>
            </ul>
        </section>
    )
}