import React,{useState} from 'react';
import './fashionRegistration.css';
import fashion from './images/Copy of DELHI FASHION CONFLUENCE.jpg';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';




export default function FashionRegistration() {
  
  return (
    <div>
        <div className="container-fluid pb-5" style={{width:'100vw' , height:'auto' , background:'#fff'}}>
        <h2 className=" headingss mb-3" style={{color:'#fc0c8c' , fontWeight:'700', fontSize:'40px' , textAlign:'center'}}>DELHI FASHION2023 CONFLUENCE</h2>

            <div className="mainbox d-flex" style={{flexDirection:'column'}}>

                <div className="leftbox w-100 mt-2">

                    <img src={fashion} width="1500px" height="700px" className="imagform"/>
              {/* <div className="d-flex" style={{gap:'35px' , fontWeight:'700' , textAlign:'center'}}>
                <div className="links mt-5 ml-2">
                  <Link to="/fashionattendees" style={{fontSize:'25px' , borderBottom:'5px solid #fc0c8c' , textDecoration:'none' , color:'#fc0c8c'}}>Register for Attendees</Link>
                </div>

                <div className="links mt-5 ml-2">
                  <Link to="/fashiondesigner" style={{fontSize:'25px' , borderBottom:'5px solid #fc0c8c' , textDecoration:'none' , color:'#fc0c8c'}}>Register for Fashion Designer</Link>
                </div>
                </div>  */}
                </div>

                
                

                <div className="rightbox w-100 mt-2" style={{textAlign:'left'}}>

                    {/* <div className="price mt-3">
                     <span><del>₹699</del></span>   <span style={{fontSize:'25px' , fontWeight:'900' , color:'#fc0c8c'}}>₹499</span>
                    </div>

                    <div className="date mt-4">
                        <h4 className="" style={{color:'#000' , fontSize:'17px' , fontWeight:'700'}}>Date: 29th December, Friday</h4>
                    </div>

                    <div className="time mt-4">
                        <h4 className="" style={{color:'#000' , fontSize:'17px' , fontWeight:'700'}}>Location: <span style={{color:'#fc0c8c'}}>La Vie En Rose</span></h4>
                    </div> */}

                    

                    {/* <div className="map mt-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7873525429954!2d77.1947250749524!3d28.516044889362007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a14b923753%3A0x3f6fe0a8810d3bf5!2sLa%20Vie%20En%20Rose%2C%20Atraski-%20Co-working%20Space%20%26%20Virtual%20Office!5e0!3m2!1sen!2sin!4v1702276527541!5m2!1sen!2sin" className="mapss" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}
<div className="karnaha" style={{display:'flex'  , justifyContent:'space-around'}}>
                      <Link to="/ModelRegistration" className="m249"><div className="modelsregistration mt-5 mb-5 ">
                        <button className="btn btn-primary" style={{background:'#fc0c8c' , width:'300px' , padding:'10px' , fontSize:'19px' , border:'none'}}>Model Registration</button>
                     </div></Link>
                    

                     <Link to="/fashiondesigner" className="m249"><div className="modelsregistration mt-5 mb-5 ">
                        <button className="btn btn-primary" style={{background:'#fc0c8c' , width:'350px' , padding:'10px' , fontSize:'19px', border:'none' }}>Fashion Designer Registration</button>
                     </div></Link>


                     <Link to="/fashionattendees" className="m249"><div className="modelsregistration mt-5 mb-5 ">
                        <button className="btn btn-primary" style={{background:'#fc0c8c' , width:'300px' , padding:'10px'  , fontSize:'19px' , border:'none'}}>Attenddes Registration</button>
                     </div></Link>



                     
  </div>
                    

                </div>

                      
                    
            </div>



                    <div className="map mt-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7873525429954!2d77.1947250749524!3d28.516044889362007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a14b923753%3A0x3f6fe0a8810d3bf5!2sLa%20Vie%20En%20Rose%2C%20Atraski-%20Co-working%20Space%20%26%20Virtual%20Office!5e0!3m2!1sen!2sin!4v1702276527541!5m2!1sen!2sin" className="mapss" width="1500" height="500" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
        </div>
    </div>
  )
}
