import React from "react";
import {
  createHashRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Contacts from "./pages/Contacts/Contacts";
import Project from "./pages/ProjectsStorage/Project";

const RoutesComponent = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/project/:id" element={<Project />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default RoutesComponent;
