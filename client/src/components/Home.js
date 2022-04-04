import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import '../styles/styles.css'
import {Carousel} from 'react-responsive-carousel'
import bagels from '../images/Pictures/Cinnamon Raisin Bagel with Birthday Cake Cream Cheese 3.JPG'
import inside from '../images/Pictures/Inside store 1.JPG'
import storeFront from '../images/Pictures/Store Front 2.JPG'
import baconEgg from '../images/Pictures/Bacon Egg and Cheese.JPG'
import brioce from '../images/Pictures/Ultimate Bacon Egg and Cheese on a Brioche.JPG'

function Home() {
    return (
        <section className="hero">
            <div className="hero-body">
                <div className="is-flex is-justify-content-center">
                    <Carousel className="column is-half"
                              renderThumbs={() => false}
                              showStatus={false}
                              showArrows={true}
                              autoPlay={true}
                              showIndicators={false}
                              width={"50vw"}
                              height={"70vw"}>
                        <div>
                            <img src={storeFront} className="photo"/>
                            <div className="content">
                                <h3 style={{backgroundColor: "lightgrey"}}>WELCOME TO INWOOD BAGELS </h3>
                            </div>
                        </div>
                        <div>
                            <img src={bagels} className="photo"/>
                            <div className="content">
                                <h3 style={{backgroundColor: "lightgrey"}}>Inwood Bagels is a small quaint bagel shop
                                    located in the Manhattan neighborhood of
                                    Inwood.</h3>
                            </div>
                        </div>
                        <div>
                            <img src={inside} className="photo"/>
                            <div className="content">
                                <h3 style={{backgroundColor: "lightgrey"}}>Since May of 2017, Inwood Bagels has been
                                    serving the community with its soft
                                    bagels,
                                    and over a dozen of its homamade flavored cream cheese's. </h3>
                            </div>
                        </div>
                        <div>
                            <img src={baconEgg} className="photo"/>
                            <div className="content">
                                <h3 style={{backgroundColor: "lightgrey"}}>Since May of 2018, Inwood
                                    Bagels began running under new ownership and has continued to thrive ever
                                    since. </h3>
                            </div>
                        </div>
                        <div>
                            <img src={brioce} className="photo"/>
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Home
