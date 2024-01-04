import styles from "../../styles/Admin.module.css";
import clsx from "clsx";
import { Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { BsJustify } from "react-icons/bs";

import { useEffect, useState } from "react";
import { fetchUser } from "../../../redux/authSlice";

function AdminHeader({ selectItem, OpenSidebar }) {
  const [isAdmin, setIsAdmin] = useState(null);
  // console.log(isAdmin);
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  useEffect(() => {
    setIsAdmin(JSON.parse(localStorage.getItem("user")));
    dispatch(fetchUser());
  }, [user]);

  return (
    <div className={clsx(styles.header, "flex justify-between p-3")}>
      <div className={styles.menuIcon}>
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      {selectItem === "dashboard" ? (
        <p>Welcome to ThaiLinh Store</p>
      ) : selectItem === "products" ? (
        <p>PRODUCTS</p>
      ) : selectItem === "users" ? (
        <p>USERS</p>
      ) : (
        <p>ORDERS</p>
      )}
      <Input
        placeholder="Search"
        className={clsx(styles.inputSearch, "w-1/5 h-10")}
        type="search"
        // ref={inputRef}
        // onChange={searchProduct}
      />
      <i
        className={
          selectItem === "dashboard"
            ? clsx(styles.searchIcon, "fa-solid fa-magnifying-glass")
            : selectItem === "products"
            ? clsx(styles.searchIcon1, "fa-solid fa-magnifying-glass")
            : selectItem === "users"
            ? clsx(styles.searchIcon2, "fa-solid fa-magnifying-glass")
            : clsx(styles.searchIcon3, "fa-solid fa-magnifying-glass")
        }
      ></i>
      {isAdmin ? (
        <div className="flex mr-8">
          <i className="fa-regular fa-bell mr-3 mt-1.5"></i>
          <img
            src={isAdmin.image}
            alt=""
            className="w-8 h-8 rounded-full mr-2"
          />
          {/* {console.log(isUser)} */}
          <p>{isAdmin.userName}</p>
          <i class="fa-solid fa-caret-down mt-1 ml-1"></i>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AdminHeader;
