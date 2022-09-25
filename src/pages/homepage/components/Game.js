import React from "react";
import "../../../global.css"
import "../homepage.css"

export default function Game(props) {
    return (
        <article className="game-box { props.className }">
            <button className="game-box__button">
                <img src={ props.imgSrc } alt="" />
                <h3> { props.name } </h3>
                <p> { props.description } </p>
            </button>
        </article>
    )
}