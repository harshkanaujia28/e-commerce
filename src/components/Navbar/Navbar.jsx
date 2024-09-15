import React, { useContext, useState } from "react";
import "./Navbar.css";
import cart_icon from '../Assets/cart_icon.png'
import { Form, Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import menu_icon from '../Assets/menu-icon.png'
export default function Navbar() {
    const [menu,setMenu]=useState("Shop")
    const {getDefaultCartItems}= useContext(ShopContext)
    const[mobileMenu,setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
     mobileMenu? setMobileMenu(false) : setMobileMenu(true);
    }
    console.log({toggleMenu})
  return (
    <div className="navbar">
      <div className="container">
        <h3>
          ShopMart <i className="fa-brands fa-shopify"></i>
        </h3>
        <nav>
         <ul className={mobileMenu ?'': 'hide-mobile-menu'}>
          <li onClick={()=>{setMenu("shop")}}>
          <Link to='/'>  Shop{menu==="Shop"?<hr/>:<></>}</Link>
            </li>
          <Link to="/Men"> < li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</ li></Link>
          <Link to="/Womens"> <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li></Link>
          <Link to="/Kids"> <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li></Link>
          </ul> 
        </nav>
      
        <div className="icon">
        <Link to="/Loginsignup"> <button>  Login </button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""  /> </Link>
        <div className="count">{getDefaultCartItems()}</div>
        <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} /> 
         </div>
         
      </div>
     
    </div>
  );
}
