import React from 'react';
import about1 from './images/aboutus1.jpg';
import { Link } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import client2 from './images/brand2.png';
import client4 from './images/brand3.png';
import client5 from './images/brand4.jpg';
import client6 from './images/brand5.png';
import client7 from './images/brand6.jpg';
import client8 from './images/brand7.png';
import client9 from './images/brand9.png';
import client10 from './images/brand10.png';
import client11 from './images/brand11.png';
import client12 from './images/brand12.jpg';
import banner from './images/digital-marketing-banner.jpg';
import buzz from './images/AT Buzz Logo copy.png';
import event from './images/AT Events Logo.png';
import mcmv from './images/mcmv logo.png';
import inspiring from './images/atraski logo new -wm.png';
import fashion from './images/AT Fashion.png';
import travel from './images/AT Travel new 300- 150.png';  

import './About.css';






const About = () => {


  const styles = {
    container: {
      // display: 'flex',
      margin:'auto',
      justifyContent: 'center',
      // flexDirection:'column',
      // alignItems: 'center',
      height: '500px',
      width:'100%',
      backgroundImage: `url(${banner})`,
      backgroundSize: 'contain',
      backgroundPosition:'top',
      // backgroundColor:'rgba(0,0,0,0.1)',
      

    },
    heading: {
      textAlign: 'center',
      // marginLeft:'200px',
      color: '#fff',
      fontSize: '32px',
      fontWeight: 'bold',
      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
      marginTop: '-35vh',

    },
    paragraph: {
      fontSize: '25px',
    }
  };


  
  //  media queries for different screen sizes
styles.paragraph['@media (max-width: 768px)'] = {
  fontSize: '20px',
};

styles.paragraph['@media (max-width: 480px)'] = {
  fontSize: '18px',
};
  return (
    <>


       <div style={styles.container}> 
         <h1 style={styles.heading}>About Us</h1> 
         {/* <div className="cls">

        </div> */}
        
      </div>

      <div className="d-flex mt-5 mb-5 flex-column">
        <div className="firstpart">
          <h1 style={{fontSize:'30px' , color:'#fc0c8c' , fontWeight:'900'}}>ABOUT US</h1>

          <p className="heading-1 params" style={{fontSize:'18px' , width:'80%' , lineHeight:'40px'}}>At Atraski, we believe in the power of authentic connections and the ability of compelling storytelling to elevate brands. Our team of seasoned professionals brings a wealth of experience and a fresh perspective to every project. Whether you're a startup looking to establish your online presence or an established brand seeking a marketing revamp, Atraski is here to tailor solutions that resonate with your audience and drive measurable results. Our commitment to excellence, creativity, and strategic thinking sets us apart, making Atraski the go-to choice for businesses seeking to make a lasting impact in the market .</p>
        </div>


        <div className="mt-5 mb-5">
        <div className="whoarewe mt-5">
           <h1 style={{fontSize:'30px' , color:'#fc0c8c' , fontWeight:'900'}} className="mb-5">OUR SEGMENTS</h1> 
          <p className="heading-1 params" style={{fontSize:'18px' , width:'80%' , lineHeight:'40px'}}>At Atraski, we believe in the power of authentic connections and the ability of compelling storytelling to elevate brands. Our team of seasoned professionals brings a wealth of experience and a fresh perspective to every project. Whether you're a startup looking to establish your online presence or an established brand seeking a marketing revamp, Atraski is here to tailor solutions that resonate with your audience and drive measurable results. Our commitment to excellence, creativity, and strategic thinking sets us apart, making Atraski the go-to choice for businesses seeking to make a lasting impact in the market.</p> 
              <div className="mb-5" style={{display:'flex',justifyContent:'space-around',}}>

                <div className="section1" style={{width:'250px' , color:'white', textAlign:'center'}}>
                <div style={{height:'70px'}}>
                  <img src={inspiring} width="150px"/>
                  </div>
                  <span style={{color:'white' , fontSize:'18px' , textAlign:'center'}}>We are a marketing performance company with the mission to add value to the brands we work with.</span>
                </div>

                <div className="section1" style={{width:'250px' , color:'white', textAlign:'center'}}>
                  <div style={{height:'70px'}}>
                  <img src={event} width="150px"/>
                  </div>
                  <span style={{color:'white' , fontSize:'18px' , textAlign:'center'}}>We are an event management company with a vision to impact your product launches and conferences.</span>
                </div>

                <div className="section1" style={{width:'250px' , color:'white', textAlign:'center'}}>
                <div style={{height:'70px'}}> 
                  <img src={mcmv} width="250px"/>
                  </div>
                  <span style={{color:'white' , fontSize:'18px' , textAlign:'center'}}>We are coming up with a product as atstay.in to simplify B2C booking for the offbeat stays in India.</span>
                </div>

              </div> 


              <div className="mt-5" style={{display:'flex',justifyContent:'space-around',}}>

                <div className="section1" style={{width:'250px' , color:'white', textAlign:'center'}}>
                <div style={{height:'80px'}}>
                  <img src={fashion} width="150px"/>
                  </div>
                  <span style={{color:'white' , fontSize:'18px' , textAlign:'center'}}>We are a fashion management company providing wider avenues and expanding your  brand's horizons.</span>
                </div>

                <div className="section1" style={{width:'250px' , color:'white', textAlign:'center'}}>
                  <div style={{height:'80px'}}>
                  <img src={buzz} width="150px"/>
                  </div>
                  <span style={{color:'white' , fontSize:'18px' , textAlign:'center'}}>We provide an integrated solution for influencer marketing needs with a promise of brand upscaling.</span>
                </div>

                <div className="section1" style={{width:'250px' , color:'white', textAlign:'center'}}>
                <div style={{height:'80px'}}> 
                  <img src={travel} width="150px"/>
                  </div>
                  <span style={{color:'white' , fontSize:'18px' , textAlign:'center'}}>We are coming up with a product as atstay.in to simplify B2C booking for the offbeat stays in India.</span>
                </div>

              </div>
        </div>

       
      </div>

      
       
      </div> 


      


      

      

      {/* <h1 className="text-white text-center" style={{ margin: '50px' }}>Our Clients</h1> */}


      {/* <div className="container-fluid">
        <div className="bor" style={{height:'100vh' , width:'100vw' , backgroundColor:'white' , borderRadius:'100% 0% 100% 0% / 100% 0% 100% 0%'}}>

        </div>
      </div> */}

      {/* clients */}
      <div id="caraousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <h1 className="text-white text-center" style={{ margin: '50px' }}>Our Clients</h1>
          <div className="carousel-item active">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client2} className="img-fluid" alt="Client 1" style={{ fontSize: '20px' }} />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client4} className="img-fluid" alt="Client 2" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client5} className="img-fluid" alt="Client 3" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client6} className="img-fluid" alt="Client 4" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client7} className="img-fluid" alt="Client 5" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client8} className="img-fluid" alt="Client 6" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client9} className="img-fluid" alt="Client 7" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client10} className="img-fluid" alt="Client 8" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client11} className="img-fluid" alt="Client 9" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row justify-content-center">
              <div className="col-md-2">
                <img src={client12} className="img-fluid" alt="Client 10" />
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#clientSlider" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#clientSlider" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* footer starts  */}
      <footer className=" text-white" style={{ backgroundColor: '#333' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="text-white"><i className="fa fa-envelope text-white"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>             */}
              <p className="text-white"><i className="fa fa-phone text-white"></i> Contact No: 9163720198 / 7596009785</p>
              {/* <p><i className="fa fa-phone"></i> Contact No: 7596009785</p> */}
            </div>
            <div className="col-md-6 text-md-right text-white">
              <p className="text-white">Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p className="text-white">Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link text-white" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/*  footer ends  */}





    </>
  )
}

export default About
