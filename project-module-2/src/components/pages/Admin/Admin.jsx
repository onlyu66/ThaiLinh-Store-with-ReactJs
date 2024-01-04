import React, { useState } from "react";
import styles from "../../styles/Admin.module.css";
import clsx from "clsx";
import { Link, Outlet } from "react-router-dom";
import Dashboard from "./Dashboard";
import ProductsManagement from "./Product/ProductsManagement";
import UsersManagement from "./Users/UsersManagement";
import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";

function Admin() {
  const [selectItem, setSelectItem] = useState("dashboard");
  // console.log(selectItem);
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };
  return (
    <div className={clsx(styles.container, "rounded", styles.gridContainer)}>
      <AdminSidebar setSelectItem={setSelectItem} openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <AdminHeader selectItem={selectItem} OpenSidebar={OpenSidebar}/>
      <div className={clsx(styles.content)}>
        {selectItem === "dashboard" ? (
          <Dashboard selectItem={selectItem} />
        ) : selectItem === "products" ? (
          <ProductsManagement selectItem={selectItem} />
        ) : selectItem === "users" ? (
          <UsersManagement selectItem={selectItem} />
        ) : (
          <p>ORDERS</p>
        )}
      </div>
    </div>
  );
}

export default Admin;
