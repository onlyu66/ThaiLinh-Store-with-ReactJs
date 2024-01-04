import { Fragment, useEffect, useState } from "react";
// import { Dialog, Popover, Tab, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import "../styles/Header.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logos/Store Logo.png";
import Search from "../others/Search";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../../redux/productSlice";
import { Drawer } from "antd";
import Offcanvas from "react-bootstrap/Offcanvas";
import clsx from "clsx";
import Cart from "../others/Cart";
import { cartAction, fetchCart } from "../../redux/cartSlice";
import { orderAction } from "../../redux/orderSlice";

export default function Header() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart.cart);

  const products = useSelector((state) => state.products.products);
  const [searchInput, setSearchInput] = useState("");
  const [searchedKey, setSearchedKey] = useState([]);
  const [isDivVisible, setDivVisible] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showOrder, setShowOrder] = useState(false);
  const handleCloseOrder = () => setShowOrder(false);
  const handleShowOrder = () => setShowOrder(true);

  // console.log(isDivVisible);
  const navigate = useNavigate();

  const location = useLocation();

  // console.log(location);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchCart());
    dispatch(searchProducts(searchInput));
    localStorage.setItem("searchedKey", JSON.stringify(searchedKey));
    // localStorage.setItem("searchInput", JSON.stringify(searchInput));
  }, [dispatch, searchedKey]);
  // const [open, setOpen] = useState(false);
  useEffect(() => {
    dispatch(cartAction.getTotals());
  }, [cart, dispatch]);
  // const [isSearched, setIsSearched] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchedKey((prevSearchedKey) => [...prevSearchedKey, searchInput]);
    // setIsSearched(true);
    navigate("/searchResult");
    // setIsSearched(false);
    // setSearchInput("");
  };
  // console.log(isSearched);
  const handleClearCart = () => {
    dispatch(cartAction.clearCart());
  };
  const handleOrder = () => {
    if (!user?.id) {
      navigate("/login", { state: location?.pathname });
    } else {
      dispatch(
        orderAction.addOrder({
          order: JSON.parse(localStorage.getItem("cart")),
          user: JSON.parse(localStorage.getItem("user")),
        })
      );
    }
  };
  return (
    <div className="container">
      <header className="relative headers">
        <nav aria-label="Top" className="px-4 sm:px-6 lg:px-8 head">
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              {/* <button
                type="button"
                className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden"
                onClick={() => setOpen(true)}
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button> */}

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0 logos">
                <Link to="/" className="no-underline">
                  <div className="flex">
                    <span className="sr-only">Your Company</span>
                    <img className="logo flex-none" src={logo} alt="" />
                    <p className="flex-1">
                      <span style={{ color: "#0f6d68" }}>THAILINH</span> STORE
                    </p>
                  </div>
                </Link>
              </div>
              <div className="ml-auto flex items-center">
                {/* Search */}
                <form className="flex lg:ml-6" onSubmit={handleSubmit}>
                  <Search
                    searchInput={searchInput}
                    setSearchInput={setSearchInput}
                    searchedKey={searchedKey}
                    setSearchedKey={setSearchedKey}
                    products={products}
                    dispatch={dispatch}
                    searchProducts={searchProducts}
                    isDivVisible={isDivVisible}
                    setDivVisible={setDivVisible}
                    handleSubmit={handleSubmit}
                  />

                  <button className="p-2 searchButton" type="submit">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      className="h-6 w-6 searchIcon"
                      aria-hidden="true"
                    />
                  </button>
                </form>

                <div className="checkOrder" onClick={handleShowOrder}>
                  <i
                    className="fa-solid fa-truck-fast fa-2x"
                    style={{ color: "white" }}
                  ></i>
                  <p>Kiểm tra đơn hàng</p>
                </div>
                <Offcanvas
                  show={showOrder}
                  onHide={handleCloseOrder}
                  placement="end"
                  className="w-50 rounded-lg"
                >
                  <Offcanvas.Header className="headerCart" closeButton>
                    <Offcanvas.Title className="title">
                      Đơn hàng của bạn
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body className="bodyCart">
                    <Cart handleCloseOrder={handleCloseOrder} />
                  </Offcanvas.Body>
                </Offcanvas>

                {/* Cart */}
                <div className="ml-1 flow-root lg:ml-6 group">
                  <button
                    className=" flex items-center p-2"
                    onClick={handleShow}
                  >
                    <ShoppingBagIcon
                      className="h-8 w-8 flex-shrink-0 cart"
                      aria-hidden="true"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800 quantity">
                      {totalQuantity}
                    </span>
                  </button>
                  <Offcanvas
                    show={show}
                    onHide={handleClose}
                    placement="end"
                    className="w-50 rounded-lg"
                  >
                    <Offcanvas.Header className="headerCart" closeButton>
                      <Offcanvas.Title className="title">
                        Giỏ hàng
                      </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="bodyCart">
                      <Cart handleClose={handleClose} />
                    </Offcanvas.Body>
                    {totalQuantity !== 0 ? (
                      <div className="flex footerCart">
                        <button
                          className="flex-1"
                          onClick={() => handleClearCart()}
                        >
                          Xoá giỏ hàng
                        </button>
                        <button
                          className="flex-1"
                          onClick={() => handleOrder()}
                        >
                          Đặt hàng
                        </button>
                      </div>
                    ) : (
                      <></>
                    )}
                  </Offcanvas>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
