import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { auth, sendPasswordResetEmail } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import '../styles/styles.css'

function Resetpassword() {

    const [email, setEmail] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const history = useHistory()

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return
        }
        if (user) history.replace("/menu")

    }, [user, loading])

    return (
        <div className="resetpassword">
            <div className="password_container">
                <div className='password_box'>
                    <div className='email'>
                        Email Address
                        <input
                            type="text"
                            className="email_textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your e-mail Address"
                        />
                    </div>
                </div>
                <button
                    className="submit_btn"
                    type='button'
                    active
                    onClick={() => sendPasswordResetEmail(email)}
                >
                    Submit
                </button>
            </div>
        </div>
    )
}

export default Resetpassword
