import React from "react";
import {
    Link
} from 'react-router-dom';

import "./Header.css";
import About from './About';
import Home from './Home';

//import { textChangeRangeIsUnchanged } from "typescript";

// const container = Styled.div;
// a {
//     text.decoration: none;
// }
// <container>
//     <link to="">
// </container>

function Header(props) {
    return <header>Fruit Emporium
        <span>
            <Link to="/about">
                <About />
            </Link>
            <Link to="/">
                <Home />
            </Link>
        </span>


    </header>;
}

export default Header;