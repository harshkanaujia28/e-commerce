import React from 'react'
import Item from '../Item/Item'
import data_product from '../Assets/data'
import './Explore.css'
const Explore = () =>{
  return (
    <>
    <div className='Explore'>
        < h1>New Collection</h1>
          <hr />
        <div className="Explore-item">
            {data_product.map((item,i)=>{
               return <Item  key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
    </div>
    
    </div>
    
    </>
)
} 
export default Explore
