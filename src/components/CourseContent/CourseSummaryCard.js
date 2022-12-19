import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
import "./Courses.css";
const CourseSummaryCard = ({ course }) => {
  const { _id, title, description, picture } = course;
  return (
    <div className="mt-3 summary">
      <CardGroup className="mb-3">
        <Card className="m-2">
          <Card.Img variant="top" className="p-1" src={picture} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description.length > 80
                ? description.slice(0, 80) + "..."
                : description}{" "}
              <Link to={`/details/${_id}`}> Read More </Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CourseSummaryCard;
