import React from "react";
import { Link } from "react-router-dom";

const LeftSideMenu = ({ category }) => {
  const { name } = category;
  return (
    <div>
      <Link>{name}</Link>
    </div>
  );
};

export default LeftSideMenu;
