import React from "react";

export default function StartScreen(props){

    function handleClick(){
        props.changeScreen(!props.screenState);
    };

    return(
        <div className="title-screen">
            <h1>Quizzical</h1>
            <h3>How well do you know trivia questions? Let's find out!</h3>
            <button onClick={handleClick}>Start quiz</button>
        </div>
    )
};