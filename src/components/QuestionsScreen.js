import React, { useEffect } from "react";
import { nanoid } from "nanoid";
import Question from "./Question"

var currentGuesses = [];
export default function QuestionsScreen(props) {
    const [questionsComponent, setQuestionsComponent] = React.useState([]);
    useEffect(() => {
        const answersRow = [];
        const questionsRow = [];
        const questionsArr = props.questionsData.results;
        questionsArr.map((data) => {
            const currentId = nanoid();

            answersRow.push({ id: currentId, correct_answer: data.correct_answer, current_guess: "" });

            const answersArr = [];
            answersArr.push(data.correct_answer);
            for (let i = 0; i < data.incorrect_answers.length; i++) {
                answersArr.push(data.incorrect_answers[i]);
            };

            answersArr.sort((a, b) => 0.5 - Math.random());

            const question = <Question question={data.question} key={data.question} id={currentId} answers={answersArr}
                rightAnswer={data.correct_answer} incorrectAnswers={data.incorrect_answers} checkedAnswer=""
                updateAnswer={updateCheckedAnswer} isAnsweredCorrectly={false} />
            questionsRow.push(question);
        })
        setQuestionsComponent(questionsRow);
        currentGuesses.push(answersRow);
    }, []);

    function checkAnswers() {
        for (let i = 0; i < currentGuesses[0].length; i++) {
            if (currentGuesses[0][i].current_guess === currentGuesses[0][i].correct_answer) {
                console.log("Pytanie nr" + i + " poprawna odpowiedź");

            } else {
                console.log("Pytanie nr" + i + " niepoprawna odpowiedź");
             }
        };
    };


    function updateCheckedAnswer(checkedAnswer, question, id) {
        for (let i = 0; i < currentGuesses[0].length; i++) {
            if (currentGuesses[0][i].id === id) {
                currentGuesses[0][i].current_guess = checkedAnswer;
            };
        };
    };

    return (
        <div className="questions-screen">
            {questionsComponent}
            <button className="check-answers" onClick={checkAnswers}>Check answers</button>
        </div>
    )
};