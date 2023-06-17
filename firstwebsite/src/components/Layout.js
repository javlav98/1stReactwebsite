import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./Layout.css";


export default function Layout() {
  return (
    <div className="navContainer">
      <nav>
        <h2 className="logo">
          <Link to="/">Home</Link>
        </h2>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}