import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Products = () => {
    const products = [
        {
            name: "NAD+",
            image: "/assets/images/product_1.jpg",
            button1: "Buy Now",
            button2: "Add to Cart",
        },
        {
            name: "MOTS-c",
            image: "/assets/images/product_1.jpg",
            button1: "Subscribe",
            button2: "Learn More",
        },
        {
            name: "Low Dose Naltrexone",
            image: "/assets/images/product_1.jpg",
            button1: "Order Today",
            button2: "Wishlist",
        },
        {
            name: "GLP-1R",
            image: "/assets/images/product_1.jpg",
            button1: "Order Today",
            button2: "Wishlist",
        },
        {
            name: "GLP-1R",
            image: "/assets/images/product_1.jpg",
            button1: "Order Today",
            button2: "Wishlist",
        },
    ];

    return (
        <div className='py-[80px]' id='products'>
            <h2 className='text-[50px] text-charcoal mb-[45px]'>Popular Products</h2>
            <Swiper
                slidesPerView={4.5}
                spaceBetween={30}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col justify-center p-5 bg-white rounded-[10px] gap-5">
                            <h3 className="text-[28px] font-light">{product.name}</h3>
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-[270px] object-cover"
                            />
                            <div className="flex justify-between items-center">
                                <Link className="px-[14px] py-2 bg-yellow-green text-charcoal text-[13px] font-medium rounded-[50px] hover:bg-charcoal hover:text-white transition duration-200">
                                    {product.button1}
                                </Link>
                                <Link className="px-5 py-[10px] text-[13px] font-medium rounded-[50px] bg-white border border-charcoal capitalize  hover:bg-charcoal hover:text-white transition duration-200">
                                    {product.button2}
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Products;