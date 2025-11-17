import React, { useEffect, useState } from "react";
import RecipeCard from "../../RecipeCard/RecipeCard";
import "./LastRecipes.css";

const LastRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const REACT_APP_BACKEND_API = process.env.REACT_APP_BACKEND_API;

  const fetchLastRecipes = async () => {
    setLoading(true);
    try {
      // Preluăm ultimele 6 rețete pentru carusel
      const response = await fetch(`${REACT_APP_BACKEND_API}/recipes?limit=6`);
      if (!response.ok) throw new Error("Failed to fetch recipes");

      const data = await response.json();
      setRecipes(data.recipes);
    } catch (err) {
      console.error("Error fetching recipes:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLastRecipes();
  }, []);

  if (error) return <div>Error: {error}</div>;
  if (!loading && recipes.length === 0)
    return <div>Nu există rețete recente.</div>;

  return (
    <div className="last_recipes_container">
      <h1>Cele mai noi rețete</h1>
      {loading && <div>Loading...</div>}
      <div className="recipe_list">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default LastRecipes;
