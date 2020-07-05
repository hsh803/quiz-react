import React, {useState} from 'react';

function Content(props) {
    // const [Content, setContent] =  useState(props.content)
    const [showHide, setShowHide] = useState(false)
    const [step, setStep] = useState(1)
    console.log(props.content.length)


    // const stepControl1 = () => {
    //     setStep(2)
    //     if (x < props.content.length) {
    //         x = x + 1
    //     }
    // }
    let x = 0;
    // const stepControl = () => {
    //     if (x < props.content.length) {
    //         x = x + 1
    //         setStep(1)

    //     }
    // }

    const hideButton = {
        display: "none"
    }

    const showButton = {
        display: "block"
    }

    // for (x = x ; x < props.content.length; x++) {
        switch(step) {
            case 1:
            console.log(x)
            return (
                <div>
                <div>{props.name}</div>
                    <div key={props.content[x].id}>
                        <div>Question</div>
                        <div>{props.content[x][0]}</div>
                        <input style={showHide ? hideButton : null} type="button" value="Answer" onClick={() => setShowHide(!showHide)} />
                        
                        <div style={showHide ? showButton : {display: "none"}}>
                        <div>Answer</div>
                        <div>{props.content[x][1]}</div>                 
                        <input type="button" value="Next" onClick={() => setStep(2)}/>
                        </div>
                    </div>
                </div>
                 )
 
             default: (console.log("This is build by switch statement"))
        }  
    // }

}

export default Content;