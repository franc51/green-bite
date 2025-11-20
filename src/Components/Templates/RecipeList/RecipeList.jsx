import React, { useEffect, useState } from "react";
import RecipeCard from "../../Organisms/RecipeCard/RecipeCard";
import "./RecipeList.css";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;

  const limit = 12;

  const fetchRecipes = async (pageNumber = 1, append = false) => {
    setLoading(true);
    try {
      const response = await fetch(
        `${REACT_APP_BACKEND_API}/recipes?limit=${limit}&page=${pageNumber}`
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
};

export default RecipeList;
