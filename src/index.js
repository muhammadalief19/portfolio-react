import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import ThankYou from "./pages/ThankYou";
import Welcome from "./pages/Welcome";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "about",
    element: <AboutMe />,
  },
  {
    path: "gallery",
    element: <Gallery />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "thanks",
    element: <ThankYou />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
