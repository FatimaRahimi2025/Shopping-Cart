import {Navbar as Navbars, Button} from 'react-bootstrap';
import {BsCart} from 'react-icons/bs'

function Navbar() {
    return(
        <Navbars className='border-bottom border-secondary'>
            <Navbars.Collapse className='justify-content-end'>
                <Button variant='btn btn-outline-secondary' className='text-white'>
                     <BsCart className='mx-2'></BsCart>سبد خرید
                </Button>
               
            </Navbars.Collapse>
        </Navbars>
    )
}

export default Navbar; 