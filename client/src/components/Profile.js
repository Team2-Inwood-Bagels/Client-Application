import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {auth, db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useHistory} from "react-router-dom";


function Profile() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [stateUS, setStateUS] = useState("")
    const [zip, setZip] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const history = useHistory()

    const fetchUser = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name);
            setEmail(data.email)
            setAddress(data.address);
            setCity(data.city);
            setStateUS(data.state)
            setZip(data.zip)

            console.log("state", stateUS)
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };
    useEffect(() => {
        if (loading) return;
        if (!user) return history.replace("/");
        fetchUser();
    }, [user, loading]);

    return (
        <div className="container">
            <div className="Flex">
                <div className="Flex1">
                    <div className="signup">
                        <div className='signup_common'>
                            <div className='user'> Name
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={name}
                                    placeholder={user.name}
                                />
                            </div>
                            <div className='user'> Email Address
                                <input
                                    type="text"
                                    className="signup_textBox"
                                    value={email}
                                    placeholder={email}
                                />
                            </div>
                        </div>
                        <div className='card_detailss'>
                            <div className='cards'> Card Number
                                <input 
                                    className='card_textbox' 
                                    type="text" 
                                    placeholder="Enter Card Number"
                                />
                            </div>
                            <div className='cards'> Card Expiration Date
                                <input 
                                    className='card_textbox' 
                                    type="text" 
                                    placeholder="Enter Card Expiration Date"
                                />
                            </div>
                            <div className='card_btn'>
                                <button className="addcard_btn">
                                   Add Credit/Debit Card
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
