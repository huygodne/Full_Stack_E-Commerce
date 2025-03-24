import { Dialog, Slide } from '@mui/material';
import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';
// import { Button } from '@mui/material';
import { IoIosSearch } from 'react-icons/io';
import { MdClose, MdFilterList } from 'react-icons/md';
import { MyContext } from '../../App';
import React, { useState, useContext, useEffect, use } from 'react';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const CountryDropdown = () => {

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [selectedTab, setselectedTab] = useState(null);

    const [countryList, setCountryList] = useState([]);

    const context = useContext(MyContext);

    const selectCountry = (index, country) => {
        setselectedTab(index);
        setIsOpenModal(false);
        context.setselectedCountry(country)
    }

    useEffect(() => {
        setCountryList(context.countryList);
    }, [])

    const filterList = (e) => {
        const keyword = e.target.value.toLowerCase();
        if (keyword !== '') {
            const list = countryList.filter(item => {
                return item.country.toLowerCase().includes(keyword);
            });
            setCountryList(list);
        } else {
            setCountryList(context.countryList);
        }


    }


    return (
        <>
            <Button className='countryDrop' onClick={() => setIsOpenModal(true)}>
                <div className='info d-flex flex-column'>
                    <span className='label'>Vị trí của bạn</span>
                    <span className='name'>{context.selectedCountry !== "" ? context.selectedCountry?.substr(0, 10) : 'select Location'}</span>
                </div>
                <span className='ml-auto'><FaAngleDown /></span>
            </Button>

            <Dialog className='locationModal' TransitionComponent={Transition} onClose={() => setIsOpenModal(false)} open={isOpenModal}>
                <h4 className='mb-0'>Chọn vị trí giao hàng</h4>
                <p>Nhập địa chỉ của bạn và chúng tôi sẽ chỉ định ưu đãi cho khu vực của bạn</p>
                <Button className='close_' onClick={() => setIsOpenModal(false)}><MdClose /></Button>

                <div className='headerSearch w-100' >
                    <input type='text' placeholder='Tìm kiếm địa chỉ...' onChange={filterList} />
                    <Button><IoIosSearch /></Button>
                </div>

                <ul className='countryList mt-3'>
                    {
                        countryList?.length !== 0 && countryList?.map((item, index) => {
                            return (
                                <li key={index}><Button onClick={() => selectCountry(index, item.country)}
                                    className={`${selectedTab === index ? 'active' : ''}`}

                                >{item.country}</Button></li>
                            )
                        })
                    }


                </ul>
            </Dialog >
        </>
    )
}

export default CountryDropdown;