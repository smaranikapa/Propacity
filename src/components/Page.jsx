import React from 'react'
import { Routes,  Route, BrowserRouter } from "react-router-dom"
import ContactUs from "../components/Contact/ContactUs";
import Landing from "../components/landing/Landing";
import Thankyou from "../components/Thankyou/Thankyou"
const Page = () => {
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Landing/>}/>
      <Route exact path='/contactus' element={<ContactUs/>}/>
      <Route exact path='/thank' element={<Thankyou/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default Page
