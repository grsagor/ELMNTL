import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar px-30 py-5 md:py-10 xl:px-15 xl:py-5 justify-between">
            <div className="navbar-start w-auto">
                <Link>
                    <svg xmlns="http://www.w3.org/2000/svg" width="127.84" height="23.83" viewBox="0 0 311 58" fill="none"><path d="M111.684 12.6415V39.9322V47.5134L113.199 45.9977V39.9322V11.123L111.684 12.6415Z" fill="#36454F" /><path d="M111.684 47.5132H129.877H137.459L138.974 45.9976H129.877H113.199" fill="#36454F" /><path d="M283.016 12.6415V39.9322V47.5134L284.531 45.9977V39.9322V11.123L283.016 12.6415Z" fill="#36454F" /><path d="M283.016 47.5132H301.209H308.791L310.306 45.9976H301.209H284.531" fill="#36454F" /><path d="M66.1973 11.123V20.2227V29.3196H67.7157V20.2227V11.123H66.1973Z" fill="#36454F" /><path d="M66.1973 33.8663V39.9318V47.513H67.7157V39.9318V32.3506L66.1973 33.8663Z" fill="#36454F" /><path d="M66.1973 12.6415H84.3938H101.072L102.588 11.123H84.3938H66.1973V12.6415Z" fill="#36454F" /><path d="M66.1973 47.5132H84.3938H101.072L102.588 45.9976H84.3938H66.1973V47.5132Z" fill="#36454F" /><path d="M66.1973 29.3192H84.3938H101.072L102.588 27.8008H84.3938H66.1973V29.3192Z" fill="#36454F" /><path d="M147.939 11.1182L148.006 13.2622L169.504 34.7602L169.44 32.6162L147.939 11.1182Z" fill="#36454F" /><path d="M168.334 27.1646H168.27L166.129 29.3059L167.201 30.3779L169.342 28.2367L184.37 13.2065L184.436 11.0625L168.334 27.1646Z" fill="#36454F" /><path d="M147.939 12.6416V39.9323V47.5135L149.524 45.9978V39.9323V14.1876L147.939 12.6416Z" fill="#36454F" /><path d="M182.814 14.1573V39.9323V47.5135L184.396 45.9978L184.462 39.9323V12.6719L182.814 14.1573Z" fill="#36454F" /><path d="M229.947 45.9977V39.9322V11.123H229.895L228.365 12.5891V41.39V44.4793" fill="#36454F" /><path d="M228.365 43.9062V45.9979L229.947 47.5136V45.3971L228.365 43.9062Z" fill="#36454F" /><path d="M193.6 17.1582V39.9321V47.5133L195.181 45.9977V39.9321V18.7042L193.6 17.1582Z" fill="#36454F" /><path d="M229.946 45.4025L225.512 41.2247L220.304 36.3111L214.877 31.1991L214.326 30.6783L204.615 21.5235L203.692 20.6527L193.559 11.1011V13.2093L202.573 21.7082L203.496 22.579L213.207 31.731L213.759 32.2518L219.185 37.3666L224.393 42.2774L229.946 47.5135V45.4025Z" fill="#36454F" /><path d="M272.399 12.6415H237.527L239.043 11.123H273.918L272.399 12.6415Z" fill="#36454F" /><path d="M254.963 47.5135V12.6416H256.479V45.9978L254.963 47.5135Z" fill="#36454F" /><path d="M44.9178 37.8103L40.9247 31.0696L42.3522 26.2249L42.3825 26.1202L42.4376 25.9301L42.3164 25.7757L24.106 2.66834L23.3427 1.37587L23.0147 0.824707L22.684 1.37587L21.9179 2.65731L3.71035 25.434L3.6387 25.5222L3.50917 25.6848L3.57256 25.8804L5.14336 30.659L0.786442 37.9371L0.621094 38.2127L0.863604 38.4221L10.3932 46.6344L12.5151 53.0885L12.5895 53.3144L12.8238 53.3475L19.2751 54.2872L22.6234 57.1726L22.764 57.2938L23.0175 57.5115L23.2683 57.2911L25.63 55.2132L33.1478 56.3072L33.4757 56.3541L33.5694 56.0372L33.6218 55.8608L36.6835 45.4825L44.7167 38.4083L44.8489 38.2926L45.0859 38.0831L44.9178 37.8103ZM23.0092 3.1947L23.125 3.34075L39.6432 31.2295L35.6363 44.8156L25.2552 53.9565L19.7904 53.1601L11.4211 45.9482L6.4441 30.8051L22.8962 3.33524L23.0092 3.1947ZM28.6751 10.3846L41.1286 26.1836L40.1007 29.6724L28.6751 10.3846ZM5.95081 29.3142L4.83747 25.9245L17.3736 10.244L5.95081 29.3142ZM9.6739 44.4463L2.15332 37.9646L5.6339 32.1527L9.6739 44.4463ZM17.5996 52.8432L13.4879 52.2452L12.1376 48.1363L17.5996 52.8432ZM24.084 54.9872L23.0065 55.9352L21.4632 54.6042L24.084 54.9872ZM35.0052 46.9541L32.6242 55.0313L26.7957 54.1825L35.0052 46.9541ZM40.4672 32.6266L43.5565 37.8434L37.3063 43.3467L40.4672 32.6266Z" fill="#36454F" /></svg>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex w-[65%] justify-center gap-5 font-secondary">
                <ul className="menu menu-horizontal px-35 py-10 w-572 flex-nowrap hidden xl:flex justify-center text-15 bg-light-grey rounded-50 text-dark-teal">
                    <li><Link className='p-0 pr-10 hover:bg-transparent hover:text-charcoal'>Home</Link></li>
                    <li>
                        <details onMouseEnter={(e) => e.currentTarget.setAttribute("open", true)}
                            onMouseLeave={(e) => e.currentTarget.removeAttribute("open")}>
                            <summary className='py-0 px-10 hover:bg-transparent hover:text-charcoal after:content-none'>Lifestyles
                                <svg className="w-15 h-15 e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                            </summary>
                            <ul className="top-2 left-3 rounded-none w-177 text-gunmetal text-13">
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Hormone Balance</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Strength + Endurance</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Focus + Reset</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Gut health</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Weight loss</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Hair + skincare</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li>
                        <details onMouseEnter={(e) => e.currentTarget.setAttribute("open", true)}
                            onMouseLeave={(e) => e.currentTarget.removeAttribute("open")}>
                            <summary className='py-0 px-10 hover:bg-transparent hover:text-charcoal after:content-none'>Our Products
                                <svg className="w-15 h-15 e-font-icon-svg e-fas-caret-down" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg"><path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
                            </summary>
                            <ul className="top-2 left-3 rounded-none w-177 text-gunmetal text-13">
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>All Products</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Blood panels</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Advanced Testing</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>BHRT</Link></li>
                                <li><Link className='flex jusify-center py-13 hover:bg-charcoal-blue hover:text-white'>Pepties</Link></li>
                            </ul>
                        </details>
                    </li>
                    <li><Link className='py-0 px-10 hover:bg-transparent hover:text-charcoal'>About Us</Link></li>
                    <li><Link className='p-0 pl-10 hover:bg-transparent hover:text-charcoal'>Contact Us</Link></li>
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
            <div className="navbar-end w-auto flex justify-center items-center gap-3">
                <div>
                    <Link className="btn px-6 py-3 rounded-50 bg-yellow-green text-charcoal font-base text-15 hover:bg-charcoal hover:text-white">Consultation</Link>
                </div>
                <div className="drawer drawer-end">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        {/* Page content here */}
                        <label htmlFor="my-drawer" className="indicator w-5 h-5 cursor-pointer">
                            <svg class="e-font-icon-svg e-eicon-cart-medium cz-color-5195062" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"><path d="M740 854C740 883 763 906 792 906S844 883 844 854 820 802 792 802 740 825 740 854ZM217 156H958C977 156 992 173 989 191L957 452C950 509 901 552 843 552H297L303 581C311 625 350 656 395 656H875C892 656 906 670 906 687S892 719 875 719H394C320 719 255 666 241 593L141 94H42C25 94 10 80 10 62S25 31 42 31H167C182 31 195 42 198 56L217 156ZM230 219L284 490H843C869 490 891 470 895 444L923 219H230ZM677 854C677 791 728 740 792 740S906 791 906 854 855 969 792 969 677 918 677 854ZM260 854C260 791 312 740 375 740S490 791 490 854 438 969 375 969 260 918 260 854ZM323 854C323 883 346 906 375 906S427 883 427 854 404 802 375 802 323 825 323 854Z" class="cz-color-5195062"></path>
                            </svg>
                            <span className="badge badge-sm indicator-item bg-soft-red rounded-full w-1 text-white">0</span>

                        </label>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                            <h2>No Products in the cart</h2>
                        </ul>
                    </div>
                </div>
                <div>
                    <Link className='w-5 h-5'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="25" viewBox="0 0 22 25" fill="none"><path d="M10.9262 2.71334C10.5317 2.71334 10.141 2.79105 9.77648 2.94203C9.41198 3.09301 9.08079 3.31431 8.80181 3.59329C8.52283 3.87227 8.30153 4.20346 8.15055 4.56797C7.99957 4.93247 7.92186 5.32314 7.92186 5.71768C7.92186 6.11221 7.99957 6.50288 8.15055 6.86739C8.30153 7.23189 8.52283 7.56308 8.80181 7.84206C9.08079 8.12104 9.41198 8.34234 9.77648 8.49332C10.141 8.6443 10.5317 8.72201 10.9262 8.72201C11.723 8.72201 12.4872 8.40549 13.0506 7.84206C13.614 7.27864 13.9305 6.51448 13.9305 5.71768C13.9305 4.92088 13.614 4.15671 13.0506 3.59329C12.4872 3.02987 11.723 2.71334 10.9262 2.71334ZM5.91897 5.71768C5.91897 4.38968 6.44651 3.11607 7.38555 2.17703C8.32459 1.23799 9.5982 0.710449 10.9262 0.710449C12.2542 0.710449 13.5278 1.23799 14.4668 2.17703C15.4059 3.11607 15.9334 4.38968 15.9334 5.71768C15.9334 7.04568 15.4059 8.31928 14.4668 9.25832C13.5278 10.1974 12.2542 10.7249 10.9262 10.7249C9.5982 10.7249 8.32459 10.1974 7.38555 9.25832C6.44651 8.31928 5.91897 7.04568 5.91897 5.71768ZM7.33968 13.4876C7.51594 13.6184 7.74293 13.772 8.01399 13.9242C8.69898 14.3114 9.70309 14.712 10.9249 14.712C12.1466 14.712 13.1521 14.3114 13.8371 13.9242C14.1081 13.772 14.3351 13.6184 14.5114 13.4876C14.7624 13.5543 15.0112 13.6282 15.2578 13.7092L16.5396 14.1298C17.501 14.4463 18.2274 15.2141 18.4864 16.1634L19.0165 19.9876C19.1167 20.714 18.7361 21.2414 18.2074 21.3669C16.8094 21.7007 14.4526 22.0746 10.9262 22.0746C7.39977 22.0746 5.0417 21.7007 3.64368 21.3669C3.11625 21.2414 2.73571 20.714 2.83451 19.9876L3.36461 16.1634C3.49633 15.69 3.74315 15.2566 4.08308 14.9018C4.423 14.5469 4.84545 14.2817 5.31276 14.1298L6.59461 13.7092C6.8403 13.6291 7.08865 13.5552 7.33968 13.4876ZM8.28772 11.6783L7.89916 11.2951L7.36238 11.4179C6.89415 11.5247 6.42948 11.6542 5.96837 11.8065L4.68652 12.2271C3.8902 12.4859 3.17223 12.9419 2.59935 13.5526C2.02648 14.1633 1.61728 14.9089 1.40979 15.7201L1.39644 15.7735L0.851653 19.7125C0.636676 21.2668 1.46854 22.9078 3.18035 23.3151C4.7426 23.6876 7.25556 24.0775 10.9249 24.0775C14.5955 24.0775 17.1084 23.6876 18.6707 23.3164C20.3825 22.9078 21.2157 21.2668 21.0007 19.7139L20.4546 15.7749L20.4413 15.7214C20.2339 14.9098 19.8245 14.1638 19.2514 13.5529C18.6783 12.9419 17.9599 12.4859 17.1632 12.2271L15.8827 11.8065C15.4225 11.6551 14.9578 11.5261 14.4887 11.4192L13.9519 11.2951L13.5647 11.6769L13.5633 11.6783C13.5117 11.7253 13.4583 11.7703 13.4031 11.8131C13.231 11.9499 13.0479 12.0723 12.8556 12.179C12.2686 12.5183 11.6042 12.7008 10.9262 12.7091C10.2482 12.7008 9.58378 12.5183 8.99674 12.179C8.74448 12.0365 8.50603 11.8687 8.28772 11.6783Z" fill="#36454F"></path></svg>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default Navbar;