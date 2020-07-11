import React, {useState} from 'react';
import TextareaAutosize from 'react-autosize-textarea';

function Edit(props) {
    const [quizContent, setquizContent] = useState([])

    const editContent = props.quiz.map(element => 
        <div key={element.id} className="list">
            <div>Q:</div>
            <TextareaAutosize defaultValue={`${element[0]}`} onChange={(e) => setquizContent([e.target.value, "", element.id])} />
            <div>A:</div>
            <TextareaAutosize defaultValue={`${element[1]}`} onChange={(e) => setquizContent([quizContent[0], e.target.value, element.id])} />
        </div>
        )
        console.log(quizContent)
    
    const editContentSubmit = () => {
        props.editSubmit(quizContent)
        props.step()
    }

    return (
        <div className="quiz">
            <div className="title">Quiz: {props.name}</div>
            <form onSubmit={editContentSubmit}>
            {editContent}
            <button type="submit">Save</button>
            </form>
        </div>
        )
    
}

export default Edit;