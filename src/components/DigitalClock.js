import React, { useState, useEffect } from "react";
import "../styles/digital-clock.css";

function DigitalClock() {
  const [time, setTime] = useState(new Date(Date.now()));

  useEffect(() => {
    const timeId = setInterval(() => setTime(new Date(Date.now())), 1000);
    return () => {
      clearInterval(timeId);
    };
  });

  return <div className="digital-clock"> {time.toLocaleTimeString()} </div>;
}

export default DigitalClock;
