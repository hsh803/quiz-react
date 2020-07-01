import React, {useState} from 'react';
import Content from './Content';
// import { withRouter } from 'react-router-dom';

function Create(props) {
    const [quiz, setquiz] = useState({name: "", content: []})
    const [step, setStep] = useState(1) 
    
    const nextStep = (e) => {
        e.preventDefault()
        setquiz({name: quiz.name, content: []})
        setStep(step + 1)
    }
    console.log(quiz)

    const updateQuiz = (newContent) => {
        console.log(newContent)
        const newQuiz = {name: quiz.name, content: [...quiz.content, newContent]}
        setquiz(newQuiz)
        console.log(newQuiz)
    }

    // const submitQuiz = (e) => {
    //     props.submit(quiz)
    //     props.history.push("/list")
    // }

    switch(step) {
        case 1:
            return (
                <div>
                <div>Quiz name</div>
                <input type="text" value={quiz.name} onChange={(e) => setquiz({name: e.target.value, content: []})}/>
                <input type="submit" value="Next" onClick={nextStep} />
                </div>
            );
        case 2: 
        return( 
            <Content name={quiz.name} submit={updateQuiz} quiz={quiz.content} />
        );
        default: (console.log("This is build by switch statement"))
    }

}

export default Create;