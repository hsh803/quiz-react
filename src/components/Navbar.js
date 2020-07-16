import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <Menu right>
            <Link to="/quiz-react/create">Create Quiz</Link>
            <Link to="/quiz-react/list">Quiz list</Link>
        </Menu>
    )
}

export default Navbar;