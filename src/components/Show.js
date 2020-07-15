import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import TextareaAutosize from 'react-autosize-textarea/lib';

function Show(props) {
    const [btn, setbtn] = useState({text: "Edit", boolean: false})

    const edit = {
        backgroundColor: "#fff",
        border: "solid 2px #58DFC6"
    }
    const btnHandler = (txt) => {
        txt === "Edit" ? setbtn({text: "Save", boolean: true}) : setbtn({text: "Edit", boolean: false})
    }
    
    const list = props.quiz.map(element => 
        <form key={element.id} className="list">
            <div className="under-title">Question</div>
            <TextareaAutosize style={btn.boolean ? edit : null} value={element[0]} onChange={(e) => props.editQuestion(e.target.value, element.id)} />
            <div className="under-title">Answer</div>
            <TextareaAutosize style={btn.boolean ? edit : null} value={element[1]} onChange={(e) => props.editAnswer(e.target.value, element.id)} />
        </form>
        )
        console.log(list)

    return (
        <div className="quiz">
            <div className="title">{props.name} [{props.quiz.length}]</div>
            <div>{list}</div>
            <div className="btn">
            <button type="button" onClick={() => btnHandler(btn.text)}>{btn.text}</button>
            <button type="button" onClick={props.submit}>Finish</button>
            </div>     
        </div>   
    )
    
}

export default withRouter(Show);