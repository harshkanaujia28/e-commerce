import React from 'react'
import './Offer.css'
import exclusive_image from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='Offer'>
      <div className="Offer-right">
          <h2>Explusive Offers <br /> For Women</h2>
          <p className='only'>Only on Shopmart</p>
          <button className='check'>Check Now</button>
      </div>
      <div className="Offer-left">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offer
