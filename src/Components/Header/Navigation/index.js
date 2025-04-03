import { Button, Link } from '@mui/material';
import { useState } from 'react';
import { CiHome } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';
import { FaAngleRight } from "react-icons/fa";
const Navigation = () => {

    const [isopenSidebarVal, setisopenSidebarVal] = useState(false);

    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <div className='catWrapper'>
                            <Button className='allCatTab align-items-center' onClick={() => setisopenSidebarVal(!isopenSidebarVal)}>
                                <span><IoIosMenu className='icon1 mr-2' /></span>
                                <span className='text'>ALL CATEGORIES</span>
                                <span><FaAngleDown className='icon2 ml-2' /></span>
                            </Button>

                            <div className={`sidebarNav ${isopenSidebarVal === true ? 'open' : ''}`}>
                                <ul>
                                    <li><Link to="/"><Button>Men<FaAngleRight className='ml-auto'/></Button></Link>
                                        <div className='submenu'>
                                            <Link to="/"><Button>footware</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>footware</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                            <Link to="/"><Button>footware</Button></Link>
                                            <Link to="/"><Button>watches</Button></Link>
                                        </div>
                                    </li>
                                    <li><Link to="/"><Button>Women</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                    <li><Link to="/"><Button>Blog</Button></Link></li>
                                    <li><Link to="/"><Button>Contact</Button></Link></li>
                                    <li><Link to="/"><Button>Men</Button></Link></li>
                                    <li><Link to="/"><Button>Women</Button></Link></li>
                                    <li><Link to="/"><Button>Beauty</Button></Link></li>
                                    <li><Link to="/"><Button>Watches</Button></Link></li>
                                    <li><Link to="/"><Button>Kids</Button></Link></li>
                                    <li><Link to="/"><Button>Gift</Button></Link></li>
                                    <li><Link to="/"><Button>Blog</Button></Link></li>
                                    <li><Link to="/"><Button>Contact</Button></Link></li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Home</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Men</Button></Link>
                                <div className='submenu shadow'><Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Women</Button></Link>
                                <div className='submenu shadow'><Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Beauty</Button></Link>
                                <div className='submenu shadow'><Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Watches</Button></Link>
                                <div className='submenu shadow'><Link to="/"><Button>clothing</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                    <Link to="/"><Button>footware</Button></Link>
                                    <Link to="/"><Button>watches</Button></Link>
                                </div>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Kids</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Gift</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Blog</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Contact</Button></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;
