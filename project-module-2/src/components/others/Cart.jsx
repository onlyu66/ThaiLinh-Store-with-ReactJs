import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, fetchCart } from "../../redux/cartSlice";
import styles from "../styles/Cart.module.css";
import clsx from "clsx";

function Cart({ handleClose }) {
  const cart = useSelector((state) => state.cart.cart);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const orders = useSelector((state) => state.orders.orders);

  console.log(cart);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchCart());
  // }, [cart]);
  const handleRemoveFromCart = (key) => {
    dispatch(cartAction.removeFromCart(key));
  };
  const handleDecreaseCart = (key) => {
    dispatch(cartAction.decreaseCart(key));
  };
  const handleIncreaseCart = (key) => {
    dispatch(cartAction.addToCart(key));
  };
  useEffect(() => {
    dispatch(cartAction.getTotals());
  }, [cart, dispatch, orders]);
  return cart.length > 0 ? (
    <div>
      <ul className={styles.head}>
        <li>Ảnh</li>
        <li>Tên sản phẩm</li>
        <li>Đơn giá</li>
        <li>Số lượng</li>
        <li>Tổng giá</li>
      </ul>
      <ul
        className={clsx(styles.ul, "p-0 m-0 relative")}
        style={{ overflow: "auto" }}
      >
        {cart.map((key, index) => {
          let totalPrice =
            Math.floor(key.price.split(",").join("")) * key.cartQuantity;
          let str = totalPrice.toLocaleString();
          return (
            <li key={index} className="flex justify-evenly p-0 m-0 rounded">
              <img src={key.image}></img>
              <div className="relative">
                <div>{key.model}</div>
                <button
                  className="rounded"
                  onClick={() => {
                    handleRemoveFromCart(key);
                  }}
                >
                  Xoá
                </button>
              </div>
              <div>{key.price} đ</div>
              <div className="flex flex-col">
                <span onClick={() => handleIncreaseCart(key)}>+</span>
                <span>{key.cartQuantity}</span>
                <span onClick={() => handleDecreaseCart(key)}>-</span>
              </div>
              <div>{str} đ</div>
            </li>
          );
        })}
        <li
          className={styles.totalPrice}
          style={{
            padding: "20px 0 20px 10px",
            borderTop: "2px solid #208f89",
          }}
        >
          <span className="font-semibold text-lg">Tổng tiền:</span>
          <span
            className="font-semibold text-lg"
            style={{ marginLeft: "140px" }}
          >
            {totalAmount.toLocaleString()} đ
          </span>
        </li>
      </ul>
    </div>
  ) : (
    // <div style={{}} className="flex justify-center">
    <div className="text-center mt-11">
      <p className="text-slate-700">Giỏ hàng của bạn trống T^T</p>
      <button
        className="text-stone-600 text-lg hover:text-slate-400 hover:font-semibold"
        onClick={handleClose}
      >
        Shopping thôi nào!
      </button>
    </div>
    // </div>
  );
}

export default Cart;
