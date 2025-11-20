import React from "react";
import "./Home.css";
import LastRecipes from "../../Organisms/Carousels/Last Recipes/LastRecipes";
import RecipeCategory from "../../Molecules/RecipeCategory/RecipeCategory";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="app_home_container">
      <div className="app_home_welcome">
        <div className="app_home_content">
          <h1 className="app_home_title">Green Bite</h1>
          <p className="app_home_description">
            Gătește mâncăruri delicioase, ajută comunitatea postând rețete și
            adaugă rețetele celorlalți la favorite ca să poți prepara rapid
            mâncarea îndrăgită de tine!
          </p>
          <button
            className="app_home_callToAction"
            onClick={(e) => {
              e.preventDefault();
              navigate("/retete");
            }}
          >
            Vezi Rețete
          </button>
        </div>
        <img
          src="./assets/images/homepage.jpg"
          alt="homepage"
          className="app_home_welcome_image"
        ></img>
      </div>
      <div className="app_home_last_recipes_container">
        <LastRecipes></LastRecipes>
      </div>
      <div className="app_home_recipe_category">
        <RecipeCategory></RecipeCategory>
      </div>
    </div>
  );
};

export default Home;
