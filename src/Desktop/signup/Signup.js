import React from 'react'
import '../signup/Signup.css';
import home from '../image/home.jpg';


const Signup = () => {
  return (
    <>
    <div className='signup-form'>
      <h2>Sign Up</h2>
      <p>I am <input type='radio' className='input-form'/>Buyer/Owner</p>
     <p> <input type='radio'className='input-form'/>Agent</p>
     <p> <input type='radio'className='input-form'/>Builder</p>
     <br/>
      <input type='text' placeholder='Name'className='input-form'/><br/>
      <input type='email' placeholder='Email'className='input-form'/><br/>
      <input type='password' placeholder='Password'className='input-form'/><br/>
      <select className='input-form'>
        <option> IND +91</option>
        <option>+92</option>
        <option>+93</option>
      </select>
      <input type='tel' placeholder='Mobile'className='input-form'/><br/>
      <p>
        <input type='checkbox'/> I agree to Magicbricks T&C, Privacy Policy, & Cookie Policy
      </p><br/>
      <button type='submit'>Sign UP</button>
      <br/>
      <p>Already registered? <a href='#'>Login Now</a></p>

    </div>

    <div>
      <img src={home} className="bannerpic"/>
      <div className='content-text'>
       <h3>Things you Can Do with Magicbricks Account</h3><br/><br/>
       <ul>
           <li>Post one Single Property for FREE</li><br/>
           <li>Set property alerts for your requirement</li><br/>
           <li>Get accessed by over 1 Lakh buyers</li><br/>
           <li>Showcase your property as Rental, PG or for Sale</li><br/>
           <li>Get instant queries over Phone, Email and SMS</li><br/>
           <li>Performance in search & Track responses & views online</li><br/>
           <li>Add detailed property information & multiple photos per listing</li><br/>
       </ul>
   </div>
    </div>
    </>
  )
}

export default Signup