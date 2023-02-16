import React from 'react'
import './MyDash.css'
const MyDash = () => {
  return (
   <>
   <div className='left'>
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

   <div className='right'>
       <h4>Login</h4>
       <label>Enter Email ID or Mobile No.</label><br/>
       <input type='text' />
       <br/>
       <label>Password</label>
       <br/>
       <input type='Password' />
       <br/>
       <button type='submit'>Login</button>
       <br/><br/>
       New to Shivila
   </div>

   </>
  )
}

export default MyDash