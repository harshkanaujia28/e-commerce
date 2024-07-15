import React from 'react'
import hero_banner from '../Assets/hero_banner.png'
import './Hero.css'
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <div className='hero-secton'>
        <div className="hero-right">
        <div className="content">
        <h3>Shop Your Wishes On ShopMart</h3>
                <h1>50% Summer <br/>Super Sale</h1>
                <br/>
                <button className="explore"><Link to='/Explore'>New Collection </Link></button>
            </div>
        </div>
        <div className="hero-left">
       
        <img src={hero_banner} alt="" />
        </div>
      
    </div>
  )
}

export default Hero
