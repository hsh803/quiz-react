import React, {useState} from 'react';
import Add from './Add';
import Show from './Show';
import { withRouter } from 'react-router-dom';

function Create(props) {
    const [quiz, setquiz] = useState({name: "", content: []})
    const [step, setStep] = useState(1)

    const nextStep = (e) => {
        e.preventDefault()
        setquiz({name: quiz.name, content: []})
        setStep(2)
    }
    console.log(quiz)

    const updateQuiz = (newContent) => {
        newContent.id = Math.random()
        console.log(newContent)
        const newQuiz = {name: quiz.name, content: [...quiz.content, newContent]}
        setquiz(newQuiz)
        console.log(newQuiz)
    }

    const editQ = (content, id) => {
        console.log(content)
        const newQuiz = [...quiz.content].map(element => {
            if(element.id === id) {
                element[0] = content
            }
        return element
        })
        console.log(newQuiz)
        setquiz({name: quiz.name, content: newQuiz})
    }
    console.log(quiz)

    const editA = (content, id) => {
        console.log(content)
        const newQuiz = [...quiz.content].map(element => {
            if(element.id === id) {
                element[1] = content
            }
        return element
        })
        console.log(newQuiz)
        setquiz({name: quiz.name, content: newQuiz})
    }
    console.log(quiz)

    
    const submitQuiz = () => {
        props.submit(quiz)
        props.history.push("/quiz-react/list")
    }

    switch(step) {
        case 1:
            return (
                <div className="quiz" >
                <div className="title">Quiz name</div>
                <input type="text" value={quiz.name} onChange={(e) => setquiz({name: e.target.value, content: []})} autoFocus/>
                <button type="button" onClick={nextStep}>Next</button>
                </div>
            );
        case 2: 
            return(     
                <Add name={quiz.name} submit={updateQuiz} step={() => setStep(3)} />
            );
        case 3: 
            return( 
                <Show name={quiz.name} quiz={quiz.content} submit={submitQuiz} editQuestion={editQ} editAnswer={editA} />
            );
        default: (console.log("This is build by switch statement"))
    }

}

export default withRouter(Create);