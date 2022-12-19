import React, { useEffect, useState } from "react";
import LeftSideMenu from "../Shared/LeftsideMenu/LeftSideMenu";
import { Button, Col, Container, Row } from "react-bootstrap";
import CourseSummaryCard from "./CourseSummaryCard";
import { Link, useLoaderData } from "react-router-dom";
import "./Courses.css";

const Courses = () => {
  const courseSummary = useLoaderData();
  console.log(courseSummary);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courseCategories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div className="mt-3">
      <>
        <Row>
          <Col lg="4">
            <div className="">
              <h3 className="text-decoration-underline">
                Click and choose from: {categories.length} catgories
              </h3>
              {categories.map((category) => (
                <LeftSideMenu
                  key={category.id}
                  category={category}
                ></LeftSideMenu>
              ))}
            </div>
          </Col>
          <Col lg="8">
            <div className="d-md-flex">
              {courseSummary.map((course) => (
                <CourseSummaryCard
                  key={course.category_id}
                  course={course}
                ></CourseSummaryCard>
              ))}
            </div>
          </Col>
        </Row>
      </>
    </div>
  );
};

export default Courses;
