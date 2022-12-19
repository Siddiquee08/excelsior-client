import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link } from "react-router-dom";
const CourseSummaryCard = ({ course }) => {
  const { _id, title, description, picture } = course;
  return (
    <div className="mt-3">
      <CardGroup className="mb-3">
        <Card className="me-2">
          <Card.Img variant="top" src={picture} />
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
