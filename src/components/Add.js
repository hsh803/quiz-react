import React, {useState} from 'react';

function Add(props) {
    const [quizContent, setquizContent] = useState(["", ""])

    console.log(quizContent)

    const contentSubmit = (e) => {
        e.preventDefault()
        props.submit(quizContent)
        console.log(quizContent)
        setquizContent(["", ""])
    }

    return (
    <form onSubmit={contentSubmit}>
        <div>Quiz: {props.name}</div>
        <div>Contents:</div>
        <input type="text" value={quizContent[0]} onChange={(e) => setquizContent([e.target.value, ""])} />
        <div>Answer:</div>
        <input type="text" value={quizContent[1]} onChange={(e) => setquizContent([quizContent[0], e.target.value])} />
        <input type="submit" value="Add" />
        <input type="button" value="Next" onClick={props.step} />        
    </form>    
    )
    
}

export default Add;