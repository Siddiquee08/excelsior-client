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
      <Container>
        <Row>
          <Col lg="4">
            <LeftSideMenu></LeftSideMenu>
          </Col>
          <Col lg="8">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;
