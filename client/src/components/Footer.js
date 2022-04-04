import React from 'react'
import image from '../images/icons8-instagram.svg'
import '../styles/styles.css'

const Footer = () => (
    <footer className="footer has-background-black-bis has-text-white">
        <div className="columns has-text-centered level">
            <div className="column">
                <div className="is-flex is-justify-content-center level">
                    <span>Follow us on Instagram</span>
                    <figure className="image is-64x64">
                        <img src={image}/>
                    </figure>
                </div>
            </div>
            <div className="column">
                <div className="row">
                    Phone number: (212) 569-7770
                </div>
                <div>
                    Address: 628 W 207th St, New York, NY 10034
                </div>
            </div>
            <div className="column">
                <div>Hours of Operation:</div>
                <div>Monday: Closed</div>
                <div>Tuesday-Sunday: 8 AM to 3 PM</div>
            </div>
            <div className="column">We are hiring! Come visit us in person to apply!</div>
        </div>
    </footer>
)

export default Footer
