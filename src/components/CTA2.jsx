import React from 'react';
import CTA2Icons from '../assets/icons/CTA2Icons';
import { Link } from 'react-router-dom';

const CTA2 = () => {
    return (
        <div className='py-[80px] md:px-[100px] flex flex-col justify-center items-center'>
            <h2 className='text-[30px] md:text-[40px] lg:text-[60px] 2xl:text-[75px] text-charcoal'>Your Path to Wellness</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-8 lg:gap-20 mt-12 2xl:mt-20'>
                <div className='relative rounded-[20px] '>
                    <img src='/assets/images/image-59.webp' className='w-full rounded-[20px] transition-transform duration-300 ease-out hover:scale-110'></img>
                    <div className='absolute right-0 bottom-0 p-4'>
                        <Link className='block transform rotate-0 hover:rotate-45 transition duration-300'><CTA2Icons.ArrowIcon /></Link>
                    </div>
                </div>
                <div className='relative rounded-[20px] '>
                    <img src='/assets/images/image-59.webp' className='w-full rounded-[20px] transition-transform duration-300 ease-out hover:scale-110'></img>
                    <div className='absolute right-0 bottom-0 p-4'>
                        <Link className='block transform rotate-0 hover:rotate-45 transition duration-300'><CTA2Icons.ArrowIcon /></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA2;