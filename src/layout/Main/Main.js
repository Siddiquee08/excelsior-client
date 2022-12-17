import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";
import LeftSideMenu from "../../components/Shared/LeftsideMenu/LeftSideMenu";
import Navbar from "../../components/Shared/Navbar/Navbar";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
