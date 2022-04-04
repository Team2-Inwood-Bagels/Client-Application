import React from 'react'
import '../styles/styles.css'
import { Link } from 'react-router-dom'

function AdminAccount() {

    return (
        <div className='admin'>
            <div className='admin_container'>
                <h1> Admin Account</h1>
                <div className='admin_acc'>
                    <div className='name_email'>
                        <div className='adminame'>
                            Employee Name: 
                        </div>
                        <div className='adminemail'>
                            Email Address: 
                        </div>
                    </div>
                    <div className='role_pswrd'>
                        <div className='role'>
                            Employee Role: {}
                        </div>
                        <div className='pswrd'>
                            Password:
                        </div>
                    </div>
                </div>
                <button className='update_btn'>
                    <Link to="/updateaccountinfo" style={{ textDecoration: 'none' }} > Update Account Information </Link>
                </button>                
            </div>
        </div>
    )
}

export default AdminAccount