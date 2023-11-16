import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const End = () => {
  return (
    <>
    <div style={{ backgroundColor: "#1A2440" }}>
    <Container className='text-light font' style={{paddingTop: "50px"}}>
        <h2>SPECTACULAR <br /> SURROUNDINGS <br />
AS FAR AS THE EYE CAN SEE</h2>
<p style={{width: "500px", paddingBottom: "30px"}}>Piramal Aranya is an ode to perfection. It balances contemporary design with the scenic natural beauty of its environment. Every residence invites you to soak in the surroundings, from the endless greenery of Rani Baug on the western side and the shimmering Arabian Sea on the east. Avyan at Piramal Aranya will be home to something truly spectacular with premium dual aspect living</p>
    </Container>
    <div className='d-flex justify-content-center align-items-center'>
    <Container>
        <Row className='percent'>
            <Col>
            <h1 className='font'>66%</h1>
            <p> Botanical garden views</p>
            </Col>
            <Col>
            <h1  className='font'>33%</h1>
            <p>Mumbai harbour and botanical garden views</p>
            </Col>
            <Col>
            <h1  className='font'>66%</h1>
            <p> Mumbai harbour views</p>
            </Col>
            <Col>
            <h1  className='font'>33%</h1>
            <p> Mumbai harbour views</p>
            </Col>
        </Row>
    </Container> 
    </div>
    <Container><div style={{color: "white" , paddingBottom: "40px"}} className='text-center'><hr /></div></Container>
    <p className='text-center' style={{color: "#00E5A1"}}>LOCATION</p>
    <h2 className='text-center text-light font'>NEIGHBORHOOD</h2>
    <div>
    <Container className='text-light'>
        
       < Row className='neighbour'>
            <Col className=''>
            <div><h5 className='fw-bolder'>Bhau Daji Lad Museum</h5>
            <p>3.5 Km Away</p></div>
            <div>
                <h5  className='fw-bolder'>Magen David Synagogue</h5>
                <p>3.5 Km Away</p>
            </div>
            </Col>
            <Col className=''>
            <div><h5 className='fw-bolder'>Bhau Daji Lad Museum</h5>
            <p>3.5 Km Away</p></div>
            <div>
                <h5  className='fw-bolder'>Magen David Synagogue</h5>
                <p>3.5 Km Away</p>
            </div>
            </Col>
            <Col className=''>
            <div><h5 className='fw-bolder'>Bhau Daji Lad Museum</h5>
            <p>3.5 Km Away</p></div>
            <div>
                <h5  className='fw-bolder'>Magen David Synagogue</h5>
                <p>3.5 Km Away</p>
            </div>
            </Col>
            <Col>
            <div><h5  className='fw-bolder'>St. Paul’s Tamil Church</h5>
            <p>3.5 Km Away</p></div>
            <div>
                <h5  className='fw-bolder'>Byculla Club − Fire Temple</h5>
                <p>3.5 Km Away</p>
            </div>
            </Col>
        </Row>
        
    </Container>
    </div>
    </div>
    </>
  )
}

export default End
