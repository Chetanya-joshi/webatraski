import React, {useState} from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";


export default function ModalForm() {
  const[name,setname]=useState(" ")
  const[email,setemail]=useState(" ")
  const[Town,settown]=useState(" ")
  const[Number,setno]=useState(" ")
  const[insta,setinsta]=useState(" ")


  const checkout=async(amount)=>{

    localStorage.setItem('amount', amount); // Set the 'amount' in localStorage\
try{
  if(Number.length > 9){
  var data1 = await fetch("http://localhost:5000/Order3",{
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
    name: "Atraski Model Registration", //your business name
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
          console.log("Payment successful: ", response);
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
      const response = await fetch("http://localhost:5000/saveDataToDatabase3", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, Town, Number, amount:paisa ,insta}),
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
        <div className="container-fluid" style={{height:'30vh' , width:'100vw' , background:'#fc0c8c' , display:'flex' , justifyContent:'center'}}>
            <div className="modalbox d-flex justify-center mt-2" style={{height:'150px' , width:'400px',padding:'20px 41px' , background:'white' , borderRadius:'25px ' }}>
                <h1 className="text-black" style={{fontFamily:'sans-serif' , fontSize:'40px', textTransform:'uppercase'}}>Models Registration</h1>
            </div>

            
        </div>

        <div className="container-fluid text-black" style={{height:'auto' , width:'100vw' , background:'#fc0c8c' , display:'flex' , justifyContent:'center'}}>
            <div className="modalbox d-flex justify-center mt-2" style={{height:'auto' , width:'1000px' ,padding:'0px 25px', background:'white' , borderRadius:'25px ' }}>
                {/* <h1 className="text-black" style={{fontFamily:'cursive' , fontSize:'40px', textTransform:'uppercase'}}>Models Registration</h1> */}
                <div className="heading-1 text-black pt-3 pb-3">
                    <h3 className="" style={{fontFamily:'sans-serif' , color:'#fc0c8c'}}>Register with us now!</h3>

                    <p style={{fontFamily:'sans-serif'}}>Welcome<br /> to Atraski Fashion</p>

                    <p style={{fontFamily:'sans-serif'}}>

                    Fashion Management Agency operating in 25+ major cities across India.<br /><br />

Welcome to Atraski Fashion, where fashion dreams come to
life! We are your premier fashion management agency, dedicated to fostering
collaborations between brands and models. With a keen eye for style and a
passion for creativity, we specialise in orchestrating seamless partnerships
that elevate the fashion industry. <br /><br />

Our expert team meticulously manages makeup
artists, photographers, and models, ensuring every photoshoot is a masterpiece
waiting to happen. At Atraski, we're not just a management agency; we're the
bridge that connects talent with opportunities, transforming visions into
stunning realities.<br /><br />

We understand that each individual is a canvas waiting to be transformed, and each photograph a work of art in the making. We not only provide unparalleled opportunities for creative shoots but also offer tailor-made experiences for individual aspirations. Join us in crafting the future of fashion, one frame at a time.<br />
<br />
Our Past Collaborations: Our designers have lit up the runway at events like Bhubaneswar Fashion Week, Bangalore Fashion Confluence,Delhi Fashion conference, FDDI ,NIFT etc and collaborations with brands like Pantaloons, Big Bazar,Adonis, Westside etc .

                    </p>
                </div>


                

            </div>

            
        </div>

        <div className="container-fluid" style={{height:'auto' , width:'100vw' , background:'#fc0c8c' , display:'flex' , justifyContent:'center'}}>
            
        <Form onSubmit={(e) => { e.preventDefault(); checkout(499); }} style={{width:'500px' , fontWeight:'900'}}>
          

        <Form.Group controlId="name" >
          <Form.Label className="text-black">Name</Form.Label>
          <Form.Control
          style={{border:'1px solid black'}}
            type="text"
            name="name"
            value={name}
            onChange={(e)=>{setname(e.target.value)}}
            placeholder="Enter your name"
            className="mb-3"
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label className="text-black">Email address</Form.Label>
          <Form.Control
          style={{border:'1px solid black'}}
            type="email"
            name="email"
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            placeholder="Enter email"
            className="mb-3"
            required
          />
        </Form.Group>

        
            <Form.Group controlId="checkIn">
              <Form.Label className="text-black">Town/City</Form.Label>
              <Form.Control
              style={{border:'1px solid black'}}
                type="text"
                name="checkIn"
                value={Town}
                onChange={(e)=>{settown(e.target.value)}}
                className="mb-3"
                required
              />
            </Form.Group>

            <Form.Group controlId="insta">
              <Form.Label className="text-black">Instagram Link</Form.Label>
              <Form.Control
              style={{border:'1px solid black'}}
                type="text"
                name="insta"
                placeholder="Instagram URL"
                value={insta}
                onChange={(e)=>{setinsta(e.target.value)}}
                className="mb-3"
                required
              />
            </Form.Group>
        
          
        
            <Form.Group controlId="checkOut">
              <Form.Label className="text-black">Mobile(whatsapp)</Form.Label>
              <Form.Control
              style={{border:'1px solid black'}}
                type="text"
                name="checkOut"
                value={Number}
                onChange={(e)=>{setno(e.target.value)}}
                className="mb-3"
               
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

        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>


            
        </div>

        
    </div>
  )
}
