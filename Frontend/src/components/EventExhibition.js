/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/heading-has-content */
// import event from './imagegallery/event.jpg'
import subimg1 from './imagegallery/productlaunch.png'
import subimg2 from './imagegallery/exibhtion.png'
import subimg3 from './imagegallery/events.png'
import subimg4 from './imagegallery/atlbtl.png'
// import eventimg1 from './imagegallery/w1.jpeg'
// import eventimg2 from './imagegallery/w2.jpeg'
// import eventimg3 from './imagegallery/w3.jpeg'
// import eventimg4 from './imagegallery/w4.jpeg'
import eventimg5 from './imagegallery/w5.jpeg'
import e1 from './images/e15.jpg';
import e2 from './images/e16.png';
import e3 from './images/e17.png';
import e4 from './images/e18.png';
import audi from './images/audi.jpg'

import portfolio1 from './images/e1.jpg'
import portfolio2 from './images/e2.jpg'
import portfolio3 from './images/e3.jpg'
import portfolio4 from './images/e4.jpg'
import portfolio5 from './images/e5.jpg'
import portfolio6 from './images/e6.jpg'
import portfolio7 from './images/e7.jpg'


import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import  '../index.css';



function EventExhibition() {

    // const headerStyle = {
    //     backgroundImage: `url(${event})`,
    //     backgroundSize: '1297px',
    //     backgroundAttachment: 'fixed',
    //     backgroundRepeate:'no-repeate',
    //     height: '30vh',
    //     position: 'relative',
    // };

    // const headingStyle = {
    //     color: '#ffffff',
    //     fontSize: '2rem',
    //     textTransform: 'uppercase',
    //     textAlign: 'center',
    // };
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);

    const handleModalClose = () => {
      setShowModal(false);
    };

    const handleModalClose2 = () => {
      setShowModal2(false);
    };

    const handleModalClose3 = () => {
      setShowModal3(false);
    };

    const handleModalClose4 = () => {
      setShowModal4(false);
    };
  
    const handleImageClick = () => {
      setShowModal(true);
    };

    const handleImageClick2 = () => {
      setShowModal2(true);
    };

    const handleImageClick3 = () => {
      setShowModal3(true);
    };

    const handleImageClick4 = () => {
      setShowModal4(true);
    };



    return (
        <>
            {/* <header style={headerStyle}>
                <h1 style={headingStyle}></h1>
            </header> */}
            <div className="container">
              <h1 className="text-center mb-3 font-weight-bold">Events & Exhibition</h1>
                
            </div>
            {/* cards */}
            <Container>
        {/* <h1 className="mt-5 text-white text-center"></h1> */}
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        {/* <Row className="mt-4" style={{pointerEvents:'cursor'}}>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={subimg1} alt="Image 1" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={subimg2} alt="Image 2" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}>
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={subimg3} alt="Image 3" className="img-fluid" />
            </div>
          </Col>
          <Col md={3}> */}
          
          <Row className="my-3">
            <Col md={3}>
            <div className="image-container mt-5" onClick={handleImageClick4} style={{cursor:'pointer'}}>
            
            <img src={subimg1} alt="Image 3" className="img-fluid" />
            <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center',fontSize:'20px', backgroundColor:'#F9F5F6'}}>Product Launch</h2>
         
            </div>
            </Col>

            <Col md={3}>
            <div className="image-container mt-5" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={subimg2} alt="Image 3" className="img-fluid" />
            <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center',fontSize:'20px', backgroundColor:'#F9F5F6'}}>Events & Exhibition</h2>

            </div>
            </Col>


            <Col md={3}>
            <div className="image-container mt-5" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={subimg3} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center',fontSize:'20px', backgroundColor:'#F9F5F6'}}>Events</h2>
            
            </div>
            </Col>

            <Col md={3}>
            <div className="image-container mt-5" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={subimg4} alt="Image 3" className="img-fluid" />
            </div>
            </Col>

          </Row>
            
          
       

         <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>ATL & BTL:</h4>
            <h9>Above the line and below the line is an Elaborated form of ATL & BTL. In this domain we provide services like hoardings ,billboards, branding,inauguration,dealers meet ,stall fabrication to the business.
These are the events where companies showcase and introduce new products to the public, potential clients, and the media. These exhibitions often feature interactive displays, demonstrations, and presentations to generate excitement and interest in the new products. They provide an opportunity for companies to connect with their target audience and gather valuable feedback.
</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>



        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Events:</h4>
            <h9>Business events are a valuable platform for businesses to connect, engage, and expand their networks. Whether it's conferences, trade shows, or networking events, business events offer numerous benefits. They provide opportunities for businesses to showcase their products or services, gain exposure, and attract potential customers. Business events foster face-to-face interactions, enabling businesses to build valuable relationships with industry professionals, partners, and clients. These events also offer a platform for knowledge sharing, learning about industry trends, and gaining insights from experts. Moreover, business events can lead to collaborations, partnerships, and new business opportunities, ultimately driving growth and success
</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Exhibition:</h4>
            <h9>An exhibition would involve showcasing and presenting various aspects of digital marketing to potential clients or attendees. These exhibitions could include displays, presentations, and interactive demonstrations of services such as social media management, search engine optimization (SEO), pay-per-click (PPC) advertising, content creation, email marketing, and more. The goal would be to educate and attract businesses or individuals interested in enhancing their online presence and marketing strategies.
</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> 


        <Modal show={showModal4} onHide={handleModalClose4} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Product Launches:</h4>
            <h9>Product launch inaugurations are events where a new product is introduced to the public and stakeholders. These events often include presentations, demonstrations, and sometimes even entertainment to create excitement and generate interest in the new product.We help you in these types of events and to create. They can be a crucial marketing tool for companies to showcase their innovation and attract potential customers. We Assist businesses that need more specific information or assistance with planning a product launch, inauguration and company campaigns.
</h9>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose4}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>


            {/* cards */}

            {/* portfolio */}
            <div class="portfolio">
                
                    {/* footer starts  */}
      <footer className=" text-white" style={{backgroundColor:'#333'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p><i className="fa fa-envelope"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>             */}
                <p><i className="fa fa-phone"></i> Contact No: 9163720198 / 7596009785</p>
              {/* <p><i className="fa fa-phone"></i> Contact No: 7596009785</p> */}
            </div>
            <div className="col-md-6 text-md-right">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/*  footer ends  */}

            </div>

            {/* portfolio */}
           




        </>
    );
}

export default EventExhibition