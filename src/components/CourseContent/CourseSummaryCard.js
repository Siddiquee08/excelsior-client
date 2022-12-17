import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import LeftSideMenu from "../Shared/LeftsideMenu/LeftSideMenu";

const CourseSummaryCard = () => {
  return (
    <div className="">
      <Container>
        <Row>
          <Col lg="2">
            {" "}
            <LeftSideMenu></LeftSideMenu>
          </Col>
          <Col lg="7">
            <div></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CourseSummaryCard;
