import React from "react";
import './Pricing.css';
import Data from '../../Data';

function Pricing (){
    const itemprice = Data.pricing.map((itembox) => {
        return(
            <div className="col-md-4">
                <div className={itembox.class}>
                    <div className="box-short">
                        <h6>{itembox.title}</h6>
                        <h4>{itembox.price}</h4>
                        <span>{itembox.time}</span>
                    </div>
                    <hr />
                    <ul>
                        <li>
                            <span>Bandwidth : </span>
                            {itembox.Bandwidth}
                        </li>
                        <li>
                            <span>Onlinespace : </span>
                            {itembox.Onlinespace}
                        </li>
                        <li>
                            <span>Support : </span>
                            {itembox.Support}
                        </li>
                        <li>
                            <span>Domain : </span>
                            {itembox.Domain}
                        </li>
                        <li>
                            <span>Hiddenfees : </span>
                            {itembox.Hiddenfees}
                        </li>
                    </ul>
                    <button>JOIN NOW</button>
                </div>
            </div>
        )
    })
    return(
        <section className="pricing">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>Our Pricing</h2>
                        <p>Contrary to popular belief, Lorem Ipsum is Latin literature classical Latin literature from 45 <br/> BC Latin literature classical Latin literature from 45 BC.</p>
                    </div>
                    <div className="row">
                        {itemprice}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing;