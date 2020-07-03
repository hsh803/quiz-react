import React from 'react';
import { withRouter } from 'react-router-dom';

function Show(props) {
    const list = props.quiz.map(element => 
        <div key={element.id}>
            <div>Q: {element[0]}</div>
            <div>A: {element[1]}</div>
        </div>
        )
        console.log(list)

    return (
        <div>
            <div>Quiz: {props.name}</div>
            <div>{list}</div>
            <input type="submit" value="Edit" onClick={props.step} />
            <input type="button" value="Finish" onClick={props.submit} />        
        </div>   
    )
    
}

export default withRouter(Show);