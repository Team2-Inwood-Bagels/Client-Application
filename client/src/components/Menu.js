import React, {useEffect, useState} from 'react'
import '../styles/styles.css'
import {db} from "../firebase"
import Collapsible from 'react-collapsible'
import Items from "./Items"

function Menu() {
    const [menu, setMenu] = useState([])
    const [time, setTime] = useState([])
    const [loading, setLoading] = useState(true)
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
    useEffect(() => {
        DbGetMenu()
        getTime()
    }, []);

    return (
        <div className="container">
            <div className="Flex">
                <div className="column is-flex">
                    <button className="pickDel_btn">Pick up</button>
                    <button className="pickDel_btn">Delivery</button>
                    <div className='set_pickup_time'>
                        <div className='pickup_time'>
                            <h1 className="pickuptime_title"> Select Pick Up Time * </h1>
                            {
                                <select>
                                    {
                                        time.map((clock, id) => (
                                            <option value={clock.time}>{clock.time}</option>
                                        ))
                                    }
                                </select>
                            }
                        </div>

                    </div>
                </div>

            </div>


            <div className="Flex">
                <div className="Flex1">

                    {
                        menu.map(((item, ind) =>
                                <div>
                                    <div className="column is-flex">
                                        <div className="field">
                                            <Collapsible key={ind} trigger={item.type}>
                                                <Items />
                                            </Collapsible>
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu

