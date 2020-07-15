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

// burger menu
// https://codesandbox.io/s/nmy6x9wrj?file=/src/styles.css
// https://codepen.io/Lakston/pen/ALvgKB
// https://negomi.github.io/react-burger-menu/
// https://github.com/negomi/react-burger-menu
export default Navbar;