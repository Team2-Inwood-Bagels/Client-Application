import React from 'react'
import '../styles/styles.css'
import {NavLink} from 'react-router-dom'
import '../firebase'
import {logout} from "../firebase";

function NavBarLogged() {
    return (
        <div className="navbar-end">
            <NavLink to="/" exact activeClassName="bordered-active" className="navbar-item">Home </NavLink>
            <NavLink to="/menu" exact activeClassName="bordered-active" className="navbar-item">Menu </NavLink>
            <NavLink to="/location" exact activeClassName="bordered-active"
                     className="navbar-item">Location </NavLink>
            <NavLink to="/order" exact activeClassName="bordered-active" className="navbar-item">Order
                Online </NavLink>
            <NavLink to="/settings" exact activeClassName="bordered-active" className="navbar-item">Account </NavLink>
            <button className="navbar-button" onClick={logout}>Log out</button>
        </div>
    )
}

export default NavBarLogged
