import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main/Main";
import Blogs from "../../Blogs/Blogs";
import CourseDetails from "../../CourseContent/CourseDetails";
import Courses from "../../CourseContent/Courses";
import CourseSummaryCard from "../../CourseContent/CourseSummaryCard";
import Faq from "../../FAQ/Faq";
import Home from "../../Home/Home";
import Register from "../../Signups/Register/Register";
import SignIn from "../../Signups/SignIn/SignIn";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/courses/:id",
        element: <Courses></Courses>,
        loader: (params) => fetch(`http://localhost:5000/courses/${params.id}`),
      },
      {
        path: "/details/:id",
        element: <CourseDetails></CourseDetails>,
        loader: (params) => fetch(`http://localhost:5000/details/${params.id}`),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
    ],
  },
  {
    path: "*",
    element: (
      <div className="bg-warning text-white">
        This Page is Under Construction{" "}
      </div>
    ),
  },
]);
