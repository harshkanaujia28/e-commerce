import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import Breadcrums from "../components/Breadcrums/Breadcrums"; 
import Productdisplay from "../components/Productdisplay/Productdisplay";
import Discriptionbox from "../components/Discriptionbox/Discriptionbox";
import Explore from "../components/explore me/Explore"
const Product = () => {
  const all_Product = useContext(ShopContext);
  const  {productId } = useParams();
  const product = all_Product.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <Breadcrums product={product} />
      <Productdisplay product={product}/>
      <Discriptionbox/>
      <Explore/>
    </div>
  );
};

export default Product;

// The component uses the useContext hook to access the ShopContext context, which provides an object with a property all_product. This property is an array of products.

//The component also uses the useParams hook to access the productId parameter from the URL. This parameter is expected to be a string, so it's converted to a number using the Number() function.

//Product Selection

//The component finds the product that matches the productId parameter by using the find() method on the all_product array. The find() method returns the first element that satisfies the condition e.id === Number(productId), where e is an element in the array.

//Rendering

//The component returns a div element that contains a single child element: the Breadcrums component. The product object is passed as a prop to the Breadcrums component.

//Purpose

//the purpose of this component is to display a product page, where the product is selected based on the productId parameter in the URL. The Breadcrums component is likely used to display a breadcrumb trail for the product.

//There is a typo in the component name Breadcrums, which should be corrected to Breadcrumbs.

//Answer with Web Search
//Continue

//Scroll to bottom

//Share

//Publish To
