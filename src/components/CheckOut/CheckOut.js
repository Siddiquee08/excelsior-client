import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const course = useLoaderData();
  return (
    <div className="container my-5">
      <div>
        <h2 className="fs-4">
          Your Chosen Course:{" "}
          <small className="text-success">{course.title} </small>
        </h2>
      </div>
      <div>
        <h2>
          Duration: <small>{course.duration}</small>
        </h2>
      </div>
    </div>
  );
};

export default CheckOut;
