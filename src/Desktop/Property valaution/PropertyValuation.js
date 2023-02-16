import React from 'react';
import '../Property valaution/propertyValuation.css';


const PropertyValuation = () => {
  return (
    <>
    <div className='maincontainer'>
      <h4>Welcome to Propworth</h4>
      <h1>Know the right price of any property here!</h1>
      <p className='boxItem'>
        <a href='#'className='box'>BUY</a>
        <a href='#'className='box'>RENT</a>
        <a href='#'className='box'>PG</a>
        <a href='#'className='box'>PLOT</a>
        <a href='#'className='box'>POST FREE ADD</a>
        <a href='#'className='box'>COMMERVIAL</a><br/>
        <input type='text' id='inputbox' placeholder='Enter Apartment/Society Name or LocailtyName' />
      </p>
    </div>


    {/* section */}

    <div className='section2'>
              <h4>Know the Value of</h4>
              <h2>High Demand Apartment in Kolkata</h2>
        <div className='cardsaera'>

            <div id='card1' className='card'></div>
            <div id='card2'className='card'></div>
            <div id='card3'className='card'></div>
            <div id='card4'className='card'></div>
            <div id='card5'className='card'></div>
            <div id='card6'className='card'></div>
            <div id='card7'className='card'></div>
            <div id='card8'className='card'></div>

        </div>
      
    </div>



    </>
  )
}

export default PropertyValuation