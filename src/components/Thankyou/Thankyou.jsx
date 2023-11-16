import React from 'react'
import main from '../images/main.jpg'
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/esm/Button';
const Thankyou = () => {
    const navigate = useNavigate();
   const goToHome = () => {
    navigate("/")
   }
  return (
   <div className='d-flex justify-content-center align-items-center'>
    <Container style={{paddingTop: "30px"}}>
    <Row>
        <Col><img src={main} alt="" height="400" width="400"/></Col>
        <Col style={{paddingTop: "30px"}}>
        <h1>Thanks for <br /> registering! </h1>
        <p>Our experts will get in touch <br />with you shortly</p>
        <Button onClick={goToHome} style={{backgroundColor: "#1A2440", border: "none"}}>Back To Home Page</Button>

        </Col>
    </Row>
    <h5 style={{paddingTop: "30px"}}>Disclamer</h5>
    <p style={{fontSize: "14px", fontWeight: "500"}}>This is not the official website of developer, it belongs to the authorised channel partner for information & marketing purposes only. All rights for logo & images are reserved by the developer.</p>
    <p style={{fontSize: "14px", fontWeight: "500"}}>Digital Media planned by Propacity</p>
   </Container>
   </div>
  )
}

export default Thankyou
