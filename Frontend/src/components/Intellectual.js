/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import offer1 from './images/bloogers.png'
import offer2 from './images/voicefest.png'
import offer3 from './images/eshower.png'
import offer4 from './images/analyticsandtracking.jpg'
import offer5 from './images/mobileresponsiveness.jpg'
const Intellectual = () => {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);
  const [showModal4, setShowModal4] = useState(false);
  const [showModal5, setShowModal5] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleImageClick = () => {
    setShowModal(true);
  };

  const handleModalClose2 = () => {
    setShowModal2(false);
  };

  const handleImageClick2 = () => {
    setShowModal2(true);
  };

  const handleModalClose3 = () => {
    setShowModal3(false);
  };

  const handleImageClick3 = () => {
    setShowModal3(true);
  };

  // const handleModalClose4 = () => {
  //   setShowModal4(false);
  // };

  // const handleImageClick4 = () => {
  //   setShowModal4(true);
  // };


  // const handleModalClose5 = () => {
  //   setShowModal5(false);
  // };

  // const handleImageClick5 = () => {
  //   setShowModal5(true);
  // };


  return (
    <>
      
           <Container>
        <h1 className="mt-5 text-white text-center">Intellectual Properties</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="my-4" style={{display:'flex' , justifyContent:'center'}} >
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Bloggers Mela</h2>

            </div>
          </Col>
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>The Voice Fest
</h2>

            </div>
          </Col>
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Business E-Shower
</h2>

            </div>
          </Col>
          {/* <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick4} style={{cursor:'pointer'}}>
              <img src={offer4} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Analytics and Tracking</h2>

            </div>
          </Col>
          <Col md={4}className="mt-3">
            <div className="image-container" onClick={handleImageClick5} style={{cursor:'pointer'}}>
              <img src={offer5} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute', fontSize:'25px',color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Mobile Responsiveness</h2>

            </div>
          </Col> */}
          
        </Row>
        </Container>


        <Modal show={showModal} onHide={handleModalClose} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Bloggers Mela:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Bloggers' events provide an excellent platform for bloggers to network and connect with like-minded individuals.
We help to serve as a vibrant hub where bloggers can network, share their personal stories, and gain insights and inspiration from the experiences of established bloggers. Through this platform, bloggers can form meaningful connections, collaborate on projects, and discover new avenues for growth and success in the dynamic world of blogging.
Bloggers' events often attract brands looking for influencer collaborations and partnerships.
</h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal2} onHide={handleModalClose2} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>The Voice Fest:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>The ultimate celebration of vocal artistry – The Voice Fest, immerse yourself in a world of captivating performances, interactive workshops, and a platform to let yourself shine. Whether you're a singer, a storyteller, a voice actor, or simply an enthusiast, Voice Fest has something extraordinary in store for you.Voice Fest is more than an event; it's an experience that celebrates the beauty, power, and versatility of the talent.

 </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Business E-Shower:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Business E-Shower, a spectacular virtual gathering celebrating and supporting new businesses. Join entrepreneurs, industry leaders, and like-minded professionals from across the business landscape to forge connections, share insights, and inspire growth. Engage with a vibrant community through interactive platforms, networking, and idea exchange. Experience the convenience of connecting from your own screen. Whether you're a seasoned entrepreneur looking to expand your network or a budding business owner seeking inspiration and guidance, this event offers a unique opportunity to connect with like-minded individuals who share your drive and ambition. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        {/* <Modal show={showModal4} onHide={handleModalClose4} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Analytics and Tracking:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Analytics and tracking are essential tools for businesses to gain insights into their online performance and make data-driven decisions. By implementing analytics tools and tracking codes on their website, businesses can monitor various metrics such as website traffic, user behaviour, conversions, and more. These insights enable businesses to understand their audience, identify areas for improvement, and optimize their marketing strategies. Analytics and tracking provide valuable data on customer preferences, allowing businesses to personalize their messaging and offerings. Additionally, it helps businesses measure the effectiveness of their campaigns, allocate resources efficiently, and ultimately drive better results and ROI.
 </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose4}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={showModal5} onHide={handleModalClose5} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Mobile Responsiveness:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Mobile responsiveness is crucial in today's digital landscape where mobile devices dominate internet usage. A website that is mobile-responsive adapts seamlessly to different screen sizes, ensuring a consistent and optimized user experience across devices. The benefits of mobile responsiveness are numerous: it improves user engagement, reduces bounce rates, and boosts conversion rates. A mobile-responsive website also enhances search engine visibility and rankings, as search engines prioritize mobile-friendly sites. Moreover, it builds trust and credibility among users, who expect a seamless mobile experience. By prioritizing mobile responsiveness, businesses can reach and engage a larger audience, drive more traffic, and ultimately increase their online success. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose5}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}




 {/* footer */}

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

    </>
  )
}

export default Intellectual