import React, { useState, useRef, useEffect } from "react";
import { toast } from "react-hot-toast";
import share from "../assets/share-icon.png";
import whatsapp from "../assets/whatsapp-icon.png";
import facebook from "../assets/facebook-icon.png";
import instagram from "../assets/instagram-icon.png";
import copy from "../assets/copy-icon.png";

const ShareButton = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Copy link function
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success("Link copied to clipboard!");
    setOpen(false);
  };

  return (
    <div className="relative w-fit">
      {/* Share Button */}
      <div
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="w-fit flex items-center gap-3 px-3 py-1 md:px-5 md:py-2 text-white rounded-md md:rounded-xl cursor-pointer transition-all duration-200 hover:scale-105 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
      >
        <img src={share} className="w-3.5 h-3.5 md:w-5 md:h-5" alt="" />
        <p className="text-sm md:text-lg font-medium">Share Diwali Joy</p>
      </div>

      {/* Dropdown */}
      {open && (
        <div
          ref={dropdownRef}
          className="absolute bg-white/20 backdrop-blur-md mt-2 right-0 w-48 rounded-md shadow-lg overflow-hidden text-white animate-fadeIn z-50"
        >
          <button
            onClick={() =>
              window.open(
                `https://wa.me/?text=${encodeURIComponent(window.location.href)}`,
                "_blank"
              )
            }
            className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-white/20 cursor-pointer"
          >
            <img src={whatsapp} className="w-5" alt="" />
            WhatsApp
          </button>
          <button
            onClick={() =>
              window.open(
                `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                "_blank"
              )
            }
            className="w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-white/20 cursor-pointer"
          >
            <img src={facebook} className="w-5" alt="" />
            Facebook
          </button>
          <button
            onClick={() =>
              window.open(
                `https://www.instagram.com/`,
                "_blank"
              )
            }
            className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-white/20 cursor-pointer"
          >
            <img src={instagram} className="w-6" alt="" />
            Instagram
          </button>
          <button
            onClick={copyLink}
            className="w-full flex items-center gap-3 px-5 py-2 text-left hover:bg-white/20 cursor-pointer"
          >
            <img src={copy} className="w-4" alt="" />
            Copy Link
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;