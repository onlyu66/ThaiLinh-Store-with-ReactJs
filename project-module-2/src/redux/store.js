import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userSlice from "./userSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";

const store = configureStore({
  reducer: {
    products: productSlice,
    users: userSlice,
    user: authSlice,
    cart: cartSlice,
    orders: orderSlice,
  },
});

export default store;
