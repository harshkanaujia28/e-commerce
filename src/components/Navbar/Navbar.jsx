import React, { useState } from "react";
import "./Navbar.css";
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
export default function Navbar() {
    const [menu,setMenu]=useState("Shop")
  return (
    <div className="navbar">
      <div class="container">
        <h3>
          ShopMart <i class="fa-brands fa-shopify"></i>
        </h3>
        <nav>
         <ul>
          <li onClick={()=>{setMenu("shop")}}>
          <Link to='/'>  Shop{menu==="Shop"?<hr/>:<></>}</Link>
            </li>
          <Link to="/Men"> < li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</ li></Link>
          <Link to="/Womens"> <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li></Link>
          <Link to="/Kids"> <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li></Link>
          </ul> 
        </nav>
      
        <div class="icon">
        <Link to="/Loginsignup"> <button>  Login </button></Link>
        <img src={cart_icon} alt="" />
        <div className="count">0</div>
         
         </div>
      </div>
    </div>
  );
}
