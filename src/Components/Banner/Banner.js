import React from "react";
import './Banner.css'

function Banner(){
    return(
        <section className="banner">
            <div className="overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>cafe is beautiful place</h2>
                            <p>Contrary to popular belief, Lorem Ipsum is Latin literature classical Latin literature from <br/> 45 BC Latin literature classical Latin literature from 45 BC.</p>
                            <button>View Plan & Pricing</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;