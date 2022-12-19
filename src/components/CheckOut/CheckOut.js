import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  console.log(course);
  return (
    <div className="container text-center my-5">
      <h2 className="fs-4">
        Your Chosen Course:{" "}
        <small className="text-success">{course.title} </small>
      </h2>
    </div>
  );
};

export default CheckOut;
