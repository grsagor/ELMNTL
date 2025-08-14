import React from 'react';
import { Link } from 'react-router-dom';

const DrawerContent = () => {
    return (
        <div className='flex flex-col gap-30 px-30'>
            <label className="input w-full h-46 rounded-25 bg-transparent focus:outline-none focus:border-[#0000001A]">
                <input type="search" className="grow" placeholder="Search your product" />
                <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <g
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                        fill="none"
                        stroke="currentColor"
                    >
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.3-4.3"></path>
                    </g>
                </svg>
            </label>
            <div>
                <h2 className='text-charcoal text-2xl font-semibold'>Menu</h2>
                <div class="h-px bg-charcoal my-2"></div>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Home</Link></li>
                <li className='text-15 font-medium'>
                    <details>
                        <summary className='!bg-transparent !text-charcoal after:content-none py-10 px-0 hover:shadow-none focus:outline-none'>Our Products
                            <svg className="w-15 h-15 e-font-icon-svg e-fas-caret-down" fill='#36454F' viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                        </summary>
                        <ul className="rounded-none w-full m-0 p-0  text-15 font-medium bg-transparent before:content-none ">
                            <li><Link className='flex jusify-center py-10 !bg-transparent !text-charcoal'>All Products</Link></li>
                            <li className="">
                                <details>
                                    <summary className='py-10 !bg-transparent hover:shadow-none !text-charcoal after:content-none focus:outline-none'>Blood panels
                                        <svg className="w-15 h-15 e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                                    </summary>
                                    <ul className="rounded-none w-full text-15 font-medium before:content-none bg-transparent">
                                        <li><Link className='flex jusify-center !text-charcoal !bg-transparent hover:shadow-none'>Hormone Balance</Link></li>
                                        <li><Link className='flex jusify-center hover:bg-transparent hover:shadow-none !text-charcoal !bg-transparent'>Strength + Endurance</Link></li>
                                        <li><Link className='flex jusify-center hover:bg-transparent hover:shadow-none !text-charcoal !bg-transparent'>Focus + Reset</Link></li>
                                        <li><Link className='flex jusify-center hover:bg-transparent hover:shadow-none !text-charcoal !bg-transparent'>Gut health</Link></li>
                                        <li><Link className='flex jusify-center hover:bg-transparent hover:shadow-none !text-charcoal !bg-transparent'>Weight loss</Link></li>
                                        <li><Link className='flex jusify-center hover:bg-transparent hover:shadow-none !text-charcoal !bg-transparent'>Hair + skincare</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link className='flex jusify-center py-10 !text-charcoal !bg-transparent'>Advanced Testing</Link></li>
                            <li><Link className='flex jusify-center py-10 !text-charcoal !bg-transparent'>BHRT</Link></li>
                            <li><Link className='flex jusify-center py-10 !text-charcoal !bg-transparent'>Pepties</Link></li>
                        </ul>
                    </details>
                </li>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>About Us</Link></li>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Contact Us</Link></li>

            </div>
            <div>
                <h2 className='text-charcoal text-2xl font-semibold'>Lifestyles</h2>
                <div class="h-px bg-charcoal my-2"></div>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Hormone Balance</Link></li>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Strength + Endurance</Link></li>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Focus + Reset</Link></li>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Gut health</Link></li>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Weight loss</Link></li>
                <li><Link className='py-10 px-0 hover:bg-transparent text-charcoal text-15 font-medium'>Hair + skincare</Link></li>
            </div>
            <div className='w-full'>
                    <Link className="btn w-full px-6 py-3 rounded-50 bg-transparent border-grayish-blue text-charcoal font-base text-base hover:bg-charcoal hover:text-white transition-all duration-300">Consultation</Link>
                </div>

        </div>
    );
};

export default DrawerContent;