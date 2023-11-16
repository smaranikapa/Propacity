import {React, useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import map from '../images/image 3.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Container from 'react-bootstrap/esm/Container';
const Contact = () => {
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
 

     const addTransactions = () => {
      let payload = {
        name: name,
        email: email,
        mobile: mobile,
      };
      alert("form successfully submitted");
      navigate("/thank")
      console.log("testtesttest", payload);      
      fetch(`https://api.propacity.in/api/v1/webhooks/integration/61cf0d44-1ede-4dfa-b3ce-9834102082/insertLead`, {
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

        <div style={{backgroundColor: "#1A2440", paddingTop: "100px"}}>
            <Container className='m-0 p-0'>
      <Row className='contact'>
        <Col className='text-light'>
        <div className='d-flex justify-content-center align-items-center' style={{marginTop: "16px"}}>
        <div>
        <h2 className='font'>CONTACT US</h2>
        <p style={{fontSize: "8px"}}>Please enter details below and we shall get in touch <br />with you shortly</p>
        <div><input type="text" value={name}  onChange={handleNameChange}  required placeholder=' Full Name' className='full-name'/></div>
                        
        <div><input  type="text" pattern="[789][0-9]{9}" value={mobile} onChange={handelmobileChange} required placeholder='Contact Number'  className='full-name'/></div>
        <div><input type="email" value={email} onChange={handleEmailChange} required placeholder='Email Address'  className='full-name'/></div>
        <div className='d-flex justify-content-center align-items-center'><button  onClick={addTransactions} className='submit'>SUBMIT</button></div>
        </div>
        </div>
        </Col>
        <Col className=''>
        <img src={map} alt=""  height="500" width="100%" className='pb-4'/></Col>
      </Row>
      </Container>
    </div>
  )
}

export default Contact
