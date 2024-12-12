import React from "react";
import { faEnvelope, faGlobe, faHeart, faMap, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Contact.css'
import FormContact from "./FormContact";

function Contact(){
    return(
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Contact Us</h2>
                        <p className="text-title">Contrary to popular belief, Lorem Ipsum is Latin literature classical Latin literature from 45 <br/> BC Latin literature classical Latin literature from 45 BC.</p>
                    </div>
                    <div className="col-md-6">
                        <FormContact />
                    </div>
                    <div className="col-md-6">
                        <div className="side">
                            <div className="overlay">
                                <h3>Contact Us For your Information</h3>
                                <ul className="text-start list-none">
                                    <li>
                                        <FontAwesomeIcon icon={faMap} />Location
                                    </li>
                                    <hr />
                                    <li>
                                        <p>2026 Lorem ipsum Email Address</p>
                                        <FontAwesomeIcon icon={faEnvelope} />Email & Phone
                                    </li>
                                    <hr />
                                    <li>
                                        <p>Lailamohammed2023@gmail.com</p>
                                        <p>01010579244</p>
                                        <FontAwesomeIcon icon={faGlobe} />Follow Us
                                    </li>
                                    <hr />
                                </ul>
                                <ul className="social text-start list-none">
                                    <li><FontAwesomeIcon icon={faHeart} /></li>
                                    <li><FontAwesomeIcon icon={faGlobe} /></li>
                                    <li><FontAwesomeIcon icon={faMobile} /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;