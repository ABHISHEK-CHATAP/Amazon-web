import React from "react";
import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { cleanCart, decrementQuantity, incrementQuantity } from "../../Redux/CartSlice";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const cart = useSelector((state) => state.acari.cart);
  // console.log("cart cart : ", cart)

  const dispatch = useDispatch();
  const decrease = (item) => dispatch(decrementQuantity(item));
  const increase = (item) => dispatch(incrementQuantity(item));

  const total = cart
    .map((cartItem) => cartItem.price * cartItem.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  // console.log("my total :", total)
  const discount = 15;
  const charges = 7.79;
  const COD = 20;

  const removeDiscount = total * (discount / 100);
  //   console.log("removeDiscount : ", removeDiscount)

  const CheckOut = () => {
    toast.success("Thank you for Order, visit again.. 😃💖", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

    setTimeout(() => {
        dispatch(cleanCart())
    },3500);
  };

  return (
    <>
      <Navbar />
      <div className="cart">
        {/* left-part */}
        <div className="cart-left">
          {
            cart.length > 0 ? (
                cart.map((item, index) => {
                    return (
                      <div className="cartContainer">
                        {/* image  */}
                        <div>
                          <img src={item.image} style={{ width: 100, height: 100 }} />
                        </div>
        
                        {/* description  */}
                        <div className="cart-description">
                          <p>
                            <b>{item.title}</b>
                          </p>
                          <p>{item.description}</p>
                          <p>
                            {" "}
                            <b>Price : $ </b>
                            {item.price}
                          </p>
                        </div>
        
                        {/* buttons  */}
                        <div className="buttonContainer">
                          <div className="cartButtons">
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => decrease(item)}
                            >
                              <b>-</b>
                            </div>
                            <div>{item.quantity}</div>
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => increase(item)}
                            >
                              <b>+</b>
                            </div>
                          </div>
                          <button className="ItemButton2">Remove Item</button>
                          <div>
                            price*qty :<b> $ {item.price * item.quantity}</b>
                          </div>
                        </div>
                      </div>
                    );
                  })
            ) : (
                <div className="cart-empty">
                  <h1>Cart is Empty</h1>
                </div>
  
            )
          }
        </div>
        {/* --------------------------------------------------------------------------------------------------------------------- */}
        {/* right-Part of cart body */}
        <div className="cart-right">
          {/* location info and button  */}
          <div className="cartRightLocationContainer">
            <div className="cartRightLocation">
              <LocationOnIcon style={{ color: "gray" }} />
              <div className="cartRightDescription">
                <p>Select your Location</p>
                <p>Please select a location so we can find you !</p>
                <button
                  className="ItemButton2"
                  style={{ marginTop: 10, color: "white" }}
                >
                  {" "}
                  Select Location
                </button>
              </div>
            </div>
            {/* ------------------- */}

            <div className="cartRightLocation" style={{ marginTop: 25 }}>
              <LocationOnIcon style={{ color: "gray" }} />
              <div className="cartRightDescription">
                <p>Choose your saved Location</p>
                <button
                  className="ItemButton2"
                  style={{ marginTop: 10, color: "white" }}
                >
                  {" "}
                  Choose Location
                </button>
              </div>
            </div>
          </div>

          {/* coupon info and description  */}
          <div>
            <div>
              <div className="cartRightLocation" style={{ marginTop: 25 }}>
                <BookOnlineIcon style={{ color: "gray" }} />
                <div className="cartRightDescription">
                  <p>Enter your Coupon Code to get Discount</p>
                  <input
                    type="text"
                    placeholder="Enter your Coupon Code"
                    className="input"
                  />
                  <button
                    className="ItemButton2"
                    style={{ marginTop: 10, marginLeft: 10, color: "white" }}
                  >
                    {" "}
                    Apply Coupon
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* container for the checkout and total  */}
          <div className="cartRightCheckout">
            <div className="checkoutTotalPart">
              <h4> Total Amount</h4>
              <h4> $ {total}</h4>
            </div>

            <div className="checkoutTotalPart">
              <h4>Discount</h4>
              <h4>{discount} %</h4>
            </div>

            <div className="checkoutTotalPart">
              <h4>G.S.T</h4>
              <h4>$ {charges}</h4>
            </div>

            <div className="checkoutTotalPart" style={{ marginBottom: 10 }}>
              <h4>Delivery Charges</h4>
              <h4>$ {COD}</h4>
            </div>
            <hr />

            <div className="checkoutTotalPart" style={{ marginBottom: 5 }}>
              <h2>ToTal</h2>
              <h2>$ {total - removeDiscount + charges + COD}</h2>
            </div>

            <div>
              <button
                className="ItemButton2"
                style={{ marginTop: 10, width: 390 }}
                onClick={() => CheckOut()}
              >
                {" "}
                Checkout
              </button>
              <ToastContainer />{" "}
              {/* You can add ToastContainer anywhere u want , nothing matter where is is lies  */}
            </div>

          </div>

        </div>{" "} {/*  //cart-right div  */}
      </div>{" "}{/*  //Parent  className cart div  */}
    </>
  );
};

export default Cart;
