import Rating from '@mui/material/Rating';
import { TfiFullscreen } from 'react-icons/tfi';
import { IoMdHeartEmpty } from "react-icons/io";
import Button from "@mui/material/Button";
import React, { useContext } from 'react';
import { MyContext } from '../../App';

const ProductItem = () => {

    const context = useContext(MyContext);

    const viewProductDetails = (id) => {
        context.setisOpenProductModal(true);
    }

    // const closeProductModal = () => {
    //     context.setisOpenProductModal(false);
    // }

    return (
        <>
            <div className="item productItem">
                <div className="imgWrapper">
                    <img
                        src="https://down-vn.img.susercontent.com/file/vn-11134207-7ras8-m43czlre5g3z96.webp"
                        className="w-100"

                    />
                    <span className='badge badge-primary'>28%</span>
                </div>

                <div className="actions">
                    <Button onClick={() => viewProductDetails(1)}><TfiFullscreen /></Button>
                    <Button><IoMdHeartEmpty style={{ fontSize: '20px' }} /></Button>
                </div>

                <div className="info">
                    <h4>papasuke</h4>
                    <span className="text-success d-block">In Stock</span>

                    <Rating
                        className="mt-2 mb-2"
                        name="read-only"
                        value={5}
                        readOnly
                        size="small"
                        precision={0.5}
                    />

                    <div className="d-flex">
                        <span className="oldPrice">$20.00</span>
                        <span className="netPrice text-danger ml-2">$14.00</span>
                    </div>
                </div>
            </div>



            {/* <ProductModal/> */}
        </>
    )
}

export default ProductItem;