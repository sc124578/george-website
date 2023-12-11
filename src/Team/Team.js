import React from "react";
import "./Team.css";
import george from "../Images/Geo Yost Small.png";
import david from "../Images/David.jpg";
import soon from "../Images/download.jpg";


export default function Team() {
    return (
        <div className="team">
            <div className="teamH1">
                <h1>Meet the Team</h1>
            </div>
            <div className="george-h2">
                <h1 className="georgeH1">George Yost</h1>
                </div>
            <div className="georgeinfo">
               
                <img src={george} alt="george" className="georgeIMG" />
                <h2 className="georgeH2">Manager/Investor</h2>
            </div>
            <h1 className="davidH1">David Kiarie</h1>
            <div className="davidinfo"> 
                <h2 className="davidH2">Special Projects Director</h2>
                <img src={david} alt="david" className="davidIMG" />
            </div>
            <h1 className="florenceH1">Florence Owino</h1>
            <div className="florenceinfo">
                <img src={soon} alt="soon" className="florenceIMG" />
                <h2 className="florenceH2">Factory Manager</h2>
            </div>
            <h1 className="antonyH1">Antony Ochieng</h1>
            <div className="antonyinfo">
                <h2 className="antonyH2">Comptroller</h2>
                <img src={soon} alt="soon" className="antonyIMG" />
            </div>
            <h1 className="extendedTeamH1">Extended Team</h1>
            <div className="extendedTeam">
                <div className="georgeMinfo">
                    <h1 className="georgeMH1">George Maina</h1>
                    <img src={soon} alt="soon" className="georgeMIMG" />
                    <h2 className="georgeMH2">Pulp and Wash Manager</h2>
                </div>
                <div className="polockinfo">
                    <h1 className="polockH1">Polock Job</h1>
                    <img src={soon} alt="soon" className="polockIMG" />
                    <h2 className="polockH2">Farmer Coordinator</h2>
                </div>
                <div className="regineinfo">
                    <h1 className="regineH1">Ragine Giume</h1>
                    <img src={soon} alt="soon" className="regineIMG" />
                    <h2 className="regineH2">QC Cupper Extraordinaire</h2>
                </div>
            </div>
         </div>
    )
}