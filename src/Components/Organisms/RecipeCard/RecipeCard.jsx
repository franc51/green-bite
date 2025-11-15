// RecipeCard.jsx
import React from "react";
import "./RecipeCard.css";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Card, CardMedia, IconButton, Typography, Box } from "@mui/material";

const RecipeCard = ({ recipe }) => {
  if (!recipe) return null; // render nothing if no recipe

  const { title, cooktime, difficulty, picture } = recipe;

  return (
    <Card className="recipe_card" variant="outlined">
      <Box className="recipe_card_box">
        {picture && (
          <CardMedia
            className="recipe_card_media"
            component="img"
            height="194"
            image={picture}
            alt={title}
          />
        )}

        <IconButton className="recipe_card_fav_icon">
          <FavoriteIcon />
        </IconButton>
      </Box>

      <Box className="recipe_card_cook_and_difficulty">
        {cooktime && (
          <Box className="recipe_card_cook_and_difficulty_icons">
            <AccessTimeIcon fontSize="small" />
            <Typography fontSize="small">{cooktime} minute</Typography>
          </Box>
        )}

        {difficulty && (
          <Box className="recipe_card_cook_and_difficulty_icons">
            <WhatshotIcon fontSize="small" />
            <Typography fontSize="small">{difficulty}</Typography>
          </Box>
        )}
      </Box>

      {title && (
        <Box className="recipe_card_title">
          <Typography fontSize="large" fontWeight="600">
            {title}
          </Typography>
        </Box>
      )}
    </Card>
  );
};

export default RecipeCard;
