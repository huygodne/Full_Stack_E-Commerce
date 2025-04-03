import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.jpg';
import { FaAngleDown, FaRegCircle, FaRegCircleUser } from 'react-icons/fa6';
import CountryDropdown from '../CountryDropdown';
import { Button, ButtonBase } from '@mui/material';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import SearchBox from './SearchBox';
import Navigation from './Navigation';
import { useContext } from 'react';
import { MyContext } from '../../App';

const Header = () => {

    const context = useContext(MyContext);
    return (
        <>
            <div className="headerWrapper">
                <div className="top-strip bg-blue ">
                    <div className="container">
                        <p className="mb-0 mt-0 text-center">Do dịch bệnh <b>COVID 19</b>, đơn hàng có thể được xử lý chậm hơn một chút</p>
                    </div>
                </div>

                <header className="header">
                    <div className="container">
                        <div className="row">
                            <div className="logoWrapper d-flex align-items-center col-sm-2">
                                <Link to={'/'}><img src={Logo} alt=''></img></Link>
                            </div>

                            <div className='col-sm-10 d-flex align-items-center part2'>
                                {
                                    context.countryList.length !== 0 && <CountryDropdown />
                                }

                                <SearchBox />

                                <div className='part3 d-flex align-items-center ml-auto'>
                                    <Button className='circle mr-3'><FiUser /></Button>
                                    <div className='ml-auto cartTab d-flex align-items-center'>
                                        <span className='price'>$3.29</span>
                                        <div className='position-relative ml-2'>
                                            <Button className='circle ml-2'><IoBagOutline /></Button>
                                            <span className='count d-flex align-items-center justify-content-center'>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                <Navigation />
            </div>
        </>
    )
}

export default Header;