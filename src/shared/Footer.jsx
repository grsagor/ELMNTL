import React from 'react';
import { Link } from 'react-router-dom';
import FooterIcons from '../assets/icons/FooterIcons';

const Footer = () => {
    return (
        <div>
            <div className='bg-charcoal py-20 px-20 flex flex-col justify-center items-center gap-20'>
                <div>
                    <Link>
                        <img width='360' src='https://liveelmntl.com/wp-content/uploads/2025/03/Group-1000001834.png'></img>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 text-base-content justify-center gap-20">
                    <div>
                        <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Popular for Her</h6>
                        <h2 className="text-15 text-white my-[11px]"><Link>Hormone Balance</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Strength + Endurance</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Focus + Reset</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Gut Health</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Weight loss</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Hair + Skin care</Link></h2>

                    </div>
                    <div>
                        <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Popular for Him</h6>
                        <h2 className="text-15 text-white my-11"><Link>Hormone Balance</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Strength + Endurance</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Focus + Reset</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Gut Health</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Weight loss</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Hair + Skin care</Link></h2>
                    </div>
                    <div>
                        <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Quick Links</h6>
                        <h2 className="text-15 text-white my-11"><Link>Home</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>About Us</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>FAQ</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Contact Us</Link></h2>
                    </div>
                    <div className=''>
                        <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Legal</h6>
                        <h2 className="text-15 text-white my-11"><Link>Terms + Conditions</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Privacy Policy</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Consumer Health Data Privacy</Link></h2>
                        <h2 className="text-15 text-white my-11"><Link>Refund & Cancellation</Link></h2>
                        <fieldset className="w-full mt-8">
                            <label className='mb-6 block text-xl text-white font-semibold'>Subscribe Our Newsletter</label>
                            <div className="join relative w-full">
                                <input
                                    type="text"
                                    placeholder="username@site.com"
                                    className="input input-bordered join-item rounded-full" />
                                <button className="btn btn-primary join-item absolute right-2 top-2 bottom-2 p-0 h-auto rounded-full px-2 bg-charcoal">Subscribe</button>
                            </div>
                        </fieldset>
                        <div className='flex gap-5 mt-8'>
                            <div className=' w-[31px] h-[31px]'>
                                <FooterIcons.LinkedIn />
                            </div>
                            <div className=' w-[31px] h-[31px]'>
                                <FooterIcons.Youtube />
                            </div>
                            <div className=' w-[31px] h-[31px]'>
                                <FooterIcons.Facebook />
                            </div>
                            <div className=' w-[31px] h-[31px]'>
                                <FooterIcons.Insta />
                            </div>
                            <div className=' w-[31px] h-[31px]'>
                                <FooterIcons.Tiktok />
                            </div>
                            <div className=' w-[31px] h-[31px]'>
                                <FooterIcons.Twitter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='h-[60px] flex justify-center items-center bg-dark-blue'>
                <p className='text-xs text-center md:text-[15px] font-semibold text-white font-secondary'>Copyright © 2025 Elmntl - All Rights Reserved.</p>
                <img src='/assets/images/copyright.webp' className='w-[80px]'></img>
            </div>
        </div>

    );
};

export default Footer;