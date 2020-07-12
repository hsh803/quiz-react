import React, {useState} from 'react';

function Content(props) {
    const [showHide, setShowHide] = useState(false)
    const [step, setStep] = useState(1)
    const [count, setCount] = useState(0)
    const [point, setPoint] = useState(0)
    console.log(props.content.length)

    const winStep = () => {
        if (count < props.content.length - 1) {
            setCount(count + 1)
            setPoint(point + 1)
            setShowHide(!showHide)
        }
        else {
            setPoint(point + 1)
            setStep(2)}
    }

    const loseStep = () => {
        if (count < props.content.length - 1) {
            setCount(count + 1)
            setPoint(point + 0)
            setShowHide(!showHide)
        }
        else {
            setPoint(point + 0)
            setStep(2)}
    }

    const hideButton = {
        display: "none"
    }

    const showButton = {
        display: "block"
    }
    switch(step) {
    case 1:
        return (
            <div className="quiz">
            <div className="title">Quiz: {props.name}</div>
                <div className="under-title">
                    <div>{count} of {props.content.length}</div>
                    <div>{point}</div>
                </div>

                <div className="q-a" key={props.content[count].id}>
                    <div>Question:</div>
                    <div>{props.content[count][0]}</div>
                    <button style={showHide ? hideButton : null} type="button" onClick={() => setShowHide(!showHide)}>Answer</button>
                    
                    <div style={showHide ? showButton : {display: "none"}}>
                    <div>Answer:</div>
                    <div>{props.content[count][1]}</div>                 
                    <button type="button" onClick={winStep}>O</button>
                    <button type="button" onClick={loseStep}>X</button>
                    </div>
                </div>
            </div>
            )

    case 2:
        return(
            <h3 className="quiz" style={{textAlign: "center"}}>You have got {point} points!</h3>
        )
    
    default: (console.log("This is build by switch statement"))
    } 

}

export default Content;