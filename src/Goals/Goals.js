import React from "react";
import "./Goals.css";
import cherryswomen from "../Images/Woman washing cherry.JPG";
import bicycle from "../Images/Bicycle.jpg"
import cherryAtTheMill from "../Images/Cherry at the mill.jpg"
import pulping from "../Images/Pulping (1).jpg"
import drying from "../Images/Dry Bed 2.jpg"
import dryBed from "../Images/Big Stack beans.jpg"
import nursey from "../Images/Nursery 2.JPG"


export default function Goals() {
    return (
        <div className="goals">
            <h1 className="goalsH1">Primary Goals</h1>
            <div className="goalspart1">
                <p className="goalsP1">Increasing farm revenue through increased production, and increased revenue by 
                selling higher quality coffee into markets that demand high quality.</p>
                <img src={cherryswomen} alt="cherryswomen" className="cherryswomen" />
            </div>
            
            <div className="goalspart2">
            <h2 className="goalsh21">Change the Basic Model</h2>
                <ul>
                    <li className="goalsLi">We pay farmers within a day or two from when they bring their cherry to our 
                    weigh station.</li>
                    <li className="goalsLi">In Kenya, it was common for Societies to delay payment till after the coffee 
                    is sold. Timeline of 6 months PLUS. This practice led farmers to leave the coffee sector.</li>
                    <li className="goalsLi">With Farm input support, fair prices, and timely payments we are seeing an 
                    increase in farmers planting coffee trees. (which we provide for free)</li>
                    <li className="goalsLi">The main reason for farmers to leave coffee farming is uncertainty of selling 
                    their cherry, and getting a fair price they can count on.</li>
                </ul>
            </div>
            
            <div className="goalspart3">
            <h2 className="goalsh23">Weigh Stations</h2>
            <div className="goalspart3-2">
                <p className="goalsp3">We manage about 50 Stations. This cuts down on the travel time for each farmer who 
                brings their cherry to us. Farmers come on foot, bicycles, motor bikes. Any way possible. Reduced distance 
                is a big help. We pay them the same day, and we weigh each bag, and track each contribution. This helps to 
                determine the amount of assistance we can offer each farmer.</p>
                <img src={bicycle} alt="manPickCherry" className="manPickCherry" />
                </div>
            </div>
            <div className="goalspart4">
                <h2 className="goalsh24">Wet Milling</h2>
                <div className="goalspart4-2">
                <p className="goalsp4">We start with the Finest Red Cherry. We employ 80 people to hand pick the Green and 
                Over Ripe cherry out before milling. The final quality of the coffee we produce starts with the cherry 
                we mill. Bad rejected cherry is used to make Mbuni. A low quality natural in Kenya.</p>
                <img src={cherryAtTheMill} alt="cherryAtTheMill" className="cherryAtTheMill" />
                </div>
            </div>
            <div className="goalspart5">
                <h2 className="goalsh25">Pulping</h2>
                <div className="goalspart5-2">
                <p className="goalsp5">Misadhi has purchased a State of The Art Pulping Machine. This machine separates 
                lights (P2, and 3) from P1. It also works very fast. It will process 2 tons per hour.</p>
                <img src={pulping} alt="pulping" className="pulping" />
            </div>
            </div>
            <div className="goalspart6">
                <h2 className="goalsh26">Drying</h2>
                <div className="goalspart6-2">
                <p className="goalsp6">At Misadhi we use raised drying beds. It is the best way to dry coffee. 
                We also manage each batch. We slow the drying. We don’t want any batch to take less than three weeks to dry. 
                Sometimes longer depending on weather.
                We actually know when each batch is added to the drying yard. We slow the process by 
                not exposing it to the sun more than 4 hours per day, Slow is always better!</p>
                <img src={drying} alt="dring" className="drying" />
                </div>
            </div>
            <div className="goalspart7">
                <h2 className="goalsh27">Dry Mill and Export</h2>
                <div className="goalspart7-2">
                <p className="goalsp7">We use the finest Dry Mill in Kenya. You will notice the quality of our beans is far 
                superior to many. All beans are graded by size and also density. P1, is the highest density, but even those 
                are also sorted again by density. 
                That is why Kenya coffee is the best in the world. We really know how to process 
                coffee.</p>
                <img src={dryBed} alt="dryBed" className="dryBed" />
            </div>
            </div>
            <div className="goalspart8">
                <h2 className="goalsh28">Nurseries</h2>
                <div className="goalspart8-2">
                <p className="goalsp8">Misadhi has four nurseries. We have one in each county we operate in. This serves as 
                a central point for the Farmer Members for each county.
                We give these trees away free of charge to members. We also provide tools that 
                farmers can borrow, as well as training on things such as compost, and organic fertilizer, proper 
                pruning.
                We expect to increase the tree count by over 200,000 over the next 2 years.</p> 
                <img src={nursey} alt="nursey" className="nursey" />
                </div>
            </div>
            <div className="goalspart9">
                <h2 className="goalsh29">Direct Trade</h2>
                <p className="goalsp9">When you choose to do business with Misadhi Growers, you are doing business directly 
                with our 1192 Member Farmers.

                This coffee still belongs to our members even now. When you agree to a purchase,
                 you will make your payment to Misadhi Growers, and that is the first time this coffee will be sold. 
                 No middlemen, no unnecessary markups.

                For future purchases in upcoming years you an be assured the same quality and taste 
                will be in every KG you buy from us because it is the same farmers crop year after year.</p>
            </div>
        </div>
    )
}