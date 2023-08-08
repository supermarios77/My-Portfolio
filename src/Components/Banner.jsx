import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/astriya.json";
import Typed from "typed.js";

function Banner() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack Web Developer", " Python Programmer"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="Banner">
      <div className="section-right">
        <Lottie animationData={animationData} className="Astronaut" />
      </div>
      <div className="section-left">
        <div className="banner-container">
          <p>Welcome To My Portfolio</p>
          <h1>
            I'm Mariya Baig A <span className="Highlight" ref={el} />
          </h1>
          <h5>
            👋 Hey there! I'm Mariya Baig, an 11-year-old Python & full-stack
            developer. I love coding, from Python magic to web wonders. Beyond
            tech, I'm a polymath in the making—exploring art, science, and more.
            This portfolio is my digital journey; let's dive in and explore the
            boundless possibilities together! 🚀
          </h5>
          <h4>
            Hire Me{" "}
            <a href="mailto:SuperMariyaBros@gmail.com">
              <i class="fa-solid fa-arrow-right"></i>
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Banner;
