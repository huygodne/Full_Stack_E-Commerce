import { Dialog, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { FaAngleDown } from 'react-icons/fa6';
// import { Button } from '@mui/material';
import { IoIosSearch } from 'react-icons/io';
import { MdClose } from 'react-icons/md';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);

    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Vị trí của bạn</span>
                    <span className='name'>Việt Nam</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog className='locationModal' TransitionComponent={Transition} onClose={() => setIsOpenModal(false)} open={isOpenModal}>
                <h4 className='mb-0'>Chọn vị trí giao hàng</h4>
                <p>Nhập địa chỉ của bạn và chúng tôi sẽ chỉ định ưu đãi cho khu vực của bạn</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><MdClose /></Button>

                <div className='headerSearch w-100' >
                    <input type='text' placeholder='Tìm kiếm địa chỉ...' />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                    <li>
                        <Button onClick={() => setIsOpenModal(false)}>India</Button>
                    </li>
                </ul>
            </Dialog>
        </>
    )
}

export default CountryDropdown;