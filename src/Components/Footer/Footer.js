import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react"
import './Footer.css'
import Facebook from './../../assets/social/face.png'
import Twitter from './../../assets/social/twitter.png'
import Insta from './../../assets/social/insta.png'
import LinkedIn from './../../assets/social/linkedin.png'
import ScrollButton from "../ScrollButton";
  
function Footer(){
    return(
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <h2 className="logo">Cafe</h2>
                        <p>Lorem ipsum is Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                        <div className="footer-contact">
                            <div className="footer-icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div className="footer-text">
                                <h6>Contact Us</h6>
                                <h4>+01 123 456 7895</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h2>Quick Links</h2>
                        <ul className="list-none">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Booking</a></li>
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Our team</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Our Services</h2>
                        <ul className="list-none">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Booking</a></li>
                            <li><a href="#">Faqs</a></li>
                            <li><a href="#">Our team</a></li>
                            <li><a href="#">Services</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h2>Subscribe</h2>
                        <form>
                            <input type="email" placeholder="Email Address" />
                            <button type="submit">Subscribe Now</button>
                        </form>
                        <ul className="social-media list-none">
                            <li><a href="#"><img src={Facebook} /></a></li>
                            <li><a href="#"><img src={Twitter} /></a></li>
                            <li><a href="#"><img src={Insta} /></a></li>
                            <li><a href="#"><img src={LinkedIn} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <span>Design by laila</span>
                        </div>
                    </div>
                </div>
            </div>
            <ScrollButton />
        </footer>
    )
}

export default Footer;