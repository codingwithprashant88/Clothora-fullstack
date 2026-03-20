import React from "react";
import { assets } from "../assets/index";

function Hero() {
  return (
    <div className="relative flex flex-col sm:flex-row ">
      {/* Background Image */}
      <img src={assets.bg} alt="" className="w-full h-40 object-cover" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Text Content */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className="text-white text-center">
          <h1 className="prata-regular text-4xl font-bold">Clothora</h1>
          <p className="mt-2">Style that speaks</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
