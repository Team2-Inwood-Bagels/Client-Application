import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import brioche from '../images/Pictures/Ultimate Bacon Egg and Cheese on a Brioche.JPG'
import {Button, Card } from "@material-ui/core";

function CreamCheese() {
    const [cream, setCream] = useState([])
    const [getName, setGetName] = useState("")
    const [price, setPrice] = useState("")
    const [selectedItem, setSelectedItem] = useState();

    const getCream = async () => {
        db.collection("Cream Cheese").onSnapshot((snapshot => {
            setCream(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        }))
    }

    useEffect(() => {
        getCream()
    }, [])

    return(
        <div>
            <div className={"cards"}>
                {
                    cream.map(({data, id}) => (

                        <Card style={{backgroundColor: "#FFF", color:"#000", borderRadius: "20px", boxShadow: "2px 2px 2px 2px lightgrey"}} className={"menuCard"} key={id}>
                            <div className={"cardInfo"}>
                                <h5 className={"card_header"}>{data.name}</h5>
                                {/*<p className={"card_descrip"}>{data.Description}</p>*/}
                                {/*<p className={"card_cost"}>Cost: {data.Price}</p>*/}

                            </div>
                            <div className={"cardImage"}>
                                <img src={brioche} width={"100px"}/>
                            </div>

                        </Card>


                    ))
                }
            </div>

        </div>
    )
}

export default CreamCheese