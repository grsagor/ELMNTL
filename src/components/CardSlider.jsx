import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay  } from 'swiper/modules';

const CardSlider = () => {
    const cards = [
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l9 4 9-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 4 9-4" />
                </svg>
            ),
            bgVar: "--bg-card1",
            title: "Web Development",
            description: "Build responsive, modern, and fast websites.",
            button: "Learn More"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Startup Boost",
            description: "Launch your product with confidence.",
            button: "Get Started"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3v18M6 8l5-5 5 5" />
                </svg>
            ),
            title: "Analytics",
            description: "Track and analyze your business performance.",
            button: "View Insights"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
                </svg>
            ),
            title: "Custom Apps",
            description: "Tailored applications for your business.",
            button: "Contact Us"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            ),
            title: "Growth Strategy",
            description: "Plan for long-term success.",
            button: "Discover More"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7l9-4 9 4-9 4-9-4z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l9 4 9-4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l9 4 9-4" />
                </svg>
            ),
            title: "Web Development",
            description: "Build responsive, modern, and fast websites.",
            button: "Learn More"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
            ),
            title: "Startup Boost",
            description: "Launch your product with confidence.",
            button: "Get Started"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3v18M6 8l5-5 5 5" />
                </svg>
            ),
            title: "Analytics",
            description: "Track and analyze your business performance.",
            button: "View Insights"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v16H4z" />
                </svg>
            ),
            title: "Custom Apps",
            description: "Tailored applications for your business.",
            button: "Contact Us"
        },
        {
            icon: (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-10 h-10 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
            ),
            title: "Growth Strategy",
            description: "Plan for long-term success.",
            button: "Discover More"
        }
    ];
    
    return (
        <div >
            <Swiper
                slidesPerView={1}
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3.5 }
                }}
                loop={true}
                speed={2000} // slow slide transition (2s)
                // autoplay={{
                //     delay: 1500, // wait time before sliding again
                //     disableOnInteraction: false
                // }}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div   style={{ backgroundImage: `var(${card.bgVar})` }}
 className=" bg-cover bg-center flex flex-col items-center text-center p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            {card.icon}
                            <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                            <p className="mt-2 text-gray-600 text-sm">{card.description}</p>
                            <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">
                                {card.button}
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;