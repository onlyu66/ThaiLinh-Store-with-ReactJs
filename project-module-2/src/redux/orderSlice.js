import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: localStorage.getItem("orders")
      ? JSON.parse(localStorage.getItem("orders"))
      : [],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push(action.payload);
      toast.success(`Đặt hàng thành công!`, {
        position: "bottom-left",
      });
      localStorage.setItem("orders", JSON.stringify(state.orders));
      localStorage.removeItem("cart");
    },
  },
  extraReducers: {},
});

export default orderSlice.reducer;
export const orderAction = orderSlice.actions;
