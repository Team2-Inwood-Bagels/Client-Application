import React, {useEffect, useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import {auth, signInWithEmailAndPassword} from '../firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import '../styles/styles.css'

function AdminSignin() {

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
        <div className="adminsignin">
            <div className="adminsignin_container">
                <div className='admincredentials'>
                    <div className='adminemail_box'>
                        Email Address
                        <input
                            type="text"
                            className="adminsignin_textBox"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail Address"
                        />
                    </div>
                    <div className='adminpassword_box'>
                        Password
                        <input
                            type="password"
                            className="signin_textBox"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                    </div>
                </div>
                <button
                    className="adminsignin_btn"
                    onClick={() => signInWithEmailAndPassword(email, password)}
                >
                    <Link to="/adminaccount" > Sign in </Link>
                </button>
                <div className='adminresetpswrd_redirect'>
                    Forgot Password? <Link to="/adminresetpassword"> Click here </Link>
                </div>
                <div className='admincreate_reset'>
                    Need admin account? <Link to="/adminsignup"> Click here </Link>
                </div>
            </div>
        </div>
    )
}

export default AdminSignin
