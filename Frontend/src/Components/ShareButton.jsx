import React from "react";
import share from "../assets/share-icon.png";

const ShareButton = () => {
  return (
    <div className="w-fit flex items-center gap-3 px-3 py-1 md:px-5 md:py-2 text-white rounded-md md:rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
      <img src={share} className="w-3.5 h-3.5 md:w-5 md:h-5" alt="" />
      <p className="text-sm md:text-lg font-medium">Share Diwali Joy</p>
    </div>
  );
};

export default ShareButton;
