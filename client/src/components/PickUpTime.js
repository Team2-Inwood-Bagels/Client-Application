import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import {
    Button,
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    FormControl,
    IconButton, InputLabel,
    MenuItem,
    Select, TextField
} from "@material-ui/core";
import {Add, Delete} from "@material-ui/icons";


function PickUpTime() {
    const [hour, setHour] = useState([])
    const [selectedTime, setSelectedTime] = useState("")


    const getTime = async () => {
        db.collection("Time").onSnapshot((snapshot => {
            setHour(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        }))

    }

    useEffect( () => {
        getTime()
    }, [])
    return(
        <div style={{ display: "inline"}}>

            <FormControl variant={"outlined"}  label={"Select a pick up time"} style={{width: "36%"}}>
                <InputLabel id={"time-label-id"}>Select a pick up time</InputLabel>
                <Select
                    onChange={(e) => setSelectedTime(e.target.value)}
                    value={hour.time}
                    labelId={"time-label-id"}
                    label={"Select a pick up time"}
                >
                    {
                        hour.sort((a,b) => a.time < b.time ? 1 : -1)
                            .map(({data, id})=> (
                                <MenuItem value={data.time}  key={id}>
                                    {data.time}
                                </MenuItem>
                            ))
                    }
                </Select>
            </FormControl>


        </div>
    )
}

export default PickUpTime