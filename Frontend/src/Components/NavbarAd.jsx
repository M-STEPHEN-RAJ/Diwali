import React, { useEffect } from "react";

const NavbarAd = ({ slot }) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-2 bg-[#1a001f] relative my-2 min-h-[90px]">
      <ins className="adsbygoogle"
           style={{ display: "block", width: "100%", maxWidth: "728px", minHeight: "90px" }}
           data-ad-client="ca-pub-9416531594291630"   // your AdSense client ID
           data-ad-slot={slot}                         // pass a unique slot for navbar
           data-ad-format="auto"
           data-full-width-responsive="true"
           data-adtest="on"></ins>
    </div>
  );
};

export default NavbarAd;
