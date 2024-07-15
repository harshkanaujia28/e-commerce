import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/Popular/Popular'
import Offer from '../components/offer/Offer'
import Exclusive from '../components/Exclusive/Exclusive'
import Subscribe from '../components/Suscribe/Subscribe' 
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/footer/Footer'
const Shop = () => {
  return (
    <div className='Shop'>
       <Navbar/>
       <Hero/>
       <Popular/>
       <Offer/>
       <Exclusive/>
       <Subscribe/>
       <Footer/>
    </div>
  )
}

export default Shop
