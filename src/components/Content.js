import React, { useState } from 'react';

function Content(props) {
    const [quizContent, setquizContent] = useState(["", ""])
    const [step, setStep] = useState(1) 

    console.log(quizContent[0])
    console.log(quizContent[1])

    const contentSubmit = (e) => {
        e.preventDefault()
        props.submit(quizContent)
        console.log(quizContent)
        setquizContent(["", ""])
    }



    switch(step) {
        case 1:
            return(
                <form onSubmit={contentSubmit}>
                    <div>Quiz: {props.name}</div>
                    <div>Contents:</div>
                    <input type="text" value={quizContent[0]} onChange={(e) => setquizContent([e.target.value, ""])} />
                    <div>Answer:</div>
                    <input type="text" value={quizContent[1]} onChange={(e) => setquizContent([quizContent[0], e.target.value])} />
                    <input type="submit" value="Next" />
                    <input type="button" value="Finish" onClick={() => setStep(2)}/>        
                </form>        
                );
        case 2:
        const list = props.quiz.map(element => 
            <div>{element}</div>
            )
            console.log(list)
            
        return(
            <div>
            <div>Quiz: {props.name}</div>

            {list}
            </div>
        );
        default: (console.log("This is build by switch statement"))
    }

    
}

export default Content;