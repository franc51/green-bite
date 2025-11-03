import React from "react";
import "./Navigation.css";

// Simple Navigation component with a logo and links.
const Navigation = () => {
  const navigationLinks = ["Home", "Recipes", "AboutMe"];

  return (
    <nav className="app_navigation">
    <div className="app_navigation">
      <h1 className="app_navigation_logo">Green bite</h1>
      <ul className="app_navigation_links">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <a href={link}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
