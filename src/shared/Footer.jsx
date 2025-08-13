import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-charcoal py-20 flex flex-col justify-center items-center gap-20'>
            <div>
            <Link>
            <img width='360' src='https://liveelmntl.com/wp-content/uploads/2025/03/Group-1000001834.png'></img>
            </Link>
            </div>
            <div className="footer sm:footer-horizontal text-base-content">
            <nav>
                <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Popular for Her</h6>
                <Link className="text-15 text-white my-11">Hormone Balance</Link>
                <Link className="text-15 text-white my-11">Strength + Endurance</Link>
                <Link className="text-15 text-white my-11">Focus + Reset</Link>
                <Link className="text-15 text-white my-11">Gut Health</Link>
                <Link className="text-15 text-white my-11">Weight loss</Link>
                <Link className="text-15 text-white my-11">Hair + Skin care</Link>
                
            </nav>
            <nav>
                <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Popular for Him</h6>
                <Link className="text-15 text-white my-11">Hormone Balance</Link>
                <Link className="text-15 text-white my-11">Strength + Endurance</Link>
                <Link className="text-15 text-white my-11">Focus + Reset</Link>
                <Link className="text-15 text-white my-11">Gut Health</Link>
                <Link className="text-15 text-white my-11">Weight loss</Link>
                <Link className="text-15 text-white my-11">Hair + Skin care</Link>
                
            </nav>
            <nav>
                <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Quick Links</h6>
                <Link className="text-15 text-white my-11">Home</Link>
                <Link className="text-15 text-white my-11">About Us</Link>
                <Link className="text-15 text-white my-11">FAQ</Link>
                <Link className="text-15 text-white my-11">Contact Us</Link>  
            </nav>
            <form>
                <h6 className="text-white text-28 font-normal pb-15 border-b-2 border-b-white">Legal</h6>
                <Link className="text-15 text-white my-11">Terms + Conditions</Link>
                <Link className="text-15 text-white my-11">Privacy Policy</Link>
                <Link className="text-15 text-white my-11">Consumer Health Data Privacy</Link>
                <Link className="text-15 text-white my-11">Refund & Cancellation</Link>
                <fieldset className="w-80">
                    <label className='mb-6 block text-xl text-white font-semibold'>Subscribe Our Newsletter</label>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                        <button className="btn btn-primary join-item">Subscribe</button>
                    </div>
                </fieldset>
            </form>
        </div>
        </div>
        
    );
};

export default Footer;