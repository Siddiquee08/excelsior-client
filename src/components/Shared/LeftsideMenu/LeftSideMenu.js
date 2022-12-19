import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideMenu = ({ category }) => {
  const { id, name } = category;
  return (
    <div className="mt-3 ms-2 d-inline d-lg-block">
      <Button variant="success m-1">
        <Link to={`/courses/${id}`} className="text-white text-decoration-none">
          {name}
        </Link>
      </Button>
    </div>
  );
};

export default LeftSideMenu;
