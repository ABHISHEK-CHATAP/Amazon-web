import React, { useState } from "react";
import "./Navbar.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
// const  [input, setInput] = useState("");
// console.log("mu input data :",input)

  const cart = useSelector((state) => state.acari.cart);
  console.log("NAV COMPONENT:", cart);

  const nav = useNavigate();
  const goToHome=()=>nav("/");

  const goToCart = () => {
    nav("/cart");
  };
  return (
    <>
      <nav>
        <div onClick={()=>goToHome()}>
          <img
            src="https://pngimg.com/d/amazon_PNG11.png"
            className="image"
            style={{ width: 150, height: 30, marginTop: 10, marginLeft: 10 }}
          />
        </div>
        <div>
          <input
            type="text"
            // value={input}
            // onChange={(e)=>setInput(e.target.value)}
            placeholder="search products.."
            style={{
              padding: 5,
              width: 400,
              borderRadius: 5,
              outline: 1,
              padding: 8,
            }}
          />
          <SearchOutlinedIcon className="searchIcon" />
        </div>

        <div>
          <h4>Hello, John</h4>
          <h4>Accounts & Lists</h4>
        </div>

        <div>
          <h4>Returns </h4>
          <h4> & Orders</h4>
        </div>

        <div className="shopping-cart" onClick={() => goToCart()}>
          <ShoppingCartOutlinedIcon />
          <span className="count">{cart.length}</span>
        </div>

        <div style={{ marginRight: 20 }}>
          <h4>India </h4>
          <h4> +91-8754672390</h4>
        </div>
      </nav>

      {/* nav Bottom part */}
      <div className="header-bottom">
        <MenuOutlinedIcon style={{ marginLeft: 10 }} />

        <p>Buy</p>
        <p>Health Products</p>
        <p>Sell </p>
        <p>Baby</p>
        <p>Health & Lifestyle</p>
        <p>Prime Video</p>
        <p>Super Sale</p>
        <p>Exciting Offers</p>
      </div>
    </>
  );
};

export default Navbar;
