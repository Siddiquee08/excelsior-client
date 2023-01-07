import React, { useContext, useState } from "react";
import { Button, Image, OverlayTrigger, Tooltip } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../../asset/images.png";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./Navbar.css";

const Navigationbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [theme, setTheme] = useState(false);
  const handleLogout = () => {
    logOut().then().catch();
  };
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
        <Container className="d-md-flex justify-content-center align-items-center">
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
              <Nav.Link href="#upcoming">
                <Link to="/upcoming" className="text-white">
                  Upcoming
                </Link>
              </Nav.Link>
              <Nav.Link className="text-white">
                {user?.uid ? (
                  <>
                    <OverlayTrigger
                      overlay={
                        <Tooltip id="tooltip-disabled">
                          {user?.displayName}
                        </Tooltip>
                      }
                    >
                      {user?.photoURL ? (
                        <Image
                          roundedCircle
                          src={user.photoURL}
                          style={{ height: "30px" }}
                        ></Image>
                      ) : (
                        <FaUserCircle></FaUserCircle>
                      )}
                    </OverlayTrigger>

                    <Button
                      onClick={handleLogout}
                      className="ms-2 p-0"
                      variant="dark"
                    >
                      Log out
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="text-white me-2" href="#">
                      Log in
                    </Link>
                    <Link to="/register" className="text-white" href="#">
                      Register
                    </Link>
                  </>
                )}
              </Nav.Link>
              <Button
                variant={theme ? "light" : "dark"}
                onClick={toggle}
                className={theme ? "bg-white" : "bg-warning"}
                style={{ borderRadius: "25px", display: "none" }}
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
