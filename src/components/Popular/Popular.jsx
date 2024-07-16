import React from 'react'
import './Popular.css'
import new_collections from '../Assets/new_collections'
import Item from '../Item/Item'
const Popular = () => {
  
  return (
    <div className='Popular'>
          < h1>Popular Collection</h1>
          <hr />
        <div className="Popular-item">
            {new_collections.map((item,i)=>{
              return <Item  key={i} id={item.id} name={item.name} img={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
      
    </div>
  )
}

export default Popular
