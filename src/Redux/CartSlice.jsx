import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart:localStorage.getItem("cart") ? (JSON.parse(localStorage.getItem("cart"))) : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const ItemPresent = state.cart.find( (item) => item.id === action.payload.id);
      if (ItemPresent) {
        ItemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter( (item) => item.id !== action.payload.id );
      state.cart = removeItem;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    cleanCart: (state, action) => {
      state.cart = [];
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },

    incrementQuantity: (state, action) => {
      const itemPresent = state.cart.find((item) => item.id === action.payload.id);
      itemPresent.quantity++;
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
  
    decrementQuantity: (state, action) => {
      const findItem = state.cart.find((item) => item.id === action.payload.id);

      if (findItem.quantity > 1) {
        findItem.quantity--;
      } else {
        confirm("Do you really want to remove this item?") ? (
        state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        ) : null;
      }
      localStorage.setItem('cart', JSON.stringify(state.cart));
    },
    
  },
});


export const {addToCart,removeFromCart,incrementQuantity,decrementQuantity, cleanCart} = cartSlice.actions;
export default cartSlice.reducer