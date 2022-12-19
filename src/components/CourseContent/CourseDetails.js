import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const details = useLoaderData();
  console.log(details);
  const { _id, title, picture, description } = details;
  return (
    <div className="container mt-5">
      <CardGroup>
        <Card>
          <Card.Img variant="top" src={picture} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-center">
            <Button variant="dark">
              <Link
                to={`/checkout/${_id}`}
                className=" text-white text-decoration-none"
              >
                Checkout
              </Link>
            </Button>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>
  );
};

export default CourseDetails;
