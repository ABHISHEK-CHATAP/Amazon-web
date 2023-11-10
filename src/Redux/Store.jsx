import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";


const store = configureStore({
    reducer: {
        acari: cartReducer,
    }
})



export default store





