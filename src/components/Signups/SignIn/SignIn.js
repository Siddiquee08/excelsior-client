import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const { providerLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };
  const googleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className=" my-4">
      <Form onSubmit={handleSubmit} className="container w-75">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
          />
        </Form.Group>
        <Form.Text className="text-muted">
          <p className="mt-3">
            New here? <Link to="/register">Sign Up</Link> and enjoy.
          </p>
        </Form.Text>

        <Form.Text className="text-danger">
          <p className="mt-3">{error}</p>
        </Form.Text>
        <Button variant="primary" type="submit">
          Log In
        </Button>
        <Button className="m-1" variant="success" onClick={googleSignIn}>
          <FaGoogle className="m-1"></FaGoogle>
        </Button>
        <Button variant="dark">
          <FaGithub className="m-1"></FaGithub>
        </Button>
      </Form>
    </div>
  );
};

export default SignIn;
