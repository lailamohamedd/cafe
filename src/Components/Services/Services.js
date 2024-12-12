import React from "react";
import Data from "../../Data";
import Servitem from "./Servitem";
import './Services.css';

function Services(){
    const item = Data.serv.map((itembox)=>{
        return (
            <div className="col-md-4">
                <Servitem title={itembox.title} text={itembox.text} icon={itembox.icon}/>
            </div>
        )
    })
    return(
        <section className="services">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Our Services</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in <br/> a piece of classical Latin literature from 45 BC.</p>
                    </div>
                </div>
                <div className="row">
                    {item}
                </div>
            </div>
        </section>
    )
}

export default Services;