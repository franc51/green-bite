import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import LastRecipes from "../../Organisms/Carousels/Last Recipes/LastRecipes";

const Home = () => {
  return (
    <div className="app_home_welcome">
      <div className="app_home_content">
        <h1 className="app_home_title">Green Bite</h1>
        <p className="app_home_description">
          Gătește mâncăruri delicioase, ajută comunitatea postând rețete și
          adaugă rețetele celorlalți la favorite ca să poți prepara rapid
          mâncarea îndrăgită de tine!
        </p>
        <Button
          variant="contained"
          startIcon={<RestaurantMenuIcon />}
          size="large"
          className="app_home_callToAction"
        >
          Vezi rețete
        </Button>
      </div>
      <img src="./assets/images/homepage.jpg" alt="homepage"></img>
      <div>
        <LastRecipes></LastRecipes>
      </div>
    </div>
  );
};

export default Home;
