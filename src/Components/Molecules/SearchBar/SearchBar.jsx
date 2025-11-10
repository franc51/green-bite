import React, { useState } from "react";

import "./SearchBar.css";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  return (
    <form onSubmit={handleSearch} className="app_navigation_search">
      <SearchIcon className="app_navigation_search_icon" />
      <InputBase
        placeholder="Caută rețetă.."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="app_navigation_search_input"
        inputProps={{ "aria-label": "search" }}
      />
    </form>
  );
};

export default SearchBar;
