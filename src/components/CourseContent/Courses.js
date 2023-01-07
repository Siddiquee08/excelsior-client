import React, { useEffect, useState } from "react";
import LeftSideMenu from "../Shared/LeftsideMenu/LeftSideMenu";
import CourseSummaryCard from "./CourseSummaryCard";
import { Link, useLoaderData } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const courseSummary = useLoaderData();
  const [categories, setCategories] = useState([]);
  const [allNews, setAllNews] = useState([]);
  useEffect(() => {
    fetch("https://excelsior-server.vercel.app/courseCategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  useEffect(() => {
    fetch("https://excelsior-server.vercel.app/coursesbyid/01")
      .then((res) => res.json())
      .then((data) => setAllNews(data));
  }, [allNews]);
  return (
    <div className="mt-3 d-lg-flex align-items-center">
      <div className="my-2 mx-2 d-flex d-lg-block flex-wrap justify-content-center">
        {categories.map((category) => (
          <LeftSideMenu key={category.id} category={category}></LeftSideMenu>
        ))}
      </div>
      <div className="card border-0">
        {courseSummary.map((course, index) => (
          <CourseSummaryCard key={index} course={course}></CourseSummaryCard>
        ))}
      </div>
    </div>
  );
};

export default Courses;
