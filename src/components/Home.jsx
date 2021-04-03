import React, { useState } from 'react'
import '../styles/Home.css'
import Price from "./Price";
import Cal from './Cal'
import ReactCarousel from './Carosuel'

const Home = () => {


  const [Ch_price,setCh_Price] = useState(false);

  const Price_Visible = () => {
    setCh_Price(!Ch_price);
  };

  const [calender,setCal] = useState(false);

  const showCalendar = () => {
    setCal(!calender);
  }

  const successCallback = (possition) => {
  };

const errorCallback = (error) => {
    console.log('Please Allow Location');
  };

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  return(
    <>
      <div id='home'>
      <div className="react_carosurl">
        <ReactCarousel className='react_carosurl' />
      </div>
      <div id='ServiceForm'>
        <button id='bookBtn' onClick={showCalendar}>BOOK NOW </button>
          <h3>Get instance bike service in <span><i class="fas fa-map-marker-alt"></i>Mumbai</span></h3>
          <i class="fas fa-mouse-pointer"></i>
          <select id='vehicals'>
            <option>Select brand</option>
            <option>Honda</option>
            <option>Suzuki Access</option>
            <option>TVS</option>
            <option>Hero Pleasure</option>
          </select><br/><br/>
          <input type='email' required placeholder='Enter Email'/><i class="fas fa-envelope"></i>
          <button id='check-price-btn' onClick={Price_Visible}>Check price</button>
            <div id='social'>
            <div class="social-links">
        <a href="https://github.com/Aman2221"><i class="fab fa-github"></i></a>
        <a href="https://twitter.com/Aman23398618"><i class="fab fa-twitter"></i></a>
        <a href="https://www.facebook.com/profile.php?id=100012875318770"><i class="fab fa-facebook-square"></i></a>
        <a href="https://www.instagram.com/aman_singhhhhhh/"><i class="fab fa-instagram"></i></a>
        <a href="https://www.linkedin.com/in/aman-singh-6a81281b3/"><i class="fab fa-linkedin-in"></i></a>
    </div>
            </div>
      </div>
      <div id='Check_Price' className = {Ch_price ? 'Check_Price' : 'Check_Price AddPrice'}>
      <div id='price-1'>  
          <Price
            priceNAme = 'Wash'
            Cost = 'Rs. 100'
          />
      </div>  
      <div id='price-2'>  
          <Price
            priceNAme = 'Diesel Wash'
            Cost = 'Rs. 200'
          />
      </div>
      <div id='price-3'>  
          <Price
            priceNAme = 'Oiling'
            Cost = 'Rs. 600'
          />
      </div>
      </div>
    </div>
    <div id='cal' className={calender ? 'cal' : ' cal showCal'}>
         <Cal/>
    </div>
    </>
  );
};

export default Home;