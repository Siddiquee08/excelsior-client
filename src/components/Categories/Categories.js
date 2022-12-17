import React, { useEffect, useState } from "react";
import LeftSideMenu from "../Shared/LeftsideMenu/LeftSideMenu";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courseCategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      {categories.map((category) => (
        <LeftSideMenu key={category.id} category={category}></LeftSideMenu>
      ))}
    </div>
  );
};

export default Categories;
