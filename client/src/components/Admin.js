import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {NavLink} from 'react-router-dom'
import licon from '../images/Large inwood bagels logo.jpeg'
import { Link } from 'react-router-dom'

function Admin() {
    return (
        <div className='admin'>
            <div className='admin_container'>
                <img 
                    className="adminicon"
                    src={licon} 
                />
                <button 
                    className='signin_admin'>
                    <Link to="/adminsignin"> Sign In </Link>
                </button>
                <button 
                    className='admincreatebtn'>
                    <Link to="/adminsignup"> Create Admin Account </Link> 
                </button>
            </div>
        </div>
    )
}

export default Admin