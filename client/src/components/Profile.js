import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {auth, db} from "../firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import {useHistory} from "react-router-dom";
import TextField from "@mui/material/TextField";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";


function Profile() {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [user, loading, error] = useAuthState(auth)
    const [open, setOpen] = useState(false);
    const history = useHistory()

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const updateUser = () => {
        db.collection("users").doc(user.uid).update({
            email: email,
            name: name,
        }).then(r => {console.log(user.uid + " has been updated")})
    }

    const fetchUser = async () => {
        try {
            const query = await db
                .collection("users")
                .where("uid", "==", user?.uid)
                .get();
            const data = await query.docs[0].data();
            setName(data.name);
            setEmail(data.email)
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
        <div className="profile_container">
            <h1 className={"profile_header"}>Profile</h1>
            <div className={"profile_fields"}>
                <div className={"profile_divTF"}>
                    <TextField
                        type={"text"}
                        className={"signup_textBox"}
                        value={name}
                        placeholder={name}
                        label={"Name"}
                        disabled={true}
                        style={{margin: "20px"}}
                    />

                    <TextField
                        type={"email"}
                        className={"signup_textBox"}
                        value={email}
                        placeholder={email}
                        label={"Email Address"}
                        disabled={true}
                        style={{margin: "20px"}}
                    />
                </div>
                <div>
                    <div className={"profile_btns"}>
                        <button className={"editBtn"}
                                onClick={handleClickOpen}
                        >
                            Update Account Information
                        </button>
                    </div>


                </div>
                <div className={"profile_divTF"}>
                    <TextField
                        className={"signup_textBox"}
                        label={"Credit Card Number"}
                        value={"XXXX-XXXX-XXXX-1234"}
                        placeholder={"XXXX-XXXX-XXXX-1234"}
                        disabled={true}
                        style={{margin: "20px"}}

                    />
                    <TextField
                        label={"Expiration Date"}
                        value={"01/22"}
                        className={"signup_textBox"}
                        placeholder={"01/22"}
                        disabled={true}
                        style={{margin: "20px"}}
                    />
                </div>
            </div>
           <div>
               <div className={"profile_btns"}>
                   <button className={"paymentBtn"}>Add or Edit Payment Information</button>
               </div>
           </div>



            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update Account Information</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Update name or email and click save.
                    </DialogContentText>
                    <div className={"textField"} style={{margin: "20px"}}>
                        <TextField
                            type={"text"}
                            className={"editText"}
                            label={"Name"}
                            onChange={(e) => {setName(e.target.value)}}
                            value={name}
                            placeholder={name}
                            variant={"outlined"}

                        />
                    </div>
                    <div className={"textField"}  style={{margin: "20px"}}>
                        <TextField
                            type={"email"}
                            className={"editText"}
                            label={"Email"}
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            placeholder={email}
                            variant={"outlined"}

                        />
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button onClick={() => {
                        updateUser()
                        handleClose()
                    }} >Save</Button>
                </DialogActions>
            </Dialog>
        </div>


    )
}

export default Profile
