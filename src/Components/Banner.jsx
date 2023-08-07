import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/astriya.json";

function Banner() {
  const randomSkill = "Web Developer";

  return (
    <div className="Banner">
      <div className="section-right">
        <Lottie animationData={animationData} className="Astronaut" />
      </div>
      <div className="section-left">
        <div className="banner-container">
          <p>Welcome To My Portfolio</p>
          <h1>I'm Mariya Baig A {randomSkill}</h1>
          <h5>
            There is no strife, no prejudice, no national conflict in outer
            space as yet. Its hazards are hostile to us all. Its conquest
            deserves the best of all mankind, and its opportunity for peaceful
            cooperation many never come again. But why, some say, the moon? Why
            choose this as our goal? And they may well ask why climb the highest
            mountain? Why, 35 years ago, fly the Atlantic? Why does Rice play
            Texas?
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Banner;
