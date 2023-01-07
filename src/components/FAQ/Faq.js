import React from "react";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="container text-center my-5">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            What are the technology requirements to take an online course?
          </Accordion.Header>
          <Accordion.Body>
            You will need a computer, a high speed Internet connection, a newer
            version of a web browser, and access to common tools and software
            like word processors, email, etc. Some courses may have other
            software or technology requirements as well.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Is it possible to earn a degree through the Excelsior Online
            Learning program?
          </Accordion.Header>
          <Accordion.Body>No.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            How long do I have to complete a course?
          </Accordion.Header>
          <Accordion.Body>
            If you study 4-6 hourse regularly then all the courses can be
            finished within 6 months.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How do I contact my course instructor?
          </Accordion.Header>
          <Accordion.Body>
            Instructors stay in touch with their Online Learning students in a
            variety of ways, depending on the course design. Your instructor
            will explain the best way to reach him or her within the course home
            pages. You may communicate with your instructor through discussion
            groups, bulletin boards, chat rooms, assignment submissions, through
            email, or by telephone.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
