import React from "react";
import "../App.css";
import './HeroSection.css';

import { Button } from "./Button";

function HeroSection() {
  return (
    <div className="hero-container">
      <img src="/img/joker.jpg " />
      <img className='bg--mobile' src="/img/bgmobile.PNG" />
      <h1>Welcome To Page Mehrad </h1>
      <p>Axs Me ?</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}


export default HeroSection