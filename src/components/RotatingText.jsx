import React, { useState, useEffect } from "react";

export default function RotatingText() {
  const messages = [
    "Hormone Balance",
    "Strength + Endurance",
    "Focus + Reset",
    "Gut Health",
    "Weight Loss",
    "Hair + Skin Care",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // start fade out & slide up
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setAnimate(true); // start fade in & slide from bottom
      }, 700); // match duration
    }, 3500); // change every 3.5s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-8 overflow-hidden relative w-full flex items-center justify-center">
      <div
        className={`absolute w-full text-center transition-all duration-700 ease-in-out
          ${animate ? "translate-y-0 opacity-100" : "-translate-y-8 opacity-0"}`}
      >
        {messages[index]}
      </div>
    </div>
  );
}
