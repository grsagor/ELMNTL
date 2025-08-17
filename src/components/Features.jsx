import React from 'react';
import { Link } from 'react-router-dom';

const Features = () => {
    return (
        <div className='pl-[80px] py-[100px] bg-[url(/assets/images/feature_bg.png)] bg-cover bg-center grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-16 md:gap-5'> 
            <div className='flex flex-col items-center md:items-start pl-0 px-[60px] md:px-0'>
                <h2 className='text-lg font-bold text-white'>unlock your true potential</h2>
                <h2 className='pt-[14px] pb-[30px] text-[45px] text-white text-center md:text-start'>more than wellness  -it's a  <span className='text-yellow-green font-semibold italic'>movement.</span></h2>
                <Link className='inline-flex justify-center items-center gap-3 bg-white py-2 px-12 md:py-[14px] md:px-[65px] rounded-50 font-bold text-sm md:text-lg text-charcoal mt-5 hover:bg-charcoal hover:text-white transition-all duration-300'>Get Started
                    <svg aria-hidden="true" className="w-15 h-15 fill-current e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </Link>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='bg-charcoal pl-5 py-4 rounded-tl-[50px] rounded-bl-[50px]'>
                    <h3 className='text-white text-lg font-semibold'>Advanced Aesthetics + Longevity</h3>
                </div>
                <div className='bg-charcoal pl-5 py-4 rounded-tl-[50px] rounded-bl-[50px]'>
                    <h3 className='text-white text-lg font-semibold'>Advanced Aesthetics + Longevity</h3>
                </div>
                <div className='bg-charcoal pl-5 py-4 rounded-tl-[50px] rounded-bl-[50px]'>
                    <h3 className='text-white text-lg font-semibold'>Advanced Aesthetics + Longevity</h3>
                </div>
                <div className='bg-charcoal pl-5 py-4 rounded-tl-[50px] rounded-bl-[50px]'>
                    <h3 className='text-white text-lg font-semibold'>Advanced Aesthetics + Longevity</h3>
                </div>
                <div className='bg-charcoal pl-5 py-4 rounded-tl-[50px] rounded-bl-[50px]'>
                    <h3 className='text-white text-lg font-semibold'>Advanced Aesthetics + Longevity</h3>
                </div>
                <div className='bg-charcoal pl-5 py-4 rounded-tl-[50px] rounded-bl-[50px]'>
                    <h3 className='text-white text-lg font-semibold'>Advanced Aesthetics + Longevity</h3>
                </div>
                <div className='bg-charcoal pl-5 py-4 rounded-tl-[50px] rounded-bl-[50px]'>
                    <h3 className='text-white text-lg font-semibold'>Advanced Aesthetics + Longevity</h3>
                </div>
            </div>
        </div>
    );
};

export default Features;