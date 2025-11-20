import React, { useState } from "react";
import "./Navigation.css";
import SearchBar from "../../Molecules/SearchBar/SearchBar";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const navigationLinks = ["Acasă", "Rețete", "Adaugă rețetă"];
  const navigate = useNavigate();

  const routes = {
    Acasă: "/",
    Rețete: "/retete",
    "Adaugă rețetă": "/adauga-reteta",
  };

  const handleNavigate = (link) => {
    navigate(routes[link]);
    setIsMobileOpen(false); // close menu after click
  };

  return (
    <>
      <nav className="app_navigation">
        <div className="app_logo_and_searchBar">
          <h1>GB</h1>
          <SearchBar />
        </div>

        {/* Desktop menu */}
        <ul className="app_navigation_links desktop_menu">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a
                className="app_navigation_list_item"
                href={routes[link]}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link);
                }}
              >
                {link}
              </a>
            </li>
          ))}
          <IconButton color="primary" className="fav_icon">
            <FavoriteBorderIcon />
          </IconButton>
        </ul>

        {/* Mobile hamburger */}
        <IconButton
          className="mobile_hamburger"
          onClick={() => setIsMobileOpen(true)}
        >
          <MenuIcon />
        </IconButton>
      </nav>

      {/* Mobile sliding menu */}
      <div className={`mobile_menu_overlay ${isMobileOpen ? "open" : ""}`}>
        <div className="mobile_menu">
          <IconButton
            className="mobile_close_btn"
            onClick={() => setIsMobileOpen(false)}
          >
            <CloseIcon />
          </IconButton>

          <ul>
            {navigationLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="app_navigation_list_item"
                  href={routes[link]}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(link);
                  }}
                >
                  {link}
                </a>
              </li>
            ))}
            <IconButton color="primary" className="fav_icon">
              <FavoriteBorderIcon />
            </IconButton>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
