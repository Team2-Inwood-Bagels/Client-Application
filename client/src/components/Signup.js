import React, {useEffect, useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Link, useHistory} from 'react-router-dom'
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from '../firebase'
import '../styles/styles.css'

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [stateUS, setStateUs] = useState("")
    const [zip, setZip] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const history = useHistory()

    const register = () => {
        if (!name) alert("Please enter name")
        if (password !== checkPassword) alert("Passwords do not match")
        registerWithEmailAndPassword(name, email, password, address, city, stateUS, zip).then(r => console.log(user))
    };
    useEffect(() => {
        if (loading) return
        if (user) history.replace("/menu")
    }, [user, loading])

    return (
        <div className="signup">
            <div className="signup_container">                
                <div className='signup_box'>
                    <div className='details_address'>
                        <div className='user_details'>
                            <h1>All items marked with a * are required</h1>
                            <div className='fill_in'>
                                Name * {}
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Full Name"
                                />
                            </div>
                            <div className='fill_in'> 
                                Email Address *
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-mail Address"
                                />
                            </div>
                            <div className='fill_in'>
                                Password *
                                <input
                                    type="password"
                                    className="signup_textBox"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="Password"
                                />
                            </div>
                            <div className='fill_in'>
                                Re-enter Password *
                                <input
                                    type="password"
                                    className="signup_textBox"
                                    value={checkPassword}
                                    onChange={(e) => setCheckPassword(e.target.value)}
                                    placeholder="Re-enter Password"
                                />
                            </div>
                        </div>
                        
                        <div className='address'>
                            <h2>Delivery Address</h2>
                                <div className='address_column'>
                                    <p className='address_fill'>Address</p>
                                    <input
                                        type="text"
                                        className="signup_textBox"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Address"
                                    />
                                </div>
                                <div className='address_column'> 
                                    <p className='address_fill'>City</p>
                                    <input
                                        type="text"
                                        className="signup_textBox"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        placeholder="City"
                                    />
                                </div>
                                <div className='address_column'>
                                    <p className='address_fill'> State </p>
                                    <input
                                        type="text"
                                        className="signup_textBox"
                                        value={stateUS}
                                        onChange={(e) => setStateUs(e.target.value)}
                                        placeholder="State"
                                    />
                                </div>
                                <div className='address_column'>
                                    <p className='address_fill'> Zip Code </p>
                                    <input
                                        type="zip"
                                        className="signup_textBox"
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                        placeholder="Zip Code"
                                    />
                                </div>
                        </div>
                    </div>
                    
                    
                    <div>
                        <button className="signup_btn" onClick={register}>
                            Sign up
                        </button>
                    </div>

                    <button
                        className="signup_btn signup_google"
                        onClick={signInWithGoogle}
                    >
                        Sign up with Google
                    </button>
                    <div>
                        Already have an account? <Link to="/signin">Sign in here</Link> now.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
