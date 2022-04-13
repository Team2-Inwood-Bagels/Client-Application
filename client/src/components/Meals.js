import React, {useEffect, useState} from "react";
import {db} from "../firebase";
import {Box, Card, Tab} from "@material-ui/core";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';



function Meals() {

    const [item, setItem] = useState([])
    const [value, setValue] = React.useState('1')
    const [cream, setCream] = useState([])
    const [bagels, setBagels] = useState([])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const getBagels = async () => {
        db.collection("Bagels").onSnapshot((snapshot => {
            setBagels(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        }));
        console.log({bagels})
    }
    const getBreakSand = async () => {
        db.collection("Breakfast Sandwiches").onSnapshot((snapshot => {
            setItem(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        }));
        console.log({item})
    }
    const getCream = async () => {
        db.collection("Cream Cheese").onSnapshot((snapshot => {
            setCream(
                snapshot.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data(),
                }))
            );
        }));
        console.log({cream})
    }

    useEffect(() => {
        getBreakSand()
        getCream()
        getBagels()
    }, [])


    return(
        <div>

            <Box sx={{ width: '100%', typography: 'body1' }}>
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Bagels" value="1" />
                            <Tab label="Cream Cheese" value="2" />
                            <Tab label="Breakfast Sandwiches" value="3" />
                        </TabList>
                    </Box>
                    {
                        item.map(({data, id}) => (
                            <TabPanel value={"3"} onScrollCapture={true}>
                                <Card className={"itemCard"} key={id}>
                                    <p>{data.Name}</p>
                                    <p>{data.Description}</p>
                                    <p>Cost: {data.Price}</p>
                                    <button>Add to cart</button>
                                </Card>
                            </TabPanel>

                        ))
                    }
                    {
                        cream.map(({data, id}) => (
                            <TabPanel value={"2"} onScrollCapture={true}>
                                <Card className={"itemCard"} key={id}>
                                    <p>{data.name}</p>
                                    {/*<p>{data.Description}</p>*/}
                                    {/*<p>Cost: {data.Price}</p>*/}
                                    <button>Add to cart</button>
                                </Card>
                            </TabPanel>

                        ))
                    }
                    {
                        bagels.map(({data, id}) => (
                            <TabPanel value={"1"} onScrollCapture={true}>
                                <Card className={"itemCard"} key={id}>
                                    <p>{data.name}</p>
                                    {/*<p>{data.Description}</p>*/}
                                    {/*<p>Cost: {data.Price}</p>*/}
                                    <button>Add to cart</button>
                                </Card>
                            </TabPanel>

                        ))
                    }
                </TabContext>
            </Box>


        </div>
    )
}

export default Meals;

{/*{*/}
{/*    item.map(({data, id}) => (*/}
{/*        <div*/}
{/*            className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}*/}
{/*            aria-expanded={isCollapsed}*/}
{/*        >*/}
{/*            <Card className={"itemCard"} key={id}>*/}
{/*                <p>{data.Name}</p>*/}
{/*                <p>{data.Description}</p>*/}
{/*                <p>Cost: {data.Price}</p>*/}
{/*                <button>Add to cart</button>*/}
{/*            </Card>*/}
{/*        </div>*/}
{/*    ))*/}
{/*}*/}