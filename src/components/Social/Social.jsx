import React from 'react'
import logo1 from '../images/logo1.png';
import twitter from '../images/twitter 3.png';
import facebook from '../images/facebook 2.png';
import instagram from '../images/instagram 2.png';
import call from '../images/call.png'
const Social = () => {
  return (
    <div style={{backgroundColor: "#F3F4F9"}}>
      <p className='text-center font pt-4 pb-4'>Call us</p>
      <div className='d-flex justify-content-center align-items-center mt-4 mb-4'><img src={call} alt="" className='call' height="50" width="50"/></div>
      <h1 className='text-center font mt-4 mb-4'><strong>+ 022</strong> 506 47538</h1>
      <br />
      <br />
      <div className='d-flex justify-content-center align-items-center mt-4 mb-4'>
        <img src={twitter} alt="" className='twitter'/>
        <img src={facebook} alt="" className='facebook'/>
        <img src={instagram} alt="" className='instagram' />
      </div>
      <br />
      <br />
      <div className='d-flex justify-content-center alin-items-center mb-4'><img src={logo1} alt="" /></div>
      <p  className='text-center mt-4'> © 2023 Piramal. ALL RIGHTS RESERVED.</p>
    </div>
  )
}

export default Social
