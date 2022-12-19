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
    <div>
      <Container>
        <Row>
          <Col lg="3">
            <h3 className="ms-3 text-decoration-underline">
              Total Categoires: {categories.length}
            </h3>
            {categories.map((category) => (
              <LeftSideMenu
                key={category.id}
                category={category}
              ></LeftSideMenu>
            ))}
          </Col>
          <Col lg="9">
            <div className="d-flex">
              {courseSummary.map((course) => (
                <CourseSummaryCard
                  key={course.category_id}
                  course={course}
                ></CourseSummaryCard>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Courses;
