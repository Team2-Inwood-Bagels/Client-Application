import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth, signInWithEmailAndPassword, signInWithGoogle} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import TextField from '@mui/material/TextField';
import '../styles/styles.css'

function Signin() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
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
        <div className="signin">
            <div className="signin_container">
                <h1>Sign In</h1>
                <div className='credentials'>
                    <div className='email_box'>
                        <TextField
                            type="email"
                            label={"Email Address"}
                            className="signin_textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="e.g. john@gmail.com"
                            required={true}
                        />
                    </div>
                    <div className='password_box'>
                        <TextField
                            label={"Enter Password"}
                            type="password"
                            className="signin_textBox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                            style={{marginBottom: "20px"}}
                            required={true}
                        />
                    </div>
                </div>
                <button
                    className="signin_btn"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                >
                    Sign in
                </button>
                <button className="signin_btn signin_google" onClick={signInWithGoogle}>
                    Sign in with Google
                </button>
                <div>
                    Forgot Password? Click <Link to="/resetpassword"> here </Link> to reset
                </div>
                <div>
                    Don't have an account? <Link to="/signup"> Sign up here </Link>
                </div>
            </div>
        </div>
    )
}

export default Signin
