import React from "react";
import './Landing.css';
import cafeCup from './../../assets/cafeCup.png'

function Landing(){
    return(
        <section className="landing">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h3>Contrary to popular belief, Lorem Ipsum  classical Latin literature classical Latin literature from 45 BC.</h3>
                        <p>Contrary to popular belief, Lorem Ipsum is Latin literature classical Latin literature from 45 BC Latin literature classical Latin literature from 45 BC.</p>
                        <ul>
                            <li>Contrary to popular belief.</li>
                            <li>Lorem Ipsum is Latin literature classical Latin literature</li>
                            <li>Ipsum is Latin literature Latin literature</li>
                            <li>Literature Contrary to popular belief</li>
                        </ul>
                        <button>Learn More</button>
                    </div>
                    <div className="col-md-6">
                        <img src={cafeCup} alt="cafe Cup" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Landing;