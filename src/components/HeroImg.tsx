import React from "react";
import slide1 from "../task/images/slide_1.jpg";

const HeroImg = () => {
  return (
    <div className="w-[900px] h-[500px] relative">
      <img src={slide1} alt="hero-img" className="w-full h-full object-cover" />
      <h2 className="absolute bottom-5 right-5 text-white text-4xl">
        Jetzt Burger <br></br> mit Bio Fleisch probieren
      </h2>
    </div>
  );
};

export default HeroImg;
