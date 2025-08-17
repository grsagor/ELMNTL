import React from 'react';

const CTA1 = () => {
    return (
        <div style={{ backgroundImage: `var(--bg-CTA1)` }} className='bg-cover bg-center flex flex-col md:flex-row gap-8 justify-center items-center px-[60px] py-[100px]'>
            <div className='flex-1'>
                <h2 className='text-40 md:text-85 text-charcoal font-medium text-center'>Get in your <br /> <span className='text-yellow-green font-semibold italic'>element.</span></h2>
            </div>
            <div className='w-[5px] self-stretch bg-charcoal hidden md:block'></div>
            <div className='flex flex-col flex-1 justify-center items-center'>
                <h4 className='text-28 text-charcoal font-light text-center'>Discover personalized, science-backed wellness solutions with ELMNTL.</h4>
                <button className='flex justify-center items-center gap-3 bg-yellow-green py-2 px-12 md:py-4 md:px-21 rounded-50 font-bold text-sm md:text-lg text-charcoal mt-8'>Get Started
                    <svg aria-hidden="true" className="w-15 h-15 e-font-icon-svg e-fas-arrow-right" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg>
                </button>
            </div>
        </div>
    );
};

export default CTA1;