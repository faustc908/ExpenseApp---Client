import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Navbar with routing links

const NavBar = () => {
    return (
        <nav role="navigation" className='navBar'>
            <FontAwesomeIcon className="icon" icon="search-dollar" alt="dollar icon" />
            <h1 className='left' aria-level="1">ExpenseApp</h1>
            <Link to="/tracker" className="projectLink1">Start tracking</Link>
            <a className="projectLink2" href="https://expense-app-client.vercel.app/">Home</a>
        </nav>
    )
}

export default NavBar;