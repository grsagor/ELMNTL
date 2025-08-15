import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import CardSliderIcons from '../assets/icons/CardSliderIcons';

const CardSlider = () => {
    const cards = [
        {
            icon: (<CardSliderIcons.HBIcon />
            ),
            bgVar: "--bg-card-HB",
            title: "Hormone Balance",
            description: "Unlock Your Best Life.",
            button: "All Hormone Balance Products"
        },
        {
            icon: (<CardSliderIcons.SEIcon />
            ),
            bgVar: "--bg-card-SE",
            title: "Strength + Endurance",
            description: "Unlock Your Peak Potential.",
            button: "All Strength + Endurance Products"
        },
        {
            icon: (<CardSliderIcons.FRIcon />
            ),
            bgVar: "--bg-card-FR",
            title: "Focus + Reset",
            description: "Sharpen Your Mind, Elevate Your Calm.",
            button: "All Focus + Reset Products"
        },
        {
            icon: (<CardSliderIcons.GHIcon />
            ),
            bgVar: "--bg-card-GH",
            title: "Gut Health",
            description: "Real Health Starts in your Gut.",
            button: "All Gut Health Products"
        },
        {
            icon: (<CardSliderIcons.WLIcon />
            ),
            bgVar: "--bg-card-WL",
            title: "Weight Loss",
            description: "Achieve Lasting Results, Feel Incredible.",
            button: "All Weight Loss Products"
        },
        {
            icon: (<CardSliderIcons.HSIcon />
            ),
            bgVar: "--bg-card-HS",
            title: "Hair + Skincare",
            description: "Radiate Beauty from Within.",
            button: "All Hair + Skincare Products"
        },
    ];

    return (
        <div className='pb-20' id='services'>
            <Swiper
                spaceBetween={20}
                breakpoints={{
                    640: { slidesPerView: 2 }, 
                    768: { slidesPerView: 3 },     
                    1280: { slidesPerView: 3.5 },   
                    1536: { slidesPerView: 5 }, 
                  }}
                loop={true}
                speed={2000} 
                autoplay={{
                    delay: 1500, 
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                className="mySwiper"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <div style={{ backgroundImage: `var(${card.bgVar})` }}
                            className="group h-full bg-cover bg-center flex flex-col rounded-20 px-6 py-5 hover:cursor-pointer hover:opacity-98 transition-opacity duration-300">
                            <div className='flex-1'>
                            <h3 className="font-light text-28 text-white">{card.title}</h3>
                            <div className='w-120 h-120 mx-auto text-soft-grey my-24 transition-all duration-300 group-hover:scale-130 flex justify-center'>{card.icon}</div>
                            <p className=" text-white text-17 font-medium">{card.description}</p>
                            </div>
                            <div className='mt-4'>
                                <button className=" bg-yellow-green px-custom-20 py-10  text-charcoal font-medium text-sm rounded-50 hover:bg-charcoal hover:text-white transition-all duration-300 cursor-pointer">
                                    {card.button}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CardSlider;