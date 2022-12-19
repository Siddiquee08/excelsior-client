import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

import header from "../../asset/pexels-photo-1779487.webp";

const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Get Hired",
      "Get Promoted",
      "Be Your Own Boss",
      "Reach Your Zenith",
    ],
    loop: 5,
  });
  return (
    <div className="container d-flex mt-2">
      <div className="mt-2 w-75">
        <img className="img-fluid" src={header} alt="" />
      </div>
      <div className="">
        <h2 className="fs-1 mt-5 ms-2">
          Learn in- demand skills and{" "}
          <span className="text-success">{text}</span>
        </h2>
        <Button className="ms-3">
          <Link to="/courses/:id" className="text-decoration-none text-white">
            Start Learning
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Home;
