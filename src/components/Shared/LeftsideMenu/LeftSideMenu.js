import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const LeftSideMenu = ({ category }) => {
  const { id, name } = category;
  return (
    <div className="d-inline d-lg-block">
      <Button variant="success me-1 mb-2 py-3" style={{ width: "32vh" }}>
        <Link to={`/courses/${id}`} className="text-white text-decoration-none">
          {name}
        </Link>
      </Button>
    </div>
  );
};

export default LeftSideMenu;
