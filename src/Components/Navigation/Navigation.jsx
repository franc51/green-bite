import React from "react";
import "./Navigation.css";

// Simple Navigation component with a logo and links.
const Navigation = () => {
  return (
    <div className="app_navigation">
      <h3 className="app_navigation_logo">Green bite</h3>
      <ul className="app_navigation_links">
        <li>Home</li>
        <li>Recipes</li>
        <li>About me</li>
      </ul>
    </div>
  );
};

export default Navigation;
