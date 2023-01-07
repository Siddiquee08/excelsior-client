import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTypewriter } from "react-simple-typewriter";
import "./Home.css";

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
      <div className=" container d-md-flex mt-1 align-items-center justify-content-center flex-row-reverse">
        <div>
          <lottie-player
            src="https://assets9.lottiefiles.com/packages/lf20_9ungcrzx.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></lottie-player>
        </div>
        <div className="w-100 mt-4">
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
      <div className="container  my-3">
        <div className="text-center">
          <h1>Benefits of joining Excelsior</h1>
          <p>
            We help you at every step of your learning and career journey. From
            beginner to getting hired to advancing your skills and having a
            successful, rewarding career.
          </p>
        </div>
        <div className="banner container">
          <div className="m-1">
            <h3>Get promoted, become top 10%</h3>
            <p>
              Our intermediate and advanced courses help you continue to build
              your skills so that you can land senior roles and be recognized as
              a top tech professional.
            </p>
          </div>
          <div className="m-1">
            <h3>Gain the freedom to work anytime, anywhere</h3>
            <p>
              We can give you a curated roadmap to build your dream career and
              become your own boss, no matter your experience level.
            </p>
          </div>
          <div className="m-1">
            <h3>Build a portfolio of projects that make you stand out</h3>
            <p>
              The projects we'll help you build are professional, real-world
              apps that will make your portfolio stand out and impress potential
              employers.
            </p>
          </div>
          <div className="m-1">
            <h3>Get hired, in record time</h3>
            <p>
              Stop wasting time on endless tutorials. Our step-by-step Career
              Paths give you an exact roadmap to go from any background to
              getting hired. No CS degree required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
