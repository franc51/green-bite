import React, { useState } from "react";
import "./RecipeForm.css";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Chip,
  Stack,
  Typography,
  Slider,
  ToggleButton,
  ToggleButtonGroup,
  TextField,
  IconButton,
  MenuItem,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function RecipeForm() {
  const [form, setForm] = useState({
    title: "",
    category: "",
    picture: "",
    rating: 0,
    cooktime: 30,
    servings: 1,
    difficulty: "easy",
    ingredients: [],
    instructions: [],
    vegan: false,
  });

  const [ingredientInput, setIngredientInput] = useState("");
  const [instructionInput, setInstructionInput] = useState("");

  const categories = [
    "Desert",
    "Fel principal",
    "Supă/Ciorbă",
    "Paste",
    "Antreu",
    "Pește",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleDifficultyChange = (event, newDifficulty) => {
    if (newDifficulty !== null)
      setForm((prev) => ({ ...prev, difficulty: newDifficulty }));
  };

  const handleAddIngredient = () => {
    if (ingredientInput.trim()) {
      setForm((prev) => ({
        ...prev,
        ingredients: [...prev.ingredients, ingredientInput.trim()],
      }));
      setIngredientInput("");
    }
  };

  const handleAddInstruction = () => {
    if (instructionInput.trim()) {
      setForm((prev) => ({
        ...prev,
        instructions: [...prev.instructions, instructionInput.trim()],
      }));
      setInstructionInput("");
    }
  };

  const handleRemoveIngredient = (index) => {
    setForm((prev) => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index),
    }));
  };

  const handleRemoveInstruction = (index) => {
    setForm((prev) => ({
      ...prev,
      instructions: prev.instructions.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // send `form` to backend
    console.log(form);
  };

  return (
    <div className="recipeFormWrapper">
      <Box className="recipeForm" component="form" onSubmit={handleSubmit}>
        <h2 className="recipeFormTitle">Adăugați o nouă rețetă</h2>
        <TextField
          label="Titlu"
          name="title"
          value={form.title}
          onChange={handleChange}
          required
        />
        <TextField
          select
          label="Categorie"
          name="category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          required
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>
              {cat}
            </MenuItem>
          ))}
        </TextField>

        {/* Picture URL + Preview */}
        <TextField
          label="Link imagine"
          name="picture"
          value={form.picture}
          onChange={handleChange}
        />
        {form.picture && (
          <Box
            component="img"
            src={form.picture}
            alt="Preview"
            sx={{ maxWidth: 300, borderRadius: 1 }}
          />
        )}

        {/* Cook time & servings */}
        <Typography>Timp de gătire: {form.cooktime} minute</Typography>
        <Slider
          value={form.cooktime}
          onChange={(e, val) => setForm((prev) => ({ ...prev, cooktime: val }))}
          step={5}
          min={5}
          max={240}
          valueLabelDisplay="auto"
        />

        <Typography>Porții: {form.servings}</Typography>
        <Slider
          value={form.servings}
          onChange={(e, val) => setForm((prev) => ({ ...prev, servings: val }))}
          step={1}
          min={1}
          max={20}
          valueLabelDisplay="auto"
        />

        {/* Difficulty */}
        <Typography>Dificultate:</Typography>
        <ToggleButtonGroup
          value={form.difficulty}
          exclusive
          onChange={handleDifficultyChange}
        >
          <ToggleButton value="easy">Ușor</ToggleButton>
          <ToggleButton value="medium">Mediu</ToggleButton>
          <ToggleButton value="hard">Dificil</ToggleButton>
        </ToggleButtonGroup>

        {/* Ingredients */}
        <Typography>Ingrediente</Typography>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          {form.ingredients.map((ing, i) => (
            <Chip
              key={i}
              label={ing}
              onDelete={() => handleRemoveIngredient(i)}
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField
            label="Adaugă ingredient"
            value={ingredientInput}
            onChange={(e) => setIngredientInput(e.target.value)}
          />
          <IconButton color="primary" onClick={handleAddIngredient}>
            <AddIcon />
          </IconButton>
        </Stack>

        {/* Instructions */}
        <Typography>Instrucțiuni</Typography>
        <Stack direction="column" spacing={1}>
          {form.instructions.map((ins, i) => (
            <Chip
              key={i}
              label={ins}
              onDelete={() => handleRemoveInstruction(i)}
              variant="outlined"
            />
          ))}
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField
            label="Adaugă instrucțiune"
            value={instructionInput}
            onChange={(e) => setInstructionInput(e.target.value)}
            fullWidth
          />
          <IconButton color="primary" onClick={handleAddInstruction}>
            <AddIcon />
          </IconButton>
        </Stack>

        {/* Vegan checkbox */}
        <FormControlLabel
          control={
            <Checkbox
              name="vegan"
              checked={form.vegan}
              onChange={handleChange}
            />
          }
          label="Vegan"
        />

        <Button variant="contained" type="submit">
          Adaugă Rețeta
        </Button>
      </Box>
    </div>
  );
}
