import React from "react";
import './Header.css'
import Navs from './../Navs/Navs'

function Header(){
    return(
        <header>
            <div className="header-overlay">
                <Navs/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Tasty Of DozeCafe</h2>
                            <p>more-or-less normal distribution of letters, as opposed to using more-or-less <br/> normal distribution of letters</p>
                            <form className="header-form">
                                <input type="email" placeholder="write your email" />
                                <button type="submit">Subscripe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;