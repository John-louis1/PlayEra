import React from "react";
import "../../../global.css"
import "../homepage.css"
import Game from "./Game"
import angryBirdsImage from "../../../assets/angry-bird-logo.png";
import clickAndDestroyImage from "../../../assets/click-and-destroy-logo.png";
import rockScissorsPaperImage from "../../../assets/rock-scissors-paper-logo.png";
import catchTheDoggoImage from "../../../assets/catch-the-doggo-logo.png";
import guessTheColorImage from "../../../assets/guess-the-color-logo.png";

export default function GamesList() {
    return (
        <section className="games-sec"> 
            <h2>Available Games</h2>
            <div class="games-container">
                <Game 
                    imgSrc= { angryBirdsImage }
                    name="Angry Birds" 
                    description="Can you kill all the enemies with the balls that you have only?" 
                    className="game1"
                />
                <Game 
                    imgSrc= { clickAndDestroyImage }
                    name="Click and Destroy" 
                    description="What is the best score you can get today?" 
                    className="game2"
                />
                <Game 
                    imgSrc= { rockScissorsPaperImage }
                    name="Rock Scissors Paper" 
                    description="Will you beat the computer this time?" 
                    className="game3"
                />
                <Game 
                    imgSrc= { catchTheDoggoImage }
                    name="Catch the Doggo" 
                    description="Do you have what it takes to catch him?" 
                    className="game4"
                />
                <Game 
                    imgSrc= { guessTheColorImage }
                    name="Guess the Color" 
                    description="Can you be lucky enough to guess the right color?" 
                    className="game5"
                />
            </div>
        </section>
    )
}