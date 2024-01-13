import React from "react";
import "./Quality.css";
import cupping1 from "../Images/cupping.jpg"
import cupping2 from "../Images/cupping-naturals.png"

export default function Quality() {
    return (
        <div className="quality">
            <h1 className="qualityH1">Quality</h1>
            <p className="qualityP">At Misadhi we work very hard to produce the very best coffee we can. Wet process is 
            the most common method in Kenya. Our coffee is different that Central Kenya. There it is pre-Dominantly SL
             varieties. In Western Kenya Blue Mountian was the dominate varietal for many years. Now it is a mix of Ruiru
              11, K 7, Bation, some Blue Mountain and some SL. We are raising more Yellow Bourbon.  This gives us a sweeter
               fruitier coffee with great acidity.</p>
            <p className="qualityP">This current crop 2023 / 2024 we are cupping our AA and AB at 86 to 87. See 
            the Cupping Reports.</p>
            <img src={cupping1} alt="cupping1" className="cupping1" />
            <p className="qualityP">We are also very involved in Naturals. In 2022 one of our Naturals found its way 
            to Melbourne by way of winning the Kenya Barista Championship.</p>
            <img src={cupping2} alt="cupping2" className="cupping2" />
            <p className="qualityP">We do all our Naturals in microlots. Anything that scores less than 85 we add to our 
            Mbuni. This year we have had several lots scoring a 90. But as of this writing we are out of stock. These go
             very fast. But we will have more in August. Make your reservations early.</p>
             <p className="qualityP">We did save enough for samples. We are happy to send samples. 
             Although from year to year the flavor will not be identical but cup these samples and you can taste the 
             interesting tropical fruity banana flavor.</p>
        </div>
    )
}