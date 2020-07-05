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
        if (count < props.content.length) {
            setCount(count + 1)
            setShowHide(!showHide)
        }
        else {
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
            <div>
            <div>{props.name}</div>
            <div>{count} of {props.content.length}</div>
            <div>{point}</div>

                <div key={props.content[count].id}>
                    <div>Question</div>
                    <div>{props.content[count][0]}</div>
                    <input style={showHide ? hideButton : null} type="button" value="Answer" onClick={() => setShowHide(!showHide)} />
                    
                    <div style={showHide ? showButton : {display: "none"}}>
                    <div>Answer</div>
                    <div>{props.content[count][1]}</div>                 
                    <input type="button" value="O" onClick={winStep}/>
                    <input type="button" value="X" onClick={loseStep}/>
                    </div>
                </div>
            </div>
            )

    case 2:
        return(
            <div>You have got {point} points!</div>
        )
    
    default: (console.log("This is build by switch statement"))
    } 

}

export default Content;