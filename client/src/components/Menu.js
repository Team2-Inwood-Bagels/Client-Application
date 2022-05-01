import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {db} from "../firebase"
import BreakfastSandwich from "./BreakfastSandwich";
import Bagels from "./Bagels";
import CreamCheese from "./CreamCheese";
import {FormControl, MenuItem, Select} from "@mui/material";

function Menu() {
    const [menu, setMenu] = useState([])
    const [time, setTime] = useState([])
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(true)
    const [age, setAge] = React.useState("");
    const toggleButton = () => setToggle(!toggle);
    const DbGetMenu = async () => {
        const newItems = []
        const res = db.collection("Menu")
        const data = await res.get()
        data.docs.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            newItems.push(doc.data())
        })
        setMenu(menu.concat(newItems))
    }

    const getTime = async () => {
        const newTime = []
        const timeRes = db.collection("Time")
        const data = await timeRes.get()
        data.docs.forEach((doc) => {
            newTime.push(doc.data())
        })
        setTime(time.concat(newTime))
    }

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    useEffect(() => {
        DbGetMenu()
        getTime()
    }, []);

    return (
        <div className="menu_container">
           <div className={"menus"}>
               <FormControl
                   variant={"outlined"}
               >
                   <Select
                       labelId="demo-simple-select-label"
                       id="demo-simple-select"
                       value={"Breakfast Sandwiches"}
                       onChange={handleChange}

                   >
                       <MenuItem value={"Breakfast Sandwiches"} className={"menuTitleSelectList"} ><a href={"#breakSandwiches"}>Breakfast Sandwiches</a></MenuItem>
                       <MenuItem value={"Bagels"} className={"menuTitleSelectList"}><a href={"#bagels"}>Bagels</a></MenuItem>
                       <MenuItem value={"Cream Cheese"} className={"menuTitleSelectList"}><a href={"#creamcheese"}>Cream Cheese</a></MenuItem>
                   </Select>
               </FormControl>

               <h1 className={"menuTitle"} id={"breakSandwiches"}><a href={"#breakSandwiches"}>Breakfast Sandwiches</a> </h1>
               <BreakfastSandwich/>
               <h1 className={"menuTitle"} id={"bagels"}><a href={"#bagels"}>Bagels</a></h1>
               <Bagels/>
               <h1 className={"menuTitle"} id={"creamcheese"}><a href={"#creamcheese"}>Cream Cheese</a></h1>
               <CreamCheese/>
           </div>

            <div className={"setTime"}>
               <div className={"pickUpSec"} style={{marginBottom: "25px"}}>
                   <button style={{backgroundColor: toggle ? '#A9ACB2' : '#D4D6D9' }} onClick={toggleButton} className="pickUp_btn">Pick up</button>
                   <p style={{display: "inline", marginRight: "5px"}}>At </p>
                   <select>
                       {
                           time.map((clock, id) => (
                               <option value={clock.time}>{clock.time}</option>
                           ))
                       }
                   </select>

               </div>
                <div>
                    <button className="delivery_btn"><a href={"http://menus.fyi/832273"} target={"_blank"}>Order GrubHub <br/> Delivery</a></button>
                </div>                      {

            }

            </div>

        </div>
    )
}

export default Menu

