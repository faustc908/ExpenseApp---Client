import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

// Navbar with routing links

const NavBar = () => {
    return (
        <div className='navBar'>
            <h1 className='left'>ExpenseApp</h1>
            <Link to="/tracker" className="projectLink1">Start tracking</Link>
            <a className="projectLink2" href="http://localhost:3000/">Home</a>
        </div>
    )
}

export default NavBar;