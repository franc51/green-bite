import React from "react";
import "./Home.css";
import { Button } from "@mui/material";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";

const Home = () => {
  return (
    <div className="app_home_welcome">
      <img src="https://www.eatingwell.com/thmb/4RxuQP5ZiZnb7SZ6zyGkvdFvzpw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/291245-complete-keto-diet-EWL-food-list-what-you-can-and-cannot-eat-if-youre-on-a-ketogenic-diet-hero-3x2-726ab3875a2840dbb14f5c97bdbecf7e.jpg"></img>
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
    </div>
  );
};

export default Home;
