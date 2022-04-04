import React, {useState} from 'react'
import '../styles/styles.css'
import logo from '../images/Large inwood bagels logo.jpeg'
import {useAuthState} from 'react-firebase-hooks/auth'
import {auth} from '../firebase'
import NavBarGuest from './NavBarGuest'
import NavBarLogged from './NavBarLogged'

function NavBar() {
    const [isActive, setActive] = useState(false)
    const [user, loading, error] = useAuthState(auth)

    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <nav className="navbar is-black is-fixed-top" role="navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="https://bulma.io">
                    <img src={logo}/>
                    {/*width="112" height="28"*/}
                </a>

                <a role="button"
                   className={`navbar-burger ${isActive ? "is-active" : ""}`}
                   onClick={handleToggle}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="navbar-menu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div className={`navbar-menu ${isActive ? "is-active" : ""}`} id="navbar-menu">
                {(!user) ? <NavBarGuest /> : <NavBarLogged />}
            </div>
        </nav>
    )
}

export default NavBar
