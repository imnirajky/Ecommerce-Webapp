import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlice";
import signInSlice from './Slices/signInSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        userLogged: signInSlice
    },
});