import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import gym from '../images/image 2.png';
import call from '../images/Group (15).png';
import secure from '../images/security 1.png';
import car from '../images/car-parking 1.png';
import market from '../images/Group (16).png';
import group from '../images/Vector (7).png'
import massage from '../images/massa.png'
import air from '../images/air.png'
import swim from '../images/Swimming.png'
import ring from '../images/ringing 1.png'
const Services = () => {
    return (
        <>
        <div style={{paddingTop: "60px" , paddingBottom: "60px"}}>
            <p className='text-center' style={{color: "#00E5A1", fontWeight: "500"}}>ARANYA’S SERVICES</p>
            <h1 className='text-center font'>30+ PREMIUM AMENTIES</h1>
            <Container className="icon-bg">
                <Row style={{paddingTop: "50px"}}>
                    <Col>
                        <div class="d-flex">
                            <div><img src={call} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>RECEPTION</h6>
                                <p style={{fontSize: "14px"}}>6 area for receptionist serve 24/7</p>
                            </div>
                        </div>
                        <div class="d-flex">
                        <div><img src={car} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>PARKING</h6>
                                <p style={{fontSize: "14px"}}>Parking area with extra capacity</p>
                            </div>
                        </div>
                        <div  class="d-flex">
                        <div><img src={market} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>SUPERMARKET</h6>
                                <p style={{fontSize: "14px"}}>5 supermarket in each block</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                    <div class="d-flex">
                            <div><img src={secure} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>SECURITY</h6>
                                <p style={{fontSize: "14px"}}>Security team with 24/7 camera system</p>
                            </div>
                        </div>
                        <div class="d-flex">
                        <div><img src={group} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>CONFERENCE ROOM</h6>
                                <p style={{fontSize: "14px"}}>5 conference room setup in each block</p>
                            </div>
                        </div>
                        <div  class="d-flex">
                        <div><img src={massage} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>SPA AND MASSAGE</h6>
                                <p style={{fontSize: "14px"}}>Spa and Massage service for better health</p>
                            </div>
                        </div>
                    </Col>

                    <Col>
                    <div class="d-flex">
                            <div><img src={ring} alt="bbb" /></div>
                            <div>
                                <h6 className='fw-bolder'>FIRE ALARM</h6>
                                <p style={{fontSize: "14px"}}>Automatic fire extinguishing system</p>
                            </div>
                        </div>
                        <div class="d-flex">
                        <div><img src={air} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>CONDITIONING</h6>
                                <p style={{fontSize: "14px"}}>ensure ventilation and air conditioning</p>
                            </div>
                        </div>
                        <div  class="d-flex">
                        <div><img src={swim} alt="" /></div>
                            <div>
                                <h6 className='fw-bolder'>4 SEASON POOL</h6>
                                <p style={{fontSize: "14px"}}>5 star indoor swimming 4 seasons </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
        <div style={{paddingTop: "60px" , paddingBottom: "40px"}}>
            <img src={gym} alt="" width='100%' height='500'/>
        </div>
        </>
    )
}

export default Services
