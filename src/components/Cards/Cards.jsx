import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import fst from '../images/Rectangle 72.png'
import snd from '../images/Rectangle 73.png'
import third from '../images/Rectangle 74.png'
import forth from '../images/Rectangle 75.png'
const Cards = () => {
    return (
        <div style={{ backgroundColor: "#F3F4F9" }}>
            <p className='text-center' style={{paddingTop: "30px", paddingBottom: "30px", color: "#00E5A1"}}>THE ADVANTAGES</p>
            <h2 className='text-center font' style={{paddingBottom: "30px" }}>AMENITIES</h2>
            <Container style={{paddingBottom: "60px", paddingTop: "40px"}}>
                <Row>
                    <Col>
                        <div className='d-flex'>
                            <div style={{borderLeft: "1px solid grey", padding: "16px"}}></div>
                            <div>
                                <h6 className='fw-bolder' style={{color: "#00E5A1"}}>1</h6>
                                <h4 className='fw-bolder pt-4'>top CLASS
                                    CLUB & FACILITIES</h4>
                                <img src={fst} alt="" style={{paddingTop: "20px", paddingBottom: "20px"}}/>
                                <p style={{fontSize: "14px", width: "200px"}}>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.

                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div style={{paddingTop: "60px"}} className='d-flex'>
                            <div style={{borderLeft: "1px solid grey", padding: "16px"}}></div>
                            <div>
                               <h6 className='fw-bolder' style={{color: "#00E5A1"}}>2</h6>
                                <h4 className='fw-bolder pt-4'>Tower Exclusive 
Amenities & Facilities</h4>
                                <img src={snd} alt="" style={{paddingTop: "20px", paddingBottom: "20px"}}/>
                                <p style={{fontSize: "14px", width: "200px"}}>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.
                                </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div className='d-flex'>
                            <div style={{borderLeft: "1px solid grey", padding: "16px"}}></div>
                            <div>
                               <h6 className='fw-bolder' style={{color: "#00E5A1"}}>3</h6>
                                <h4 className='fw-bolder pt-4'>Recreational 
Amenities & Facilities
</h4>
                                <img src={third} alt="" style={{paddingTop: "20px", paddingBottom: "20px"}}/>
                                <p style={{fontSize: "14px", width: "200px"}}>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.
                               </p>
                            </div>
                        </div>
                    </Col>
                    <Col>
                    <div style={{paddingTop: "60px"}} className='d-flex'>
                            <div style={{borderLeft: "1px solid grey", padding: "16px"}}></div>
                            <div>
                               <h6 className='fw-bolder' style={{color: "#00E5A1"}}>4</h6>
                                <h4 className='fw-bolder pt-4'>Multipurpose
 Games Room
</h4>
                                <img src={forth} alt="" style={{paddingTop: "20px", paddingBottom: "20px"}} />
                                <p style={{fontSize: "14px", width: "200px"}}>With a wide range of active and relaxing hubs, kids as well as adult spaces and curated indoor & outdoor activities, be tempted to try something new every day.
                               </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Cards
