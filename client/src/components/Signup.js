import React, {useEffect, useState} from 'react'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Link, useHistory} from 'react-router-dom'
import {
    auth,
    registerWithEmailAndPassword,
    signInWithGoogle,
} from '../firebase'
import '../styles/styles.css'
import TextField from "@mui/material/TextField";

function Signup() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [checkPassword, setCheckPassword] = useState("")
    const [name, setName] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const history = useHistory()

    const register = () => {
        if (!name) alert("Please enter name")
        if (password !== checkPassword) alert("Passwords do not match")
        registerWithEmailAndPassword(name, email, password).then(r => console.log(user))
    };
    useEffect(() => {
        if (loading) return
        if (user) history.replace("/menu")
    }, [user, loading])



    return (
        <div className={"signupContainer"}>
            <h1 className={"createAccount_header"}>Create Account</h1>
               <div className={"signup_fields"}>
                   <div className={"signup_divTF"}>
                       <TextField
                           label={"Enter Full Name"}
                           type="text"
                           className="signup_textBox"
                           placeholder="e.g. John Doe"
                           onChange={(e) => setName(e.target.value)}
                           required={true}
                           style={{margin: "20px"}}
                       />

                       <TextField
                           type="email"
                           label={"Enter Email Address"}
                           className="signup_textBox"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                           placeholder="e.g. john@gmail.com"
                           required={true}
                           style={{margin: "20px"}}
                       />
                   </div>

                   <div className={"signup_divTF"}>
                       <TextField
                           label={"Enter Password"}
                           type={"password"}
                           className="signup_textBox"
                           placeholder={"Minimum of 8 characters"}
                           onChange={(e) => setPassword(e.target.value)}
                           required={true}
                           style={{margin: "20px"}}
                       />

                       <TextField
                           label={"Confirm Password"}
                           type={"password"}
                           className="signup_textBox"
                           placeholder={"Minimum of 8 characters"}
                           onChange={(e) => setCheckPassword(e.target.value)}
                           required={true}
                           style={{margin: "20px"}}
                       />
                   </div>

                   <div>
                       <button className="signup_btn" onClick={register}> Sign up</button>
                   </div>
                  <div>
                      <button
                          className="signup_btn signup_google"
                          onClick={signInWithGoogle}
                      >
                          Sign up with Google
                      </button>
                  </div>

                   <p>  Already have an account? Click <Link to="/signin">here</Link> to sign in</p>

               </div>
        </div>
    )
}

export default Signup
