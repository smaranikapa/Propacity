import React from 'react';
import './appartment.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RectangleOne from '../images/Rectangle 67.png';
import RectangleTwo from '../images/Rectangle 68.png';
import RectangleThree from '../images/Rectangle 71.png';
import RectangleFour from '../images/Rectangle 70.png';
import circle from '../images/Vector.png';
import arrow from '../images/arr1.png'
const Appartment = () => {
  return (
   <>
   <div className='bg-second'>
    <Container>
        <div className='d-flex justify-content-center align-items-center' style={{paddingTop: "60px"}}><img src={circle} alt="" /></div>
        <Row style={{paddingTop: "70px"}}>
            <Col className="col-md-6" >
            <div className="overlap">
            <div className="second"><img src={RectangleTwo} alt="" height="300" width="300"/></div>
            <div className="first"><img src={RectangleOne} alt="" height="300" width="300"/></div>
            </div>
            </Col>
            <Col className="col-md-6">
            <p style={{color: "#00E5A1"}}>MUMBAI</p>
            <h2 className='text-light font'>OUR APARTMENTS</h2>
            <p className='text-light' style={{fontSize: "12px",}}>Presenting Piramal Aranya, a high rise gated sanctuary that offers luxuriant 2, 3 & 4 BHK homes inclusive of advanced wellness technologies, dual-aspect blue and green views and a world-class lifestyle crafted alongside the world’s leading partners at Rani Baug, Byculla, South Mumbai.</p>
            </Col>
        </Row>
    </Container>
    <Container style={{paddingTop: "200px"}}>
        <Row>
            <Col>
            <p  style={{color: "#00E5A1"}}>2 BED EXCLUSIVE RESIDENCES</p>
            <h2  className='text-light font'>2BHK - EAST WING</h2>
             <ul  className='text-light' style={{fontSize: "12px"}}>
                <li>All bedrooms with en-suite bathrooms</li>
                <li>Apartments with harbour views</li>
                <li>Master bedroom with corner windows offering panoramic views</li>
                <li>All shafts on the external face</li>
                <li>Kitchen with dry balcony</li>
                <li>Ease of combining apartments to create exclusive area</li>
             </ul>
            </Col >
            <Col xs={12} md={6}><div  className="overlap">
            <div className="second"><img src={RectangleFour} alt="" height="300" width="300" /></div>
                <div className="first"><img src={RectangleThree} alt="" height="300" width="300" /></div>
                </div></Col>
        </Row>
    </Container>
    <Container><div style={{color: "white" , paddingBottom: "40px", paddingTop: "140px"}} className='text-center'><hr /></div></Container>
    <Container className='mb-3' style={{paddingBottom: "50px", paddingTop: "50px"}} >
        <Row className='text-light'>
            <Col>
            <h1 className='font' style={{color: "#00E5A1"}}>50+</h1>

            <p style={{fontSize: "10px"}}>AMENITIES</p>
            </Col>
            <Col>
            <h1 className='font'  style={{color: "#00E5A1"}}>250</h1>
            <p style={{fontSize: "10px"}}>APARTMENTS</p>
            </Col>
            <Col>
            <h1 className='font'  style={{color: "#00E5A1"}}>9,290</h1>
            <p style={{fontSize: "10px"}}>RECEREATIONAL SPACE</p>
            </Col>
            <Col>
            <h1 className='font'  style={{color: "#00E5A1"}}>1200</h1>
            <p style={{fontSize: "10px"}}>SLOT CAR PARKING</p>
            </Col>
        </Row>
    </Container>
   </div>
   </>
  )
}

export default Appartment
