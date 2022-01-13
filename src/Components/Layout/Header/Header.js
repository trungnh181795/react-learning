import React from 'react';
import {Link} from 'react-router-dom';

import './Header.scss';


const Header = () => {
    

    return(
        <nav className='Header'>
            <ul className='navbar-list'>
                <li className='navbar-list-item'>
                    <Link to="/clock">Clock</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to="/calculator">Calculator</Link>
                </li>
                <li className='navbar-list-item'>
                    <Link to="/todolist">To-do list</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header;