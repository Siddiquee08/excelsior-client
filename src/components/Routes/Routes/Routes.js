import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Main from "../../../layout/Main/Main";
import Categories from "../../Categories/Categories";
import CourseDetails from "../../CourseContent/CourseDetails";
import Home from "../../Home/Home";

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
    ],
  },
]);
