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

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 2000); // Change text every 2 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full text-3xl md:text-65 text-gunmetal-blue pt-12 pb-3 md:py-20">
            {/* Rotating text wrapper */}
            <div className="relative h-16 md:h-24 overflow-hidden font-bold">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`absolute w-full transition-all duration-500 ${i === index
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-2"
                            }`}
                    >
                        {msg}
                    </div>
                ))}
            </div>

            {/* Tagline below */}
            <div>
                optimized for <span className="font-bold italic">you</span>
            </div>
        </div>

    );
}
