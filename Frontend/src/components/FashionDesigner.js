import React,{useState} from 'react';
import './fashionRegistration.css';
import fashion from './images/Copy of DELHI FASHION CONFLUENCE.jpg';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';




export default function FashionDesigner() {
  const[name,setname]=useState(" ")
  const[email,setemail]=useState(" ")
  const[Town,settown]=useState(" ")
  const[Number,setno]=useState(" ")

  const navigate = useNavigate();
  const[insta,setinsta]=useState(" ")


  const checkout=async(amount)=>{

    localStorage.setItem('amount', amount); // Set the 'amount' in localStorage\
try{
  if(Number.length > 9){
  var data1 = await fetch("http://localhost:5000/Order6",{
    method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({amount,name, email, Town, Number })
  })
 
  var keys= await fetch("http://localhost:5000/key",{
    method: 'GET',

  })
  keys = await keys.json()
  console.log(keys,"yes")
  data1 = await data1.json()


  // const keys='rzp_test_OmCfFJhnp3Fztn'
  console.log(keys)
  console.log(data1.amount)
  console.log(data1.id)
  console.log(data1)
}
else{
  alert("Please Enter Valid Number")
}
  if (data1.success) {

  const  options = {
    key:keys.key, // Enter the Key ID generated from the Dashboard
    amount: data1.order.tot, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "Atraski Fashion Designer Registration", //your business name
    description: "",
    // image: "https://example.com/your_logo",
    order_id: data1.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    callback_url: "http://localhost:5000/verification",
    handler: function (response) {
      // Handle the payment success callback here
      console.log("Payment successful: ", response);
      try {
        navigate('/');
      } catch (error) {
        console.error('Navigation error:', error);
      }
      // You can navigate to a success page or perform further actions here

      // Save data to the database (you need to implement this on your backend)
      saveDataToDatabase();
    },
    // prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
    //     name: "Gaurav Kumar", //your customer's name
    //     email: "gaurav.kumar@example.com",
    //     contact: "9000090000" //Provide the customer's phone number for better conversion rates 
    // },

    notes: {
        "address": "Razorpay Corporate Office"
    },
    theme: {    
        "color": "#ffc0cb"
    }
};
const rzp1 = new window.Razorpay(options);

        rzp1.on("payment.success", function (response) {
          // Payment was successful, now save data to the database
          saveDataToDatabase();
          console.log("Payment successful:", response);
          // You can navigate to a success page or perform further actions here
        });

        rzp1.open();
      } else {
        // console.error("Error creating Razorpay order:", data.error);
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error processing payment:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };
  

  const saveDataToDatabase = async () => {
    
    try {
      const paisa = localStorage.getItem('amount')

      // Send a request to your server to save data to the database
      const response = await fetch("http://localhost:5000/saveDataToDatabase6", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, Town, Number, amount:paisa, insta}),
      });

      const data = await response.json();

      if (data.success) {
        console.log("Data saved successfully:", data);
        // You can show a success message to the user
      } else {
        console.error("Error saving data:", data.error);
        // Handle the error, e.g., show an error message to the user
      }
    } catch (error) {
      console.error("Error saving data:", error);
      // Handle the error, e.g., show an error message to the user
    }
  };

  return (
    <div>
        <div className="container-fluid pb-5 pms" style={{width:'100vw' , height:'1600px' , background:'#fff'}}>
            <div className="mainbox d-flex">
                <div className="leftbox w-50 mt-5" >
                    <img src={fashion} width="700px" height="450px" className="imagform"/>

                    <div className="links mt-5 ml-2">
                  <Link to="/fashionattendees" style={{fontSize:'25px' , borderBottom:'1px solid pink'}}>Register for Attendees</Link>
                </div>

                <div className="links mt-5 ml-2">
                  <Link to="/fashionregstration" style={{fontSize:'25px' , borderBottom:'1px solid pink'}}>Register for Modals</Link>
                </div>

                </div>

                <div className="rightbox w-50 mt-5">
                    <h2 className=" headingss" style={{color:'#fc0c8c' , fontWeight:'700', fontSize:'40px' , borderBottom:'5px solid #fc0c8c' , width:'80%'}}>DELHI FASHION2023 CONFLUENCE</h2>

                    <div className="price mt-3">
                     <span><del>₹16,999</del></span>   <span style={{fontSize:'25px' , fontWeight:'900' , color:'#fc0c8c'}}>₹14,999</span>
                    </div>

                    <div className="date mt-4">
                        <h4 className="" style={{color:'#000' , fontSize:'17px' , fontWeight:'700'}}>Date: 29th December, Friday</h4>
                    </div>

                    <div className="time mt-4">
                        <h4 className="" style={{color:'#000' , fontSize:'17px' , fontWeight:'700'}}>Time: 5pm onwards</h4>
                    </div>

                    <div className="location mt-4">
                        <h4 className="" style={{color:'#000' , fontSize:'17px' , fontWeight:'700'}}>Location: <span style={{color:'#fc0c8c'}}>La Vie En Rose Cafe</span></h4>
                    </div>

                    <div className="map mt-4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.7873525429954!2d77.1947250749524!3d28.516044889362007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1a14b923753%3A0x3f6fe0a8810d3bf5!2sLa%20Vie%20En%20Rose%2C%20Atraski-%20Co-working%20Space%20%26%20Virtual%20Office!5e0!3m2!1sen!2sin!4v1702276527541!5m2!1sen!2sin" className="mapss" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>

                    

                </div>
            </div>

            <div className="forms mt-5" style={{width:'100%'}}>
                    <div className="formbox" style={{width:'100%' , height:'70px' , borderTopLeftRadius:'25px' , borderTopRightRadius:'25px' , background:'#fc0c8c' , textAlign:'center'}}>
                       <span className="" style={{color:'white' , fontSize:'25px' , fontWeight:'700'}}>Fashion Designer Registration</span>     
                    </div>
                    <div className="formbox" style={{width:'100%' , height:'400px' , borderBottomLeftRadius:'25px' , borderBottomRightRadius:'25px'}}>
                    <Form onSubmit={(e) => { e.preventDefault(); checkout(14999); }} style={{margin:'0' , maxWidth:'100%'}}>
          

          <Form.Group controlId="name" className="formms">
            <Form.Label className="text-black" style={{fontWeight:'700'}}>Name</Form.Label>
            <Form.Control
            style={{border:'1px solid black' , width:'100%'}}
              type="text"
              name="name"
              value={name}
              onChange={(e)=>{setname(e.target.value)}}
              placeholder="Enter your name"
              className="mb-3 cls"
              required
            />
          </Form.Group>
  
          <Form.Group controlId="email" className="formms">
            <Form.Label className="text-black" style={{fontWeight:'700'}}>Email address</Form.Label>
            <Form.Control
            style={{border:'1px solid black' ,  width:'100%'}}
              type="email"
              name="email"
              value={email}
              onChange={(e)=>{setemail(e.target.value)}}
              placeholder="Enter email"
              className="mb-3 cls"
              required
            />
          </Form.Group>
  
          
              <Form.Group controlId="checkIn" className="formms">
                <Form.Label className="text-black" style={{fontWeight:'700'}}>Town/City</Form.Label>
                <Form.Control
                style={{border:'1px solid black' , width:'100%'}}
                  type="text"
                  name="checkIn"
                  value={Town}
                  onChange={(e)=>{settown(e.target.value)}}
                  className="mb-3 cls"
                  required
                />
              </Form.Group>
          
            
          
              <Form.Group controlId="checkOut" className="formms">
                <Form.Label className="text-black" style={{fontWeight:'700'}}>Mobile(whatsapp)</Form.Label>
                <Form.Control
                style={{border:'1px solid black' , width:'100%'}}
                  type="text"
                  name="checkOut"
                  value={Number}
                  onChange={(e)=>{setno(e.target.value)}}
                  className="mb-3 cls"
                 
                  required
                />
              </Form.Group>

              <Form.Group controlId="insta" className="formms">
              <Form.Label className="text-black" style={{fontWeight:'700'}}>Instagram Link</Form.Label>
              <Form.Control
              style={{border:'1px solid black' , width:'100%'}}
                type="text"
                name="insta"
                placeholder="Instagram URL"
                value={insta}
                onChange={(e)=>{setinsta(e.target.value)}}
                className="mb-3 cls"
                required
              />
            </Form.Group>
  {/* 
          <Form.Group controlId="guests">
            <Form.Label>Number of Guests</Form.Label>
            <Form.Control
              as="select"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
            >
              <option value={1}>1 Guest</option>
              <option value={2}>2 Guests</option>
              <option value={3}>3 Guests</option>
            </Form.Control>
          </Form.Group> */}
  
          {/* <Form.Group controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              placeholder="Optional: Leave a message for the hotel"
            />
          </Form.Group> */}
  
          <Button variant="primary" type="submit" style={{width:'100%'}} className="clsm">
            Register
          </Button>
        </Form>
  
  
                    </div>
                    </div>
        </div>
    </div>
  )
}
