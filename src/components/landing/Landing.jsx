import React from 'react';
import './landing.css';
import Button from 'react-bootstrap/Button';
import NavbarItem from '../navbar/NavbarItem';
import Appartment from '../appartment/Appartment';
import Services from '../Services/Services';
import Cards from '../Cards/Cards';
import End from '../end/End';
import Contact from '../Contact/Contact'
import Social from '../Social/Social';
const Landing = () => {
    return (
        <>
            <div className='bg'>
                <NavbarItem />
                <div className=' d-flex justify-content-center align-items-center'>
                <div class="three">
                    <div className=' mumbai-button  d-flex justify-content-center align-items-center'
                    ><Button variant="outline-light">
                            <span className='mumbai  d-flex justify-content-center align-items-center'>MUMBAI</span>
                        </Button>
                    </div>
                    <br />
                    <div className='mt-4'>
                        <h6 className='text-center font project text-light'>PROJECT</h6>
                        <h6 className='text-center font aranya text-light'>ARANYA</h6>
                        <h6 className='text-center font primal'>Primal Groups</h6>
                    </div>
                </div>
                </div>
            </div>
            <Appartment />
            <Services />
            <Cards />
            <End />
            <Contact />
            <Social />
        </>
    )
}

export default Landing
