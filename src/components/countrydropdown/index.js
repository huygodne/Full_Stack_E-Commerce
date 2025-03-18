import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa6';

const CountryDropdown = () => {
    return (
        <>
            <Button className='countryDrop'>
                <div className='info d-flex flex-column'>
                    <span className='label'>Vị trí của bạn</span>
                    <span className='name'>Việt Nam</span>
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>
        </>
    )
}

export default CountryDropdown;