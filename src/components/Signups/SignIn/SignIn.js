import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className=" my-4">
      <Form className="container w-75">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Text className="text-muted">
          <p className="mt-3">
            New here? <Link to="/register">Sign Up</Link> and enjoy.
          </p>
        </Form.Text>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Button className="m-1" variant="success" type="submit">
          <FaGoogle className="m-1"></FaGoogle>
        </Button>
        <Button variant="dark" type="submit">
          <FaGithub className="m-1"></FaGithub>
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
