import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import header from "../../asset/pexels-photo-1779487.webp";

const Home = () => {
  return (
    <div className="container d-flex bg-light mt-2">
      <div className="mt-2 w-75">
        <img className="img-fluid" src={header} alt="" />
      </div>
      <div className="">
        <h2 className="fs-1 mt-5 ms-2">
          Learn in- demand skills and{" "}
          <small className="fs-2 text-success">Get Hired</small>,{" "}
          <small className="fs-2 text-danger">Get Promoted</small>,{" "}
          <small className="fs-2 text-warning">Be your own Boss</small>,{" "}
          <small className="fs-2 text-primary">Reach your Zenith</small>
          <Button>
            <Link to="/courses/:id" className="text-decoration-none text-white">
              Start Learning
            </Link>
          </Button>
        </h2>
      </div>
    </div>
  );
};

export default Home;
