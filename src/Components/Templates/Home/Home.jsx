import React from "react";
import "./Home.css";
import { IconButton, TextField, Button } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Home = () => {
  return (
    <div className="app_home_welcome">
      <h1 className="app_home_title">Green Bite</h1>
      <p className="app_home_description">
        Gătește mâncăruri delicioase, ajută comunitatea postând rețete și adaugă
        rețetele celorlalți la favorite ca să poți prepara rapid mâncarea
        îndrăgită de tine!
      </p>
      <Button
        variant="outlined"
        startIcon={<RestaurantMenuIcon />}
        size="large"
      >
        Vezi rețete
      </Button>
    </div>
  );
};

export default Home;
