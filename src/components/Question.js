import React, { useEffect } from "react";
import he from "he";

export default function Question(props) {

    const [answersArr, setAnswersArr] = React.useState([]);
    const [isAnsweredCorrectly, setIsAnsweredCorrectly] = React.useState(props.isAnsweredCorrectly);

    React.useEffect(() => {
        const tempArr = [];

        props.answers.map((data) => {
            tempArr.push(
                <li key={data}>
                    <input type="radio" id={props.id} name={props.question} onChange={() => {
                        props.updateAnswer(data, props.question, props.id)
                    }} />
                    <label htmlFor={data}>{he.decode(data)}</label>
                </li>)
        });

        setAnswersArr(tempArr);
    }, [props.answers])

    return (
        <div className="question">
            <h3>{he.decode(props.question)}</h3>
            <ul className="question-list">
                {!isAnsweredCorrectly ? answersArr : <h1>Congrats</h1>}
            </ul>
        </div>
    );
};