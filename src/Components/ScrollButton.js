import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

function ScrollButton(){
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
        setVisible(true)
        } 
        else if (scrolled <= 300){
        setVisible(false)
        }
    };
  
    const scrollToTop = () =>{
        window.scrollTo({
        top: 0, 
        behavior: 'smooth'
        });
    };
  
  window.addEventListener('scroll', toggleVisible);
    return(
        <button className="scroll-top" style={{display: visible ? 'inline' : 'none'}} onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></button>
    )
}

export default ScrollButton;