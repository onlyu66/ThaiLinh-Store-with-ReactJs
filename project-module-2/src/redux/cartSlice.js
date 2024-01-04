import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
    totalQuantity: 0,
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].cartQuantity += 1;
        toast.info(
          `Đã có ${state.cart[itemIndex].cartQuantity} ${action.payload.model} trong giỏ hàng`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cart.push(tempProduct);
        toast.success(`Đã thêm ${action.payload.model} vào giỏ hàng`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const nextCart = state.cart.filter((key) => key.id !== action.payload.id);
      state.cart = nextCart;
      localStorage.setItem("cart", JSON.stringify(state.cart));
      toast.error(`Đã xoá ${action.payload.model} khỏi giỏ hàng`, {
        position: "bottom-left",
      });
    },
    decreaseCart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cart[itemIndex].cartQuantity > 1) {
        state.cart[itemIndex].cartQuantity -= 1;
        toast.info(
          `Còn lại ${state.cart[itemIndex].cartQuantity} ${action.payload.model} trong giỏ hàng`,
          {
            position: "bottom-left",
          }
        );
      } else if (state.cart[itemIndex].cartQuantity === 1) {
        const nextCart = state.cart.filter(
          (key) => key.id !== action.payload.id
        );
        state.cart = nextCart;
        toast.error(`Đã xoá ${action.payload.model} khỏi giỏ hàng`, {
          position: "bottom-left",
        });
      }
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state, action) => {
      state.cart = [];
      toast.error(`Đã xoá giỏ hàng`, {
        position: "bottom-left",
      });
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    getTotals: (state, action) => {
      let { total, quantity } = state.cart.reduce(
        (cartTotal, key) => {
          const { price, cartQuantity } = key;
          const itemTotal =
            Math.floor(price.split(",").join("")) * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.totalQuantity = quantity;
      state.totalAmount = total;
    },
  },
  extraReducers: {},
});

export default cartSlice.reducer;
export const cartAction = cartSlice.actions;
