/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button} from 'react-bootstrap';
import { Link} from 'react-router-dom';
import offer1 from './images/Incetives Trips.PNG'
import offer2 from './images/Travel Agency For Corporate.PNG'
import offer3 from './images/socialmediaintegration.jpg'
import offer4 from './images/analyticsandtracking.jpg'
import offer5 from './images/mobileresponsiveness.jpg'
const Web = () => {
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

  // const handleModalClose3 = () => {
  //   setShowModal3(false);
  // };

  // const handleImageClick3 = () => {
  //   setShowModal3(true);
  // };

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
        <h1 className="mt-5 text-white text-center">Travel</h1>
        <h3 className="mt-3  text-white text-center">What We Offer</h3>
        <Row className="my-4" style={{display:'flex' , justifyContent:'center'}} >
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick} style={{cursor:'pointer'}}>
              <img src={offer1} alt="Image 1" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Incetives Trips</h2>

            </div>
          </Col>
          <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick2} style={{cursor:'pointer'}}>
              <img src={offer2} alt="Image 2" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Travel Agency For Corporate</h2>

            </div>
          </Col>
          {/* <Col md={4} className="mt-3">
            <div className="image-container" onClick={handleImageClick3} style={{cursor:'pointer'}}>
              <img src={offer3} alt="Image 3" className="img-fluid" />
              <h2 className="image-heading" style={{position: 'absolute',fontSize:'25px', color:'black',top: 100, left: 0, width: '100%', textAlign: 'center', backgroundColor:'#F9F5F6'}}>Social Media Integration</h2>

            </div>
          </Col> */}
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
            <h4>Incetives Trips:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Incentive trips are company-sponsored travel experiences offered to employees as rewards for achieving certain performance goals or milestones. These trips are designed to motivate and recognize employees' hard work and achievements. We provide these trips from domestic getaways to international vacations and often include various activities and entertainment.
We help companies in  arranging  these small incentive trips.</h6>
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
            <h4>Travel Agency For Corporate:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Corporate travel agencies help with planning and booking flights, accommodations, transportation, and other travel-related services for employees traveling on business.
We assist in finding cost-effective options and negotiating corporate rates with airlines, hotels, and other service providers to help companies manage your  travel expenses.
We also ensure that travel arrangements align with the company's travel policies, helping to control costs and maintain consistency.
We can organize and manage group travel for conferences, meetings, or corporate events.
When choosing a corporate travel agency, consider factors such as their experience, reputation, range of services, technology tools, and ability to tailor services to your organization's needs.

 </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose2}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>


        {/* <Modal show={showModal3} onHide={handleModalClose3} dialogClassName="custom-modal w-1000" >
          <Modal.Header closeButton>
            <Modal.Title>What We Offer:</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Social Media Integration:</h4>
            <h6 style={{color:'grey' , fontSize:'15px'}}>Social media integration is a powerful strategy that allows businesses to seamlessly connect their website with various social media platforms. By integrating social media icons, sharing buttons, and live feeds, businesses can expand their online presence, drive engagement, and boost brand visibility. Social media integration enables visitors to easily share content, increasing the reach and virality of the website. It also fosters a sense of social proof, as users can see real-time social media activity and endorsements. Moreover, social media integration provides valuable data and insights into user behaviour and preferences, enabling businesses to refine their marketing strategies for better results. </h6>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleModalClose3}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}

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

export default Web