import React, { useEffect, useState } from "react";
import RecipeCard from "../../Organisms/RecipeCard/RecipeCard";
import "./RecipeList.css";
require("dotenv").config();

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const backend_API = process.env.backend_API;

  const limit = 12;

  const fetchRecipes = async (pageNumber = 1, append = false) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${backend_API}/recipes?limit=${limit}&page=${pageNumber}`
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
  }, []);

  const handleLoadMore = () => {
    if (page < totalPages) {
      fetchRecipes(page + 1, true);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (recipes.length === 0 && !loading) return <div>No recipes found.</div>;

  return (
    <div className="recipe_list_container">
      <div className="recipe_tab_and_filter">
        <p>
          Aici va veni un tab gen{"."} Acasă {"...>"} Rețete {"...>"} Supe
        </p>
        <p>Aici vine un filtru</p>
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
