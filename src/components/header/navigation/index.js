import { Button, Link } from '@mui/material';
import { CiHome } from 'react-icons/ci';
import { FaAngleDown } from 'react-icons/fa6';
import { IoIosMenu } from 'react-icons/io';

const Navigation = () => {
    return (
        <nav>
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2 navPart1'>
                        <Button className='allCatTab align-items-center'>
                            <span><IoIosMenu className='icon1 mr-2' /></span>
                            <span class='text'>ALL CATEGORIES</span>
                            <span><FaAngleDown className='icon2 ml-2' /></span>
                        </Button>
                    </div>

                    <div className='col-sm-10 navPart2 d-flex align-items-center'>
                        <ul className='list list-inline ml-auto'>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Home</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Fashion</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Electronic</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Bakery</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Grocery</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Mobiles</Button></Link>
                            </li>
                            <li className='list-inline-item'>
                                <Link to="/"><Button>Mobiles</Button></Link>
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
