import React from "react";
import "./Navigation.css";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";

// Simple Navigation component with a logo and links.
const Navigation = () => {
  const navigationLinks = ["Acasă", "Rețete", "Adaugă rețetă"];

  return (
    <nav className="app_navigation">
      <div className="app_logo_and_searchBar">
        <img
          className="app_navigation_logo"
          src="./assets/images/gb-logo.png"
          alt="gb-logo"
        ></img>
        <SearchBar></SearchBar>
      </div>

      <ul className="app_navigation_links">
        {navigationLinks.map((link, index) => (
          <li key={index}>
            <a className="app_navigation_list_item" href={link}>
              {link}
            </a>
          </li>
        ))}
        <IconButton color="secondary">
          <FavoriteBorderIcon />
        </IconButton>
      </ul>
    </nav>
  );
};

export default Navigation;
