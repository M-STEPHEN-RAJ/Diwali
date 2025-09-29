import React, { useEffect } from "react";

const HeaderAd = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="w-full py-2 bg-[#1a001f] flex justify-center">
      <ins className="adsbygoogle"
           style={{ display: "block", width: "100%", maxWidth: "728px", height: "90px" }}
           data-ad-client="ca-pub-9416531594291630"  // your AdSense client ID
           data-ad-slot="1234567890"                 // replace with your Header Ad Unit ID
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default HeaderAd;
