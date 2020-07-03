import React, {useState} from 'react';

function Edit(props) {
    const [quizContent, setquizContent] = useState(["", ""])

    const editContent = props.quiz.map(element => 
        <div key={element.id}>
            <div>Q:</div>
            <input type="text" defaultValue={`${element[0]}`} onChange={(e) => setquizContent([e.target.value, ""])} />
            <div>A:</div>
            <input type="text" defaultValue={`${element[1]}`} onChange={(e) => setquizContent([quizContent[0], e.target.value])} />
        </div>
        )
        console.log(quizContent)
    
    const editContentSubmit = (e) => {
        props.editSubmit(quizContent)
        props.step()
    }

    return (
        <div>
            <div>Quiz: {props.name}</div>
            <form onSubmit={editContentSubmit}>
            {editContent}
            <input type="submit" value="Save" />
            </form>
        </div>    )
    
}

export default Edit;