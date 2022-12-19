import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { title, picture, description } = details;
  return (
    <div className="container mt-5">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CourseDetails;
