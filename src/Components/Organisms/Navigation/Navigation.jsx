import React from "react";
import "./Navigation.css";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

// Simple Navigation component with a logo and links.
const Navigation = () => {
  const navigationLinks = ["Acasă", "Rețete", "Adaugă rețetă"];
  const navigate = useNavigate(); // hook to programmatically navigate

  const handleNavClick = (link) => {
    switch (link) {
      case "Acasă":
        navigate("/");
        break;
      case "Rețete":
        navigate("/recipes");
        break;
      case "Adaugă rețetă":
        navigate("/addRecipe");
        break;
      default:
        navigate("/");
    }
  };

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
            <a
              className="app_navigation_list_item"
              href={link}
              onClick={() => handleNavClick(link)}
            >
              {link}
            </a>
          </li>
        ))}
        <IconButton color="primary" className="fav_icon">
          <FavoriteBorderIcon />
        </IconButton>
      </ul>
    </nav>
  );
};

export default Navigation;
