import React from 'react'
import './Nav.css';
import Post from '../Post/Post';
import Ad from '../Ad/Ad';
import Footer from '../footer/Footer';
import Iadvantage from '../iadvantage/Iadvantage';
import Signup from '../signup/Signup';
import MyDash from '../Login/MyDash';
import PropertyValuation from '../Property valaution/PropertyValuation';



const Nav = () => {
  return (
    <>
    <div>
         {/* <nav>        
                  <div className='sell'>
                  <div className='left-side'>
                     <p id='onwer'> For Owner</p>
                     <p>Post Property</p>
                     <p>My Dashboard</p>
                     <p sell-rent>Sell Rent Ad Package</p>
                    </div>

                  <div className='center'>
                     <p id='agent'>For Agent & Builder</p>
                     <p>My Dashboard</p>
                     <p>Ad Package</p>
                     <p>iAdvantage</p>
                     <p>Developer Lounge</p>
                     <p>Sales Enquiry</p>
                  </div>
                  
                  <div className='right-side'>
                        <p id='selling'>Selling Tools</p>
                        <p>Property Valuation</p>
                        <p>Find an Agent</p>
                        <p>Rates and Trends</p>
                  </div>
                  </div>

                  
    </nav> */}





    
      {/* <div className='nav-bar'>
        <a href='#' className='nav-items'>Shilia</a>
        <a href='#'className='nav-items'>Buy</a>
        <a href='#'className='nav-items'>Rent</a>
        <a href='#'className='nav-items'>Sell</a>
        <a href='#'className='nav-items'>Home Loan</a>
        <a href='#'className='nav-items'>Property Services</a>


      </div> */}

    </div>
    
    {/* <Post/>  */}

    {/* <Ad/> */}

    {/* <Footer/> */}

    {/* <Iadvantage/> */}

    {/* <MyDash/> */}

    {/* <Signup/> */}

    <PropertyValuation/>
    
    </>
  )
}

export default Nav