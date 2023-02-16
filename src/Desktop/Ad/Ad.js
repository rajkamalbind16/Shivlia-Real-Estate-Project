import React from 'react';
import './Ad.css';
import realestate from '../image/realestate.jpg';
import Footer from '../footer/Footer';



const Ad = () => {
  return (
    <>
      <img src={realestate} className='realestate-pic'/>

    <div className='main-container'>
        <h4>11 Million Property Seekers Are Here!</h4>
        <h2>11 Million Property Seekers Are Here!Advertise Your Property With Us</h2>
        <p>I am:</p> 
        <p className=''><input type='radio'/>Individual</p>
        <p><input type='radio'/>Agent</p>
          <p><input type='radio'/>Builder</p><br/>
          

        <p>I am looking to</p>
        <p><input type='radio'/>Self</p>
         <p><input type='radio'/>Rent</p> <br/>


        <p>My Property</p>
         <p><input type='radio'/>Residentai</p>
         <p><input type='radio'/>Commercial</p> <br/>
        <button>Show Me Package</button>
    </div>

    <div className='order-form'>
        <h3>MY ORDER <button>GO TO CART</button></h3>
        
            <h3>Talk To Experts | +91 9876543210</h3>
            <h4>Request a Callback</h4>
            <input type='text' className='form' placeholder='Name'/><br/>
            <input type='tel'className='form' placeholder='Mobile'/><br/>
            <input type='mailto'className='form' placeholder='Email' /><br/>
            <input type='text' className='form' placeholder='City'/><br/>
            <p className='small'>Enter your query. Please specify the convenient time to get a callback.</p><br/>
            <p> <input type='checkbox'/>I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy</p>
            <button>Get a Callback</button>
        
    </div>

    <div className='benefits'>
      <h3>Benefits You Get</h3>
      <p>Guaranteed Visibility | Maximum Buyer Attention | Better Responses</p>

      <div className='div1'>
        <h4>50,000+ Happy Clients</h4>
        <p>
        95% of our customers are 'happy with us' and over 80% 'recommend us'
        </p>
      </div>


      <div className='div2'>
        <h4>75,000+ Services Delivered</h4>
        <p>
        From advertising solutions to tenant verification to legal assistance, we do it all
        </p>        
      </div>

        <div className='div3'>
          <h4>Dedicated Relationship Manager</h4>
          <p>
          Most comprehensive selling/ renting assistance to help you at every stage.
          </p>
        </div>

    </div>

    <div>
      <h2>Testimonials</h2>
      <p id='card-testimonial1'><h4>Ruma Dhingra</h4>
The constant touch through other true calls really surprised me.They sent their officer to get the photographs of my shop & promptly posted all the pics which helped me in getting the tenant fast. Hats off to Magicbricks.</p>

    <p id='card-testimonial2'>
      <h4>Amit Abrol</h4>
      I used Magicbricks to sell a property. As the word suggest, Magicbricks can convert a dream home into reality.
    </p>
    </div>
     <Footer/>
    </>
  )
}

export default Ad