import React from "react";
import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../Redux/CartSlice";

const Product = ({ item }) => {
  const bucket = useSelector((state)=> state.acari.cart)
const dispatch = useDispatch();

const RemoveItem = (item)=>{
  dispatch(removeFromCart(item))
}

const AddItem = (item)=>{
  dispatch(addToCart(item))
}

  return (
    <>
      <div className="productItem">
        {/* image */}
        <img src={item.image} style={{ width: 200, height: 200, marginLeft:"auto", marginRight:"auto" }} />
   
      {/* title of product */}
        <p><b>Name : </b> {item.title.length > 40 ? `${item.title.substr(0,40)}...` : item.title}</p>
   
     {/* descriptio nof product */}
        <p>{item.description.length >80 ? `${item.description.substr(0,82)}...` : item.description}</p>

        {/* price */}
        <p><b>Price : $ </b>{item.price}</p>

      {/* Add to cart button */}
      {bucket.some((x) => x.id == item.id) ? (
         <button className="ItemButton1" onClick={()=>RemoveItem(item)}>Remove from Cart</button> 
         ) :  ( 
         <button className="ItemButton1" onClick={()=>AddItem(item)}>Add To Cart</button>
          ) }

        {/* Buy now button */}
        <button className="ItemButton2">Buy Now</button>
      </div>
    </>
  );
};

export default Product;
