/* eslint-disable no-unused-vars */
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap';
import { Link} from 'react-router-dom';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

// import WorkGallary from './workGallary';
import work1 from '../components/images/DY PATIL1.jpg';
import work2 from '../components/images/nissan.jpg';
import work3 from '../components/images/pharmco.jpg';
import work4 from '../components/images/suez.jpg';
import work5 from '../components/images/ultrasound.jpg';
import work6 from '../components/images/weisstechnique.jpg';
import work7 from '../components/images/jhonny walker.jpg';
import work8 from '../components/images/medicene.jpg';
import work9 from '../components/images/nothingcoinbank.jpg';
import work10 from '../components/images/mi.jpg';
import work11 from '../components/images/pepe.jpg';
import work12 from '../components/images/volksvagan.jpg';


import './workGallery.css';
import video1 from './videos/jewel.mp4'
import video2 from './videos/haldiram.mp4'
import video3 from './videos/eazydinner.mp4'
import video4 from './videos/mogasun.mp4'
import video5 from './videos/dilemughli.mp4'
import video6 from './videos/DY Patil.mp4'





const Work1 = () => {



  return (
    
    <>
     {/* projects */}
      <div className="container-fluid" style={{background:'white'}}>
        {/* <h2 className="text-center mb-0" style={{ marginBottom: '10px', color:'#fc0c8c' , fontWeight:'900'}}>Successful Projects</h2> */}
        <Row>
          <Col md={4} className="my-5">
            <Card style={{ marginBottom: '30px' , margin:'auto' , background:'#fc0c8c',maxWidth:'366px'  }}>
              <Card.Body style={{ backgroundColor: 'white', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>JewelBox</p>
                </div>
                <video src={video1} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="my-5">
            <Card style={{ marginBottom: '30px' , margin:'auto' ,  background:'#fc0c8c' ,maxWidth:'366px'}}>
              <Card.Body style={{ backgroundColor: 'white', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Haldiram</p>
                </div>
                <video src={video2} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="my-5">
            <Card style={{ marginBottom: '30px' , margin:'auto' , background:'#fc0c8c' ,maxWidth:'366px'}}>
              <Card.Body style={{ backgroundColor: 'white', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Eazy Dinner</p>
                </div>
                <video src={video3} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4} className="my-5">
            <Card style={{ marginBottom: '0px', marginTop:'30px' , margin:'auto' , background:'#fc0c8c' ,maxWidth:'366px'}}>
              <Card.Body style={{ backgroundColor: 'white', position: 'relative'}}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Mog Asun</p>
                </div>
                <video src={video4} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="my-5">
            <Card style={{ marginBottom: '30px', marginTop:'30px' , margin:'auto', background:'#fc0c8c' ,maxWidth:'366px' }}>
              <Card.Body style={{ backgroundColor: 'white', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>Dil-E-Mughlai</p>
                </div>
                <video src={video5} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="my-5">
            <Card style={{ marginBottom: '30px', marginTop:'30px' , margin:'auto', background:'#fc0c8c' ,maxWidth:'366px' }}>
              <Card.Body style={{ backgroundColor: 'white', position: 'relative' }}>
                <div className="video-overlay">
                  <p className="description text-center text-bold" style={{ marginBottom: '-40px' }}>DY Patil</p>
                </div>
                <video src={video6} autoPlay muted loop className="video-element" />
              </Card.Body>
            </Card>
          </Col>
          
        </Row>
      </div>
      {/* projects */}

{/*   
  <main style={{marginTop:'70px'}}>


  <div className = "cardsm">
    <img src={work1} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
        
      </h2>
      <p>
      On 6th and 7th May Atraski successfully executed exhibition stall design and fabrication for @dpuunitechsociety at Pragati Maidan, Delhi organised by @collegedunia . This success goes to our entire team who planned and executed the entire project with dedication and passion.      </p>
      
    </div>
  </div>
  <div className = "cardsm">
    <img src={work2} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
            </h2>
      <p>
      Atraski Events (@atraskievents) is proud to be a part of the launch of the new Nissan Magnite for Nissan motor India!      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work3} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      We are proud to implement exhibition stall for Alkem.</p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work4} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      We are proud to implement exhibition stall for Suez.

      </p>
      
    </div>
  </div>
  
  
</main>
<main >

  <div className = "cardsm">
    <img src={work5} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      Mindray India participated in CME organized by the Indian Society for the Study of Pain, Pune Chapter (SSPP) titled “#Ultrasound – An Eye of Pain Physicians” on 17th Oct.      </p>
      
    </div>
  </div>
  <div className = "cardsm">
    <img src={work6} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      Proud to execute book for Weisstechnik at NuGen Mobility Summit organised by ICAT.      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work7} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      Branding for Jonnie Walker
      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work8} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      LIIT ARCH GATE installation for Wellness Forever
      </p>
      
    </div>
  </div>
  
  
</main>
<main>

  <div className = "cardsm">
    <img src={work9} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      nothingcoinbank by 5 star      </p>
      
    </div>
  </div>
  <div className = "cardsm">
    <img src={work10} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      Atraski events (@atraskievents) are proud to be part of this event and we have organized this conference meet for MI      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work11} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      Atraski events (@atraskievents) implemented this mobile showcase van for Pepe Jeans!      </p>
      
    </div>
  </div>


  <div className = "cardsm">
    <img src={work12} alt="" className="work_img"/>
    <div className="card-contentse">
      <h2 className='mb-5'>
      </h2>
      <p>
      Atraskievents successfully organised a virtual meeting for Volkswagen      </p>
      
    </div>
  </div>
  
  
</main> */}

<div style={{padding:'10px' , background:'white'}}>
  <h1 style={{color:'#fc0c8c' , fontWeight:'900'}}>Gallery</h1>
<ResponsiveMasonry columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}>
                <Masonry gutter='20px'>
                   
                       <div className="hem">
                        <img src={work1} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
                        On 6th and 7th May Atraski successfully executed exhibition stall design and fabrication for @dpuunitechsociety at Pragati Maidan, Delhi organised by @collegedunia . This success goes to our entire team who planned and executed the entire project with dedication and passion.

                        </div>
                        </div>

                        <div className="hem">
                        <img src={work2} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
      Atraski Events (@atraskievents) is proud to be a part of the launch of the new Nissan Magnite for Nissan motor India!

                        </div>
                        </div>

                        <div className="hem">
                        <img src={work3} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
                        We are proud to implement exhibition stall for Alkem.
                        </div>
                        </div>

                        <div className="hem">
                        <img src={work4} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>

                        <div className="hello">
                        We are proud to implement exhibition stall for Suez.
                        </div>
                        </div>

                        <div className="hem">
                        <img src={work5} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
                        Mindray India participated in CME organized by the Indian Society for the Study of Pain, Pune Chapter (SSPP) titled “#Ultrasound – An Eye of Pain Physicians” on 17th Oct.

                        </div>
                        </div>

                        <div className="hem">
                        <img src={work6} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>

                        <div className="hello">
                        Proud to execute book for Weisstechnik at NuGen Mobility Summit organised by ICAT.

                        </div>
                        </div>

                        <div className="hem">
                        <img src={work7} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
                        Branding for Jonnie Walker

                        </div>
                        </div>

                        <div className="hem">
                        <img src={work8} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
                        LIIT ARCH GATE installation for Wellness Forever

                        </div>
                        </div>

                        <div className="hem">
                        <img src={work9} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>

                        <div className="hello">
                        nothingcoinbank by 5 star
                        </div>
                        </div>

                        <div className="hem">
                        <img src={work10} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
                        Atraski events (@atraskievents) are proud to be part of this event and we have organized this conference meet for MI.


                        </div>
                        </div>

                        <div className="hem">
                        <img src={work11} style={{width:'100%' , display:"block" , border:'3px solid black'}}/>
                        <div className="hello">
                        Atraski events (@atraskievents) implemented this mobile showcase van for Pepe Jeans!

                        </div>
                        </div>

                        <div className="hem">
                        <img src={work12} style={{width:'100%' , display:"block" , border:'3px solid black'   }}/>
                        <div className="hello">
                        Atraskievents successfully organised a virtual meeting for Volkswagen

                        </div>
                        </div>
                       
                </Masonry>
</ResponsiveMasonry>
</div>




 {/* footer starts  */}

<div className="mt-5 ml-5">

 </div>

 <footer className=" text-white" style={{backgroundColor:'#333'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p><i className="fa fa-envelope"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>        */}
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

export default Work1
