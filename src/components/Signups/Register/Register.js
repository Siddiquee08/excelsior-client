import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [userInfo, setUserInfo] = useState({
    name: "",
    photo: "",
    email: "",
    password: "",
  });
  const handleName = (event) => {
    setUserInfo({ ...userInfo, name: event.target.value });
  };
  const handleEmail = (event) => {
    setUserInfo({ ...userInfo, email: event.target.value });
  };
  const handlePassword = (event) => {
    setUserInfo({ ...userInfo, password: event.target.value });
  };
  const handlePhoto = (event) => {
    setUserInfo({ ...userInfo, photo: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    createUser(userInfo.email, userInfo.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <div className="container my-4">
        <Form className="container w-75">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              required
              value={userInfo.name}
              onChange={handleName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhotoUrl">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter photo url"
              required
              value={userInfo.photo}
              onChange={handlePhoto}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={userInfo.email}
              required
              onChange={handleEmail}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              required
              value={userInfo.password}
              onChange={handlePassword}
            />
          </Form.Group>
          <Button
            className="me-3"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
