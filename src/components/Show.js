import React from 'react';
import { withRouter } from 'react-router-dom';

function Show(props) {
    const list = props.quiz.map(element => 
        <div key={element.id} className="list">
            <div>Q: {element[0]}</div>
            <div>A: {element[1]}</div>
        </div>
        )
        console.log(list)

    return (
        <div className="quiz">
            <div className="title">Quiz: {props.name}</div>
            <div className="title">Number of the quiz: {props.quiz.length}</div>
            <div>{list}</div>
            <button type="submit" onClick={props.step}>Edit</button>
            <button type="button" onClick={props.submit}>Finish</button>        
        </div>   
    )
    
}

export default withRouter(Show);