import React from 'react'
import './Post.css';
import Footer from '../footer/Footer';
import undraw_Mobile_encryption_re_yw3o from '../image/undraw_Mobile_encryption_re_yw3o.png';
import undraw_Chat from '../image/undraw_Chat.png';
import undraw_Fin from '../image/undraw_Fin.png';
import server from '../image/server.gif';


const Post = () => {
  return (
    <>

    <div className='aside-form'>
        <h3 id='h31'>Let's get you started</h3>
        <label>You are:</label>
        <span className='round'>Owner</span>
        <span className='round'>Agent</span>
        <span className='round'>Builder</span>
        <br/><br/>
        <label><h3>You are here to:</h3></label>
        <span className='round'>Self</span>
        <span className='round'>Rent/Lease</span>
        <span className='round'>List as PG</span>
        <br/><br/>
        <label>Your contact number</label><br/><br/>
        <input type='text' value='IND +91'/><input type='tel' placeholder='Mobile Number'/>
        <br/><br/>
        <button type='submit'>Start Now</button>
    </div>


     <div className='post-property-with-img'>
        <img src={server} id='pic1'/>

        <div className='first-contents'>
        <h3>Post property Ad to sell or rent for free</h3>

        <p>Get Access to 4 Lakh + buyers</p>
        <p>Sell Faster with premium Service</p>
        <p>Get Expert Advice on Market Trends and Insights</p>
        </div>
    </div>
    
            <div className='works-text'>
                <h1>How it works</h1>
                  <img src={undraw_Chat} className='work-img'/> <span>Step 1</span><br/><h5>Post your Property Ad</h5>
                      <p>Enter all details like locality name, amenities etc. along with uploading Photos</p>
             
             
                    
                      <img src={undraw_Chat}className='work-img'/> <span>Step 2</span><br/><h5>Check Responses on Dashboard</h5>
                     <p>Get access to Buyer/Tenant contact details & connect easily</p>
             
             
                     <img src={undraw_Chat}className='work-img'/><span>Step 3</span><br/><h5>Sell/Rent faster with instant Connect</h5>
                     <p>Negotiate with your prospective Buyer/Tenant & mutually close the deal.(site-visit)</p>
             </div>

             <div className='selling-property'>
             <h1>Tips on Selling a Property Online</h1>
             <img src={undraw_Fin} className='tips-sell-img'/>
                 <h4>Post your Property Ad</h4>
                 <p>Enter all details like locality name, amenities etc. along with uploading Photos</p><br/>
                
                 <img src={undraw_Fin} className='tips-sell-img'/>
                <h4>Add Quality Photos</h4>
                <p>Do not forget to add high-quality photos as it's key for any property to stand out. You can always request a photoshoot of your property through Magicbricks "Photoshoot Service".</p><br/>
                
                <img src={undraw_Fin} className='tips-sell-img'/>
                <h4>Choose Correct Locality/Address</h4>
                <p>Make sure to accurately map your locality while filling in the details of your property. Adding a correct locality is essential to receive genuine queries for your property.
                </p><br/>
                
                <img src={undraw_Fin} className='tips-sell-img'/>
                <h4>Write a Great Description</h4>
                <p>Provide a short description for your property highlighting the key USPs and all the relevant details to help buyers make a decision. On Magicbricks, you can always request a stellar description by "Content Experts".</p>

             </div>
             <div className='benefits-sell'>
                 <h1>Benefits of Selling Your Property Online</h1>
                 <p>With a plethora of real estate websites to choose from, posting property online is now easy, convenient and hassle-free. Here are some benefits of buying and selling your property online:</p>
                
                <h3>Time-Efficient</h3>
                <p>Selling your property online with portals such as Magicbricks can help you save time, manage your bookings at your convenience and receive quality leads quickly.</p>
                <img src={undraw_Mobile_encryption_re_yw3o} id='bentits-img'/>

                <h3>Get Better Exposure To Potential Buyers</h3>
                <p>A large number of prospective buyers search online, a far easier way than visiting individuals properties. This helps your property get wider exposure to lakhs of buyers present online.</p>
                
                <img src={undraw_Mobile_encryption_re_yw3o} id='bentits-img'/>
                <h3>Cost-Effective</h3>
                <p>By opting to sell online, you can expect a significant reduction in agent fees and overall cost associated with selling a home traditionally.</p>

                <img src={undraw_Mobile_encryption_re_yw3o} id='bentits-img'/>
                <h3>More Services</h3>
                <p>Not only Magicbricks offers a multitude of property services such as rent agreements, home cleaning, renovation, tenant verification, and more for your convenience. </p>
                 
             </div>

             <div className='Testimonials'>
                 <h1>Testimonials from our customers</h1>
                 
                 <p className='cards'>I really like MagicBricks. It is way better than any property portal I have used so far in terms of convenience, and it has a good number of responses. I also think that it's the most user-friendly real estate portal in India. I will recommend it to everybody!
Khushi ChoudharyDelhi</p>

<p className='cards'>I really like MagicBricks. It is way better than any property portal I have used so far in terms of convenience, and it has a good number of responses. I also think that it's the most user-friendly real estate portal in India. I will recommend it to everybody!
Khushi ChoudharyDelhi</p> <p className='cards'>I really like MagicBricks. It is way better than any property portal I have used so far in terms of convenience, and it has a good number of responses. I also think that it's the most user-friendly real estate portal in India. I will recommend it to everybody!
Khushi ChoudharyDelhi</p>
             </div>
            
    

<Footer/> 
    </>
  )
}

export default Post