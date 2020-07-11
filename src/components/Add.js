import React, {useState} from 'react';

function Add(props) {
    const [quizContent, setquizContent] = useState(["", ""])
    const [count, setcount] = useState(0)

    console.log(quizContent)

    const countNumber = (e) => {
        setcount(count + 1)
    }
    const contentSubmit = (e) => {
        e.preventDefault()
        props.submit(quizContent)
        console.log(quizContent)
        setquizContent(["", ""])
    }

    return (
    <form className="quiz" onSubmit={contentSubmit}>
        <div className="title">Quiz: {props.name}</div>
        <div className="title">Number of the quiz: {count}</div>
        <div className="under-title">Question:</div>
        <input type="text" value={quizContent[0]} onChange={(e) => setquizContent([e.target.value, ""])} />
        <div className="under-title">Answer:</div>
        <input type="text" value={quizContent[1]} onChange={(e) => setquizContent([quizContent[0], e.target.value])} />
        <div>
        <button type="submit" onClick={countNumber}>Add</button>
        <button type="button" onClick={props.step}>Next</button>
        </div>        
    </form>    
    )
    
}

export default Add;