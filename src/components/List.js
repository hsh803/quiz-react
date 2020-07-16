import React from 'react';
import {Link} from 'react-router-dom';

function List(props) {
    console.log(props.list)

    const quizList = props.list.map(element => 
        <div key={element.id}>
        <div className="list-name">{element.name}</div>
        <div className="list-button">
        <button type="button" onClick={() => props.quiz(element.id)}><Link to="/quiz-react/list/quiz">Start</Link></button>
        <button type="button" onClick={() => props.delete(element.id)}>Delete</button>
        </div>
        </div>
     )
         console.log(quizList)
     return (
         quizList.length === 0 ?  <h3 className="quiz" style={{textAlign: "center"}}>Empty List</h3> : <div className="quiz">{quizList}</div>
     )
}

export default List;