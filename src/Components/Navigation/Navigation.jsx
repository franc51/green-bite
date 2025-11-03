import React from "react";
import "./Navigation.css";

// Simple Navigation component with a logo and links.
const Navigation = () => {
  return (
    <div className="app_navigation">
      <h1 className="app_navigation_logo">Green bite</h1>
      <ul className="app_navigation_links">
        <li>Home</li>
        <li>Recipes</li>
        <li>About me</li>
      </ul>
    </div>
  );
};

export default Navigation;
