import { Dialog, Rating } from '@mui/material';
import Button from '@mui/material/Button';
import { MdClose, MdOutlineCompareArrows } from 'react-icons/md';
import React from 'react';
import Slider from 'react-slick';
import InnerImageZoom from 'react-inner-image-zoom';
import '../../../node_modules/react-inner-image-zoom/lib/styles.min.css';
import { useRef } from 'react';
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from 'react-icons/io';
import { useContext } from 'react';
import { MyContext } from '../../App';


const ProductModal = (props) => {

    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows: true
    };


    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };

    const goto = (index) => {
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    };

    return (
        <Dialog className="productModal" open={true} onClose={() => context.setisOpenProductModal(false)}>
            <Button className="close_" onClick={() => context.setisOpenProductModal(false)}><MdClose /></Button>
            <h4 className="mb-1 font-weight-bold">All Natural Italian-Style Chicken Meatballs</h4>
            <div className='d-flex align-items-center'>
                <div className='d-flex align-items-center mr-4'>
                    <span>Brands:</span>
                    <span className='ml-2'><b>Welch's</b></span>
                </div>
                <Rating name="read-only" value={5} size="small" precision={0.5} readOnly />
            </div>

            <hr />

            <div className='row mt-2 productDetailedModal'>
                <div className='col-md-5'>
                    <div className='productZoom position-relative'>

                        <div className='badge badge-primary'>23%</div>

                        <Slider {...settings2} className='zoomSliderBig' ref={zoomSliderBig}>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={'https://product.hstatic.net/200000462939/product/10001_0700929902be4c0abb5b5c010df0bf9e_grande.jpg'} />
                            </div>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={'https://product.hstatic.net/200000462939/product/10003_f6ff3a0626914c1b84b42b2b6e632d3f_grande.jpg'} />
                            </div>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={'https://product.hstatic.net/200000462939/product/10003_f6ff3a0626914c1b84b42b2b6e632d3f_grande.jpg'} />
                            </div>
                            <div className='item'>
                                <InnerImageZoom
                                    zoomType="hover" zoomScale={1}
                                    src={'https://product.hstatic.net/200000462939/product/10005_0cb3ed29a0ba4687b88eb4c3bc128c79_grande.jpg'} />
                            </div>
                        </Slider>
                    </div>

                    <Slider {...settings} className='zoomSlider' ref={zoomSlider}>
                        <div className='item'>
                            <img
                                src={'https://product.hstatic.net/200000462939/product/10001_0700929902be4c0abb5b5c010df0bf9e_grande.jpg'}
                                className='w-100'
                                onClick={() => goto(0)}
                            />
                        </div>
                        <div className='item'>
                            <img
                                src={'https://product.hstatic.net/200000462939/product/10003_f6ff3a0626914c1b84b42b2b6e632d3f_grande.jpg'}
                                className='w-100'
                                onClick={() => goto(1)}
                            />
                        </div>
                        <div className='item'>
                            <img
                                src={'https://product.hstatic.net/200000462939/product/10003_f6ff3a0626914c1b84b42b2b6e632d3f_grande.jpg'}
                                className='w-100'
                                onClick={() => goto(2)}
                            />
                        </div>
                        <div className='item'>
                            <img
                                src={'https://product.hstatic.net/200000462939/product/10005_0cb3ed29a0ba4687b88eb4c3bc128c79_grande.jpg'}
                                className='w-100'
                                onClick={() => goto(3)}
                            />
                        </div>
                    </Slider>

                </div>

                <div className='col-md-7'>
                    <div className='d-flex info align-items-center mb-3'>
                        <span className='oldPrice lg mr-2'>$9.35</span>
                        <span className='netPrice text-danger lg'>$7.35</span>
                    </div>

                    <span class="badge bg-success">IN STOCK</span>


                    <p className='mt-3'>Vivamus adipiscing nisl ut dolor dignissim semper. Nulla luctus malesuada tincidunt. Class aptent taciti sociosqu ad litora torquent</p>

                    <div className='d-flex align-items-center'>
                        <QuantityBox />
                        <Button className='btn-blue btn-lg btn-big btn-round ml-5'>Add to Cart</Button>
                    </div>

                    <div className='d-flex align-items-center mt-4 actions'>
                        <Button className='btn-round btn-sml' variant='outlined'>
                            <IoIosHeartEmpty />
                            ADD TO WISHLIST
                        </Button>

                        <Button className='btn-round btn-sml ml-3' variant='outlined'>
                            <MdOutlineCompareArrows />
                            COMPARE
                        </Button>
                    </div>

                </div>

            </div>


        </Dialog>
    );
};



export default ProductModal;
