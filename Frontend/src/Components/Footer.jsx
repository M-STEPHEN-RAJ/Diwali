import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    // Initialize ads after component mounts
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <footer className="w-full py-4 bg-[#1a001f] text-center">
      {/* Google AdSense Ad */}
      <ins className="adsbygoogle"
           style={{ display: "block", width: "100%", maxWidth: "728px", height: "90px", margin: "0 auto" }}
           data-ad-client="ca-pub-9416531594291630"
           data-ad-slot="1234567890"  // Replace with your Ad Unit ID
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </footer>
  );
};

export default Footer;
