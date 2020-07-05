import React from 'react';
import {Link} from 'react-router-dom';

function List(props) {
    console.log(props.list)

    const quizList = props.list.map(element => 
        <div key={element.id} onClick={() => props.quiz(element.id)}><Link to="/list/quiz">{element.name}</Link></div>
     )
         console.log(quizList)
     return (
     <div>{quizList}</div>
     )

}

export default List;