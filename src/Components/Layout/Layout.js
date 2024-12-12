import React from "react";
import Footer from "../Footer/Footer";
// import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Services from "../Services/Services";
import Landing from "../Landing/Landing";
import Banner from "../Banner/Banner";
import Pricing from "../Pricing/Pricing";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";

function Layout(){
    return(
        <>
            <Header />
            <main>
            <Services id="services" />
            <Landing id="landing" />
            <Banner />
            <Pricing />
            <Blog />
            <Contact />
                {/* <Outlet /> */}
            </main>
            <Footer />
        </>
    )
}

export default Layout;