import React from "react";
import "./Home.css";
import handfulOfCherries from "../Images/Handful of cherry.jpg";
import manPickCherry from "../Images/Man pick cherry.jpg"
import homeImage from "../Images/home-image.jpg"

export default function Home() {
return (
    <div className="home">
        <div className="welcomeh1">
            <h1>Welcome to Misadhi Coffee Growers</h1>
        </div>
        <div className="welcomeTopImage">
            <img src={homeImage} alt="homeImage" className="homeImage" />
        </div>
        <div className="welcomep">
            <p>At Misadhi, we empower farmers to foster collaborative thinking to further drive excellent results. 
                By providing the proper resources to our Member Farmers, we help their farms to grow and increase 
                annual cherry production.​</p>
        </div>
        <div className="welcomeIMG">
            <img src={handfulOfCherries} alt="handfulOfCherries" className="image1" />
            <img src={manPickCherry} alt="manPickCherry" className="image2" />
        </div>
        
    </div>
)
}