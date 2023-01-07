import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Courses.css";
const CourseSummaryCard = ({ course }) => {
  const { _id, title, description, picture } = course;
  return (
    <div>
      <Card className="m-1">
        <Card.Img
          className="p-1"
          variant="top"
          src={picture}
          style={{ height: "30vh" }}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {description.length > 80
              ? description.slice(0, 80) + "..."
              : description}{" "}
          </Card.Text>
          <Button variant="primary">
            <Link
              to={`/details/${_id}`}
              className="text-white text-decoration-none"
            >
              {" "}
              Read More{" "}
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CourseSummaryCard;
