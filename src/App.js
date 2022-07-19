import React from "react";
import StartScreen from "./components/StartScreen"
import QuestionsScreen from "./components/QuestionsScreen";

export default function App() {
    const [quizStart, setQuizStart] = React.useState(true);
    const [questions, setQuestions] = React.useState([]);

    React.useEffect(() =>{
        fetch("https://opentdb.com/api.php?amount=5")
            .then(res => res.json())
            .then(data => setQuestions(data))      
    }, [])

    return (
        <section>
            {quizStart ? <StartScreen changeScreen={setQuizStart} screenState={quizStart} />
             : <QuestionsScreen questionsData={questions} />}
        </section>
    );
};