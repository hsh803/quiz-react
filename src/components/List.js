import React from 'react';
import {Link} from 'react-router-dom';

function List(props) {
    console.log(props.list)

    const quizList = props.list.map(element => 
       <div key={element.id}><Link to={`/list/${element.name}`}>{element.name}</Link></div>
    )

    return (
    <div>{quizList}</div>
    )
    
}

export default List;