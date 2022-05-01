import React from 'react'
import '../styles/styles.css'
import {NavLink} from 'react-router-dom'

function NavBarGuest() {
    return (
        <div className="navbar-end">
            <NavLink to="/" exact activeClassName="bordered-active" className="navbar-item">Home </NavLink>
            <NavLink to="/menu" exact activeClassName="bordered-active" className="navbar-item">Menu </NavLink>
            <NavLink to="/location" exact activeClassName="bordered-active" className="navbar-item">Location </NavLink>
            <NavLink to="/signin" exact activeClassName="bordered-active" className="navbar-item">Sign
                In </NavLink>
            <NavLink to="/signup" exact activeClassName="bordered-active" className="navbar-item">Sign
                Up </NavLink>
            <NavLink to="/admin" exact activeClassName="bordered-active" className="navbar-item"> Admin </NavLink>
        </div>
    )
}

export default NavBarGuest
