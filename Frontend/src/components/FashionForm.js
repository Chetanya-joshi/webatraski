import React,{useState} from 'react';
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './FashionForm.css';

export default function FashionForm() {
    const[name,setname]=useState(" ")
  const[email,setemail]=useState(" ")
  const[Town,settown]=useState(" ")
  const[Number,setno]=useState(" ")

  const navigate = useNavigate();
//   const[insta,setinsta]=useState(" ")


  const checkout=async(amount)=>{

    localStorage.setItem('amount', amount); // Set the 'amount' in localStorage\
try{
  if(Number.length > 9){
  var data1 = await fetch("http://localhost:5000/Order4",{
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
      const response = await fetch("http://localhost:5000/saveDataToDatabase4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, Town, Number, amount:paisa}),
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
    <div className="container-fluid pt-2" style={{background:'white' , height:'auto' , width:'100vw'}} >

<div className="d-flex w-100 formflex" style={{justifyContent:'space-between'}}>
        
                    <div className="Details" style={{width:'700px'}}>
        <div className="location mt-5 ">
                        <h4 style={{color:'black' , fontSize:'16px' , textAlign:'justify'}}>
                      <span style={{fontWeight:'700' , color:'#fc0c8c'}}>  Registration Process: </span><br /><br />
                      <span style={{fontWeight:'700'}}>Step 1: Register Yourself through the Link:<br /></span>
Interested individuals need to register for the event using a provided link.<br /><br />
<span style={{fontWeight:'700'}}>Step 2: Submit Your Walk Video:<br /></span>
Participants are required to submit a video showcasing their walk, presumably as part of the selection process.<br /><br />
<span style={{fontWeight:'700'}}>Step 3: Match the Criteria:<br /></span>
Applicants must meet certain criteria, which could include specific attributes, skills, or experience relevant to modeling.<br /><br />
<span style={{fontWeight:'700'}}>Step 4: Walk Session (Out in the Event Area):<br /></span>
Successful applicants may undergo a walk session, possibly conducted in the event area.<br /><br />
<span style={{fontWeight:'700'}}>Step 5: Top 20 Candidates Selected for the Final Walk:<br /></span>
Based on performance and criteria, the top 20 candidates will be selected to participate in the final walk.<br /><br />
<span style={{fontWeight:'700'}}>Step 6: Look Test Before the Final Day:<br /></span>
Before the final day, selected candidates may undergo a look test, ensuring they meet the desired aesthetic standards for the event.<br /><br />
<span style={{fontWeight:'700'}}>Step 7: Get a Chance to Walk in the Event:<br /></span>
Finally, successful candidates have the opportunity to participate in the fashion walk during the event.
                        </h4>
                    </div>



            

    



        </div>



        <div className="registars mt-5" style={{width:'700px'}}>
                <h4 style={{color:'black' , fontSize:'16px' , textAlign:'justify'}}>
                <span>
                <span style={{fontWeight:'700' , color:'#fc0c8c'}}> Benefits for All Registering Individuals:</span><br /><br />

                <span style={{fontWeight:'700'}}>Event Attendance:<br /></span>
Description: All applicants, regardless of selection, have the opportunity to attend the event.<br /> <br />

<span style={{fontWeight:'700'}}>Access to After Party:<br /></span>
Description: Selected models gain exclusive access to the after-party, enhancing their overall experience and providing networking opportunities.<br /><br />

<span style={{fontWeight:'700'}}>Model Walk Practice:<br /></span>
Description: Participating models receive dedicated practice sessions to refine their runway skills, ensuring preparedness for the event.<br /><br />

<span style={{fontWeight:'700'}}>Model After Party:<br /></span>
Description: Invitation to a special after-party provides models with networking opportunities, a chance to celebrate, and potential connections within the fashion industry.<br /><br />

<span style={{fontWeight:'700'}}>Goodies from Different Brands:<br /></span>
Description: Models receive goodies from various brands, providing a positive incentive for participation and the opportunity to experience and promote new products.<br /><br />

<span style={{fontWeight:'700'}}>Media Coverage:<br /></span>
Description: The event ensures media coverage, offering models exposure and potential recognition within the industry.<br /><br />

<span style={{fontWeight:'700'}}>Portfolio Shoot:<br /></span>
Description: A portfolio shoot is provided as a valuable opportunity for models to enhance their professional portfolio, showcasing versatility and style.
                </span>
                </h4>
            </div> 


                </div> 


                <div className="forms mt-5" style={{width:'100%'}}>
                    <div className="formbox" style={{width:'100%' , height:'70px' , borderTopLeftRadius:'25px' , borderTopRightRadius:'25px' , background:'#fc0c8c' , textAlign:'center'}}>
                       <span className="" style={{color:'white' , fontSize:'25px' , fontWeight:'700'}}>Model Registration</span>     
                    </div>
                    <div className="formbox" style={{width:'100%' , height:'400px' , borderBottomLeftRadius:'25px' , borderBottomRightRadius:'25px'}}>
                    <Form onSubmit={(e) => { e.preventDefault(); checkout(499); }} style={{margin:'' , maxWidth:'100%'}}>
          

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

  )
}
