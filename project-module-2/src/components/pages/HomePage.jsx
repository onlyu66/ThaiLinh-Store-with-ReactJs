import React from "react";
import Header from "../layouts/Header";
import "../styles/Global.css";
import Menu from "../layouts/Menu";
import Account from "../layouts/Account";
import AsideLeft from "../layouts/AsideLeft";
import AsideRight from "../layouts/AsideRight";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";
// import { Col, Row } from "antd";

function HomePage() {
  return (
    <div className="body">
      <div className="account">
        <Account />
      </div>
      <div className="header">
        <Header />
      </div>
      <div className="menu">
        <Menu />
      </div>
      <div className="article">
        <Outlet />
      </div>
      <div className="asideLeft">
        <AsideLeft />
      </div>
      <div className="asideRight">
        <AsideRight />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default HomePage;
