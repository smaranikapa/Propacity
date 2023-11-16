import {React, useState} from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Container from 'react-bootstrap/esm/Container';
import main from '../images/main.jpg'
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
   const handelmobileChange = (event) => {
      setMobile(event.target.value);
   }
  const addTransactions = () =>{
    let payload = {
      name: name,
      email: email,
      mobile: mobile,
    };
    alert("form successfully submitted");
    navigate("/thank")
    console.log("testtesttest", payload);      
    fetch(`https://script.google.com/macros/s/AKfycbxM8cQ-jD80c9__SoCf91f7dayYhGItNKGnOaqZlo1MPotRBwvNuKbo16xxciBndb0jiw/execc`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("testing", data);
           // Clear the input fields after successful submission 
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    } 
  return (
    <Container style={{ paddingTop: "50px"}} className="contact-us">
  <Row>
    <Col><img src={main} alt="" height="400" width="400"/></Col>
    <Col>
    <h3 className='fw-bolder'>Book Site Tour</h3>
       <Stack style={{width: "200"}}>
        <label htmlFor="">Name</label>
                     <input type="text" value={name}  onChange={handleNameChange}  required placeholder='Full Name'/>
                        <label htmlFor="">Mobile</label>
                        <input   type="text" pattern="[789][0-9]{9}" value={mobile} onChange={handelmobileChange} required placeholder='Contact Number'/>
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={handleEmailChange} required placeholder='Email Address'/>
                        <button  onClick={addTransactions}>SUBMIT</button>
       </Stack>
    </Col>
  </Row>
  </Container>
  )
}

export default ContactUs
