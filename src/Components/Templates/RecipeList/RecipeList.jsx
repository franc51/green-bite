import React, { useEffect, useState } from "react";
import RecipeCard from "../../Organisms/RecipeCard/RecipeCard";
import "./RecipeList.css";

import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [sortDate, setSortDate] = useState("desc"); // "desc" = newest first

  const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;
  const limit = 12;

  const fetchRecipes = async (pageNumber = 1, append = false) => {
    setLoading(true);
    try {
      const params = new URLSearchParams({ limit, page: pageNumber });

      if (category) params.append("category", category);
      if (difficulty) params.append("difficulty", difficulty);
      params.append("sort", sortDate);

      const response = await fetch(
        `${REACT_APP_BACKEND_API}/recipes?${params.toString()}`
      );

      if (!response.ok) throw new Error("Failed to fetch recipes");

      const data = await response.json();
      setRecipes((prev) =>
        append ? [...prev, ...data.recipes] : data.recipes
      );
      setTotalPages(data.pages);
      setPage(data.page);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes(1, false);
  }, [category, difficulty, sortDate]);

  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchRecipes(page + 1, true);
    }
  };

  if (error) return <div className="error">Error: {error}</div>;
  if (recipes.length === 0 && !loading)
    return <div className="error">No recipes found.</div>;

  if (loading && recipes.length === 0) {
    return (
      <div className="recipe_list_container">
        <h2>Toate rețetele</h2>
        <div className="recipe_list">
          {Array.from({ length: 12 }).map((_, i) => (
            <div className="skeleton_card" key={i}>
              <div className="skeleton_image"></div>
              <div className="skeleton_content">
                <div className="skeleton_line long"></div>
                <div className="skeleton_line medium"></div>
                <div className="skeleton_line short"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="recipe_list_container">
      <h2>Toate rețetele</h2>

      <div className="recipe_tab_and_filter">
        <p>{recipes.length} Rețete</p>
        <div>
          {/* Category */}
          <FormControl sx={{ minWidth: 150, marginRight: 2 }}>
            <InputLabel>Categorie</InputLabel>
            <Select
              value={category}
              label="Categorie"
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">Toate categoriile</MenuItem>
              <MenuItem value="Fel principal">Fel principal</MenuItem>
              <MenuItem value="Supă/Ciorbă">Supă/Ciorbă</MenuItem>
              <MenuItem value="Antreu">Antreu</MenuItem>
              <MenuItem value="Paste">Paste</MenuItem>
              <MenuItem value="Desert">Desert</MenuItem>
              <MenuItem value="Pește">Pește</MenuItem>
            </Select>
          </FormControl>

          {/* Difficulty */}
          <FormControl sx={{ minWidth: 150, marginRight: 2 }}>
            <InputLabel>Dificultate</InputLabel>
            <Select
              value={difficulty}
              label="Dificultate"
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <MenuItem value="">Toate dificultățile</MenuItem>
              <MenuItem value="Ușor">Ușor</MenuItem>
              <MenuItem value="Mediu">Mediu</MenuItem>
              <MenuItem value="Dificil">Dificil</MenuItem>
            </Select>
          </FormControl>

          {/* Sort Date */}
          <FormControl sx={{ minWidth: 150 }}>
            <InputLabel>Sortare</InputLabel>
            <Select
              value={sortDate}
              label="Sortare"
              onChange={(e) => setSortDate(e.target.value)}
            >
              <MenuItem value="desc">Cele mai noi</MenuItem>
              <MenuItem value="asc">Cele mai vechi</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="recipe_list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>

      {loading && <div>Loading...</div>}

      {page < totalPages && !loading && (
        <div className="load_more_container">
          <button onClick={handleLoadMore}>Încarcă mai multe rețete</button>
        </div>
      )}
    </div>
  );
};

export default RecipeList;
