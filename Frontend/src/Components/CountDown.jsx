import React, { useState, useEffect } from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

const CountDown = ({ date }) => {
  const [digitStyle, setDigitStyle] = useState({ fontSize: 24, width: 50, height: 70 });
  const [labelFontSize, setLabelFontSize] = useState(14);
  const [dividerFontSize, setDividerFontSize] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) { // mobile
        setDigitStyle({ fontSize: 22, width: 30, height: 45 });
        setLabelFontSize(12);
        setDividerFontSize(18);
      } else if (width < 1024) { // tablet
        setDigitStyle({ fontSize: 25, width: 50, height: 65 });
        setLabelFontSize(14);
        setDividerFontSize(22);
      } else { // desktop
        setDigitStyle({ fontSize: 32, width: 70, height: 100 });
        setLabelFontSize(32);
        setDividerFontSize(24);
      }
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <FlipClockCountdown
      to={date}
      labels={["Days", "Hours", "Minutes", "Seconds"]}
      labelStyle={{ fontSize: labelFontSize, fontWeight: "bold", color: "#fff" }}
      digitBlockStyle={{
        background: "linear-gradient(135deg, #FF6A00, #FFB347)",
        color: "#FFF",
        borderRadius: 6,
        ...digitStyle,
      }}
      dividerStyle={{
        color: "#FFF",
        fontSize: dividerFontSize,
        fontWeight: "bold",
      }}
    />
  );
};

export default CountDown;
