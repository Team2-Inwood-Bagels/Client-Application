import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import brioche from '../images/Pictures/Ultimate Bacon Egg and Cheese on a Brioche.JPG'
import {Card} from "@material-ui/core";


function Bagels() {
    const [bagel, setBagel] = useState([])

    const getBagel = async () => {
        db.collection("Bagels").onSnapshot((snapshot => {
            setBagel(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            )
        }))
    }


    useEffect(() => {
        getBagel()
    }, [])

    return(
        <div>
            <div className={"cards"}>
                {
                    bagel.map(({data, id}) => (
                        <Card style={{backgroundColor: "#FFF", color:"#000", borderRadius: "20px", boxShadow: "2px 2px 2px 2px lightgrey"}} className={"menuCard"} key={id}>
                            <div className={"cardInfo"}>
                                <h5 className={"card_header"}>{data.name}</h5>
                                {/*<p className={"card_descrip"}>{data.Description}</p>*/}
                                <p className={"card_cost"}>Cost: ${data.price}</p>
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

export default Bagels