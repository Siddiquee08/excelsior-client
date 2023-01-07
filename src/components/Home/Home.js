import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";

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
    <div>
      <div className=" container d-md-flex mt-2 align-items-center justify-content-center flex-row-reverse">
        <div className="">
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_9ungcrzx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="w-100 mt-2">
          <h2 className="fs-3">
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
    </div>
  );
};

export default Home;
