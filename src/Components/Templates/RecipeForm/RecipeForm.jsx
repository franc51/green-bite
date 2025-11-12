import React, { useState } from "react";
import FileUploadComponent from "../../Molecules/FileUpload/FileUpload";
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
  Stepper,
  Step,
  StepLabel,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function RecipeForm() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "Detalii rețetă",
    "Ingrediente",
    "Instrucțiuni",
    "Finalizează",
  ];

  const [form, setForm] = useState({
    title: "",
    category: "",
    picture: "",
    cooktime: 30,
    servings: 1,
    difficulty: "easy",
    ingredients: [],
    instructions: [],
    vegan: false,
    keto: false,
    author: "",
  });

  const [ingredientInput, setIngredientInput] = useState("");
  const [instructionInput, setInstructionInput] = useState("");

  const categories = [
    "Fel principal",
    "Supă/Ciorbă",
    "Antreu",
    "Paste",
    "Pește",
    "Desert",
  ];
  const vitalIngredients = [
    "sare",
    "piper",
    "boia",
    "zahăr",
    "pătrunjel",
    "mărar",
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const addItem = (field, value, setter) => {
    if (value.trim()) {
      setForm((prev) => ({ ...prev, [field]: [...prev[field], value.trim()] }));
      setter("");
    }
  };

  const removeItem = (field, index) =>
    setForm((prev) => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index),
    }));

  const handleDifficultyChange = (previusDifficulty, nextDifficulty) =>
    nextDifficulty &&
    setForm((prev) => ({ ...prev, difficulty: nextDifficulty }));

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Rețeta a fost adăugată!");
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Stack spacing={2}>
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
              onChange={handleChange}
              required
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </TextField>
            <FileUploadComponent
              file={form.picture}
              setFile={(file) =>
                setForm((prev) => ({ ...prev, picture: file }))
              }
            />
            <Typography>Timp de gătire: {form.cooktime} min</Typography>
            <Slider
              value={form.cooktime}
              min={5}
              max={240}
              step={5}
              valueLabelDisplay="auto"
              onChange={(_, val) =>
                setForm((prev) => ({ ...prev, cooktime: val }))
              }
            />
            <Typography>Porții: {form.servings}</Typography>
            <Slider
              value={form.servings}
              min={1}
              max={20}
              step={1}
              valueLabelDisplay="auto"
              onChange={(_, val) =>
                setForm((prev) => ({ ...prev, servings: val }))
              }
            />
            <Typography>Dificultate:</Typography>
            <ToggleButtonGroup
              value={form.difficulty}
              exclusive
              onChange={handleDifficultyChange}
            >
              {["easy", "medium", "hard"].map((lvl) => (
                <ToggleButton
                  key={lvl}
                  value={lvl}
                  color={
                    lvl === "easy"
                      ? "success"
                      : lvl === "medium"
                      ? "warning"
                      : "error"
                  }
                >
                  {lvl === "easy"
                    ? "Ușor"
                    : lvl === "medium"
                    ? "Mediu"
                    : "Dificil"}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Stack>
        );
      case 1:
        return (
          <Stack spacing={2}>
            <Typography>Ingrediente</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {form.ingredients.map((ing, i) => (
                <Chip
                  key={i}
                  label={ing}
                  onDelete={() => removeItem("ingredients", i)}
                />
              ))}
            </Stack>
            <Stack direction="row" spacing={1}>
              <TextField
                label="Adaugă ingredient"
                value={ingredientInput}
                onChange={(e) => setIngredientInput(e.target.value)}
                fullWidth
              />
              <IconButton
                color="primary"
                onClick={() =>
                  addItem("ingredients", ingredientInput, setIngredientInput)
                }
              >
                <AddIcon />
              </IconButton>
            </Stack>
            <Typography>Sugestii:</Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {vitalIngredients.map((ing) => (
                <Chip
                  key={ing}
                  label={ing}
                  variant="outlined"
                  color="secondary"
                  onClick={() =>
                    !form.ingredients.includes(ing) &&
                    setForm((prev) => ({
                      ...prev,
                      ingredients: [...prev.ingredients, ing],
                    }))
                  }
                />
              ))}
            </Stack>
          </Stack>
        );
      case 2:
        return (
          <Stack spacing={2}>
            <Typography>Instrucțiuni</Typography>
            <Stack direction="column" spacing={1}>
              {form.instructions.map((ins, i) => (
                <Chip
                  key={i}
                  label={ins}
                  onDelete={() => removeItem("instructions", i)}
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
              <IconButton
                color="primary"
                onClick={() =>
                  addItem("instructions", instructionInput, setInstructionInput)
                }
              >
                <AddIcon />
              </IconButton>
            </Stack>
          </Stack>
        );
      case 3:
        return (
          <Stack spacing={2}>
            <FormControlLabel
              control={
                <Checkbox
                  name="vegan"
                  checked={form.vegan}
                  onChange={handleChange}
                />
              }
              label="Rețetă Vegană"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="vegan"
                  checked={form.keto}
                  onChange={handleChange}
                />
              }
              label="Rețetă Keto"
            />
            <TextField
              label="Numele tău"
              name="author"
              value={form.author}
              onChange={handleChange}
            />
            <Typography>
              Dacă nu completezi acest câmp rețeta va fi postată dar va avea
              autor anonim.
            </Typography>
          </Stack>
        );
      default:
        return "Unknown step";
    }
  };

  return (
    <Box sx={{ width: "60%", margin: "auto", mt: 5 }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 3 }}>
        <form onSubmit={handleSubmit}>
          {renderStepContent(activeStep)}
          <Stack
            direction="row"
            spacing={2}
            justifyContent="space-between"
            mt={3}
          >
            <Button disabled={activeStep === 0} onClick={handleBack}>
              Înapoi
            </Button>
            {activeStep < steps.length - 1 ? (
              <Button variant="contained" onClick={handleNext}>
                Următorul pas
              </Button>
            ) : (
              <Button variant="contained" type="submit">
                Adaugă rețeta
              </Button>
            )}
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
