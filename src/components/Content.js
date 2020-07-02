import React, { useState } from 'react';

function Content(props) {
    const [quizContent, setquizContent] = useState(["", ""])
    const [step, setStep] = useState(1) 

    console.log(quizContent)

    const contentSubmit = (e) => {
        e.preventDefault()
        props.submit(quizContent)
        console.log(quizContent)
        setquizContent(["", ""])
    }

    const editContentSubmit = (e) => {
        props.editSubmit(quizContent)
        setStep(2)
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
                    <input type="submit" value="Add" />
                    <input type="button" value="Finish" onClick={() => setStep(2)} />        
                </form>
                );
                
        case 2:
            const list = props.quiz.map(element => 
                <div key={element.id}>
                <div>Q: {element[0]}</div>
                <div>A: {element[1]}</div>
                </div>
                )
                console.log(list)
            
        return(
            <div>
            <div>Quiz: {props.name}</div>
            <div>{list}</div>
            <input type="submit" value="Edit" onClick={(e) => {(e.preventDefault) (setStep(3))}} />
            <input type="button" value="Finish" />        
            </div>
        );
        case 3:
            const editContent = props.quiz.map(element => 
                <div key={element.id}>
                <div>Q:</div>
                <input type="text" defaultValue={`${element[0]}`} onChange={(e) => setquizContent([e.target.value, "", element.id])} />
                <div>A:</div>
                <input type="text" defaultValue={`${element[1]}`} onChange={(e) => setquizContent([quizContent[0], e.target.value, element.id])} />
                </div>
                )
                console.log(editContent)
        return(
            <div>
            <div>Quiz: {props.name}</div>
            <form onSubmit={editContentSubmit}>
            {editContent}
            <input type="submit" value="Save" />
            </form>
            </div>
        );
        default: (console.log("This is build by switch statement"))
    }

    
}

export default Content;