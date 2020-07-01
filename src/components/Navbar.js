import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <nav>
            <Link to="/create">Create quiz</Link>
            <Link to="/list">Quiz list</Link>
        </nav>
    )
}

export default Navbar;