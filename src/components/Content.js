import React, {useState} from 'react';

function Content(props) {
    // const [Content, setContent] =  useState(props.content)
    const [step, setStep] = useState(1)

    // const answer = (id) => {
    //     setStep(2)
        // const newContent = [...Content].map(element =>
        //     element.id === id ? element : null
        // )
        // setContent(newContent)
    // }
    let x = 0
    console.log(Content)
    // const quizStart = props.content.map(element => 
    //     <div key={element[x].id}>
    //         <div>{element[x][0]}</div>          
    //     </div>
    //  )

    switch(step) {
        case 1:
            return (
                <div>
                    <div>{props.name}</div>
                    <div>Question</div>
                        <div key={props.content[x].id}>
                        <div>{props.content[x][0]}</div>
                        <input type="button" value="Answer" onClick={() => setStep(2)} />
                    </div>        
                </div>
             )

        case 2: 
        return (
            <div>
                <div>{props.name}</div>
                <div>Question</div>
                    <div key={props.content[x].id}>
                    <div>{props.content[x][0]}</div>
                    <div>{props.content[x][1]}</div>                    
                </div>        
            </div>
         )
         default: (console.log("This is build by switch statement"))

    }

}

export default Content;