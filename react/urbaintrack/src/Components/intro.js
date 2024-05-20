import React from 'react'
import"./intro.css"
 import img1 from '../images/carte.png'
const Intro = () => {
    return (
        <div className="intro">
            <div className="i-left">
            <div className="i-name">
                <span> BM </span> 
                <span> urbain track</span>
                <span> Plateforme de Synthèse et de Suivi 
                    des Documents d’urbanisme </span>
            </div>

            </div>
          
                <img src={img1} alt=""/>
            
        </div>
    )
} 
export default Intro