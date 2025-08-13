import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar px-30 py-5 md:py-10 xl:px-15 xl:py-5 justify-between">
            <div className="navbar-start w-auto">
                <Link>
                <svg xmlns="http://www.w3.org/2000/svg" width="127.84" height="23.83" viewBox="0 0 311 58" fill="none"><path d="M111.684 12.6415V39.9322V47.5134L113.199 45.9977V39.9322V11.123L111.684 12.6415Z" fill="#36454F"/><path d="M111.684 47.5132H129.877H137.459L138.974 45.9976H129.877H113.199" fill="#36454F"/><path d="M283.016 12.6415V39.9322V47.5134L284.531 45.9977V39.9322V11.123L283.016 12.6415Z" fill="#36454F"/><path d="M283.016 47.5132H301.209H308.791L310.306 45.9976H301.209H284.531" fill="#36454F"/><path d="M66.1973 11.123V20.2227V29.3196H67.7157V20.2227V11.123H66.1973Z" fill="#36454F"/><path d="M66.1973 33.8663V39.9318V47.513H67.7157V39.9318V32.3506L66.1973 33.8663Z" fill="#36454F"/><path d="M66.1973 12.6415H84.3938H101.072L102.588 11.123H84.3938H66.1973V12.6415Z" fill="#36454F"/><path d="M66.1973 47.5132H84.3938H101.072L102.588 45.9976H84.3938H66.1973V47.5132Z" fill="#36454F"/><path d="M66.1973 29.3192H84.3938H101.072L102.588 27.8008H84.3938H66.1973V29.3192Z" fill="#36454F"/><path d="M147.939 11.1182L148.006 13.2622L169.504 34.7602L169.44 32.6162L147.939 11.1182Z" fill="#36454F"/><path d="M168.334 27.1646H168.27L166.129 29.3059L167.201 30.3779L169.342 28.2367L184.37 13.2065L184.436 11.0625L168.334 27.1646Z" fill="#36454F"/><path d="M147.939 12.6416V39.9323V47.5135L149.524 45.9978V39.9323V14.1876L147.939 12.6416Z" fill="#36454F"/><path d="M182.814 14.1573V39.9323V47.5135L184.396 45.9978L184.462 39.9323V12.6719L182.814 14.1573Z" fill="#36454F"/><path d="M229.947 45.9977V39.9322V11.123H229.895L228.365 12.5891V41.39V44.4793" fill="#36454F"/><path d="M228.365 43.9062V45.9979L229.947 47.5136V45.3971L228.365 43.9062Z" fill="#36454F"/><path d="M193.6 17.1582V39.9321V47.5133L195.181 45.9977V39.9321V18.7042L193.6 17.1582Z" fill="#36454F"/><path d="M229.946 45.4025L225.512 41.2247L220.304 36.3111L214.877 31.1991L214.326 30.6783L204.615 21.5235L203.692 20.6527L193.559 11.1011V13.2093L202.573 21.7082L203.496 22.579L213.207 31.731L213.759 32.2518L219.185 37.3666L224.393 42.2774L229.946 47.5135V45.4025Z" fill="#36454F"/><path d="M272.399 12.6415H237.527L239.043 11.123H273.918L272.399 12.6415Z" fill="#36454F"/><path d="M254.963 47.5135V12.6416H256.479V45.9978L254.963 47.5135Z" fill="#36454F"/><path d="M44.9178 37.8103L40.9247 31.0696L42.3522 26.2249L42.3825 26.1202L42.4376 25.9301L42.3164 25.7757L24.106 2.66834L23.3427 1.37587L23.0147 0.824707L22.684 1.37587L21.9179 2.65731L3.71035 25.434L3.6387 25.5222L3.50917 25.6848L3.57256 25.8804L5.14336 30.659L0.786442 37.9371L0.621094 38.2127L0.863604 38.4221L10.3932 46.6344L12.5151 53.0885L12.5895 53.3144L12.8238 53.3475L19.2751 54.2872L22.6234 57.1726L22.764 57.2938L23.0175 57.5115L23.2683 57.2911L25.63 55.2132L33.1478 56.3072L33.4757 56.3541L33.5694 56.0372L33.6218 55.8608L36.6835 45.4825L44.7167 38.4083L44.8489 38.2926L45.0859 38.0831L44.9178 37.8103ZM23.0092 3.1947L23.125 3.34075L39.6432 31.2295L35.6363 44.8156L25.2552 53.9565L19.7904 53.1601L11.4211 45.9482L6.4441 30.8051L22.8962 3.33524L23.0092 3.1947ZM28.6751 10.3846L41.1286 26.1836L40.1007 29.6724L28.6751 10.3846ZM5.95081 29.3142L4.83747 25.9245L17.3736 10.244L5.95081 29.3142ZM9.6739 44.4463L2.15332 37.9646L5.6339 32.1527L9.6739 44.4463ZM17.5996 52.8432L13.4879 52.2452L12.1376 48.1363L17.5996 52.8432ZM24.084 54.9872L23.0065 55.9352L21.4632 54.6042L24.084 54.9872ZM35.0052 46.9541L32.6242 55.0313L26.7957 54.1825L35.0052 46.9541ZM40.4672 32.6266L43.5565 37.8434L37.3063 43.3467L40.4672 32.6266Z" fill="#36454F"/></svg>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex w-[65%] justify-center gap-5 font-secondary">
                <ul className="menu menu-horizontal px-35 py-10 w-572 flex-nowrap hidden xl:flex justify-center text-base bg-light-grey rounded-50 text-dark-teal">
                    <li><Link className='p-0 pr-custom-10 hover:bg-transparent hover:text-charcoal'>Home</Link></li>
                    <li>
                        <details>
                            <summary className='py-0 px-custom-10 hover:bg-transparent hover:text-charcoal'>Lifestyles</summary>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details>
                            <summary className='py-0 px-custom-10 hover:bg-transparent hover:text-charcoal'>Our Products</summary>
                            <ul className="p-2">
                                <li><Link>Submenu 1</Link></li>
                                <li><Link>Submenu 2</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link className='py-0 px-custom-10 hover:bg-transparent hover:text-charcoal'>About Us</Link></li>
                    <li><Link  className='p-0 pl-custom-10 hover:bg-transparent hover:text-charcoal'>Contact Us</Link></li>
                </ul>
                <label className="input w-246 h-46 rounded-25 bg-transparent focus:outline-none focus:border-[#0000001A]">
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
            </div>
            <div className="navbar-end w-auto">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;