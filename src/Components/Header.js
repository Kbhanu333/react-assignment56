import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <nav>
        <div className="header">
            <span className="nav-item">
                <Link to='/home' className="nav-link">Home </Link>
            </span>
            <span className="nav-item">
                <Link to='/student' className="nav-link" >Student</Link>
            </span>
            <span className="nav-item">
                <Link to='/contact' className="nav-link" >Contact Us</Link>
            </span>
        </div>
        </nav>
    )
}

export default Header;