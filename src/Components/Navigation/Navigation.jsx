import React from "react";
import "./Navigation.css";
import "./navigationData";

// Importing navigation links to render them dinamically
import { navigationLinks } from "./navigationData";

// Simple Navigation component with a logo and links.
const Navigation = () => {
  return (
    <nav className="app_navigation">
      <h1 className="app_navigation_logo">Green bite</h1>
      <ul className="app_navigation_links">
        {navigationLinks.map(({ id, label, href }) => (
          <li key={id}>
            <a
              href={href}
              className={activePage === id ? "active" : ""}
              aria-current={activePage === id ? "page" : undefined}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
