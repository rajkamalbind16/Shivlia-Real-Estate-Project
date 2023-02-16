import React from 'react';
import '../footer/Footer.css';
import { FaYoutube ,FaLinkedin,FaInstagram,FaFacebook, FaTwitter,FaGooglePlay,FaAppStore} from "react-icons/fa";
import { useState } from 'react';

    function TextWithReadMore({ text, maxLength }) {
      const [showFullText, setShowFullText] = useState(false);
    
      const toggleShowFullText = () => {
        setShowFullText(!showFullText);
      };
    
      return (
        <div>
          {showFullText ? text : `${text.slice(0, maxLength)}...`}
          {!showFullText && (
            <button onClick={toggleShowFullText}>Read more</button>
          )}
        </div>
      );
    }
    
    function Footer() {
      const sampleText = "Magicbricks is a full stack service provider for all real estate needs, with 15+ services including home loans, pay rent, packers and movers, legal assistance, property valuation, and expert advice. As the largest platform for buyers and sellers of property to connect in a transparent manner, Magicbricks has an active base of over 15 lakh property listings.";
      return (
        <>
        <div className='left-align'>
        <h3>About Magicbricks</h3>
          <p><TextWithReadMore text={sampleText} maxLength={50} /></p>
        
        <h3>More from our Network</h3>
        <p className='span-items'>
            <span className='list-items'id='times-of-india'>Times of India</span>
            <span className='list-items'id='eco-india'>Economic Times</span>
            <span className='list-items'id='navbharat-india'>Navbharat times</span>
            <span className='list-items'id='india-times'>India Times</span>
            <span className='list-items'id='filmfare'>Filmfare</span>
            <span className='list-items'id='menxp'>MensXp</span>
            <span>TimesJobs</span>
            <span className='list-items'id='gadget'>Gadgets Now</span>
        </p>
    </div>
        
        <div>
            <FaAppStore className='my-icons'/>
            <FaGooglePlay className='my-icons'/>
            <FaYoutube className='my-icons'/>
            <FaLinkedin className='my-icons'/>
            <FaInstagram className='my-icons'/>
            <FaFacebook className='my-icons'/>
            <FaTwitter className='my-icons'/>
        </div>



    <div className='align-right'>
        <h3>Properties in India</h3>
        <p>
            <span className='list-items'id='gadget'>Property in New Delhi</span>
            <span className='list-items'id='gadget'>Property in Mumbai</span>
            <span className='list-items'id='gadget'>Property in Chennai</span>
            <span className='list-items'id='gadget'>Property in Pune</span>
            <span className='list-items'id='gadget'>Property in Noida</span>
            <span className='list-items'id='gadget'>Property in Gurgaon</span>
            <span className='list-items'id='gadget'>Property in Bangalore</span>
            <span className='list-items'id='gadget'>Property in Ahmedabad</span>
            

        </p>
        <h3>New Projects in India</h3>
        <p>
        <span></span>
            <span className='list-items'id='gadget'>New Projects in New Delhi</span>
            <span className='list-items'id='gadget'>New Projects in Mumbai</span>
            <span className='list-items'id='gadget'>New Projects in Chennai</span>
            <span className='list-items'id='gadget'>New Projects in Pune</span>
            <span className='list-items'id='gadget'>New Projects in Noida</span>
            <span className='list-items'id='gadget'>New Projects in Gurgaon</span>
            <span className='list-items'id='gadget'>New Projects in Bangalore</span>
            <span className='list-items'id='gadget'>New Projects in Ahmedabad</span>
        </p>
        </div>


        <div>
            <p className='lower-nav'>
                <a href='#' className='list-items1'id=''>Sitemap</a>
                <a href='#' className='list-items1'id=''>Terms & Conditions</a>
                <a href='#' className='list-items1'id=''>Privacy Policy</a>
                <a href='#'className='list-items1'id=''>Blog</a>
                <a href='#'className='list-items1'id=''>Careers</a>
                <a href='#'className='list-items1'id=''>Testimonials</a>
                <a href='#' className='list-items1'id=''>Feedback</a>
                <a href='#' className='list-items1'id=''>Unsubscribe</a>
                <a href='#' className='list-items1'id=''>Sales Enquiry</a>
                <a href='#' className='list-items1'id=''>Buy Our Services</a>
                
            </p>
        </div>
        <p id='disclaimer'>Disclaimer: Magicbricks Realty Services Limited is only an intermediary offering its platform to advertise properties of Seller for a Customer/Buyer/User coming on its Website and is not and cannot be a party to or privy to or control in any manner any transactions between the Seller and the Customer/Buyer/User. All the offers and discounts on this Website have been extended </p>
        </>
      );
    }
    

export default Footer