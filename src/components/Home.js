import React from 'react';
import {Link} from 'react-router-dom';


function Home() {
    return(
        <div className="create-button"><Link to="/create">Create Quiz</Link>
        </div>
    )
}


export default Home;