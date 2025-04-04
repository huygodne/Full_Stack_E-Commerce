import HomeBanner from '../../Components/HomeBanner';
import { IoIosArrowForward } from "react-icons/io";
import Button from "@mui/material/Button";
import Slider from 'react-slick';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { IoMdHeartEmpty } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigate } from 'swiper/modules';
import ProductItem from '../../Components/ProductItem';
import HomeCat from '../../Components/HomeCat';

import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import newsLetterImg from '../../assets/images/coupon.png';
import { IoMailOutline } from 'react-icons/io5';


const Home = () => {

    // var productSliderOptions = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1

    // };
    return (
        <>
            <HomeBanner />
            <HomeCat />

            <section className="homeProducts">
                <div className="container">
                    <div className="row">

                        <div className="col-md-3">
                            <div className='sticky'>
                                <div className="banner">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/477/898/articles/images.jpg?v=1741247471810"
                                        className="cursor w-100" />
                                </div>

                                <div className="banner mt-4">
                                    <img src="https://bizweb.dktcdn.net/thumb/large/100/477/898/articles/images.jpg?v=1741247471810"
                                        className="cursor w-100" />
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9 productRow">
                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">BEST SELLERS</h3>
                                    <p className="text-light text-sm mb-0">
                                        Do not miss the current offers until the end of March.
                                    </p>
                                </div>

                                <Button className="viewAllBtn">View All < IoIosArrowForward /> </Button>
                            </div>

                            <div className="product_row w-100 mt-4">

                                <Swiper
                                    slidesPerView={4}
                                    spaceBetween={30}
                                    pagination={{ clickable: true }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper>
                            </div>

                            <div className="d-flex align-items-center">
                                <div className="info w-75">
                                    <h3 className="mb-0 hd">NEW PRODUCTS</h3>
                                    <p className="text-light text-sm mb-0">
                                        New products will show up here.
                                    </p>
                                </div>

                                <Button className="viewAllBtn">View All < IoIosArrowForward /> </Button>
                            </div>

                            <div className="product_row productRow2 w-100 mt-4 d-flex">

                                {/* <Swiper
                                    slidesPerView={4}
                                    spaceBetween={0}
                                    navigation={true}
                                    slidesPerGroup={3}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <ProductItem />
                                    </SwiperSlide>

                                </Swiper> */}

                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                                <ProductItem />
                            </div>

                            <div className="d-flex mt-4 mb-5 bannerSec">
                                <div className="banner">
                                    <img src={banner3} className="cursor w-100" />
                                </div>
                                <div className="banner">
                                    <img src={banner4} className="cursor w-100" />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section >

            <section className="newsLetterSection mt-3 mb-3 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text-white">$20 discount for your first order</p>
                            <h3 className="text-white">Join our newsletter and get...</h3>
                            <p className='text-light'>Join our email subscription now to get updates on<br /> promotions and coupons.</p>

                            <form>
                                <IoMailOutline />
                                <input type="text" placeholder="Your Email Address" />
                                <Button>Subscribe</Button>
                            </form>

                        </div>
                        <div className="col-md-6">
                            <img src={newsLetterImg} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Home;