import React, { useState, useEffect } from "react";

export default function AnnouncementBar() {
  const messages = [
    "Personalized, science-backed wellness solutions.",
    "Customized treatments to unleash your full potential.",
    "Cutting-edge protocols to get you in your element.",
    "Bold, data-driven solutions that deliver real results.",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000); // Change every 3s
    return () => clearInterval(timer);
  }, [messages.length]);

  return (
    <div className="bg-gray-900 text-white text-center py-2 overflow-hidden w-full">
      <div
        key={index}
        className="transition-opacity duration-500 ease-in-out"
        style={{ opacity: 1 }}
      >
        {messages[index]}
      </div>
    </div>
  );
}
