import { Button, Link } from '@mui/material';
import { CiHome } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-3 navPart1'>
                        <Button className='allCatTab align-items-center'>
                            <span><IoIosMenu className='icon1' /></span>
                            <span class='text'>ALL CATEGORIES</span>
                            <span><FaAngleDown className='icon2' /></span>
                        </Button>
                    </div>

                    <div className='col-sm-9 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'>
                                <Link to="/">Home</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Fashion</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Electronic</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Bakery</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Grocery</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Mobiles</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Blog</Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
