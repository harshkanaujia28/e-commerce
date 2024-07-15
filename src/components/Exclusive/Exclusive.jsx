import React from 'react'
import './Exclusive.css'
import Item from '../Item/Item'
import exclusive_product from '../Assets/exclusive'
const Exclusive = () => {
  return (
    <div className='Exclusive'>
         < h1>New Collection for Women</h1>
          <hr />
        <div className="Exclusive-item">
            {exclusive_product.map((item,i)=>{
               return <Item  key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Exclusive
