import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/logo.png';
import { Link } from "react-router-dom";
import './navbar.css'
const NavbarItem = () => {
  return (
    <>
    <div className='d-flex justify-content-around align-items-center pt-4'>
      <div className=''>
         <img src={logo} alt="" height="36" width="140"/>
      </div>
      <div>
      <Navbar bg="none" data-bs-theme="light" >
        <Container>         
          <Nav className="me-auto">
           <Nav.Link href="#homes" className='text-light '><span className='navlinks'>HOME</span></Nav.Link>
            <Nav.Link href="#home" className='text-light '><span className='navlinks'>OVERVIEW</span></Nav.Link>
            <Nav.Link href="#features" className='text-light '><span className='navlinks'>AMENITIES</span></Nav.Link>
            <Nav.Link href="#pricing" className='text-light '><span className='navlinks'>GALLERY</span></Nav.Link>
            <Nav.Link href="#pricing" className='text-light '><span className='navlinks'>CONTACT</span></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
      <div className=''>
       <Link to="/contactus" className='enquire d-flex justify-content-center align-items-center text-light'>ENQUIRE NOW
        </Link>
      </div>
      </div>
    </>
  )
}

export default NavbarItem
