import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main/Main";
import Blogs from "../../Blogs/Blogs";
import Categories from "../../Categories/Categories";
import CourseDetails from "../../CourseContent/CourseDetails";
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
        path: "/category/:id",
        element: <Categories></Categories>,
      },
      {
        path: "/courses/:id",
        element: <CourseDetails></CourseDetails>,
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
        path: "/categories",
        element: <Categories></Categories>,
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
