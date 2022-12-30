import React, { useContext, useState } from "react";
import { Button, Image } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../asset/images.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Navbar.css";

const Navigationbar = () => {
  const { user } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const toggle = () => {
    if (!theme) {
      setTheme(true);
    } else {
      setTheme(false);
    }
  };
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <img
              className="rounded me-2"
              src={logo}
              alt=""
              style={{ width: "10vw" }}
            />
          </Link>

          <Navbar.Brand href="#home">
            <Link to="/" className="text-white">
              Excelsior
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">
                <Link to="/courses/:id" className="text-white">
                  Courses
                </Link>
              </Nav.Link>
              <Nav.Link href="#pricing" className="text-white">
                <Link to="/faq" className="text-white">
                  FAQ
                </Link>
              </Nav.Link>
              <Nav.Link href="#blogs">
                <Link to="/blogs" className="text-white" href="#">
                  Blogs
                </Link>
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Link to="/login" className="text-white" href="#">
                  Log in
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/register" className="text-white" href="#">
                  Register
                </Link>
              </Nav.Link>

              <Nav.Link href="#upcoming">
                <Link to="/upcoming" className="text-white">
                  Upcoming
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                {user?.photoURL ? (
                  <Image
                    roundedCircle
                    src={user.photoURL}
                    style={{ height: "40px" }}
                  ></Image>
                ) : (
                  <FaUserCircle></FaUserCircle>
                )}
              </Nav.Link>
              <Button
                variant={theme ? "light" : "dark"}
                onClick={toggle}
                className={theme ? "bg-white" : "bg-warning"}
                style={{ borderRadius: "25px" }}
              >
                {theme ? "Light" : "Dark"}
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigationbar;
